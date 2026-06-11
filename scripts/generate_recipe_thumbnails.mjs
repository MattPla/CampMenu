// Generate <id>-thumb.webp square thumbnails for the Recipe Finder cards,
// derived from the existing <id>-wide.webp header images (1024x576).
//
// Usage:
//   node scripts/generate_recipe_thumbnails.mjs
//
// Requires ffmpeg on PATH. Center-crops each 1024x576 image to a 576x576
// square, then scales down to 240x240. Re-running is safe — existing
// thumbnails are skipped unless --force is passed.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const DIR = path.join(process.cwd(), 'assets', 'recipe-images');
const FORCE = process.argv.includes('--force');

const files = fs.readdirSync(DIR).filter(f => f.endsWith('-wide.webp'));

let created = 0;
let skipped = 0;

for (const file of files) {
  const id = file.slice(0, -'-wide.webp'.length);
  const src = path.join(DIR, file);
  const out = path.join(DIR, `${id}-thumb.webp`);

  if (!FORCE && fs.existsSync(out)) {
    skipped++;
    continue;
  }

  execFileSync('ffmpeg', [
    '-y', '-loglevel', 'error',
    '-i', src,
    '-vf', 'crop=576:576:224:0,scale=240:240',
    '-c:v', 'libwebp', '-quality', '75',
    out
  ]);
  created++;
  console.log('Created', path.relative(process.cwd(), out));
}

console.log(`Done. Created ${created}, skipped ${skipped} (already existed).`);
