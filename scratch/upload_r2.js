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

const dir = path.join(__dirname, "../website/assets");
const files = [
  "NGUYENHIENLE.jpg", 
  "Recap2024.jpg", 
  "Recap2025.jpg", 
  "Thason.jpg", 
  "Thinghiem1.jpg", 
  "Thinghiem2.jpg", 
  "hoatdong.jpg", 
  "hoatdong3.jpg",
  "Video recap.mp4"
];

async function upload() {
  for (const f of files) {
    const filePath = path.join(dir, f);
    if (fs.existsSync(filePath)) {
      console.log(`Uploading ${f}...`);
      let contentType = "image/jpeg";
      if (f.endsWith(".mp4")) contentType = "video/mp4";
      if (f.endsWith(".png")) contentType = "image/png";

      await s3.send(new PutObjectCommand({
        Bucket: "buoc-project",
        Key: `assets/${f}`,
        Body: fs.createReadStream(filePath),
        ContentType: contentType
      }));
      console.log(`Uploaded ${f}`);
    } else {
      console.log(`File not found: ${f}`);
    }
  }
}

upload().catch(console.error);
