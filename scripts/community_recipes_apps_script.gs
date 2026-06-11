// Camp Menu Builder â€” Recipes Apps Script
//
// Paste this entire file into Extensions > Apps Script for your
// "CampMenuDB" Google Sheet, then deploy/redeploy as a Web App
// (Execute as: Me, Who has access: Anyone).
//
// See docs/community_recipes.md for full setup instructions.

var SHEET_NAME = 'Recipes';

// â”€â”€ Read: return all approved recipes (built-in + community) as JSON â”€â”€â”€â”€â”€â”€â”€
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var rows = data.slice(1);

  var idx = function (name) { return headers.indexOf(name); };
  var statusCol = idx('Status');
  var jsonCol = idx('Recipe JSON');

  var recipes = [];
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row[statusCol] !== 'Approved') continue;
    var raw = row[jsonCol];
    if (!raw) continue;
    try {
      var recipe = JSON.parse(raw);
      if (recipe && recipe.id && recipe.title && recipe.meal_type) {
        recipes.push(recipe);
      }
    } catch (err) {
      // Skip malformed rows rather than failing the whole response
    }
  }

  return jsonOutput(recipes);
}

// â”€â”€ Write: append a new Pending submission, or update an existing recipe â”€â”€
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  var body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonOutput({ success: false, error: 'Invalid JSON' });
  }

  if (body.action === 'update') return updateRecipe(sheet, body);

  var title = String(body.title || '').trim();
  if (!title || !body.meal_type) {
    return jsonOutput({ success: false, error: 'Title and meal type are required' });
  }

  var headers = sheet.getDataRange().getValues()[0];
  var idx = function (name) { return headers.indexOf(name); };

  var nextRow = sheet.getLastRow() + 1;
  var id = 'community-' + slugify(title) + '-' + nextRow;

  var mealType = String(body.meal_type).trim().toLowerCase();
  var prep = numOr(body.prep_minutes, 0);
  var cook = numOr(body.cook_minutes, 0);
  var difficulty = numOr(body.difficulty, 2);

  var recipe = {
    id: id,
    title: title,
    status: 'exact_quantities',
    meal_type: mealType,
    categories: arrOr(body.categories, []),
    methods: [],
    default_servings: numOr(body.default_servings, 1),
    scaling_model: mealType === 'side' ? 'per_person' : 'linear_batch',
    prep_minutes: prep,
    cook_minutes: cook,
    total_minutes: prep + cook,
    difficulty: difficulty,
    effort: effortForDifficulty(difficulty),
    patrol_fit: 'good',
    equipment: arrOr(body.equipment, []),
    protein_tags: ['none'],
    common_allergens: arrOr(body.allergens, ['none']),
    food_safety_flags: [],
    ingredients: arrOr(body.ingredients, []),
    planning_items_per_person: [],
    directions_summary: String(body.directions_summary || ''),
    cook_notes: arrOr(body.cook_notes, []),
    grab_and_go: cook === 0,
    no_cook: cook === 0
  };

  var costRaw = body.cost_per_person;
  if (costRaw !== null && costRaw !== undefined && costRaw !== '' && !isNaN(Number(costRaw))) {
    recipe.cost_per_person = Number(costRaw);
  }
  if (body.walmart_note) recipe.walmart_note = String(body.walmart_note);

  var row = new Array(headers.length).fill('');
  row[idx('ID')] = id;
  row[idx('Status')] = 'Pending';
  row[idx('Submitted By')] = body.submitted_by || '';
  row[idx('Timestamp')] = new Date().toISOString();
  row[idx('Title')] = title;
  row[idx('Meal Type')] = mealType;
  row[idx('Recipe JSON')] = JSON.stringify(recipe);

  sheet.appendRow(row);

  return jsonOutput({ success: true, id: id });
}

