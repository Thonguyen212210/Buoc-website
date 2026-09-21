#!/bin/bash
set -e

# Get current timestamp
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_PARENT_DIR="/Users/thonguyen/Library/Mobile Documents/com~apple~CloudDocs/Documents/[Class] CODE/6. Buoc Project/backups"
BACKUP_DIR="$BACKUP_PARENT_DIR/backup_$TIMESTAMP"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Path to the expect script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXPECT_SCRIPT="$SCRIPT_DIR/backup_db.exp"

# Make the expect script executable
chmod +x "$EXPECT_SCRIPT"

# Run the expect script
expect "$EXPECT_SCRIPT" "$BACKUP_DIR"

# Extract the archive
if [ -f "$BACKUP_DIR/db_backup.tar.gz" ]; then
    echo "\n[4/4] 📂 Extracting SQLite files..."
    tar -xzf "$BACKUP_DIR/db_backup.tar.gz" -C "$BACKUP_DIR"
    rm "$BACKUP_DIR/db_backup.tar.gz"
    echo "✨ SQLite database files backed up successfully to:"
    echo "   $BACKUP_DIR"
    echo "\nFiles in backup:"
    ls -la "$BACKUP_DIR"
else
    echo "❌ Error: Backup archive not found."
    exit 1
fi
