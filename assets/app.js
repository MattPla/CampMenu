// ── Globals ──────────────────────────────────────────────────────────────────
// Recipe data is fetched from the Recipes Google Sheet (via Apps Script Web
// App) on load — these start empty and are populated by populateRecipeData()
// before the first render.
const recipes = [];
const byId = new Map();
const sideRecipes = [];
const walmartCosts = {};        // per-recipe { cost_per_person, walmart_note }
const recipeHeaderImages = {};  // per-recipe { src, alt }
const cookingInstructions = {}; // per-recipe { equipment, steps, done_when, safety }
const recipeDetails = {};       // per-recipe detailed itemized ingredients

const walmartDefaults = window.WALMART_MEAL_TYPE_DEFAULTS || {};
const walmartItems = window.WALMART_ITEM_PRICES || {};
const mealSlots = ['breakfast', 'lunch', 'dinner', 'dessert', 'cracker_barrel'];

// ── Recipe data (Google Sheets + Apps Script Web App) ───────────────────────
// Sole source of recipe data — required. See docs/community_recipes.md.
const RECIPES_API_URL = 'https://script.google.com/macros/s/AKfycbxe2G4EBSfnumHsMFVBDyAuXKl4Dqy9_OkFJHC0DlskkZjzWVgsUDpxe6Zeeqv814K8/exec';
const INGREDIENT_UNITS = ['cup', 'tbsp', 'tsp', 'oz', 'lb', 'g', 'each', 'can', 'package', 'jar', 'bag', 'clove', 'slice'];

// ── Day types ──────────────────────────────────────────────────────────────
// A day's type controls which meal slots are shown — e.g. arrival night
// only needs a cracker barrel, departure day only needs breakfast.
const DAY_TYPES = {
  arrival:   { label: 'Arrival Night', slots: ['cracker_barrel'] },
  full:      { label: 'Full Day',      slots: ['breakfast', 'lunch', 'dinner', 'dessert', 'cracker_barrel'] },
  departure: { label: 'Departure Day', slots: ['breakfast'] },
};
function visibleSlotsForDay(day) {
  return (DAY_TYPES[day.dayType] || DAY_TYPES.full).slots;
}
function emptyMeals() {
  return Object.fromEntries(mealSlots.map(s => [s, '']));
}
function emptySidePicks() {
  return Object.fromEntries(mealSlots.map(s => [s, []]));
}

let days = [
  { name: 'Friday',   dayType: 'arrival',   meals: emptyMeals(), sidePicks: emptySidePicks() },
  { name: 'Saturday', dayType: 'full',      meals: emptyMeals(), sidePicks: emptySidePicks() },
  { name: 'Sunday',   dayType: 'departure', meals: emptyMeals(), sidePicks: emptySidePicks() }
];

// ── Wizard state ───────────────────────────────────────────────────────────
let unlockedStep = 1; // highest step the user has unlocked (1-3)
let activeStep = 1;   // which step's body is currently expanded

const $ = id => document.getElementById(id);

