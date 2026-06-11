// Generate header images for the 28 recipes that don't have one yet
// (grab-and-go breakfasts, cracker barrel snacks, and sides).
//
// Usage:
//   $env:GEMINI_API_KEY = "..."
//   node scripts/generate_missing_recipe_images.mjs
//
// Requires: a Gemini API key with Imagen access (set via GEMINI_API_KEY env
// var — never hardcode it), and ffmpeg on PATH (used to resize/convert the
// generated PNG to a 1024x576 .webp matching the existing header images).
//
// Output:
//   - assets/recipe-images/<id>-wide.webp for each recipe (16:9, 1024x576)
//   - scripts/missing_header_images.json — { id: { src, alt } } map to paste
//     into the applyMissingHeaderImages() function in the Apps Script editor
//     (see scripts/community_recipes_apps_script.gs) and run once.

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('Set the GEMINI_API_KEY environment variable before running this script.');
  process.exit(1);
}

const OUT_DIR = path.join(process.cwd(), 'assets', 'recipe-images');
const MODEL = 'imagen-3.0-generate-002';

const STYLE_DAY =
  'Photorealistic food photography for a Boy Scout troop camping recipe guide. ' +
  'Outdoor campsite setting, rustic wooden picnic table, blurred forest, tents, ' +
  'and camping gear softly out of focus in the background, natural daylight, ' +
  'shallow depth of field, warm and appetizing color tones, no text, no logos, ' +
  'no people, no hands.';

const STYLE_CAMPFIRE =
  'Photorealistic food photography for a Boy Scout troop camping recipe guide. ' +
  'Outdoor campsite setting at dusk with a glowing campfire and blurred tents ' +
  'softly out of focus in the background, warm firelight, shallow depth of ' +
  'field, cozy and appetizing color tones, no text, no logos, no people, no hands.';

const RECIPES = [
  // ── Grab-and-go breakfasts ────────────────────────────────────────────────
  { id: 'grab-go-pop-tarts', title: 'Pop-Tarts & Juice Box', style: STYLE_DAY,
    subject: 'A foil-wrapped toaster pastry package next to a small juice box' },
  { id: 'grab-go-granola-banana', title: 'Granola Bar & Banana', style: STYLE_DAY,
    subject: 'A granola bar next to a ripe banana' },
  { id: 'grab-go-instant-oatmeal', title: 'Instant Oatmeal Cup', style: STYLE_DAY,
    subject: 'A steaming cup of instant oatmeal with a plastic spoon' },
  { id: 'grab-go-cereal-milk', title: 'Cereal Cup & Shelf-Stable Milk', style: STYLE_DAY,
    subject: 'A single-serve cereal cup with a small carton of shelf-stable milk and a spoon' },
  { id: 'grab-go-bagel-cream-cheese', title: 'Bagel & Cream Cheese', style: STYLE_DAY,
    subject: 'A bagel sliced in half next to a small cream cheese packet' },
  { id: 'grab-go-muffins', title: 'Bakery Muffins & Applesauce Pouch', style: STYLE_DAY,
    subject: 'Two bakery muffins next to an applesauce pouch' },
  { id: 'grab-go-nutrigrain', title: 'Nutri-Grain Bar & OJ Bottle', style: STYLE_DAY,
    subject: 'A cereal breakfast bar next to a small bottle of orange juice' },
  { id: 'grab-go-donuts', title: 'Donuts & Chocolate Milk', style: STYLE_DAY,
    subject: 'Two glazed donuts on a napkin next to a small chocolate milk carton' },
  { id: 'grab-go-pb-crackers', title: 'Peanut Butter Crackers & Fruit Pouch', style: STYLE_DAY,
    subject: 'A package of peanut butter sandwich crackers next to a fruit pouch' },
  { id: 'grab-go-trail-mix', title: 'Trail Mix Bag & String Cheese', style: STYLE_DAY,
    subject: 'A small bag of trail mix next to a string cheese stick' },

  // ── Cracker barrel snacks ─────────────────────────────────────────────────
  { id: 'cb-crackers-cheese', title: 'Crackers & Cheese Cubes', style: STYLE_DAY,
    subject: 'A small wooden board with crackers and cubes of cheese' },
  { id: 'cb-summer-sausage-crackers', title: 'Summer Sausage, Cheese & Crackers', style: STYLE_DAY,
    subject: 'Sliced summer sausage, cubed cheese, and crackers arranged on a wooden board' },
  { id: 'cb-trail-mix-pretzels', title: 'Trail Mix & Pretzel Snack Bags', style: STYLE_DAY,
    subject: 'Small snack bags of trail mix and pretzels' },
  { id: 'cb-chips-salsa', title: 'Tortilla Chips & Salsa', style: STYLE_DAY,
    subject: 'A bowl of tortilla chips next to a small bowl of salsa' },
  { id: 'cb-cocoa-cookies', title: 'Hot Cocoa & Cookies', style: STYLE_CAMPFIRE,
    subject: 'A camp mug of steaming hot cocoa topped with marshmallows next to a couple of cookies' },
  { id: 'cb-fruit-cups', title: 'Fruit Cups & Fruit Snacks', style: STYLE_DAY,
    subject: 'Plastic fruit cups next to small packets of fruit snacks' },
  { id: 'cb-pretzels-pb', title: 'Pretzels & Peanut Butter Dip Cups', style: STYLE_DAY,
    subject: 'Pretzel rods next to small peanut butter dip cups' },
  { id: 'cb-smores-kit', title: "S'mores Kit (Campfire)", style: STYLE_CAMPFIRE,
    subject: 'Graham crackers, chocolate bars, and marshmallows on roasting sticks near a glowing campfire' },

  // ── Sides ──────────────────────────────────────────────────────────────────
  { id: 'side-chips', title: 'Bag of Chips', style: STYLE_DAY,
    subject: 'An open bag of potato chips with some spilled onto a tin camp plate' },
  { id: 'side-fruit-cup', title: 'Fruit Cup', style: STYLE_DAY,
    subject: 'A plastic cup of mixed fruit with a spoon' },
  { id: 'side-apple-slices', title: 'Apple Slices', style: STYLE_DAY,
    subject: 'Sliced apples arranged on a tin camp plate' },
  { id: 'side-baby-carrots-ranch', title: 'Baby Carrots & Ranch', style: STYLE_DAY,
    subject: 'Baby carrots on a tin plate next to a small cup of ranch dressing' },
  { id: 'side-side-salad', title: 'Side Salad', style: STYLE_DAY,
    subject: 'A small bowl of mixed green salad' },
  { id: 'side-applesauce', title: 'Applesauce Cup', style: STYLE_DAY,
    subject: 'A cup of applesauce with a spoon' },
  { id: 'side-coleslaw', title: 'Coleslaw', style: STYLE_DAY,
    subject: 'A bowl of creamy coleslaw' },
  { id: 'side-pickle-spears', title: 'Pickle Spears', style: STYLE_DAY,
    subject: 'Pickle spears arranged on a small tin plate' },
  { id: 'side-oven-fries', title: 'Oven Fries', style: STYLE_DAY,
    subject: 'A pile of golden oven-baked fries in a small cast iron skillet' },
  { id: 'side-canned-corn', title: 'Canned Corn', style: STYLE_DAY,
    subject: 'A bowl of buttered sweet corn' },
];

