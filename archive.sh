#!/bin/bash

# Usage:
# ./archive.sh /path/to/dist
#
# This will create an archive named dist.tar.gz in the current working directory.

# Exit on error
set -e

# Check if path argument is provided
if [ -z "$1" ]; then
  echo "Error: No path provided."
  echo "Usage: $0 /path/to/dist"
  exit 1
fi

# Get the absolute path of the input
INPUT_PATH="$1"

# Check if directory exists
if [ ! -d "$INPUT_PATH" ]; then
  echo "Error: Directory '$INPUT_PATH' does not exist."
  exit 1
fi

# Get the base name of the directory (e.g., dist)
DIR_NAME=$(basename "$INPUT_PATH")

# Set output file name
OUTPUT_FILE="${DIR_NAME}.tar.gz"

# Create tar.gz archive
tar -czf "$OUTPUT_FILE" -C "$(dirname "$INPUT_PATH")" "$DIR_NAME"

echo "Archive created: $OUTPUT_FILE"
