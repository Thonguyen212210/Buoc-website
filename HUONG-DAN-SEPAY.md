# Bước × SePay — Hướng dẫn cài đặt & triển khai

Tài liệu này hướng dẫn chạy website gây quỹ Bước có tích hợp **SePay**: người ủng hộ chuyển khoản qua VietQR, SePay tự động bắn **webhook**, máy chủ ghi nhận và **công khai** tổng số tiền + danh sách nhà hảo tâm (đã che tên).

> Tài liệu SePay gốc: https://docs.sepay.vn/tich-hop-webhooks.html · https://docs.sepay.vn/tao-qr-code-vietqr-dong.html

---

## 1. Kiến trúc

```
Người ủng hộ ──quét VietQR──> Chuyển khoản vào TK ngân hàng
                                        │
                              SePay phát hiện giao dịch
                                        │ POST webhook (JSON)
                                        ▼
   Nginx (HTTPS) ──proxy──> Node.js/Express  ──ghi──> SQLite (donations)
        ▲                          │
        │  GET /api/stats, /api/donations, /api/config
   Trình duyệt (website tĩnh: tổng tiền + danh sách nhà hảo tâm live)
```

Một tiến trình Node duy nhất vừa **phục vụ web tĩnh** (`website/`) vừa cung cấp **API + webhook**, nên không lo CORS và chỉ cần mở 1 cổng.

---

## 2. Cấu trúc thư mục

```
6. Buoc Project/
├─ website/            # frontend tĩnh (index, cau-chuyen, quyen-gop, cap-nhat, css, js)
├─ server/
│  ├─ server.js        # toàn bộ logic API + webhook + phục vụ tĩnh
│  ├─ package.json
│  ├─ .env.example     # mẫu cấu hình -> sao chép thành .env
│  ├─ .gitignore
│  └─ data/            # SQLite (tự tạo, KHÔNG commit, cần backup)
├─ HUONG-DAN-SEPAY.md  # file này
└─ Buoc_Y-tuong-va-Ke-hoach-Website.md
```

---

## 3. Chạy thử trên máy cá nhân (local)

```bash
cd server
cp .env.example .env          # rồi mở .env điền thông tin (xem mục 5)
npm install
npm start                     # mở http://localhost:3000
```

Tạo một khoản tài trợ **giả lập** để kiểm tra (không cần ngân hàng thật):

```bash
curl -X POST http://localhost:3000/api/simulate \
  -H "Content-Type: application/json" \
  -H "X-Admin-Token: TOKEN_TRONG_ENV" \
  -d '{"amount":300000,"name":"NGUYEN VAN AN"}'

curl http://localhost:3000/api/stats        # xem tổng đã cộng thêm
```

Mở `http://localhost:3000/quyen-gop.html` → tổng tiền, % tiến độ và danh sách nhà hảo tâm sẽ tự cập nhật.

> Mở thẳng file `.html` bằng trình duyệt (không qua server) vẫn xem được giao diện — chỉ là dùng **số liệu mẫu** và không có dữ liệu live.

---

## 4. Giả lập webhook đúng định dạng SePay

Dùng để chắc chắn endpoint thật hoạt động (giống payload SePay sẽ gửi):

```bash
curl -X POST http://localhost:3000/api/webhook/sepay \
  -H "Content-Type: application/json" \
  -H "Authorization: Apikey KHOP_VOI_SEPAY_WEBHOOK_APIKEY" \
  -d '{
    "id": 92704,
    "gateway": "Vietcombank",
    "transactionDate": "2026-06-19 11:08:33",
    "accountNumber": "1017588888",
    "content": "BUOC NGUYEN VAN AN ung ho",
    "transferType": "in",
    "description": "NGUYEN VAN AN ung ho",
    "transferAmount": 500000,
    "referenceCode": "FT24012345678"
  }'
# Kỳ vọng phản hồi: {"success":true}
```

Gửi lại đúng payload đó lần 2 → **không** bị cộng trùng (chống trùng theo `id`).

---

## 5. Biến môi trường (`server/.env`)

| Biến | Ý nghĩa |
|---|---|
| `PORT` | Cổng Node lắng nghe (Nginx proxy về đây). Mặc định 3000. |
| `CAMPAIGN_GOAL` | Mục tiêu gây quỹ (VND). Mặc định 5000000. |
| `CAMPAIGN_DEADLINE` | Hạn chót `YYYY-MM-DD` để hiển thị "còn N ngày" (tùy chọn). |
| `BANK_ACCOUNT` | Số tài khoản nhận tiền (dùng sinh VietQR). |
| `BANK_NAME` | Ngân hàng: `code`/`bin`/`short_name`/`alias` theo https://qr.sepay.vn/banks.json (vd `VCB`). |
| `ACCOUNT_HOLDER` | Tên chủ tài khoản (không dấu, IN HOA). |
| `TRANSFER_PREFIX` | Tiền tố nội dung CK (vd `BUOC`) — nên trùng bộ lọc webhook SePay. |
| `SEPAY_WEBHOOK_APIKEY` | Khóa bí mật; phải **khớp** với API Key đặt ở webhook SePay. |
| `ADMIN_TOKEN` | Token cho `/api/simulate` và `/api/admin/donations`. |
| `ALLOW_SIMULATE` | `true` khi test; **đặt `false` khi chạy thật.** |

---

## 6. Cấu hình phía SePay (my.sepay.vn)