// ── Recipe data: fetch + populate ───────────────────────────────────────────
async function loadRecipeData() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  let resp;
  try {
    resp = await fetch(RECIPES_API_URL, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
  if (!resp.ok) throw new Error(`Recipe service returned ${resp.status}`);
  const rows = await resp.json();
  if (!Array.isArray(rows) || !rows.length) throw new Error('Recipe service returned no recipes');
  return rows;
}

function populateRecipeData(rows) {
  for (const r of rows) {
    if (!r || !r.id || byId.has(r.id)) continue;
    const { header_image, cooking_instructions, recipe_details, cost_per_person, walmart_note, ...recipe } = r;
    recipes.push(recipe);
    byId.set(recipe.id, recipe);
    if (recipe.meal_type === 'side') sideRecipes.push(recipe);
    if (header_image) recipeHeaderImages[recipe.id] = header_image;
    if (cooking_instructions) cookingInstructions[recipe.id] = cooking_instructions;
    if (recipe_details) recipeDetails[recipe.id] = recipe_details;
    if (cost_per_person != null) walmartCosts[recipe.id] = { cost_per_person, walmart_note: walmart_note || '' };
  }
}

// ── Utility helpers ───────────────────────────────────────────────────────────
const MEAL_LABELS = { breakfast: 'Breakfast', lunch: 'Lunch', dinner: 'Dinner', dessert: 'Dessert', cracker_barrel: 'Cracker Barrel' };
function niceMeal(m) { return MEAL_LABELS[m] || (m.charAt(0).toUpperCase() + m.slice(1)); }
function num(v, fb = 0) { const n = Number(v); return Number.isFinite(n) ? n : fb; }
function roundQty(n) {
  if (!Number.isFinite(n)) return '';
  if (n === 0) return '0';
  if (n < 1) return Math.round(n * 100) / 100;
  if (n < 10) return Math.round(n * 10) / 10;
  return Math.round(n);
}
function fmtMoney(n) { return '$' + Number(n).toFixed(2); }
function slugDate() { return new Date().toISOString().slice(0, 10); }
function getPeople() { return Math.max(1, num($('peopleCount').value, 1)); }
function getBudgetPerKid() { return Math.max(0, num($('budgetPerKid').value, 25)); }
function csvEscape(v) {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? '"' + s.replaceAll('"', '""') + '"' : s;
}

function getRecipeCost(recipeId, mealType) {
  return walmartCosts[recipeId]?.cost_per_person ?? walmartDefaults[mealType] ?? 2.50;
}
function entryTotalCost(entry) {
  const base = getRecipeCost(entry.recipe.id, entry.recipe.meal_type);
  const sidesCost = entry.sides.reduce((s, side) => s + getRecipeCost(side.id, side.meal_type), 0);
  return base + sidesCost;
}

// ── Dietary restriction tags ────────────────────────────────────────────────
// Matches the `common_allergens` values used across the recipe data.
const ALLERGEN_TAGS = [
  { id: 'dairy',        label: 'Dairy' },
  { id: 'egg',          label: 'Egg' },
  { id: 'gluten/wheat', label: 'Gluten/Wheat' },
  { id: 'nuts',         label: 'Tree Nuts' },
  { id: 'peanuts',      label: 'Peanuts' },
];

// ── Price tiers ────────────────────────────────────────────────────────────
// Primary cost display is a tier, not an exact price — exact Walmart prices
// drift over time, but "cheap / standard / pricier" stays roughly true.
const COST_TIERS = [
  { id: 'low',  symbol: '$',   label: 'Budget',   short: 'under $2', range: 'Under $2/scout',  max: 2 },
  { id: 'mid',  symbol: '$$',  label: 'Standard', short: '$2–$4', range: '$2–$4/scout', max: 4 },
  { id: 'high', symbol: '$$$', label: 'Premium',  short: '$4+',      range: '$4+/scout',       max: Infinity },
];
function getCostTier(cost) {
  return COST_TIERS.find(t => cost < t.max) || COST_TIERS[COST_TIERS.length - 1];
}
function tierBadgeHtml(cost, extraClass = '') {
  const t = getCostTier(cost);
  const cls = extraClass ? `tier-badge tier-${t.id} ${extraClass}` : `tier-badge tier-${t.id}`;
  return `<span class="${cls}" title="Est. ${fmtMoney(cost)}/scout — ${t.range}">${t.symbol} ${t.label}</span>`;
}
function getWalmartNote(recipeId) {
  return walmartCosts[recipeId]?.walmart_note || 'See recipe for ingredients';
}
function recipeHeaderImageHtml(recipe) {
  const image = recipeHeaderImages[recipe.id];
  return image
    ? `<img class="rcp-header-image" src="${image.src}" alt="${image.alt || recipe.title}" loading="lazy">`
    : '';
}

// Small preview of the recipe's header image for the Recipe Finder list.
// Uses a pre-generated <id>-thumb.webp (see scripts/generate_recipe_thumbnails.mjs),
// falling back to the full header image if a thumbnail isn't available yet.
function recipeThumbHtml(recipe) {
  const image = recipeHeaderImages[recipe.id];
  if (!image) return `<div class="recipe-thumb recipe-thumb-placeholder" aria-hidden="true">🍽️</div>`;
  const thumbSrc = image.src.replace(/-wide\.webp$/, '-thumb.webp');
  return `<img class="recipe-thumb" src="${thumbSrc}" data-full="${image.src}" alt="" loading="lazy" onerror="this.onerror=null;this.src=this.dataset.full">`;
}

// Build a walmart.com search URL for an item
function walmartSearchUrl(productName, fallbackItem) {
  const q = (productName && productName !== '—' && productName.length > 2)
    ? productName
    : (fallbackItem || '');
  return 'https://www.walmart.com/search?q=' + encodeURIComponent(q);
}

// ── Shopping item category inference ─────────────────────────────────────────
const CAT_PATTERNS = [
  { cat: 'Meat & Protein',  color: 'dot-meat',    re: /beef|chicken|pork|sausage|ham|bacon|hot.?dog|frank|steak|brisket|salmon|fish|shrimp|tuna|jerky|meat|protein|nugget|drumstick/ },
  { cat: 'Dairy & Eggs',    color: 'dot-dairy',   re: /egg|milk|cheese|butter|cream|yogurt|dairy|string.?cheese|parmalat/ },
  { cat: 'Produce & Canned',color: 'dot-produce', re: /potato|onion|carrot|celery|pepper|tomato|garlic|vegetable|broccoli|apple|banana|fruit|bean|pea|corn|squash|rhubarb|applesauce|cobbler|pie.?fill/ },
  { cat: 'Dry Goods & Bread',color:'dot-dry',     re: /pasta|rice|macaroni|spaghetti|noodle|bread|tortilla|bun|roll|flour|mix|cereal|oat|cracker|chip|donut|muffin|granola|bar|pop.?tart|nutri|trail.?mix|bisquick|cornmeal|cornbread/ },
  { cat: 'Condiments & Sauces', color:'dot-other',re: /sauce|ketchup|mustard|mayo|salsa|syrup|oil|vinegar|soy|bbq|dressing|ranch|teriyaki|enchilada|marinara/ },
];
function inferCategory(item) {
  const s = item.toLowerCase();
  for (const p of CAT_PATTERNS) if (p.re.test(s)) return p;
  return { cat: 'Other', color: 'dot-other' };
}

// ── Recipe select options ─────────────────────────────────────────────────────
function recipeOptions(mealType, selectedId = '') {
  const list = recipes
    .filter(r => r.meal_type === mealType || (mealType === 'dessert' && r.meal_type === 'snack'))
    .sort((a, b) => {
      // Grab-and-go at top of breakfast list
      if (a.grab_and_go && !b.grab_and_go) return -1;
      if (!a.grab_and_go && b.grab_and_go) return 1;
      return a.title.localeCompare(b.title);
    });
  const opts = ['<option value="">-- choose --</option>'];
  if (mealType === 'breakfast') {
    const gg = list.filter(r => r.grab_and_go);
    const normal = list.filter(r => !r.grab_and_go);
    if (gg.length) {
      opts.push('<optgroup label="Grab &amp; Go (no cook)">');
      for (const r of gg) {
        const tier = getCostTier(getRecipeCost(r.id, r.meal_type));
        const sel = r.id === selectedId ? 'selected' : '';
        opts.push(`<option value="${r.id}" ${sel}>${r.title} — ${tier.symbol} (${tier.short})</option>`);
      }
      opts.push('</optgroup><optgroup label="Cooked Breakfasts">');
      for (const r of normal) {
        const tier = getCostTier(getRecipeCost(r.id, r.meal_type));
        const sel = r.id === selectedId ? 'selected' : '';
        opts.push(`<option value="${r.id}" ${sel}>${r.title} — ${tier.symbol} (${tier.short})</option>`);
      }
      opts.push('</optgroup>');
      return opts.join('');
    }
  }
  for (const r of list) {
    const tier = getCostTier(getRecipeCost(r.id, r.meal_type));
    const sel = r.id === selectedId ? 'selected' : '';
    opts.push(`<option value="${r.id}" ${sel}>${r.title} — ${tier.symbol} (${tier.short})</option>`);
  }
  return opts.join('');
}

// ── Render days ───────────────────────────────────────────────────────────────
function renderDays() {
  const container = $('daysContainer');
  container.innerHTML = '';
  days.forEach((day, di) => {
    const card = document.createElement('div');
    card.className = 'day-card';
    const mealsHtml = visibleSlotsForDay(day).map(slot => {
      const selId = day.meals[slot] || '';
      const r = byId.get(selId);
      const gg = r?.grab_and_go;
      const ggBadge = gg ? '<span class="slot-cost gg-cost">Grab&amp;Go</span>' : '';
      const picked = day.sidePicks?.[slot] || [];
      const slotSidesCost = picked.reduce((s, sid) => s + getRecipeCost(sid, 'side'), 0);
      const costBadge = r
        ? ggBadge + tierBadgeHtml(getRecipeCost(r.id, r.meal_type) + slotSidesCost, 'slot-cost')
        : '';
      const sidesPicker = r ? `
        <details class="sides-picker" ${picked.length ? 'open' : ''}>
          <summary>+ Sides${picked.length ? ` (${picked.length})` : ''}</summary>
          <div class="sides-checklist">
            ${sideRecipes.map(s => {
              const checked = picked.includes(s.id) ? 'checked' : '';
              const cost = getRecipeCost(s.id, s.meal_type);
              return `<label class="side-check-row">
                <input type="checkbox" data-day="${di}" data-meal="${slot}" data-side="${s.id}" class="side-check" ${checked}>
                <span class="side-check-name">${s.title}</span>
                <span class="side-check-cost">${fmtMoney(cost)}</span>
              </label>`;
            }).join('')}
          </div>
        </details>` : '';
      return `
      <div class="meal-slot">
        <label>${niceMeal(slot)} ${costBadge}</label>
        <select data-day="${di}" data-meal="${slot}" class="meal-select">
          ${recipeOptions(slot, selId)}
        </select>
        ${sidesPicker}
      </div>`;
    }).join('');
    const dayTypeOptions = Object.entries(DAY_TYPES)
      .map(([key, dt]) => `<option value="${key}" ${day.dayType === key ? 'selected' : ''}>${dt.label}</option>`)
      .join('');
    card.innerHTML = `
      <div class="day-head">
        <input value="${day.name}" data-day-name="${di}" aria-label="Day name" class="day-name-input"/>
        <select data-day-type="${di}" aria-label="Day type" class="day-type-select">
          ${dayTypeOptions}
        </select>
        <button data-remove-day="${di}" class="btn-ghost btn-sm">Remove</button>
      </div>
      <div class="meal-grid">${mealsHtml}</div>`;
    container.appendChild(card);
  });

  container.querySelectorAll('.meal-select').forEach(sel => {
    sel.addEventListener('change', e => {
      days[Number(e.target.dataset.day)].meals[e.target.dataset.meal] = e.target.value;
      renderDays();
      renderAll();
    });
  });
  container.querySelectorAll('.side-check').forEach(cb => {
    cb.addEventListener('change', e => {
      const di = Number(e.target.dataset.day);
      const slot = e.target.dataset.meal;
      const sideId = e.target.dataset.side;
      const arr = days[di].sidePicks[slot];
      const idx = arr.indexOf(sideId);
      if (e.target.checked && idx === -1) arr.push(sideId);
      else if (!e.target.checked && idx !== -1) arr.splice(idx, 1);
      renderDays();
      renderAll();
    });
  });
  container.querySelectorAll('[data-day-name]').forEach(inp => {
    inp.addEventListener('input', e => {
      days[Number(e.target.dataset.dayName)].name = e.target.value || 'Day';
      renderCoverage();
      renderCostTable();
      renderShoppingGrid();
    });
  });
  container.querySelectorAll('[data-day-type]').forEach(sel => {
    sel.addEventListener('change', e => {
      const day = days[Number(e.target.dataset.dayType)];
      day.dayType = e.target.value;
      const visible = new Set(visibleSlotsForDay(day));
      for (const slot of mealSlots) {
        if (!visible.has(slot)) {
          day.meals[slot] = '';
          day.sidePicks[slot] = [];
        }
      }
      renderDays();
      renderAll();
    });
  });
  container.querySelectorAll('[data-remove-day]').forEach(btn => {
    btn.addEventListener('click', e => {
      if (days.length > 1) days.splice(Number(e.target.dataset.removeDay), 1);
      renderDays(); renderAll();
    });
  });
}

// ── Selected meal entries ─────────────────────────────────────────────────────
function selectedMealEntries() {
  const rows = [];
  days.forEach(day => {
    visibleSlotsForDay(day).forEach(meal => {
      const id = day.meals[meal];
      if (id && byId.has(id)) {
        const sides = (day.sidePicks?.[meal] || []).map(sid => byId.get(sid)).filter(Boolean);
        rows.push({ day: day.name || 'Day', meal, recipe: byId.get(id), sides });
      }
    });
  });
  return rows;
}

// ── Budget meter ──────────────────────────────────────────────────────────────
function renderBudgetMeter() {
  const people = getPeople();
  const budget = getBudgetPerKid();
  const entries = selectedMealEntries();
  const costPerKid = entries.reduce((s, e) => s + entryTotalCost(e), 0);
  const remaining = budget - costPerKid;
  const pct = budget > 0 ? Math.min(100, (costPerKid / budget) * 100) : 0;

  $('budgetDisplay').textContent = fmtMoney(budget);
  $('costPerKidDisplay').textContent = fmtMoney(costPerKid);
  $('remainingDisplay').textContent = fmtMoney(remaining);
  $('totalCostDisplay').textContent = fmtMoney(costPerKid * people);

  const fill = $('budgetMeterFill');
  fill.style.width = pct + '%';
  fill.className = 'meter-fill' + (pct > 100 ? ' over' : pct > 80 ? ' warn' : '');
  $('budgetMeterLabel').textContent = Math.round(pct) + '% of budget used';
  $('remainingDisplay').className = 'stat-value' + (remaining < 0 ? ' over-budget' : '');
}

// ── Cost breakdown table ──────────────────────────────────────────────────────
function renderCostTable() {
  const entries = selectedMealEntries();
  const tbody = $('costTableBody');
  const tfoot = $('costTableFoot');
  if (!entries.length) {
    tbody.innerHTML = '<tr class="empty-row"><td colspan="5">No meals selected yet. Add meals above.</td></tr>';
    tfoot.innerHTML = '';
    return;
  }
  let running = 0;
  tbody.innerHTML = entries.map(e => {
    const cost = getRecipeCost(e.recipe.id, e.recipe.meal_type);
    running += cost;
    const gg = e.recipe.grab_and_go;
    const badge = gg ? '<span class="badge badge-gg">Grab&amp;Go</span>' : (walmartCosts[e.recipe.id] ? '<span class="badge badge-exact">Walmart</span>' : '<span class="badge badge-est">Est.</span>');
    const mainRow = `<tr>
      <td>${e.day}</td>
      <td><span class="meal-badge meal-${e.meal}">${niceMeal(e.meal)}</span></td>
      <td class="recipe-name">${e.recipe.title} ${badge}</td>
      <td class="num"><div class="cost-cell">${tierBadgeHtml(cost)}<span class="tier-exact">${fmtMoney(cost)} est.</span></div></td>
      <td class="num running">${fmtMoney(running)}</td>
    </tr>`;
    const sideRows = e.sides.map(side => {
      const sideCost = getRecipeCost(side.id, side.meal_type);
      running += sideCost;
      return `<tr class="cost-row-side">
        <td></td>
        <td></td>
        <td class="recipe-name"><span class="meal-badge meal-side">Side</span> ${side.title}</td>
        <td class="num"><div class="cost-cell">${tierBadgeHtml(sideCost)}<span class="tier-exact">${fmtMoney(sideCost)} est.</span></div></td>
        <td class="num running">${fmtMoney(running)}</td>
      </tr>`;
    }).join('');
    return mainRow + sideRows;
  }).join('');

  const people = getPeople();
  tfoot.innerHTML = `
    <tr class="totals-row">
      <td colspan="3">Total per scout (${entries.length} meals)</td>
      <td class="num">${fmtMoney(running)}</td>
      <td class="num">${fmtMoney(running)}</td>
    </tr>
    <tr class="totals-row subtotal">
      <td colspan="3">Total trip cost (${people} scouts)</td>
      <td class="num" colspan="2">${fmtMoney(running * people)}</td>
    </tr>`;
}

// ── Coverage ──────────────────────────────────────────────────────────────────
function renderCoverage() {
  $('coverageReport').innerHTML = days.map(day => {
    const missing = visibleSlotsForDay(day).filter(m => !day.meals[m]);
    const cls = missing.length === 0 ? 'ok' : missing.length <= 2 ? 'warn' : 'bad';
    const msg = missing.length === 0 ? 'All slots covered' : `Missing: ${missing.map(niceMeal).join(', ')}`;
    return `<div class="coverage-chip ${cls}"><strong>${day.name}:</strong> ${msg}</div>`;
  }).join('');
}

// ── Recipe list ───────────────────────────────────────────────────────────────
function activeDietaryExclusions() {
  return [...document.querySelectorAll('#dietaryFilters input[data-allergen]:checked')].map(cb => cb.dataset.allergen);
}

function filteredRecipes() {
  const q = $('searchBox').value.trim().toLowerCase();
  const meal = $('mealFilter').value;
  const maxDiff = $('difficultyFilter').value;
  const maxCost = $('costFilter').value;
  const cookMode = $('cookFilter').value;
  const excludeAllergens = activeDietaryExclusions();
  return recipes.filter(r => {
    if (meal !== 'all' && r.meal_type !== meal) return false;
    if (maxDiff !== 'all' && r.difficulty > Number(maxDiff)) return false;
    if (maxCost !== 'all' && getCostTier(getRecipeCost(r.id, r.meal_type)).id !== maxCost) return false;
    if (cookMode === 'grab_and_go' && !r.grab_and_go) return false;
    if (cookMode === 'no_cook' && !r.no_cook) return false;
    if (excludeAllergens.length) {
      const allergens = r.common_allergens || [];
      if (excludeAllergens.some(a => allergens.includes(a))) return false;
    }
    if (!q) return true;
    const hay = [r.title, r.meal_type, ...(r.categories || []), ...(r.equipment || []), ...(r.protein_tags || [])].join(' ').toLowerCase();
    return hay.includes(q);
  }).sort((a, b) => {
    if (a.grab_and_go && !b.grab_and_go) return -1;
    if (!a.grab_and_go && b.grab_and_go) return 1;
    return a.meal_type.localeCompare(b.meal_type) || a.difficulty - b.difficulty || a.title.localeCompare(b.title);
  });
}

function renderRecipeList() {
  const list = filteredRecipes().slice(0, 160);
  $('recipeList').innerHTML = list.map(r => {
    const cost = getRecipeCost(r.id, r.meal_type);
    const tier = getCostTier(cost);
    const statusTag = r.grab_and_go ? 'Grab &amp; Go' : (r.no_cook ? 'No Cook' : '');
    const metaText = r.grab_and_go
      ? `${r.total_minutes} min`
      : `${r.total_minutes} min &middot; Diff ${r.difficulty}/5`;
    return `
    <div class="recipe-card${r.grab_and_go ? ' card-gg' : ''}" data-recipe-id="${r.id}">
      <div class="recipe-thumb-wrap">
        ${recipeThumbHtml(r)}
        ${statusTag ? `<span class="recipe-thumb-tag">${statusTag}</span>` : ''}
      </div>
      <div class="recipe-card-content">
        <div class="recipe-card-top">
          <h3 class="recipe-title">${r.title}</h3>
          <div class="recipe-price tier-${tier.id}" title="Est. ${fmtMoney(cost)}/scout &mdash; ${tier.range}">
            ${fmtMoney(cost)}<span class="recipe-price-unit">/scout</span>
          </div>
        </div>
        <div class="recipe-meta-line">
          <span class="badge meal-${r.meal_type}">${niceMeal(r.meal_type)}</span>
          <span class="recipe-meta-text">${metaText}</span>
        </div>
      </div>
    </div>`;
  }).join('') || '<p class="empty-msg">No recipes match those filters.</p>';
}

// ── Ingredient rows (scaled) ──────────────────────────────────────────────────
// Priority: 1) RECIPE_DETAILS (detailed itemized)  2) exact ingredients  3) planning_items_per_person
function ingredientRowsForRecipe(r, entry, people) {
  const rows = [];

  // 1 — Prefer RECIPE_DETAILS if available
  if (recipeDetails[r.id] && recipeDetails[r.id].length) {
    for (const ing of recipeDetails[r.id]) {
      const amount = ing.amount_per_person === undefined ? '' : roundQty(num(ing.amount_per_person) * people);
      rows.push({
        day: entry.day, meal: entry.meal, recipe: r.title,
        item: ing.item, amount, unit: ing.unit || '',
        type: 'exact',
        notes: '',
        walmart_item: ing.walmart_item || '',
        walmart_price: ing.walmart_price || ''
      });
    }
    return rows;
  }

  // 2 — Exact recipe ingredients
  if (r.ingredients && r.ingredients.length) {
    const factor = people / Math.max(1, num(r.default_servings, people));
    for (const ing of r.ingredients) {
      const amount = ing.amount === undefined ? '' : roundQty(num(ing.amount) * factor);
      const key = ing.item.toLowerCase();
      const wItem = walmartItems[key] || walmartItems[ing.item] || null;
      rows.push({
        day: entry.day, meal: entry.meal, recipe: r.title,
        item: ing.item, amount, unit: ing.unit || '',
        type: 'exact',
        notes: ing.notes || '',
        walmart_item: ing.walmart_item || (wItem ? wItem.item : ''),
        walmart_price: ing.walmart_price || (wItem ? fmtMoney(wItem.price) + '/' + wItem.unit : '')
      });
    }
    return rows;
  }

  // 3 — Generic planning estimates (last resort)
  for (const ing of (r.planning_items_per_person || [])) {
    const amount = ing.amount === undefined ? '' : roundQty(num(ing.amount) * people);
    const key = ing.item.toLowerCase();
    const wItem = walmartItems[key] || walmartItems[ing.item] || null;
    rows.push({
      day: entry.day, meal: entry.meal, recipe: r.title,
      item: ing.item, amount, unit: ing.unit || '',
      type: 'estimate',
      notes: ing.notes || 'planning estimate — check recipe for specifics',
      walmart_item: wItem ? wItem.item : '',
      walmart_price: wItem ? fmtMoney(wItem.price) + '/' + wItem.unit : ''
    });
  }
  return rows;
}

function scaledIngredientRows() {
  const people = getPeople();
  const rows = [];
  for (const entry of selectedMealEntries()) {
    rows.push(...ingredientRowsForRecipe(entry.recipe, entry, people));
    for (const side of entry.sides) rows.push(...ingredientRowsForRecipe(side, entry, people));
  }
  return rows;
}

function combinedShoppingList() {
  const grouped = new Map();
  for (const row of scaledIngredientRows()) {
    const key = `${row.item.toLowerCase()}|${row.unit.toLowerCase()}`;
    if (!grouped.has(key)) grouped.set(key, { ...row, amountNumber: 0, recipes: new Set() });
    const g = grouped.get(key);
    const a = Number(row.amount);
    if (Number.isFinite(a)) g.amountNumber += a;
    else g.amount = row.amount;
    g.recipes.add(row.recipe);
  }
  return [...grouped.values()].map(g => ({
    item: g.item, amount: (Number.isFinite(g.amountNumber) && g.amountNumber > 0) ? roundQty(g.amountNumber) : g.amount,
    unit: g.unit, type: g.type, recipes: [...g.recipes].join('; '),
    notes: g.notes, walmart_item: g.walmart_item, walmart_price: g.walmart_price
  })).sort((a, b) => a.item.localeCompare(b.item));
}

function toolsList() {
  return [...new Set(selectedMealEntries().flatMap(e => e.recipe.equipment || []))].sort();
}

// ── Walmart shopping grid ─────────────────────────────────────────────────────
function renderShoppingGrid() {
  const tbody = $('shoppingGridBody');
  const tfoot = $('shoppingGridFoot');
  const items = combinedShoppingList();

  if (!items.length) {
    tbody.innerHTML = '<tr class="xempty"><td colspan="9">Select meals in the Plan tab — your shopping list builds automatically.</td></tr>';
    tfoot.innerHTML = '';
    return;
  }

  // Group by inferred category
  const byCat = new Map();
  for (const item of items) {
    const ci = inferCategory(item.item);
    if (!byCat.has(ci.cat)) byCat.set(ci.cat, { color: ci.color, rows: [] });
    byCat.get(ci.cat).rows.push(item);
  }

  const catOrder = ['Meat & Protein', 'Dairy & Eggs', 'Produce & Canned', 'Dry Goods & Bread', 'Condiments & Sauces', 'Other'];
  const orderedCats = [...catOrder.filter(c => byCat.has(c)), ...[...byCat.keys()].filter(c => !catOrder.includes(c))];

  let rowIdx = 0;
  let html = '';
  for (const catName of orderedCats) {
    const { color, rows } = byCat.get(catName);
    html += `<tr class="xcat-header"><td colspan="9"><span class="legend-dot ${color}"></span> ${catName}</td></tr>`;
    for (const item of rows) {
      const productQuery = item.walmart_item || item.item;
      const wUrl = walmartSearchUrl(productQuery);
      const stripe = rowIdx % 2 === 0 ? 'xrow-even' : 'xrow-odd';
      rowIdx++;
      html += `<tr class="${stripe}" data-rowid="${rowIdx}">
        <td class="xcol-chk"><input type="checkbox" class="row-check" /></td>
        <td class="xcol-cat"><span class="legend-dot ${color}"></span></td>
        <td class="xcol-item">${item.item}${item.type === 'estimate' ? ' <em class="est-tag">(est.)</em>' : ''}</td>
        <td class="xcol-qty xnum">${item.amount}</td>
        <td class="xcol-unit">${item.unit}</td>
        <td class="xcol-product">${item.walmart_item || '<span class="muted-cell">—</span>'}</td>
        <td class="xcol-price xnum">${item.walmart_price || '<span class="muted-cell">—</span>'}</td>
        <td class="xcol-meal muted-cell">${item.recipes}</td>
        <td class="xcol-link"><a href="${wUrl}" target="_blank" rel="noopener noreferrer" class="walmart-btn">Shop at Walmart</a></td>
      </tr>`;
    }
  }
  tbody.innerHTML = html;
  tfoot.innerHTML = `<tr class="xfoot-row"><td colspan="9">${items.length} items across ${orderedCats.length} categories — prices are estimates; click any row to check current Walmart prices.</td></tr>`;

  // Row checkbox: strike-through when checked
  tbody.querySelectorAll('.row-check').forEach(cb => {
    cb.addEventListener('change', e => {
      e.target.closest('tr').classList.toggle('xrow-done', e.target.checked);
    });
  });

  // Check-all
  const checkAll = $('checkAll');
  if (checkAll) {
    checkAll.checked = false;
    checkAll.addEventListener('change', e => {
      tbody.querySelectorAll('.row-check').forEach(cb => {
        cb.checked = e.target.checked;
        cb.closest('tr').classList.toggle('xrow-done', e.target.checked);
      });
    });
  }
}

// ── CSV / export helpers ──────────────────────────────────────────────────────
function shoppingCsv() {
  const headers = ['Category', 'Item', 'Qty', 'Unit', 'Walmart Product', 'Est. Price', 'Used In'];
  const items = combinedShoppingList();
  return [
    headers.join(','),
    ...items.map(r => [
      inferCategory(r.item).cat,
      r.item, r.amount, r.unit, r.walmart_item, r.walmart_price, r.recipes
    ].map(csvEscape).join(','))
  ].join('\n');
}

function costReportCsv() {
  const people = getPeople();
  const budget = getBudgetPerKid();
  const entries = selectedMealEntries();
  const headers = ['Day', 'Meal', 'Recipe', 'Grab&Go', 'Price Tier', 'Cost/Scout (est.)', 'Running Total/Scout', 'Group Total', 'Walmart Note'];
  let running = 0;
  const rows = entries.flatMap(e => {
    const cost = getRecipeCost(e.recipe.id, e.recipe.meal_type);
    running += cost;
    const tier = getCostTier(cost);
    const mainRow = [e.day, niceMeal(e.meal), e.recipe.title, e.recipe.grab_and_go ? 'Yes' : 'No',
      `${tier.symbol} ${tier.label}`, cost.toFixed(2), running.toFixed(2), (cost * people).toFixed(2), getWalmartNote(e.recipe.id)];
    const sideRows = e.sides.map(side => {
      const sideCost = getRecipeCost(side.id, side.meal_type);
      running += sideCost;
      const sideTier = getCostTier(sideCost);
      return ['', niceMeal(e.meal) + ' (Side)', side.title, 'No',
        `${sideTier.symbol} ${sideTier.label}`, sideCost.toFixed(2), running.toFixed(2), (sideCost * people).toFixed(2), getWalmartNote(side.id)];
    });
    return [mainRow, ...sideRows];
  });
  const summary = [[], ['','','TOTAL/SCOUT','','','',running.toFixed(2),'',''], ['','','TOTAL TRIP','','','','',(running * people).toFixed(2),''], ['','','BUDGET/SCOUT','','','',budget.toFixed(2),'',''], ['','','REMAINING','','','', (budget - running).toFixed(2),'','']];
  return [headers.join(','), ...rows.map(r => r.map(csvEscape).join(',')), ...summary.map(r => r.map(csvEscape).join(','))].join('\n');
}

// ── Markdown plan ─────────────────────────────────────────────────────────────
function buildMarkdown() {
  const people = getPeople();
  const budget = getBudgetPerKid();
  const name = $('campName').value || 'Scout Camp Menu Plan';
  const entries = selectedMealEntries();
  let totalPerKid = 0;

  let md = `# ${name}\n\n**Scouts:** ${people}  |  **Budget/scout:** ${fmtMoney(budget)}  |  **Generated:** ${new Date().toLocaleString()}\n\n`;

  md += '## Menu Coverage\n\n';
  days.forEach(day => {
    const missing = visibleSlotsForDay(day).filter(m => !day.meals[m]);
    md += `- **${day.name}:** ${missing.length ? 'Missing ' + missing.map(niceMeal).join(', ') : 'All slots covered'}\n`;
  });
  md += '\n';

  md += '## Menu by Day\n\n';
  days.forEach(day => {
    md += `### ${day.name} (${DAY_TYPES[day.dayType]?.label || 'Full Day'})\n\n| Meal | Recipe | $/Scout | Note |\n|---|---|---:|---|\n`;
    visibleSlotsForDay(day).forEach(meal => {
      const r = byId.get(day.meals[meal]);
      if (r) {
        const cost = getRecipeCost(r.id, r.meal_type);
        const tag = r.grab_and_go ? ' ★ Grab&Go' : '';
        md += `| ${niceMeal(meal)} | ${r.title}${tag} | ${fmtMoney(cost)} | ${getWalmartNote(r.id)} |\n`;
      } else {
        md += `| ${niceMeal(meal)} | **MISSING** | — | — |\n`;
      }
    });
    md += '\n';
  });

  md += '## Cost Summary\n\n| Day | Meal | Recipe | $/Scout | Running Total |\n|---|---|---|---:|---:|\n';
  let running = 0;
  entries.forEach(e => {
    const cost = getRecipeCost(e.recipe.id, e.recipe.meal_type);
    running += cost;
    md += `| ${e.day} | ${niceMeal(e.meal)} | ${e.recipe.title}${e.recipe.grab_and_go ? ' ★' : ''} | ${fmtMoney(cost)} | ${fmtMoney(running)} |\n`;
    e.sides.forEach(side => {
      const sideCost = getRecipeCost(side.id, side.meal_type);
      running += sideCost;
      md += `| | ${niceMeal(e.meal)} (Side) | ${side.title} | ${fmtMoney(sideCost)} | ${fmtMoney(running)} |\n`;
    });
  });
  totalPerKid = running;
  md += `\n**Total cost/scout: ${fmtMoney(totalPerKid)}** &nbsp;|&nbsp; **Total trip: ${fmtMoney(totalPerKid * people)}** &nbsp;|&nbsp; **Budget: ${fmtMoney(budget)}** &nbsp;|&nbsp; **${totalPerKid <= budget ? 'ON BUDGET' : 'OVER by ' + fmtMoney(totalPerKid - budget) + '/scout'}**\n\n`;

  md += '## Walmart Shopping List\n\n| Category | Item | Qty | Unit | Walmart Product | Est. Price | Used In |\n|---|---|---:|---|---|---|---|\n';
  const shopping = combinedShoppingList();
  shopping.forEach(s => {
    const cat = inferCategory(s.item).cat;
    md += `| ${cat} | ${s.item} | ${s.amount} | ${s.unit} | ${s.walmart_item || '—'} | ${s.walmart_price || '—'} | ${s.recipes} |\n`;
  });
  md += '\n';

  md += '## Cooking Schedule\n\n';
  entries.forEach(e => {
    const tag = e.recipe.grab_and_go ? ' [GRAB & GO — no cooking]' : ` — prep ${e.recipe.prep_minutes} min, cook ${e.recipe.cook_minutes} min`;
    md += `- **${e.day} ${niceMeal(e.meal)}:** ${e.recipe.title}${tag}, difficulty ${e.recipe.difficulty}/5\n`;
  });
  md += '\n## Equipment List\n\n';
  toolsList().forEach(t => { md += `- ${t}\n`; });
  md += '\n## Recipe Guide\n\n';
  entries.forEach(e => {
    const r = e.recipe;
    const cost = entryTotalCost(e);
    md += `### ${e.day} ${niceMeal(e.meal)}: ${r.title}${r.grab_and_go ? ' ★ Grab & Go' : ''}\n\n`;
    if (e.sides.length) md += `**Sides:** ${e.sides.map(s => s.title).join(', ')}  \n`;
    md += `**Cost:** ${fmtMoney(cost)}/scout (${fmtMoney(cost * people)} total)  \n`;
    md += `**Walmart:** ${getWalmartNote(r.id)}  \n`;
    if (!r.grab_and_go) md += `**Time:** prep ${r.prep_minutes} min, cook ${r.cook_minutes} min  \n`;
    const equip = (r.equipment || []).join(', ');
    if (equip) md += `**Equipment:** ${equip}  \n`;
    md += '\n';
    const rows = scaledIngredientRows().filter(x => x.day === e.day && x.meal === e.meal);
    if (rows.length) {
      md += 'Quantities:\n';
      rows.forEach(row => {
        md += `- ${row.amount} ${row.unit} ${row.item}${row.type === 'estimate' ? ' (estimate)' : ''}${row.walmart_item ? ' — *' + row.walmart_item + '*' : ''}\n`;
      });
      md += '\n';
    }
    md += `${r.directions_summary || 'Review recipe before cooking.'}\n`;
    if (r.cook_notes?.length) md += r.cook_notes.map(n => `- ${n}`).join('\n') + '\n';
    md += '\n';
  });
  md += '## Duty Roster\n\n- Grubmaster:\n- Cook lead:\n- Assistant cook:\n- Fire/charcoal lead:\n- Cleanup crew:\n\n';
  return md;
}

// ── Download ──────────────────────────────────────────────────────────────────
function download(filename, content, type = 'text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

function currentPlanJson() {
  const people = getPeople();
  const entries = selectedMealEntries();
  const totalPerKid = entries.reduce((s, e) => s + entryTotalCost(e), 0);
  return JSON.stringify({
    campout_name: $('campName').value || 'Camp Menu Plan',
    people, budget_per_kid: getBudgetPerKid(),
    total_cost_per_kid: Math.round(totalPerKid * 100) / 100,
    total_trip_cost: Math.round(totalPerKid * people * 100) / 100,
    days,
    selected_meals: entries.map(e => {
      const cost = getRecipeCost(e.recipe.id, e.recipe.meal_type);
      return {
        day: e.day, meal: e.meal, recipe_id: e.recipe.id, title: e.recipe.title,
        grab_and_go: !!e.recipe.grab_and_go,
        price_tier: getCostTier(cost).label,
        cost_per_person_est: cost,
        walmart_note: getWalmartNote(e.recipe.id),
        sides: e.sides.map(s => {
          const sCost = getRecipeCost(s.id, s.meal_type);
          return { id: s.id, title: s.title, cost_per_person_est: sCost, price_tier: getCostTier(sCost).label };
        })
      };
    }),
    shopping_list: combinedShoppingList(),
    equipment: toolsList(),
    generated_at: new Date().toISOString()
  }, null, 2);
}

// ── Cooking steps HTML helper ─────────────────────────────────────────────────
function buildCookingStepsHtml(r, isGrabGo, notesHtml) {
  const ci = cookingInstructions[r.id];
  if (ci && ci.steps && ci.steps.length) {
    const equip = ci.equipment ? `<p class="rcp-cook-equip"><strong>Equipment:</strong> ${ci.equipment}</p>` : '';
    const steps = `<ol class="rcp-steps">${ci.steps.map(s => `<li>${s}</li>`).join('')}</ol>`;
    const done = ci.done_when ? `<p class="rcp-done-when"><strong>Done when:</strong> ${ci.done_when}</p>` : '';
    const safety = ci.safety ? `<p class="rcp-safety"><strong>Safety:</strong> ${ci.safety}</p>` : '';
    return equip + steps + done + safety + notesHtml;
  }
  return `<p class="rcp-directions">${r.directions_summary || 'See full recipe for directions.'}</p>${notesHtml}`;
}

// ── Recipe cards HTML ─────────────────────────────────────────────────────────
function buildRecipeCardsHtml() {
  const entries = selectedMealEntries();
  const people = getPeople();
  if (!entries.length) return '<div class="empty-plan-msg">Select meals in the Plan tab to generate recipe cards.</div>';

  return entries.map(e => {
    const r = e.recipe;
    const cost = entryTotalCost(e);
    const isGrabGo = r.grab_and_go;
    const ingredients = scaledIngredientRows().filter(x => x.day === e.day && x.meal === e.meal);
    const equip = (r.equipment || []).filter(eq => eq !== '—');
    const sidesLine = e.sides.length ? `<p class="rcp-sides-line">+ Sides: ${e.sides.map(s => s.title).join(', ')}</p>` : '';

    const statsBar = isGrabGo
      ? `<span class="badge badge-gg">Grab &amp; Go — No cooking, no cleanup</span>`
      : `<span class="rcp-stat"><strong>${r.prep_minutes}</strong> min prep</span>
         <span class="rcp-stat-sep">+</span>
         <span class="rcp-stat"><strong>${r.cook_minutes}</strong> min cook</span>
         <span class="rcp-stat-sep">=</span>
         <span class="rcp-stat rcp-stat-total"><strong>${r.total_minutes}</strong> min total</span>
         <span class="rcp-stat-div">|</span>
         <span class="rcp-stat">Difficulty <strong>${r.difficulty}/5</strong></span>`;

    const ingHtml = ingredients.length
      ? `<div class="rcp-section">
           <div class="rcp-label">Ingredients for <strong>${people} scouts</strong></div>
           <ul class="rcp-ing-list">
             ${ingredients.map(ing => `
               <li>
                 <label class="rcp-ing-row">
                   <input type="checkbox" class="rcp-check">
                   <span class="rcp-ing-qty">${ing.amount}&nbsp;${ing.unit}</span>
                   <span class="rcp-ing-name">${ing.item}${ing.type === 'estimate' ? ' <em class="est-tag">(estimate)</em>' : ''}</span>
                   ${ing.walmart_item ? `<span class="rcp-ing-store">${ing.walmart_item}</span>` : ''}
                 </label>
               </li>`).join('')}
           </ul>
         </div>`
      : '';

    const equipHtml = equip.length
      ? `<div class="rcp-section">
           <div class="rcp-label">Equipment</div>
           <p class="rcp-equip">${equip.join(' &nbsp;&bull;&nbsp; ')}</p>
         </div>`
      : '';

    const notesHtml = r.cook_notes && r.cook_notes.length
      ? `<ul class="rcp-tips">${r.cook_notes.map(n => `<li>${n}</li>`).join('')}</ul>`
      : '';

    return `
    <div class="rcp-card">
      ${recipeHeaderImageHtml(r)}
      <div class="rcp-card-header meal-header-${e.meal}">
        <span class="rcp-context">${e.day} &bull; ${niceMeal(e.meal)}</span>
        <div class="rcp-cost-badge">
          ${tierBadgeHtml(cost)}
          <span class="recipe-cost-exact">${fmtMoney(cost)}/scout est.</span>
        </div>
      </div>
      <div class="rcp-card-body">
        <h3 class="rcp-title">${r.title}</h3>
        ${sidesLine}
        <div class="rcp-stats-bar">${statsBar}</div>
        ${ingHtml}
        ${equipHtml}
        <div class="rcp-section">
          <div class="rcp-label">${isGrabGo ? 'What to do' : 'How to cook it'}</div>
          ${buildCookingStepsHtml(r, isGrabGo, notesHtml)}
        </div>
        <div class="rcp-duties-row">
          <label>Cook lead: <input type="text" class="duty-field" placeholder="Name"></label>
          <label>Fire / stove: <input type="text" class="duty-field" placeholder="Name"></label>
          <label>Cleanup: <input type="text" class="duty-field" placeholder="Names"></label>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── Schedule & duties HTML ────────────────────────────────────────────────────
function buildScheduleHtml() {
  const entries = selectedMealEntries();
  const people = getPeople();
  if (!entries.length) return '<div class="empty-plan-msg">Select meals in the Plan tab to generate the schedule.</div>';

  // Group by day
  const byDay = new Map();
  days.forEach(day => byDay.set(day.name, []));
  entries.forEach(e => {
    if (byDay.has(e.day)) byDay.get(e.day).push(e);
    else byDay.set(e.day, [e]);
  });

  let totalPerKid = 0;
  entries.forEach(e => { totalPerKid += entryTotalCost(e); });

  let html = `
  <div class="sched-summary">
    <span><strong>${entries.length}</strong> meals planned</span>
    <span><strong>${people}</strong> scouts eating</span>
    <span>Total cost: <strong>${fmtMoney(totalPerKid)}/scout</strong> &nbsp;&bull;&nbsp; <strong>${fmtMoney(totalPerKid * people)}</strong> total</span>
  </div>`;

  for (const [dayName, meals] of byDay) {
    if (!meals.length) continue;
    html += `<div class="sched-day"><div class="sched-day-name">${dayName}</div>`;
    for (const e of meals) {
      const r = e.recipe;
      const isGrabGo = r.grab_and_go;
      const cost = entryTotalCost(e);
      const sidesHtml = e.sides.length ? `<div class="sched-sides-line">+ Sides: ${e.sides.map(s => s.title).join(', ')}</div>` : '';
      html += `
      <div class="sched-meal-block">
        <div class="sched-meal-top">
          <span class="meal-badge meal-${e.meal}">${niceMeal(e.meal)}</span>
          <span class="sched-recipe-name">${r.title}</span>
          ${isGrabGo
            ? '<span class="badge badge-gg">No Cook</span>'
            : `<span class="sched-time-info">${r.prep_minutes}&nbsp;min prep &nbsp;+&nbsp; ${r.cook_minutes}&nbsp;min cook &nbsp;=&nbsp; <strong>${r.total_minutes}&nbsp;min</strong></span>`
          }
          <span class="sched-cost">${tierBadgeHtml(cost)}</span>
        </div>
        ${sidesHtml}
        <div class="sched-duties">
          <label class="duty-label">Cook lead <input type="text" class="duty-field" placeholder="Name..."></label>
          <label class="duty-label">${isGrabGo ? 'Hand out' : 'Fire / stove'} <input type="text" class="duty-field" placeholder="Name..."></label>
          <label class="duty-label">Cleanup crew <input type="text" class="duty-field" placeholder="Names..."></label>
          <label class="duty-label">Notes <input type="text" class="duty-field wide" placeholder="e.g. start charcoal 45 min early..."></label>
        </div>
      </div>`;
    }
    html += '</div>';
  }

  html += `
  <div class="sched-grubmaster">
    <h3>Grubmaster &amp; Purchasing</h3>
    <div class="sched-duties">
      <label class="duty-label">Grubmaster <input type="text" class="duty-field" placeholder="Name..."></label>
      <label class="duty-label">Shopping date <input type="text" class="duty-field" placeholder="Date..."></label>
      <label class="duty-label">Total budget approved <input type="text" class="duty-field" placeholder="$..."></label>
      <label class="duty-label">Receipts to <input type="text" class="duty-field" placeholder="Name..."></label>
    </div>
  </div>`;

  return html;
}

// ── Tab switching ─────────────────────────────────────────────────────────────
function switchTab(tabName) {
  document.querySelectorAll('#scoutOutput .tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabName));
  document.querySelectorAll('#scoutOutput .tab-pane').forEach(pane => pane.classList.toggle('hidden', pane.id !== 'tab-' + tabName));
}

// ── Top-level tab switching (Research / Plan / Shop) ────────────────────────
function switchMainTab(tabName) {
  document.querySelectorAll('.main-tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.maintab === tabName));
  document.querySelectorAll('.main-tab-pane').forEach(pane => pane.classList.toggle('hidden', pane.id !== 'mainpane-' + tabName));
}

// ── Wizard step gating ───────────────────────────────────────────────────────
function renderWizard() {
  for (let i = 1; i <= 3; i++) {
    const step = $('wizardStep' + i);
    step.classList.toggle('locked', i > unlockedStep);
    step.classList.toggle('completed', i < unlockedStep);
    step.classList.toggle('active', i === activeStep);
    step.querySelector('.wizard-step-body').classList.toggle('hidden', i !== activeStep);
  }
}

// ── Render scout output tabs ──────────────────────────────────────────────────
function renderScoutOutput() {
  $('recipeCardsOutput').innerHTML = buildRecipeCardsHtml();
  $('scheduleOutput').innerHTML = buildScheduleHtml();
}

// ── Render all ────────────────────────────────────────────────────────────────
function renderAll() {
  renderCoverage();
  renderCostTable();
  renderBudgetMeter();
  renderShoppingGrid();
  renderScoutOutput();
}

// ── Community recipe submission ──────────────────────────────────────────────
function splitCsv(value) {
  return value.split(',').map(s => s.trim()).filter(Boolean);
}

function ingredientRowHtml(ing = {}) {
  const unitOptions = INGREDIENT_UNITS.map(u => `<option value="${u}" ${ing.unit === u ? 'selected' : ''}>${u}</option>`).join('');
  const amount = ing.amount === undefined ? '' : ing.amount;
  return `
    <div class="ingredient-row-input">
      <input type="number" class="ing-amount" min="0" step="0.25" placeholder="Amount" value="${amount}">
      <select class="ing-unit">${unitOptions}</select>
      <input type="text" class="ing-item" placeholder="Ingredient name" value="${ing.item || ''}">
      <button type="button" class="ingredient-row-remove" aria-label="Remove ingredient">&times;</button>
      <div class="ingredient-row-walmart">
        <input type="text" class="ing-walmart-item" placeholder="Walmart product (optional)" value="${ing.walmart_item || ''}">
        <input type="text" class="ing-walmart-price" placeholder="Est. price (e.g. $3.00/8oz)" value="${ing.walmart_price || ''}">
      </div>
    </div>`;
}
function renderIngredientRows(containerId = 'submitIngredients', ingredients = []) {
  const rows = ingredients.length ? ingredients : [{}];
  $(containerId).innerHTML = rows.map(ingredientRowHtml).join('');
}

function collectSubmissionPayload() {
  const ingredients = [...$('submitIngredients').querySelectorAll('.ingredient-row-input')]
    .map(row => ({
      item: row.querySelector('.ing-item').value.trim(),
      amount: num(row.querySelector('.ing-amount').value, 0),
      unit: row.querySelector('.ing-unit').value,
      walmart_item: row.querySelector('.ing-walmart-item').value.trim(),
      walmart_price: row.querySelector('.ing-walmart-price').value.trim()
    }))
    .filter(ing => ing.item);

  const costRaw = $('submitCost').value.trim();

  return {
    title: $('submitTitle').value.trim(),
    meal_type: $('submitMealType').value,
    default_servings: num($('submitServings').value, 1),
    prep_minutes: num($('submitPrepMinutes').value, 0),
    cook_minutes: num($('submitCookMinutes').value, 0),
    difficulty: num($('submitDifficulty').value, 2),
    categories: splitCsv($('submitCategories').value),
    equipment: splitCsv($('submitEquipment').value),
    ingredients,
    directions_summary: $('submitDirections').value.trim(),
    cook_notes: $('submitCookNotes').value.split('\n').map(s => s.trim()).filter(Boolean),
    cost_per_person: costRaw ? Number(costRaw) : null,
    walmart_note: $('submitWalmartNote').value.trim(),
    allergens: splitCsv($('submitAllergens').value),
    submitted_by: $('submitSubmittedBy').value.trim()
  };
}

function resetSubmissionForm() {
  ['submitTitle', 'submitServings', 'submitPrepMinutes', 'submitCookMinutes', 'submitCategories',
   'submitEquipment', 'submitDirections', 'submitCookNotes', 'submitCost', 'submitWalmartNote',
   'submitAllergens', 'submitSubmittedBy'].forEach(id => { $(id).value = ''; });
  $('submitMealType').value = 'breakfast';
  $('submitDifficulty').value = '2';
  renderIngredientRows();
}

async function submitCommunityRecipe() {
  const payload = collectSubmissionPayload();
  const status = $('submitStatus');

  if (!payload.title || !payload.meal_type || !payload.ingredients.length) {
    status.textContent = 'Please add a title, meal type, and at least one ingredient.';
    status.className = 'submit-status error';
    return;
  }

  const btn = $('submitRecipeBtn');
  btn.disabled = true;
  status.textContent = 'Submitting…';
  status.className = 'submit-status';

  try {
    const resp = await fetch(RECIPES_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
    const data = await resp.json();
    if (data && data.success) {
      status.textContent = `Thanks! "${payload.title}" was submitted for leader review.`;
      status.className = 'submit-status success';
      resetSubmissionForm();
    } else {
      status.textContent = (data && data.error) || 'Something went wrong — please try again.';
      status.className = 'submit-status error';
    }
  } catch {
    status.textContent = 'Could not reach the server — check your connection and try again.';
    status.className = 'submit-status error';
  } finally {
    btn.disabled = false;
  }
}

function initCommunitySubmitPanel() {
  const panel = $('communitySubmitPanel');
  if (!panel) return;
  if (!RECIPES_API_URL) {
    panel.remove();
    return;
  }
  renderIngredientRows();
  $('addIngredientBtn').addEventListener('click', () => {
    $('submitIngredients').insertAdjacentHTML('beforeend', ingredientRowHtml());
  });
  $('submitIngredients').addEventListener('click', e => {
    if (!e.target.classList.contains('ingredient-row-remove')) return;
    const rows = $('submitIngredients').querySelectorAll('.ingredient-row-input');
    if (rows.length > 1) e.target.closest('.ingredient-row-input').remove();
  });
  $('submitRecipeBtn').addEventListener('click', submitCommunityRecipe);
}

// ── Recipe editing (saves directly back to the shared recipe sheet) ─────────
let editingRecipeId = null;

function collectEditPayload() {
  const ingredients = [...$('editIngredients').querySelectorAll('.ingredient-row-input')]
    .map(row => ({
      item: row.querySelector('.ing-item').value.trim(),
      amount: num(row.querySelector('.ing-amount').value, 0),
      unit: row.querySelector('.ing-unit').value,
      walmart_item: row.querySelector('.ing-walmart-item').value.trim(),
      walmart_price: row.querySelector('.ing-walmart-price').value.trim()
    }))
    .filter(ing => ing.item);

  const costRaw = $('editCost').value.trim();
  const allergens = [...document.querySelectorAll('#recipeEditOverlay input[data-allergen]:checked')]
    .map(cb => cb.dataset.allergen);

  return {
    action: 'update',
    id: editingRecipeId,
    title: $('editTitle').value.trim(),
    meal_type: $('editMealType').value,
    default_servings: num($('editServings').value, 1),
    prep_minutes: num($('editPrepMinutes').value, 0),
    cook_minutes: num($('editCookMinutes').value, 0),
    difficulty: num($('editDifficulty').value, 2),
    categories: splitCsv($('editCategories').value),
    equipment: splitCsv($('editEquipment').value),
    ingredients,
    directions_summary: $('editDirections').value.trim(),
    cook_notes: $('editCookNotes').value.split('\n').map(s => s.trim()).filter(Boolean),
    cost_per_person: costRaw ? Number(costRaw) : null,
    walmart_note: $('editWalmartNote').value.trim(),
    allergens
  };
}

function openEditModal(recipeId) {
  const r = byId.get(recipeId);
  if (!r) return;
  editingRecipeId = recipeId;

  $('editTitle').value = r.title || '';
  $('editMealType').value = r.meal_type || 'breakfast';
  $('editServings').value = r.default_servings || 1;
  $('editDifficulty').value = String(r.difficulty || 2);
  $('editPrepMinutes').value = r.prep_minutes || 0;
  $('editCookMinutes').value = r.cook_minutes || 0;
  $('editEquipment').value = (r.equipment || []).join(', ');
  $('editCategories').value = (r.categories || []).join(', ');
  $('editDirections').value = r.directions_summary || '';
  $('editCookNotes').value = (r.cook_notes || []).join('\n');

  const cost = walmartCosts[recipeId];
  $('editCost').value = cost?.cost_per_person ?? '';
  $('editWalmartNote').value = cost?.walmart_note || '';

  const allergens = r.common_allergens || [];
  document.querySelectorAll('#recipeEditOverlay input[data-allergen]').forEach(cb => {
    cb.checked = allergens.includes(cb.dataset.allergen);
  });

  renderIngredientRows('editIngredients', r.ingredients || []);

  const status = $('editStatus');
  status.textContent = '';
  status.className = 'submit-status hidden';

  $('recipeEditOverlay').classList.remove('hidden');
}

function closeEditModal() {
  $('recipeEditOverlay').classList.add('hidden');
  editingRecipeId = null;
}

// Update the in-memory recipe so the UI reflects a saved edit immediately,
// without requiring a reload of the (now-updated) recipe sheet.
function applyRecipeEditLocally(payload) {
  const recipe = byId.get(payload.id);
  if (!recipe) return;

  Object.assign(recipe, {
    title: payload.title,
    meal_type: payload.meal_type,
    default_servings: payload.default_servings,
    prep_minutes: payload.prep_minutes,
    cook_minutes: payload.cook_minutes,
    total_minutes: payload.prep_minutes + payload.cook_minutes,
    difficulty: payload.difficulty,
    categories: payload.categories,
    equipment: payload.equipment,
    common_allergens: payload.allergens,
    ingredients: payload.ingredients,
    directions_summary: payload.directions_summary,
    cook_notes: payload.cook_notes,
    grab_and_go: payload.cook_minutes === 0,
    no_cook: payload.cook_minutes === 0
  });
  // The edited ingredients list above now drives shopping-list quantities.
  delete recipeDetails[payload.id];

  if (payload.cost_per_person != null) {
    walmartCosts[payload.id] = { cost_per_person: payload.cost_per_person, walmart_note: payload.walmart_note || '' };
  } else {
    delete walmartCosts[payload.id];
  }

  const sideIdx = sideRecipes.findIndex(s => s.id === payload.id);
  if (recipe.meal_type === 'side' && sideIdx === -1) sideRecipes.push(recipe);
  else if (recipe.meal_type !== 'side' && sideIdx !== -1) sideRecipes.splice(sideIdx, 1);
}

async function saveRecipeEdit() {
  const payload = collectEditPayload();
  const status = $('editStatus');

  if (!payload.title || !payload.meal_type || !payload.ingredients.length) {
    status.textContent = 'Please add a title, meal type, and at least one ingredient.';
    status.className = 'submit-status error';
    return;
  }

  const btn = $('editSaveBtn');
  btn.disabled = true;
  status.textContent = 'Saving…';
  status.className = 'submit-status';

  try {
    const resp = await fetch(RECIPES_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
    const data = await resp.json();
    if (data && data.success) {
      applyRecipeEditLocally(payload);
      renderRecipeList();
      renderDays();
      renderAll();
      status.textContent = `Saved! "${payload.title}" was updated for everyone.`;
      status.className = 'submit-status success';
      setTimeout(closeEditModal, 1200);
    } else {
      status.textContent = (data && data.error) || 'Something went wrong — please try again.';
      status.className = 'submit-status error';
    }
  } catch {
    status.textContent = 'Could not reach the server — check your connection and try again.';
    status.className = 'submit-status error';
  } finally {
    btn.disabled = false;
  }
}

function initRecipeEditModal() {
  $('editAddIngredientBtn').addEventListener('click', () => {
    $('editIngredients').insertAdjacentHTML('beforeend', ingredientRowHtml());
  });
  $('editIngredients').addEventListener('click', e => {
    if (!e.target.classList.contains('ingredient-row-remove')) return;
    const rows = $('editIngredients').querySelectorAll('.ingredient-row-input');
    if (rows.length > 1) e.target.closest('.ingredient-row-input').remove();
  });
  $('editCancelBtn').addEventListener('click', closeEditModal);
  $('editModalCloseBtn').addEventListener('click', closeEditModal);
  $('recipeEditOverlay').addEventListener('click', e => {
    if (e.target === $('recipeEditOverlay')) closeEditModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('recipeEditOverlay').classList.contains('hidden')) closeEditModal();
  });
  $('editSaveBtn').addEventListener('click', saveRecipeEdit);
}

// ── Recipe detail view (Research tab) ───────────────────────────────────────
let viewingRecipeId = null;

function buildRecipeDetailHtml(r) {
  const cost = getRecipeCost(r.id, r.meal_type);
  const isGrabGo = r.grab_and_go;
  const people = getPeople();
  const ingredients = ingredientRowsForRecipe(r, { day: '', meal: '' }, people);
  const equip = (r.equipment || []).filter(eq => eq !== '—');
  const allergens = (r.common_allergens || []).filter(a => a !== 'none');

  const statsBar = isGrabGo
    ? `<span class="badge badge-gg">Grab &amp; Go — No cooking, no cleanup</span>`
    : `<span class="rcp-stat"><strong>${r.prep_minutes}</strong> min prep</span>
       <span class="rcp-stat-sep">+</span>
       <span class="rcp-stat"><strong>${r.cook_minutes}</strong> min cook</span>
       <span class="rcp-stat-sep">=</span>
       <span class="rcp-stat rcp-stat-total"><strong>${r.total_minutes}</strong> min total</span>
       <span class="rcp-stat-div">|</span>
       <span class="rcp-stat">Difficulty <strong>${r.difficulty}/5</strong></span>`;

  const ingHtml = ingredients.length
    ? `<div class="rcp-section">
         <div class="rcp-label">Ingredients for <strong>${people} scouts</strong></div>
         <ul class="rcp-ing-list">
           ${ingredients.map(ing => `
             <li>
               <div class="rcp-ing-row">
                 <span class="rcp-ing-qty">${ing.amount}&nbsp;${ing.unit}</span>
                 <span class="rcp-ing-name">${ing.item}${ing.type === 'estimate' ? ' <em class="est-tag">(estimate)</em>' : ''}</span>
                 ${ing.walmart_item ? `<span class="rcp-ing-store">${ing.walmart_item}</span>` : ''}
               </div>
             </li>`).join('')}
         </ul>
       </div>`
    : '';

  const equipHtml = equip.length
    ? `<div class="rcp-section">
         <div class="rcp-label">Equipment</div>
         <p class="rcp-equip">${equip.join(' &nbsp;&bull;&nbsp; ')}</p>
       </div>`
    : '';

  const allergenHtml = allergens.length
    ? `<div class="rcp-section">
         <div class="rcp-label">Contains</div>
         <p class="rcp-equip">${allergens.map(a => (ALLERGEN_TAGS.find(t => t.id === a) || {}).label || a).join(' &nbsp;&bull;&nbsp; ')}</p>
       </div>`
    : '';

  const notesHtml = r.cook_notes && r.cook_notes.length
    ? `<ul class="rcp-tips">${r.cook_notes.map(n => `<li>${n}</li>`).join('')}</ul>`
    : '';

  return `
    ${recipeHeaderImageHtml(r)}
    <div class="recipe-detail-top">
      <h3 class="rcp-title">${r.title}</h3>
      <div class="rcp-cost-badge">
        ${tierBadgeHtml(cost)}
        <span class="recipe-cost-exact">${fmtMoney(cost)}/scout est.</span>
      </div>
    </div>
    <div class="rcp-stats-bar">
      <span class="badge meal-${r.meal_type}">${niceMeal(r.meal_type)}</span>
      ${r.no_cook ? '<span class="badge badge-nocook">No Cook</span>' : ''}
      ${statsBar}
    </div>
    ${ingHtml}
    ${equipHtml}
    ${allergenHtml}
    <div class="rcp-section">
      <div class="rcp-label">${isGrabGo ? 'What to do' : 'How to cook it'}</div>
      ${buildCookingStepsHtml(r, isGrabGo, notesHtml)}
    </div>`;
}

function openRecipeViewModal(recipeId) {
  const r = byId.get(recipeId);
  if (!r) return;
  viewingRecipeId = recipeId;
  $('viewModalTitle').textContent = r.title;
  $('viewModalBody').innerHTML = buildRecipeDetailHtml(r);
  $('recipeViewOverlay').classList.remove('hidden');
}

function closeRecipeViewModal() {
  $('recipeViewOverlay').classList.add('hidden');
  viewingRecipeId = null;
}

function initRecipeViewModal() {
  $('recipeList').addEventListener('click', e => {
    const card = e.target.closest('.recipe-card');
    if (card) openRecipeViewModal(card.dataset.recipeId);
  });
  $('viewModalCloseBtn').addEventListener('click', closeRecipeViewModal);
  $('viewCloseBtn').addEventListener('click', closeRecipeViewModal);
  $('recipeViewOverlay').addEventListener('click', e => {
    if (e.target === $('recipeViewOverlay')) closeRecipeViewModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('recipeViewOverlay').classList.contains('hidden')) closeRecipeViewModal();
  });
  $('viewEditBtn').addEventListener('click', () => {
    const id = viewingRecipeId;
    closeRecipeViewModal();
    openEditModal(id);
  });
}

// ── Event wiring ──────────────────────────────────────────────────────────────
$('addDayBtn').addEventListener('click', () => {
  days.push({ name: `Day ${days.length + 1}`, dayType: 'full', meals: emptyMeals(), sidePicks: emptySidePicks() });
  renderDays(); renderAll();
});
$('clearPlanBtn').addEventListener('click', () => {
  days = days.map(d => ({ ...d, meals: emptyMeals(), sidePicks: emptySidePicks() }));
  renderDays(); renderAll();
});
$('printScoutBtn').addEventListener('click', () => window.print());
$('downloadShoppingCsvBtn').addEventListener('click', () => download(`walmart-shopping-${slugDate()}.csv`, shoppingCsv(), 'text/csv'));
$('downloadCostCsvBtn').addEventListener('click', () => download(`cost-report-${slugDate()}.csv`, costReportCsv(), 'text/csv'));
$('downloadJsonBtn').addEventListener('click', () => download(`camp-plan-${slugDate()}.json`, currentPlanJson(), 'application/json'));

document.querySelectorAll('#scoutOutput .tab-btn').forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

['searchBox', 'mealFilter', 'difficultyFilter', 'costFilter', 'cookFilter'].forEach(id => $(id).addEventListener('input', renderRecipeList));
document.querySelectorAll('#dietaryFilters input[data-allergen]').forEach(cb => cb.addEventListener('change', renderRecipeList));
$('peopleCount').addEventListener('input', () => { renderBudgetMeter(); renderCostTable(); renderShoppingGrid(); renderScoutOutput(); });
$('budgetPerKid').addEventListener('input', renderBudgetMeter);

// ── Top-level tabs + wizard wiring ───────────────────────────────────────────
document.querySelectorAll('.main-tab-btn').forEach(btn =>
  btn.addEventListener('click', () => switchMainTab(btn.dataset.maintab))
);

$('step1ContinueBtn').addEventListener('click', () => {
  unlockedStep = Math.max(unlockedStep, 2);
  activeStep = 2;
  renderWizard();
});
$('step2ContinueBtn').addEventListener('click', () => {
  unlockedStep = Math.max(unlockedStep, 3);
  activeStep = 3;
  renderAll();
  renderWizard();
});
$('goToShopBtn').addEventListener('click', () => switchMainTab('shop'));

document.querySelectorAll('.wizard-step-head').forEach(head => {
  head.addEventListener('click', () => {
    const step = Number(head.closest('.wizard-step').dataset.step);
    if (step > unlockedStep) return;
    activeStep = step;
    renderWizard();
  });
});

// ── Init ─────────────────────────────────────────────────────────────────────
function showAppError(message) {
  const main = document.querySelector('main');
  main.classList.remove('app-loading');
  main.innerHTML = `
    <div class="app-error-state">
      <h2>Unable to load recipes</h2>
      <p>${message}</p>
      <p>Check your internet connection and reload the page.</p>
      <button class="btn-primary" onclick="location.reload()">Reload</button>
    </div>`;
}

async function init() {
  try {
    populateRecipeData(await loadRecipeData());
  } catch (err) {
    showAppError(err.message || 'Could not reach the recipe service.');
    return;
  }
  $('appLoadingOverlay')?.remove();
  document.querySelector('main').classList.remove('app-loading');

  renderDays();
  renderRecipeList();
  renderAll();
  renderWizard();
  initCommunitySubmitPanel();
  initRecipeEditModal();
  initRecipeViewModal();
}

init();
