/* =====================================================================
   Dự án Bước — máy chủ gây quỹ (Node.js + Express + SQLite tích hợp sẵn)
   - Phục vụ website tĩnh trong ../website
   - Nhận webhook SePay khi có tiền chuyển vào  -> ghi nhận khoản tài trợ
   - Công khai tổng số tiền & danh sách nhà hảo tâm (đã che bớt tên)
   Dùng node:sqlite (có sẵn từ Node 22.5+), không cần biên dịch native.
   Tài liệu SePay: https://docs.sepay.vn/tich-hop-webhooks.html
   ===================================================================== */
"use strict";

require("dotenv").config();
const path = require("path");
const fs = require("fs");
const { Readable } = require("stream");
const { pipeline } = require("stream/promises");
const express = require("express");
const { DatabaseSync } = require("node:sqlite");

/* ---------- Cấu hình ---------- */
const PORT = parseInt(process.env.PORT || "3000", 10);
const GOAL = parseInt(process.env.CAMPAIGN_GOAL || "5000000", 10);
const DEADLINE = process.env.CAMPAIGN_DEADLINE || ""; // YYYY-MM-DD (tùy chọn)
const WEBHOOK_APIKEY = process.env.SEPAY_WEBHOOK_APIKEY || "";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "";
const ALLOW_SIMULATE = String(process.env.ALLOW_SIMULATE || "true") === "true";
const GOOGLE_SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK || "";

const BANK = {
  account: process.env.BANK_ACCOUNT || "0000000000",
  name: process.env.BANK_NAME || "Vietcombank",
  holder: process.env.ACCOUNT_HOLDER || "DU AN BUOC",
  prefix: (process.env.TRANSFER_PREFIX || "BUOC").toUpperCase(),
};

const STATIC_DIR = process.env.STATIC_DIR
  ? path.resolve(process.env.STATIC_DIR)
  : path.resolve(__dirname, "..", "website");

const DATA_DIR = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.resolve(__dirname, "data");
fs.mkdirSync(DATA_DIR, { recursive: true });
const DB_PATH = path.join(DATA_DIR, "buoc.db");

/* ---------- Cơ sở dữ liệu ---------- */
const db = new DatabaseSync(DB_PATH);
// WAL tăng hiệu năng đọc/ghi đồng thời; một số hệ thống tệp (mạng/đồng bộ) không hỗ trợ
// nên bọc try/catch và quay về journal mặc định nếu lỗi.
try {
  db.exec("PRAGMA journal_mode = WAL;");
} catch (e) {
  console.warn("Không bật được WAL, dùng journal mặc định:", e.message);
}
db.exec(`
  CREATE TABLE IF NOT EXISTS donations (
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    sepay_id         INTEGER UNIQUE,           -- id giao dịch của SePay (chống trùng)
    gateway          TEXT,                     -- ngân hàng
    account_number   TEXT,
    amount           INTEGER NOT NULL,         -- transferAmount (VND)
    transfer_type    TEXT,                     -- 'in' | 'out'
    content          TEXT,                     -- nội dung CK (riêng tư)
    description      TEXT,                     -- mô tả (riêng tư)
    display_name     TEXT,                     -- tên hiển thị công khai (đã che)
    reference_code   TEXT,
    transaction_date TEXT,
    created_at       TEXT DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS idx_don_type ON donations(transfer_type);

  CREATE TABLE IF NOT EXISTS registrations (
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    name             TEXT,
    contact          TEXT,
    facebook         TEXT,
    support_type     TEXT,
    items            TEXT,
    created_at       TEXT DEFAULT (datetime('now'))
  );
  
  CREATE TABLE IF NOT EXISTS shortlinks (
    slug             TEXT PRIMARY KEY,
    url              TEXT NOT NULL,
    created_at       TEXT DEFAULT (datetime('now'))
  );
`);

