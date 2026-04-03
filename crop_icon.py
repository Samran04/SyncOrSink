from PIL import Image

def process_favicon():
    # Load original image
    img = Image.open(r"public\Sync (2).png")
    
    # Convert to RGBA if not already
    img = img.convert("RGBA")
    
    # Get bounding box of non-transparent areas
    bbox = img.getbbox()
    
    if bbox:
        # Crop the image to the exact text
        cropped = img.crop(bbox)
        
        # Determine the maximum dimension to make it square
        max_dim = max(cropped.width, cropped.height)
        
        # Add 10% padding so it looks good in a browser tab
        padded_dim = int(max_dim * 1.1)
        
        # Create a new transparent square image
        square_img = Image.new("RGBA", (padded_dim, padded_dim), (0, 0, 0, 0))
        
        # Calculate centering offsets
        offset_x = (padded_dim - cropped.width) // 2
        offset_y = (padded_dim - cropped.height) // 2
        
        # Paste the cropped image in the center
        square_img.paste(cropped, (offset_x, offset_y))
        
        # Save as PNG icon for Next.js
        square_img.save(r"src\app\icon.png", "PNG")
        print("Favicon successfully cropped, squared, and saved to src/app/icon.png")
    else:
        print("Image is entirely transparent")

if __name__ == "__main__":
    process_favicon()
