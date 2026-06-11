// One-time migration: combine all data/*.js recipe data into a single
// TSV file for import into the "Recipes" tab of the CampMenuDB Google Sheet.
//
// Usage: node scripts/migrate_recipes_to_sheet.mjs
//
// Output: scripts/recipes_migration.tsv
//   Columns: ID, Status, Submitted By, Timestamp, Title, Meal Type, Recipe JSON
//
// Import into Google Sheets: File -> Import -> Upload -> select this file
// -> Import location: "Replace current sheet" (the "Recipes" tab)
// -> Separator type: Tab -> Import data.

import { readFileSync, writeFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '..', 'data');

const ctx = { window: {}, console };
createContext(ctx);

const FILES_IN_ORDER = [
  'recipes.js',
  'walmart_prices.js',
  'grab_and_go.js',
  'cracker_barrel.js',
  'sides.js',
  'recipe_details.js',
  'recipe_header_images.js',
  'cooking_instructions.js',
  'cooking_instructions2.js',
  'cooking_instructions3.js',
];

for (const file of FILES_IN_ORDER) {
  const code = readFileSync(path.join(dataDir, file), 'utf8');
  runInContext(code, ctx, { filename: file });
}

const RECIPES = ctx.window.RECIPES || [];
const HEADER_IMAGES = ctx.window.RECIPE_HEADER_IMAGES || {};
const COOKING_INSTRUCTIONS = ctx.window.COOKING_INSTRUCTIONS || {};
const RECIPE_DETAILS = ctx.window.RECIPE_DETAILS || {};
const WALMART_COSTS = ctx.window.WALMART_RECIPE_COSTS || {};

const timestamp = new Date().toISOString();
const headerRow = ['ID', 'Status', 'Submitted By', 'Timestamp', 'Title', 'Meal Type', 'Recipe JSON'];
const dataRows = [];

let withImage = 0, withInstructions = 0, withDetails = 0, withCost = 0;
let maxLen = 0, maxId = '';

for (const r of RECIPES) {
  const merged = { ...r };

  if (HEADER_IMAGES[r.id]) { merged.header_image = HEADER_IMAGES[r.id]; withImage++; }
  if (COOKING_INSTRUCTIONS[r.id]) { merged.cooking_instructions = COOKING_INSTRUCTIONS[r.id]; withInstructions++; }
  if (RECIPE_DETAILS[r.id]) { merged.recipe_details = RECIPE_DETAILS[r.id]; withDetails++; }
  if (WALMART_COSTS[r.id]) {
    merged.cost_per_person = WALMART_COSTS[r.id].cost_per_person;
    merged.walmart_note = WALMART_COSTS[r.id].walmart_note;
    withCost++;
  }

  const json = JSON.stringify(merged);
  if (json.length > maxLen) { maxLen = json.length; maxId = r.id; }

  dataRows.push([
    r.id, 'Approved', 'Built-in', timestamp, r.title, r.meal_type, json
  ].join('\t'));
}

const tsv = [headerRow.join('\t'), ...dataRows].join('\n') + '\n';
const outPath = path.join(__dirname, 'recipes_migration.tsv');
writeFileSync(outPath, tsv, 'utf8');

console.log(`Wrote ${dataRows.length} recipes to ${outPath}`);
console.log(`  with header_image:        ${withImage}`);
console.log(`  with cooking_instructions: ${withInstructions}`);
console.log(`  with recipe_details:       ${withDetails}`);
console.log(`  with cost_per_person:      ${withCost}`);
console.log(`Largest Recipe JSON: ${maxId} (${maxLen} chars, Sheets cell limit is 50000)`);
console.log(`File size: ${(tsv.length / 1024).toFixed(1)} KB`);
console.log('');
console.log('Next steps:');
console.log('1. Open your CampMenuDB Google Sheet, "Recipes" tab.');
console.log('2. File -> Import -> Upload -> select scripts/recipes_migration.tsv');
console.log('3. Import location: "Replace current sheet"');
console.log('4. Separator type: Tab');
console.log('5. Click Import data.');