try { db.exec("ALTER TABLE registrations ADD COLUMN message TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE donations ADD COLUMN real_name TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE donations ADD COLUMN message TEXT;"); } catch(e) {}

const stmtInsert = db.prepare(`
  INSERT OR IGNORE INTO donations
    (sepay_id, gateway, account_number, amount, transfer_type,
     content, description, display_name, reference_code, transaction_date, real_name, message)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const stmtStats = db.prepare(
  `SELECT COALESCE(SUM(amount),0) AS raised, COUNT(*) AS cnt
     FROM donations WHERE transfer_type = 'in'`
);
const stmtList = db.prepare(
  `SELECT display_name, real_name, message, amount, transaction_date, created_at
     FROM donations WHERE transfer_type = 'in'
     ORDER BY id DESC LIMIT ?`
);
const stmtAll = db.prepare(`SELECT * FROM donations ORDER BY id DESC LIMIT ?`);

const stmtInsertReg = db.prepare(`
  INSERT INTO registrations (name, contact, facebook, support_type, items, message)
  VALUES (?, ?, ?, ?, ?, ?)
`);
const stmtListReg = db.prepare(`SELECT * FROM registrations ORDER BY id DESC LIMIT ?`);

const N = (v) => (v === undefined ? null : v); // node:sqlite không nhận undefined
function insertDonation(d) {
  return stmtInsert.run(
    N(d.sepay_id), N(d.gateway), N(d.account_number), N(d.amount), N(d.transfer_type),
    N(d.content), N(d.description), N(d.display_name), N(d.reference_code), N(d.transaction_date), N(d.real_name), N(d.message)
  );
}

/* ---------- Tiện ích ---------- */
// Che bớt tên người tài trợ: giữ từ đầu, viết tắt các từ sau. "NGUYEN VAN A" -> "Nguyen V. A."
function maskName(raw) {
  if (!raw) return "Nhà hảo tâm";
  let s = String(raw).toUpperCase();
  if (BANK.prefix) s = s.replace(new RegExp(BANK.prefix + "\\w*", "g"), " ");
  s = s.replace(
    /\b(CHUYEN TIEN|CHUYEN KHOAN|THANH TOAN|UNG HO|UNGHO|GUI|CK|TT|FT\w+|MBVCB\w*|REF\w*|TRACE\w*|BANKAPINOTIFY|VIETQR)\b/g,
    " "
  );
  s = s.replace(/[0-9]/g, " ");
  const tokens = s
    .replace(/[^A-Za-zÀ-ỹ\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
  if (tokens.length === 0) return "Nhà hảo tâm";
  const cap = (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  const first = cap(tokens[0]);
  const rest = tokens
    .slice(1, 4)
    .map((w) => w.charAt(0).toUpperCase() + ".")
    .join(" ");
  return rest ? `${first} ${rest}` : first;
}

function ackError(res, code, msg) {
  return res.status(code).json({ success: false, message: msg });
}

function daysLeft() {
  if (!DEADLINE) return null;
  const end = new Date(DEADLINE + "T23:59:59");
  if (isNaN(end)) return null;
  const diff = Math.ceil((end - new Date()) / 86400000);
  return diff > 0 ? diff : 0;
}

/* ---------- App ---------- */
const app = express();
app.disable("x-powered-by");
app.set("trust proxy", true); // chạy sau Nginx reverse proxy
app.use(express.json({ limit: "256kb" }));
app.use(express.urlencoded({ extended: false }));

// CORS mở cho các endpoint công khai (phòng khi frontend khác origin)
app.use("/api", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Admin-Token");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

/* --- Cấu hình công khai cho frontend (để dựng QR, hiển thị STK) --- */
app.get("/api/config", (req, res) => {
  res.json({
    goal: GOAL,
    bank: { account: BANK.account, name: BANK.name, holder: BANK.holder },
    transferPrefix: BANK.prefix,
    qrBase: "https://qr.sepay.vn/img",
    deadline: DEADLINE || null,
  });
});

/* --- Thống kê tổng (công khai) --- */
app.get("/api/stats", (req, res) => {
  const row = stmtStats.get();
  const raised = Number(row.raised || 0);
  res.json({
    raised,
    goal: GOAL,
    count: Number(row.cnt || 0),
    percent: GOAL > 0 ? Math.min(100, Math.round((raised / GOAL) * 100)) : 0,
    daysLeft: daysLeft(),
    updatedAt: new Date().toISOString(),
  });
});

/* --- Danh sách nhà hảo tâm (công khai, đã che tên) --- */
app.get("/api/donations", (req, res) => {
  let limit = parseInt(req.query.limit || "20", 10);
  if (isNaN(limit) || limit < 1) limit = 20;
  if (limit > 100) limit = 100;
  const rows = stmtList.all(limit).map((r) => ({
    name: r.real_name || r.display_name || "Nhà hảo tâm",
    msg: r.message || null,
    amount: Number(r.amount),
    at: r.transaction_date || r.created_at,
  }));
  res.json(rows);
});

/* --- Webhook SePay: ghi nhận khi có tiền chuyển vào --- */
app.post("/api/webhook/sepay", (req, res) => {
  // Xác thực bằng API Key (nếu đã cấu hình): header "Authorization: Apikey <KEY>"
  if (WEBHOOK_APIKEY) {
    const auth = req.headers["authorization"] || "";
    if (auth !== `Apikey ${WEBHOOK_APIKEY}`) {
      return ackError(res, 401, "Sai API Key");
    }
  }

  const d = req.body || {};
  // Chỉ ghi nhận tiền vào; tiền ra vẫn phản hồi thành công để SePay không retry.
  if (d.transferType && d.transferType !== "in") {
    return res.json({ success: true });
  }
  const amount = parseInt(d.transferAmount, 10);
  if (!amount || amount <= 0) {
    return res.json({ success: true }); // không có số tiền hợp lệ -> bỏ qua
  }

  const nameSource = d.description || d.content || "";

  let realName = null;
  let regMsg = null;
  const match = nameSource.match(new RegExp(BANK.prefix + "\\s+(\\d+)", "i"));
  if (match) {
    const regId = parseInt(match[1], 10);
    try {
      const reg = db.prepare("SELECT * FROM registrations WHERE id = ?").get(regId);
      if (reg) {
        realName = reg.name;
        regMsg = reg.message;
      }
    } catch(e) {}
  }

  try {
    insertDonation({
      sepay_id: d.id != null ? Number(d.id) : null,
      gateway: d.gateway || null,
      account_number: d.accountNumber || null,
      amount,
      transfer_type: d.transferType || "in",
      content: d.content || null,
      description: d.description || null,
      display_name: maskName(nameSource),
      reference_code: d.referenceCode || null,
      transaction_date: d.transactionDate || null,
      real_name: realName,
      message: regMsg
    });
  } catch (e) {
    console.error("Webhook insert error:", e.message);
  }
  // Phản hồi đúng chuẩn SePay: 200 + {success:true} trong 30s
  return res.json({ success: true });
});

/* --- Giả lập một khoản tài trợ để TEST (bảo vệ bằng ADMIN_TOKEN) --- */
app.post("/api/simulate", (req, res) => {
  if (!ALLOW_SIMULATE) return ackError(res, 403, "Đã tắt giả lập");
  if (ADMIN_TOKEN && req.headers["x-admin-token"] !== ADMIN_TOKEN) {
    return ackError(res, 401, "Cần X-Admin-Token");
  }
  const amount = parseInt(req.body.amount, 10) || 100000;
  const name = req.body.name || "NGUYEN VAN A";
  insertDonation({
    sepay_id: Math.floor(Date.now() + Math.random() * 1000),
    gateway: req.body.gateway || "Demo Bank",
    account_number: BANK.account,
    amount,
    transfer_type: "in",
    content: `${BANK.prefix} ${name}`,
    description: `${name} ung ho`,
    display_name: maskName(name),
    reference_code: "SIMULATED",
    transaction_date: new Date().toISOString().slice(0, 19).replace("T", " "),
  });
  return res.json({ success: true });
});

/* --- Xem dữ liệu đầy đủ cho đối soát (riêng tư, cần ADMIN_TOKEN) --- */
app.get("/api/admin/donations", (req, res) => {
  if (!ADMIN_TOKEN || req.headers["x-admin-token"] !== ADMIN_TOKEN) {
    return ackError(res, 401, "Cần X-Admin-Token");
  }
  let limit = parseInt(req.query.limit || "200", 10);
  if (isNaN(limit) || limit < 1) limit = 200;
  res.json(stmtAll.all(limit));
});

/* --- Lưu thông tin Form đăng ký hỗ trợ --- */
app.post("/api/register", (req, res) => {
  try {
    const timeStr = new Date().toISOString().slice(0, 19).replace("T", " ");
    const info = stmtInsertReg.run(
      req.body.name || null,
      req.body.contact || null,
      req.body.facebook || null,
      req.body.support_type || null,
      req.body.items || null,
      req.body.message || null
    );

    // Gửi data sang Google Sheets (nếu đã cấu hình)
    if (GOOGLE_SHEET_WEBHOOK) {
      const payload = {
        time: timeStr,
        name: req.body.name || "",
        contact: req.body.contact || "",
        facebook: req.body.facebook || "",
        support_type: req.body.support_type || "",
        items: req.body.items || ""
      };
      fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(err => console.error("Google Sheet webhook error:", err.message));
    }

    return res.json({ success: true, id: info.lastInsertRowid });
  } catch (e) {
    console.error("Register error:", e.message);
    return ackError(res, 500, "Lỗi máy chủ");
  }
});

/* --- Xem danh sách Form đăng ký (riêng tư, cần ADMIN_TOKEN) --- */
app.get("/api/admin/registrations", (req, res) => {
  if (!ADMIN_TOKEN || req.headers["x-admin-token"] !== ADMIN_TOKEN) {
    return ackError(res, 401, "Cần X-Admin-Token");
  }
  let limit = parseInt(req.query.limit || "200", 10);
  if (isNaN(limit) || limit < 1) limit = 200;
  res.json(stmtListReg.all(limit));
});

/* --- API tạo Link rút gọn (Shortlinks) --- */
app.post("/api/shortlinks", (req, res) => {
  const { slug, url } = req.body || {};
  if (!slug || !url) return ackError(res, 400, "Vui lòng cung cấp đuôi link và URL gốc");
  
  // Chỉ cho phép chữ cái, số, gạch ngang, gạch dưới
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
    return ackError(res, 400, "Đuôi link chỉ được chứa chữ cái, số, gạch ngang và gạch dưới");
  }
  
  try {
    const existing = db.prepare("SELECT url FROM shortlinks WHERE slug = ?").get(slug);
    if (existing && existing.url) {
      return ackError(res, 400, "Đuôi link này đã có người sử dụng, vui lòng chọn đuôi khác!");
    }
    db.prepare("INSERT INTO shortlinks (slug, url) VALUES (?, ?)").run(slug, url);
    return res.json({ success: true, slug });
  } catch (e) {
    console.error("Shortlink error:", e.message);
    return ackError(res, 500, "Lỗi máy chủ khi tạo link");
  }
});

/* --- PDF công khai (proxy từ R2 qua đường dẫn buoc.site) --- */
const PDF_DOCS = {
  "/proposal": {
    url: process.env.PDF_PROPOSAL_URL || "https://cdn.buoc.site/docs/proposal.pdf",
    filename: "Buoc-2026-Ho-so-du-an.pdf",
    title: "Hồ sơ dự án — Bước",
  },
  "/stakeholders": {
    url: process.env.PDF_STAKEHOLDERS_URL || "https://cdn.buoc.site/docs/stakeholders.pdf",
    filename: "Buoc-2026-Quyen-loi-NTT.pdf",
    title: "Quyền lợi nhà tài trợ — Bước",
  },
  "/budgeting": {
    url: process.env.PDF_BUDGETING_URL || "https://cdn.buoc.site/docs/budgeting.pdf",
    filename: "Buoc-2026-Du-tru-kinh-phi.pdf",
    title: "Dự trù kinh phí — Bước",
  },
};

function pdfViewerHtml({ title, fileRoute }) {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<link rel="icon" type="image/png" href="/favicon.png?v=3" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; background: #2a0f3d; }
  body {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  .pdf-frame {
    width: min(920px, 100%);
    height: min(calc(100vh - 48px), 100%);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
    background: #fff;
  }
  .pdf-frame iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
    background: #fff;
  }
  @media (max-width: 768px) {
    body { padding: 12px; }
    .pdf-frame {
      width: 100%;
      height: calc(100vh - 24px);
      border-radius: 10px;
    }
  }
</style>
</head>
<body>
<div class="pdf-frame">
  <iframe src="${fileRoute}" title="${title}"></iframe>
</div>
</body>
</html>`;
}

