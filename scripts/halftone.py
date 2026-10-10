"""Bitmap halftone: converts an image into dots on a transparent background.

Usage: python3 scripts/halftone.py <in> <out.png> <width> [cell] [ink hex] [gamma] [white point 0-1]
The dots carry the ink colour; transparent areas let the page ground show through.
"""
import sys
import numpy as np
from PIL import Image, ImageOps

src, out, width = sys.argv[1], sys.argv[2], int(sys.argv[3])
cell = float(sys.argv[4]) if len(sys.argv) > 4 else 5.0
ink = sys.argv[5] if len(sys.argv) > 5 else "111111"
gamma = float(sys.argv[6]) if len(sys.argv) > 6 else 1.0
white = float(sys.argv[7]) if len(sys.argv) > 7 else 1.0

im = Image.open(src).convert("L")
im = ImageOps.autocontrast(im, cutoff=1)
h = round(im.height * width / im.width)
im = im.resize((width, h), Image.LANCZOS)
g = np.asarray(im, dtype=np.float32) / 255.0
# Everything lighter than the white point becomes bare paper.
dark = np.clip((white - g) / white, 0, 1) ** gamma  # 0 = paper, 1 = full ink

# Rotated 45 degree screen: each pixel's distance to its cell centre.
yy, xx = np.mgrid[0:h, 0:width].astype(np.float32)
c, s = np.cos(np.pi / 4), np.sin(np.pi / 4)
u = (xx * c + yy * s) / cell
v = (-xx * s + yy * c) / cell
du = u - np.floor(u) - 0.5
dv = v - np.floor(v) - 0.5
dist = np.sqrt(du * du + dv * dv)  # 0..~0.707
# Dot radius grows with darkness; area-proportional.
radius = np.sqrt(dark / np.pi) * 1.12
alpha = np.clip((radius - dist) * cell * 1.2 + 0.5, 0, 1)

r, gg, b = (int(ink[i : i + 2], 16) for i in (0, 2, 4))
rgba = np.zeros((h, width, 4), dtype=np.uint8)
rgba[..., 0], rgba[..., 1], rgba[..., 2] = r, gg, b
rgba[..., 3] = (alpha * 255).astype(np.uint8)
Image.fromarray(rgba, "RGBA").save(out, optimize=True)
