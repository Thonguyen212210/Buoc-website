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

const mimeTypes = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

const assetsDir = path.join(__dirname, "../website/assets");

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    // Skip hidden files/directories and backups folder
    if (file.startsWith('.') || file === 'originals_backup') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

async function uploadAll() {
  const allFiles = getFilesRecursively(assetsDir);
  console.log(`Found ${allFiles.length} files to upload to R2...`);

  for (const filePath of allFiles) {
    // Calculate key relative to "website" directory (so it starts with "assets/")
    const relativePath = path.relative(path.join(assetsDir, ".."), filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";

    console.log(`Uploading: ${relativePath} (${contentType})...`);
    await s3.send(new PutObjectCommand({
      Bucket: "buoc-project",
      Key: relativePath,
      Body: fs.createReadStream(filePath),
      ContentType: contentType
    }));
    console.log(`Done: https://cdn.buoc.site/${relativePath}`);
  }
  console.log("All uploads completed successfully!");
}

uploadAll().catch(console.error);
