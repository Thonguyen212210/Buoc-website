const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");

const s3 = new S3Client({
  region: "auto",
  endpoint: "https://aceaa1b5239e08c0a4d0985417f37de8.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "dc0a5867f21cad171960780e8e4a0401",
    secretAccessKey: "72b2af162487a6e91051eeabc24a1960de723fbe7cd9171626b204364c024aa4",
  },
});

const PDF_DIR = path.join(__dirname, "../PDFS");

async function upload() {
  const files = fs
    .readdirSync(PDF_DIR)
    .filter((f) => f.endsWith(".pdf"))
    .map((name) => path.join(PDF_DIR, name))
    .sort((a, b) => fs.statSync(a).size - fs.statSync(b).size);

  if (files.length !== 3) {
    throw new Error(`Expected 3 PDFs, found ${files.length}`);
  }

  const uploads = [
    { key: "docs/stakeholders.pdf", file: files[0] },
    { key: "docs/budgeting.pdf", file: files[1] },
    { key: "docs/proposal.pdf", file: files[2] },
  ];

  for (const item of uploads) {
    const size = fs.statSync(item.file).size;
    console.log(`Uploading ${path.basename(item.file)} -> ${item.key} (${(size / 1024 / 1024).toFixed(1)} MB)...`);
    await s3.send(
      new PutObjectCommand({
        Bucket: "buoc-project",
        Key: item.key,
        Body: fs.createReadStream(item.file),
        ContentType: "application/pdf",
      })
    );
    console.log(`Done: https://cdn.buoc.site/${item.key}`);
  }
}

upload().catch((e) => {
  console.error(e);
  process.exit(1);
});
