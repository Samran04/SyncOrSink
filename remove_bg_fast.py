from PIL import Image

def remove_background_fast():
    img = Image.open(r"public\Sync (2).png").convert("RGBA")
    
    # Load pixel data directly and modify
    pixels = img.load()
    width, height = img.size
    
    bg_color = pixels[0, 0][:3]  # Get the top-left color
    
    # Keep track of the bounding box manually
    min_x, min_y = width, height
    max_x, max_y = 0, 0
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Simple color distance
            dist = abs(r - bg_color[0]) + abs(g - bg_color[1]) + abs(b - bg_color[2])
            
            if dist < 45: # Make tolerance generous for anti-aliasing
                pixels[x, y] = (r, g, b, 0)
            else:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y
                
    if min_x <= max_x and min_y <= max_y:
        img = img.crop((min_x, min_y, max_x + 1, max_y + 1))
        
    img.save(r"public\logo-cropped.png", "PNG")
    print("Fast extraction successful!")
    
if __name__ == "__main__":
    remove_background_fast()
