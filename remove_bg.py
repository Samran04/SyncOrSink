from PIL import Image

def remove_background():
    img = Image.open(r"public\Sync (2).png").convert("RGBA")
    data = img.getdata()
    bg_color = data[0][:3]  # (15, 23, 42)
    
    new_data = []
    for item in data:
        # Calculate color distance
        rgb = item[:3]
        dist = sum(abs(a - b) for a, b in zip(rgb, bg_color))
        
        if dist < 20:  # Tolerance
            new_data.append((0, 0, 0, 0)) # Make transparent
        else:
            # If it's near the edge, we could do alpha blending, but a hard limit is okay for now
            # Or we can just keep the original pixel
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Crop it to the bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(r"public\logo-cropped.png", "PNG")
    print("Background removed and image cropped successfully to public/logo-cropped.png")

if __name__ == "__main__":
    remove_background()
