#!/bin/bash

# Directory containing images (current directory by default)
INPUT_DIR="${1:-.}"

# Quality setting (lower = more compression, range 2-31, default 23)
QUALITY="${2:-25}"

# Create compressed directory
COMPRESSED_DIR="${INPUT_DIR}/compressed"
mkdir -p "$COMPRESSED_DIR"

echo "Compressing images from: $INPUT_DIR"
echo "Output directory: $COMPRESSED_DIR"
echo "Quality setting: $QUALITY"

# Counter for processed files
count=0

# Process common image formats
for ext in jpg jpeg png bmp tiff webp JPG JPEG PNG BMP TIFF WEBP; do
    for img in "$INPUT_DIR"/*."$ext"; do
        # Skip if no files match the pattern
        [ ! -f "$img" ] && continue
        
        filename=$(basename "$img")
        output_file="$COMPRESSED_DIR/$filename"
        ext_lower=$(echo "${filename##*.}" | tr '[:upper:]' '[:lower]')
        
        echo "Processing: $filename"
        
        # Compress image with ffmpeg
        if [[ "$ext_lower" == "png" ]]; then
            # PNG compression (lossless)
            ffmpeg -i "$img" -compression_level 9 -y "$output_file" 2>/dev/null
        elif [[ "$ext_lower" == "jpg" || "$ext_lower" == "jpeg" ]]; then
            # JPEG compression
            ffmpeg -i "$img" -q:v "$QUALITY" -y "$output_file" 2>/dev/null
        else
            # Other formats - compress maintaining format
            ffmpeg -i "$img" -q:v "$QUALITY" -y "$output_file" 2>/dev/null
        fi
        
        # Check if compression succeeded
        if [ $? -eq 0 ] && [ -f "$output_file" ]; then
            echo "✓ Compressed: $filename"
            ((count++))
        else
            echo "✗ Failed: $filename"
            rm -f "$output_file"
        fi
    done
done

echo ""
echo "Compression complete! Processed $count images."
echo "Compressed files saved to: $COMPRESSED_DIR"

# Show size comparison
if [ $count -gt 0 ]; then
    original_size=$(du -sh "$INPUT_DIR" --exclude="$COMPRESSED_DIR" | cut -f1)
    compressed_size=$(du -sh "$COMPRESSED_DIR" | cut -f1)
    echo "Original size: $original_size"
    echo "Compressed size: $compressed_size"
fi