function buildPrompt(r) {
  return `${r.style} ${r.subject}.`;
}

async function generateImage(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict?key=${API_KEY}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: { sampleCount: 1, aspectRatio: '16:9' },
    }),
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Imagen API ${resp.status}: ${text.slice(0, 500)}`);
  }
  const data = await resp.json();
  const b64 = data?.predictions?.[0]?.bytesBase64Encoded;
  if (!b64) throw new Error(`No image in response: ${JSON.stringify(data).slice(0, 500)}`);
  return Buffer.from(b64, 'base64');
}

function toWebp(pngBuffer, outPath) {
  const tmpPng = path.join(os.tmpdir(), `recipe-img-${Date.now()}-${Math.random().toString(36).slice(2)}.png`);
  fs.writeFileSync(tmpPng, pngBuffer);
  try {
    execFileSync('ffmpeg', [
      '-y', '-loglevel', 'error',
      '-i', tmpPng,
      '-vf', 'scale=1024:576',
      '-lossless', '0', '-quality', '82',
      outPath,
    ], { stdio: 'inherit' });
  } finally {
    fs.unlinkSync(tmpPng);
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const headerImages = {};
  const failures = [];

  for (const r of RECIPES) {
    const prompt = buildPrompt(r);
    process.stdout.write(`Generating ${r.id} ... `);
    try {
      const png = await generateImage(prompt);
      const outPath = path.join(OUT_DIR, `${r.id}-wide.webp`);
      toWebp(png, outPath);
      headerImages[r.id] = {
        src: `assets/recipe-images/${r.id}-wide.webp`,
        alt: `${r.title} campsite recipe header`,
      };
      console.log('done');
    } catch (err) {
      console.log('FAILED');
      console.error(`  ${err.message}`);
      failures.push(r.id);
    }
    // Be polite to the API between requests.
    await new Promise((res) => setTimeout(res, 2000));
  }

  const outJsonPath = path.join(process.cwd(), 'scripts', 'missing_header_images.json');
  fs.writeFileSync(outJsonPath, JSON.stringify(headerImages, null, 2));

  console.log('');
  console.log(`Generated ${Object.keys(headerImages).length}/${RECIPES.length} images.`);
  if (failures.length) console.log(`Failed: ${failures.join(', ')}`);
  console.log(`Wrote ${path.relative(process.cwd(), outJsonPath)}`);
  console.log('Next: open the Apps Script editor, paste this file\'s contents into');
  console.log('HEADER_IMAGES inside applyMissingHeaderImages(), then run that function once.');
}

main();
