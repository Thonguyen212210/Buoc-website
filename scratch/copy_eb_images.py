import os
import shutil
import unicodedata

src_dir = "/Users/thonguyen/Library/Mobile Documents/com~apple~CloudDocs/Documents/[Class] CODE/6. Buoc Project/MEDIA /EB"
dst_dir = "/Users/thonguyen/Library/Mobile Documents/com~apple~CloudDocs/Documents/[Class] CODE/6. Buoc Project/website/assets/eb"

os.makedirs(dst_dir, exist_ok=True)

# Substring mapping to target images uniquely based on names
mapping = {
    "Minh": "hao.png",
    "Hồng Phúc": "phuc.png",
    "Phúc Thọ": "tho.jpg",
    "Gia Hân": "han.png",
    "Bảo Nghi": "nghi.png",
    "Gia Hưng": "hung.png",
    "Hạnh Dung": "dung.png",
    "Nguyên": "nguyen.png",
    "Đức Huy": "huy.png"
}

files = os.listdir(src_dir)
for f in files:
    if f.startswith('.'):
        continue
    src_norm = unicodedata.normalize('NFC', f)
    matched = False
    for key, val in mapping.items():
        key_norm = unicodedata.normalize('NFC', key)
        if key_norm in src_norm:
            src_path = os.path.join(src_dir, f)
            dst_path = os.path.join(dst_dir, val)
            shutil.copy2(src_path, dst_path)
            print(f"Copied: {f} -> {val}")
            matched = True
            break
    if not matched:
        print(f"No match for: {f}")
