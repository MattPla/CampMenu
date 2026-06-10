#!/usr/bin/env python3
"""Convert generated recipe header PNGs to WebP and update the image map."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

try:
    from PIL import Image, features
except ModuleNotFoundError as exc:
    raise SystemExit(
        "Pillow is required. Install it with: python -m pip install pillow"
    ) from exc


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "assets" / "recipe-images"
RECIPES_JSON = ROOT / "data" / "recipes.json"
IMAGE_MAP_JS = ROOT / "data" / "recipe_header_images.js"


def js_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def convert_image(src: Path, quality: int, effort: int, overwrite: bool) -> Path:
    dest = src.with_suffix(".webp")
    if dest.exists() and not overwrite:
        return dest

    with Image.open(src) as image:
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        image.save(dest, "WEBP", quality=quality, method=effort)

    return dest


def write_image_map(image_dir: Path) -> int:
    recipes = json.loads(RECIPES_JSON.read_text(encoding="utf-8"))
    entries: list[str] = []

    for recipe in recipes:
        recipe_id = recipe["id"]
        webp_path = image_dir / f"{recipe_id}-wide.webp"
        if webp_path.exists():
            src = f"assets/recipe-images/{webp_path.name}"
            alt = f"{recipe['title']} campsite recipe header"
            entries.append(
                f"  {js_string(recipe_id)}: "
                f"{{ src: {js_string(src)}, alt: {js_string(alt)} }}"
            )

    body = ",\n".join(entries)
    IMAGE_MAP_JS.write_text(
        f"window.RECIPE_HEADER_IMAGES = {{\n{body}\n}};\n",
        encoding="utf-8",
    )
    return len(entries)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Convert assets/recipe-images/*-wide.png to WebP."
    )
    parser.add_argument("--quality", type=int, default=86, help="WebP quality 1-100.")
    parser.add_argument(
        "--effort",
        type=int,
        default=6,
        choices=range(0, 7),
        metavar="0-6",
        help="WebP encoder effort/method. 6 is slowest and smallest.",
    )
    parser.add_argument(
        "--keep-png",
        action="store_true",
        help="Keep PNG files after successful WebP conversion.",
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Rebuild existing WebP files.",
    )
    args = parser.parse_args()

    if not features.check("webp"):
        raise SystemExit("This Pillow build does not support WebP encoding.")

    pngs = sorted(IMAGE_DIR.glob("*-wide.png"))
    if not pngs:
        raise SystemExit(f"No *-wide.png files found in {IMAGE_DIR}")

    converted = 0
    original_bytes = 0
    webp_bytes = 0

    for png in pngs:
        original_bytes += png.stat().st_size
        webp = convert_image(png, args.quality, args.effort, args.overwrite)
        webp_bytes += webp.stat().st_size
        converted += 1
        if not args.keep_png:
            png.unlink()
        print(f"{png.name} -> {webp.name}")

    map_entries = write_image_map(IMAGE_DIR)
    saved = original_bytes - webp_bytes
    print()
    print(f"Converted: {converted}")
    print(f"Image map entries: {map_entries}")
    print(f"PNG total: {original_bytes / (1024 * 1024):.2f} MB")
    print(f"WebP total: {webp_bytes / (1024 * 1024):.2f} MB")
    print(f"Saved: {saved / (1024 * 1024):.2f} MB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
