from PIL import Image
import numpy as np
import urllib.request, os, io

os.makedirs('/vercel/share/v0-project/public/images', exist_ok=True)

# Download directly from the blob URL
url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1dtzxn42MR51SBkWbOwvcDnRKgg9t5.png'
print(f"[v0] Downloading from {url}")
with urllib.request.urlopen(url) as resp:
    raw = resp.read()

img = Image.open(io.BytesIO(raw)).convert('RGBA')
print(f"[v0] Opened image, size={img.size}, mode={img.mode}")
data = np.array(img, dtype=np.uint8)

r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]

# Pure white -> transparent
white_mask = (r > 230) & (g > 230) & (b > 230)
data[white_mask, 3] = 0

# Near-white edge pixels -> partial transparency for anti-aliasing
semi_mask = (r > 200) & (g > 200) & (b > 200) & ~white_mask
brightness = (r[semi_mask].astype(int) + g[semi_mask].astype(int) + b[semi_mask].astype(int)) // 3
alpha_vals = np.clip(((255 - brightness) / 55 * 255).astype(int), 0, 255).astype(np.uint8)
data[semi_mask, 3] = alpha_vals

output_path = '/vercel/share/v0-project/public/images/logo-transparent.png'
result = Image.fromarray(data, 'RGBA')
result.save(output_path, 'PNG')
print(f"[v0] Saved: {output_path}, size={result.size}")