async function proxyPdf(doc, res) {
  const upstream = await fetch(doc.url);
  if (!upstream.ok) {
    return ackError(res, 502, "Không tải được PDF");
  }
  res.set("Content-Type", "application/pdf");
  res.set("Content-Disposition", `inline; filename="${doc.filename}"`);
  res.set("Cache-Control", "public, max-age=3600");
  await pipeline(Readable.fromWeb(upstream.body), res);
}

for (const [route, doc] of Object.entries(PDF_DOCS)) {
  app.get(`${route}/file`, async (req, res) => {
    try {
      await proxyPdf(doc, res);
    } catch (e) {
      console.error(`PDF proxy error ${route}/file:`, e.message);
      return ackError(res, 502, "Không tải được PDF");
    }
  });

  app.get(route, (req, res) => {
    res.type("html").send(pdfViewerHtml({ title: doc.title, fileRoute: `${route}/file` }));
  });
}

/* ---------- Dynamic Redirect cho Shortlinks ---------- */
app.get("/:slug", (req, res, next) => {
  const slug = req.params.slug;
  // Bỏ qua các thư mục tĩnh và api
  if (["api", "assets", "aboutus", "forward-create", "favicon.png", "robots.txt"].includes(slug)) {
    return next();
  }
  try {
    const row = db.prepare("SELECT url FROM shortlinks WHERE slug = ?").get(slug);
    if (row && row.url) {
      return res.redirect(302, row.url);
    }
  } catch (e) {
    console.error("Redirect error:", e.message);
  }
  next();
});

/* ---------- SPA routes (client-side pages) ---------- */
const SPA_ROUTES = ["/aboutus", "/forward-create"];
if (fs.existsSync(STATIC_DIR)) {
  for (const spaPath of SPA_ROUTES) {
    app.get(spaPath, (req, res) => {
      res.sendFile(path.join(STATIC_DIR, "index.html"));
    });
  }
}

/* ---------- Phục vụ website tĩnh ---------- */
if (fs.existsSync(STATIC_DIR)) {
  app.use(express.static(STATIC_DIR, { extensions: ["html"] }));
}

app.use((req, res) => res.status(404).json({ success: false, message: "Not found" }));

app.listen(PORT, () => {
  console.log(`Bước server đang chạy: http://localhost:${PORT}`);
  console.log(`  • Tĩnh:    ${STATIC_DIR}`);
  console.log(`  • DB:      ${DB_PATH}`);
  console.log(`  • Webhook: POST /api/webhook/sepay`);
});
