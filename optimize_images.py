import os
from PIL import Image

def optimize_images(input_dir, output_dir, max_size=(1920, 1080), quality=80):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            input_path = os.path.join(input_dir, filename)
            # Change extension to .webp for output
            name, _ = os.path.splitext(filename)
            output_filename = f"{name}.webp"
            output_path = os.path.join(output_dir, output_filename)

            try:
                with Image.open(input_path) as img:
                    # Keep transparency if it's a PNG, otherwise convert to RGB
                    if img.format == 'PNG' and img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        pass # keep RGBA
                    elif img.mode != 'RGB':
                        img = img.convert('RGB')
                    
                    # Resize if larger than max_size while maintaining aspect ratio
                    img.thumbnail(max_size, Image.Resampling.LANCZOS)
                    
                    # Save as WebP
                    img.save(output_path, 'WEBP', quality=quality)
                    print(f"Optimized: {filename} -> {output_filename}")
            except Exception as e:
                print(f"Failed to optimize {filename}: {e}")

if __name__ == "__main__":
    # Script is meant to be run from the workspace root
    input_directory = "image"
    output_directory = "assets/images"
    optimize_images(input_directory, output_directory)