1. **Thêm tài khoản ngân hàng** vào SePay và chờ liên kết thành công.
2. Vào **Webhooks → + Thêm webhook**, điền 4 bước:
   - *Thông tin cơ bản:* sự kiện **"Có tiền vào"**; URL: `https://TENMIEN/api/webhook/sepay`.
   - *Tài khoản & bộ lọc:* chọn TK ngân hàng vừa thêm; (tùy chọn) lọc theo **tiền tố mã** `BUOC`.
   - *Bảo mật:* chọn **API Key** và nhập đúng chuỗi bằng `SEPAY_WEBHOOK_APIKEY` trong `.env`.
   - *Cảnh báo:* bật kênh báo lỗi (email/Telegram) nếu muốn.
3. Nhấn **Gửi thử** trên trang chi tiết webhook để bắn payload mẫu → endpoint phải trả `{"success":true}`.
4. (Khuyến nghị) Thêm **IP SePay** vào whitelist nếu server có chặn IP: `172.236.138.20`, `172.233.83.68`, `171.244.35.2`, `151.158.108.68`, `151.158.109.79`, `103.255.238.139` (+ IPv6 trong tài liệu SePay).

> Lưu ý SePay: endpoint phải trả **HTTP 200/201 + `{"success":true}` trong 30 giây**, nếu không sẽ bị retry tối đa 7 lần / 5 giờ.

---

## 7. Triển khai trên VPS (Ubuntu) + Nginx + HTTPS

### 7.1. Cài Node.js 22 (LTS)

> Máy chủ dùng **`node:sqlite` tích hợp sẵn** nên cần **Node ≥ 22.5** và **không cần** trình biên dịch (build-essential / node-gyp).

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # phải >= v22.5
```

### 7.2. Đưa mã nguồn lên & cài đặt

```bash
sudo mkdir -p /var/www/buoc && sudo chown $USER:$USER /var/www/buoc
# copy 2 thư mục website/ và server/ vào /var/www/buoc (qua git/scp/rsync)
cd /var/www/buoc/server
cp .env.example .env && nano .env      # điền thật, đặt ALLOW_SIMULATE=false
npm install --omit=dev
```

### 7.3. Chạy nền bằng systemd

Tạo `/etc/systemd/system/buoc.service`:

```ini
[Unit]
Description=Buoc crowdfunding server
After=network.target

[Service]
WorkingDirectory=/var/www/buoc/server
ExecStart=/usr/bin/node --no-warnings server.js
Restart=always
EnvironmentFile=/var/www/buoc/server/.env
User=www-data
Group=www-data

[Install]
WantedBy=multi-user.target
```

```bash
sudo chown -R www-data:www-data /var/www/buoc
sudo systemctl daemon-reload
sudo systemctl enable --now buoc
sudo systemctl status buoc          # kiểm tra đang chạy
```

### 7.4. Nginx reverse proxy

Tạo `/etc/nginx/sites-available/buoc`:

```nginx
server {
    listen 80;
    server_name tenmien.vn www.tenmien.vn;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/buoc /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 7.5. Bật HTTPS (bắt buộc cho webhook)

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d tenmien.vn -d www.tenmien.vn
```

Certbot tự thêm cấu hình HTTPS và gia hạn. Sau bước này URL webhook là `https://tenmien.vn/api/webhook/sepay`.

---

## 8. Danh sách endpoint

| Phương thức | Đường dẫn | Công khai? | Mô tả |
|---|---|---|---|
| GET | `/api/stats` | ✅ | Tổng đã nhận, mục tiêu, %, số lượt, ngày còn lại. |
| GET | `/api/donations?limit=20` | ✅ | Danh sách nhà hảo tâm (tên đã che). |
| GET | `/api/config` | ✅ | Mục tiêu + thông tin TK để dựng VietQR. |
| POST | `/api/webhook/sepay` | 🔒 Apikey | SePay gọi khi có tiền vào. |
| POST | `/api/simulate` | 🔒 Admin | Tạo khoản giả lập để test (tắt khi chạy thật). |
| GET | `/api/admin/donations` | 🔒 Admin | Xem dữ liệu đầy đủ để đối soát. |

---

## 9. Bảo mật, quyền riêng tư & vận hành

- **Quyền riêng tư:** danh sách công khai chỉ trả **tên đã che** (vd "Nguyễn V. A.") + số tiền + thời gian; nội dung/mô tả gốc chỉ lưu nội bộ, không lộ ra `/api/donations`.
- **Khi chạy thật:** đặt `ALLOW_SIMULATE=false`, dùng `SEPAY_WEBHOOK_APIKEY` và `ADMIN_TOKEN` là chuỗi ngẫu nhiên dài.
- **Sao lưu:** định kỳ backup `server/data/buoc.db` (toàn bộ lịch sử tài trợ nằm ở đây).
- **Đối soát:** so số liệu `/api/admin/donations` với lịch sử giao dịch trong SePay/ngân hàng.
- **Chống trùng:** đã xử lý bằng cột `sepay_id UNIQUE` + `INSERT OR IGNORE`, nên SePay retry nhiều lần cũng không cộng trùng.
- **Lưu ý kỹ thuật:** dùng `node:sqlite` (Node ≥ 22.5) nên khi khởi động có 1 dòng `ExperimentalWarning` — vô hại, đã ẩn bằng `--no-warnings`. Nếu hệ thống tệp không hỗ trợ WAL, server tự quay về journal mặc định (vẫn chạy bình thường).

---

## 10. Tùy biến nhanh

- Đổi mục tiêu: sửa `CAMPAIGN_GOAL` rồi `sudo systemctl restart buoc`.
- Đổi cách hiển thị tên công khai: hàm `maskName()` trong `server/server.js`.
- Đổi kiểu QR (chuẩn/compact/qronly): tham số `template` khi dựng URL trong `website/script.js` (hàm `buildQR`).