// â”€â”€ Write: edit an existing recipe in place (no review queue) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Used by the "Edit" button on the Research tab. Overwrites the recipe's
// Title / Meal Type / Recipe JSON cells directly, preserving header_image
// and cooking_instructions. The submitted ingredients become the source of
// truth for shopping-list quantities, so any existing recipe_details (a
// separate itemized breakdown) is dropped to avoid the two going stale
// against each other.
function updateRecipe(sheet, body) {
  var id = String(body.id || '').trim();
  if (!id) return jsonOutput({ success: false, error: 'Missing recipe id' });

  var title = String(body.title || '').trim();
  if (!title || !body.meal_type) {
    return jsonOutput({ success: false, error: 'Title and meal type are required' });
  }

  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var idx = function (name) { return headers.indexOf(name); };
  var idCol = idx('ID');
  var jsonCol = idx('Recipe JSON');

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][idCol]) !== id) continue;

    var existing;
    try {
      existing = JSON.parse(data[i][jsonCol]);
    } catch (err) {
      existing = {};
    }

    var mealType = String(body.meal_type).trim().toLowerCase();
    var prep = numOr(body.prep_minutes, existing.prep_minutes || 0);
    var cook = numOr(body.cook_minutes, existing.cook_minutes || 0);
    var difficulty = numOr(body.difficulty, existing.difficulty || 2);

    var updated = Object.assign({}, existing, {
      id: id,
      title: title,
      meal_type: mealType,
      default_servings: numOr(body.default_servings, existing.default_servings || 1),
      prep_minutes: prep,
      cook_minutes: cook,
      total_minutes: prep + cook,
      difficulty: difficulty,
      effort: effortForDifficulty(difficulty),
      categories: arrOr(body.categories, existing.categories || []),
      equipment: arrOr(body.equipment, existing.equipment || []),
      common_allergens: arrOr(body.allergens, existing.common_allergens || []),
      ingredients: arrOr(body.ingredients, existing.ingredients || []),
      directions_summary: body.directions_summary != null ? String(body.directions_summary) : (existing.directions_summary || ''),
      cook_notes: arrOr(body.cook_notes, existing.cook_notes || []),
      grab_and_go: cook === 0,
      no_cook: cook === 0
    });
    delete updated.recipe_details;

    var costRaw = body.cost_per_person;
    if (costRaw !== null && costRaw !== undefined && costRaw !== '' && !isNaN(Number(costRaw))) {
      updated.cost_per_person = Number(costRaw);
    } else {
      delete updated.cost_per_person;
    }
    if (body.walmart_note) {
      updated.walmart_note = String(body.walmart_note);
    } else {
      delete updated.walmart_note;
    }

    sheet.getRange(i + 1, idx('Title') + 1).setValue(title);
    sheet.getRange(i + 1, idx('Meal Type') + 1).setValue(mealType);
    sheet.getRange(i + 1, jsonCol + 1).setValue(JSON.stringify(updated));

    return jsonOutput({ success: true, id: id });
  }

  return jsonOutput({ success: false, error: 'Recipe not found' });
}

