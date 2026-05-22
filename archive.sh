#!/usr/bin/env bash
# archive.sh — đóng gói dist/ thành dist.tar.gz
# Dùng: bash archive.sh [đường-dẫn-dist]
# Ví dụ: bash archive.sh ../VGM-DANTOC/dist

set -e

DIST_PATH="${1:-dist}"

if [ ! -d "$DIST_PATH" ]; then
  echo "ERROR: Thư mục '$DIST_PATH' không tồn tại"
  echo "Dùng: bash archive.sh <đường-dẫn-đến-dist>"
  exit 1
fi

echo "Đóng gói '$DIST_PATH' → dist.tar.gz ..."
tar -czf dist.tar.gz -C "$(dirname "$DIST_PATH")" "$(basename "$DIST_PATH")"
echo "Xong! dist.tar.gz ($(du -sh dist.tar.gz | cut -f1))"