// â”€â”€ One-time helper: add header images to existing rows â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Run this once (manually, from this editor's "Run" button â€” no redeploy
// needed) after generating new header images with
// scripts/generate_missing_recipe_images.mjs. Paste the contents of
// scripts/missing_header_images.json into HEADER_IMAGES below first.
function applyMissingHeaderImages() {
  var HEADER_IMAGES = {
  "grab-go-pop-tarts": {
    "src": "assets/recipe-images/grab-go-pop-tarts-wide.webp",
    "alt": "Pop-Tarts & Juice Box campsite recipe header"
  },
  "grab-go-granola-banana": {
    "src": "assets/recipe-images/grab-go-granola-banana-wide.webp",
    "alt": "Granola Bar & Banana campsite recipe header"
  },
  "grab-go-instant-oatmeal": {
    "src": "assets/recipe-images/grab-go-instant-oatmeal-wide.webp",
    "alt": "Instant Oatmeal Cup campsite recipe header"
  },
  "grab-go-cereal-milk": {
    "src": "assets/recipe-images/grab-go-cereal-milk-wide.webp",
    "alt": "Cereal Cup & Shelf-Stable Milk campsite recipe header"
  },
  "grab-go-bagel-cream-cheese": {
    "src": "assets/recipe-images/grab-go-bagel-cream-cheese-wide.webp",
    "alt": "Bagel & Cream Cheese campsite recipe header"
  },
  "grab-go-muffins": {
    "src": "assets/recipe-images/grab-go-muffins-wide.webp",
    "alt": "Bakery Muffins & Applesauce Pouch campsite recipe header"
  },
  "grab-go-nutrigrain": {
    "src": "assets/recipe-images/grab-go-nutrigrain-wide.webp",
    "alt": "Nutri-Grain Bar & OJ Bottle campsite recipe header"
  },
  "grab-go-donuts": {
    "src": "assets/recipe-images/grab-go-donuts-wide.webp",
    "alt": "Donuts & Chocolate Milk campsite recipe header"
  },
  "grab-go-pb-crackers": {
    "src": "assets/recipe-images/grab-go-pb-crackers-wide.webp",
    "alt": "Peanut Butter Crackers & Fruit Pouch campsite recipe header"
  },
  "grab-go-trail-mix": {
    "src": "assets/recipe-images/grab-go-trail-mix-wide.webp",
    "alt": "Trail Mix Bag & String Cheese campsite recipe header"
  },
  "cb-crackers-cheese": {
    "src": "assets/recipe-images/cb-crackers-cheese-wide.webp",
    "alt": "Crackers & Cheese Cubes campsite recipe header"
  },
  "cb-summer-sausage-crackers": {
    "src": "assets/recipe-images/cb-summer-sausage-crackers-wide.webp",
    "alt": "Summer Sausage, Cheese & Crackers campsite recipe header"
  },
  "cb-trail-mix-pretzels": {
    "src": "assets/recipe-images/cb-trail-mix-pretzels-wide.webp",
    "alt": "Trail Mix & Pretzel Snack Bags campsite recipe header"
  },
  "cb-chips-salsa": {
    "src": "assets/recipe-images/cb-chips-salsa-wide.webp",
    "alt": "Tortilla Chips & Salsa campsite recipe header"
  },
  "cb-cocoa-cookies": {
    "src": "assets/recipe-images/cb-cocoa-cookies-wide.webp",
    "alt": "Hot Cocoa & Cookies campsite recipe header"
  },
  "cb-fruit-cups": {
    "src": "assets/recipe-images/cb-fruit-cups-wide.webp",
    "alt": "Fruit Cups & Fruit Snacks campsite recipe header"
  },
  "cb-pretzels-pb": {
    "src": "assets/recipe-images/cb-pretzels-pb-wide.webp",
    "alt": "Pretzels & Peanut Butter Dip Cups campsite recipe header"
  },
  "cb-smores-kit": {
    "src": "assets/recipe-images/cb-smores-kit-wide.webp",
    "alt": "S'mores Kit (Campfire) campsite recipe header"
  },
  "side-chips": {
    "src": "assets/recipe-images/side-chips-wide.webp",
    "alt": "Bag of Chips campsite recipe header"
  },
  "side-fruit-cup": {
    "src": "assets/recipe-images/side-fruit-cup-wide.webp",
    "alt": "Fruit Cup campsite recipe header"
  },
  "side-apple-slices": {
    "src": "assets/recipe-images/side-apple-slices-wide.webp",
    "alt": "Apple Slices campsite recipe header"
  },
  "side-baby-carrots-ranch": {
    "src": "assets/recipe-images/side-baby-carrots-ranch-wide.webp",
    "alt": "Baby Carrots & Ranch campsite recipe header"
  },
  "side-side-salad": {
    "src": "assets/recipe-images/side-side-salad-wide.webp",
    "alt": "Side Salad campsite recipe header"
  },
  "side-applesauce": {
    "src": "assets/recipe-images/side-applesauce-wide.webp",
    "alt": "Applesauce Cup campsite recipe header"
  },
  "side-coleslaw": {
    "src": "assets/recipe-images/side-coleslaw-wide.webp",
    "alt": "Coleslaw campsite recipe header"
  },
  "side-pickle-spears": {
    "src": "assets/recipe-images/side-pickle-spears-wide.webp",
    "alt": "Pickle Spears campsite recipe header"
  },
  "side-oven-fries": {
    "src": "assets/recipe-images/side-oven-fries-wide.webp",
    "alt": "Oven Fries campsite recipe header"
  },
  "side-canned-corn": {
    "src": "assets/recipe-images/side-canned-corn-wide.webp",
    "alt": "Canned Corn campsite recipe header"
  }
}
;

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var idx = function (name) { return headers.indexOf(name); };
  var idCol = idx('ID');
  var jsonCol = idx('Recipe JSON');

  var updated = [];
  var skipped = [];
  for (var i = 1; i < data.length; i++) {
    var id = data[i][idCol];
    var headerImage = HEADER_IMAGES[id];
    if (!headerImage) continue;

    try {
      var recipe = JSON.parse(data[i][jsonCol]);
      recipe.header_image = headerImage;
      sheet.getRange(i + 1, jsonCol + 1).setValue(JSON.stringify(recipe));
      updated.push(id);
    } catch (err) {
      skipped.push(id);
    }
  }

  Logger.log('Updated: ' + updated.join(', '));
  Logger.log('Skipped (parse error): ' + skipped.join(', '));
  Logger.log('Not found in sheet: ' + Object.keys(HEADER_IMAGES).filter(function (id) {
    return updated.indexOf(id) === -1 && skipped.indexOf(id) === -1;
  }).join(', '));
}

// â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function numOr(v, fallback) {
  if (v === null || v === undefined || v === '' || isNaN(Number(v))) return fallback;
  return Number(v);
}

function arrOr(v, fallback) {
  return Array.isArray(v) ? v : fallback;
}

function effortForDifficulty(d) {
  if (d <= 1) return 'very_low';
  if (d === 2) return 'low';
  if (d === 3) return 'medium';
  if (d === 4) return 'high';
  return 'very_high';
}

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'recipe';
}

