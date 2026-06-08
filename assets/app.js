// ── Globals ──────────────────────────────────────────────────────────────────
const recipes = Array.isArray(window.RECIPES) ? window.RECIPES : [];
const walmartCosts = window.WALMART_RECIPE_COSTS || {};
const walmartDefaults = window.WALMART_MEAL_TYPE_DEFAULTS || {};
const walmartItems = window.WALMART_ITEM_PRICES || {};
const recipeDetails = window.RECIPE_DETAILS || {};   // detailed itemized ingredients
const mealSlots = ['breakfast', 'lunch', 'dinner', 'dessert'];

let days = [
  { name: 'Friday',   meals: { breakfast: '', lunch: '', dinner: '', dessert: '' } },
  { name: 'Saturday', meals: { breakfast: '', lunch: '', dinner: '', dessert: '' } },
  { name: 'Sunday',   meals: { breakfast: '', lunch: '', dinner: '', dessert: '' } }
];

const $ = id => document.getElementById(id);
const byId = new Map(recipes.map(r => [r.id, r]));

// ── Utility helpers ───────────────────────────────────────────────────────────
function niceMeal(m) { return m.charAt(0).toUpperCase() + m.slice(1); }
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
function getWalmartNote(recipeId) {
  return walmartCosts[recipeId]?.walmart_note || 'See recipe for ingredients';
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
        const cost = getRecipeCost(r.id, r.meal_type);
        const sel = r.id === selectedId ? 'selected' : '';
        opts.push(`<option value="${r.id}" ${sel}>${r.title} — ${fmtMoney(cost)}/scout</option>`);
      }
      opts.push('</optgroup><optgroup label="Cooked Breakfasts">');
      for (const r of normal) {
        const cost = getRecipeCost(r.id, r.meal_type);
        const sel = r.id === selectedId ? 'selected' : '';
        opts.push(`<option value="${r.id}" ${sel}>${r.title} — ${fmtMoney(cost)}/scout</option>`);
      }
      opts.push('</optgroup>');
      return opts.join('');
    }
  }
  for (const r of list) {
    const cost = getRecipeCost(r.id, r.meal_type);
    const sel = r.id === selectedId ? 'selected' : '';
    opts.push(`<option value="${r.id}" ${sel}>${r.title} — ${fmtMoney(cost)}/scout</option>`);
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
    const mealsHtml = mealSlots.map(slot => {
      const selId = day.meals[slot] || '';
      const r = byId.get(selId);
      const gg = r?.grab_and_go;
      const costBadge = r
        ? `<span class="slot-cost${gg ? ' gg-cost' : ''}">${gg ? 'Grab&Go ' : ''}${fmtMoney(getRecipeCost(r.id, r.meal_type))}</span>`
        : '';
      return `
      <div class="meal-slot">
        <label>${niceMeal(slot)} ${costBadge}</label>
        <select data-day="${di}" data-meal="${slot}" class="meal-select">
          ${recipeOptions(slot, selId)}
        </select>
      </div>`;
    }).join('');
    card.innerHTML = `
      <div class="day-head">
        <input value="${day.name}" data-day-name="${di}" aria-label="Day name" class="day-name-input"/>
        <button data-remove-day="${di}" class="btn-ghost btn-sm">Remove</button>
      </div>
      <div class="meal-grid">${mealsHtml}</div>`;
    container.appendChild(card);
  });

  container.querySelectorAll('.meal-select').forEach(sel => {
    sel.addEventListener('change', e => {
      days[Number(e.target.dataset.day)].meals[e.target.dataset.meal] = e.target.value;
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
    mealSlots.forEach(meal => {
      const id = day.meals[meal];
      if (id && byId.has(id)) rows.push({ day: day.name || 'Day', meal, recipe: byId.get(id) });
    });
  });
  return rows;
}

// ── Budget meter ──────────────────────────────────────────────────────────────
function renderBudgetMeter() {
  const people = getPeople();
  const budget = getBudgetPerKid();
  const entries = selectedMealEntries();
  const costPerKid = entries.reduce((s, e) => s + getRecipeCost(e.recipe.id, e.recipe.meal_type), 0);
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
    return `<tr>
      <td>${e.day}</td>
      <td><span class="meal-badge meal-${e.meal}">${niceMeal(e.meal)}</span></td>
      <td class="recipe-name">${e.recipe.title} ${badge}</td>
      <td class="num">${fmtMoney(cost)}</td>
      <td class="num running">${fmtMoney(running)}</td>
    </tr>`;
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
    const missing = mealSlots.filter(m => !day.meals[m]);
    const cls = missing.length === 0 ? 'ok' : missing.length <= 2 ? 'warn' : 'bad';
    const msg = missing.length === 0 ? 'All slots covered' : `Missing: ${missing.map(niceMeal).join(', ')}`;
    return `<div class="coverage-chip ${cls}"><strong>${day.name}:</strong> ${msg}</div>`;
  }).join('');
}

// ── Recipe list ───────────────────────────────────────────────────────────────
function filteredRecipes() {
  const q = $('searchBox').value.trim().toLowerCase();
  const meal = $('mealFilter').value;
  const maxDiff = $('difficultyFilter').value;
  const maxCost = $('costFilter').value;
  const cookMode = $('cookFilter').value;
  return recipes.filter(r => {
    if (meal !== 'all' && r.meal_type !== meal) return false;
    if (maxDiff !== 'all' && r.difficulty > Number(maxDiff)) return false;
    if (maxCost !== 'all' && getRecipeCost(r.id, r.meal_type) > Number(maxCost)) return false;
    if (cookMode === 'grab_and_go' && !r.grab_and_go) return false;
    if (cookMode === 'no_cook' && !r.no_cook) return false;
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
    const note = getWalmartNote(r.id);
    const costClass = cost < 2.50 ? 'cost-low' : cost < 4.00 ? 'cost-mid' : 'cost-high';
    const ggBadge = r.grab_and_go ? '<span class="badge badge-gg">Grab &amp; Go</span>' : '';
    const noCookBadge = r.no_cook ? '<span class="badge badge-nocook">No Cook</span>' : '';
    return `
    <div class="recipe-card${r.grab_and_go ? ' card-gg' : ''}">
      <div class="recipe-card-top">
        <span class="recipe-title">${r.title}</span>
        <span class="recipe-cost ${costClass}">${fmtMoney(cost)}<span class="per-scout">/scout</span></span>
      </div>
      <div class="recipe-meta">
        <span class="badge meal-${r.meal_type}">${niceMeal(r.meal_type)}</span>
        ${ggBadge}${noCookBadge}
        <span class="badge">${r.total_minutes} min</span>
        <span class="badge diff-${r.difficulty}">Diff ${r.difficulty}/5</span>
      </div>
      <p class="walmart-note">${note}</p>
    </div>`;
  }).join('') || '<p class="empty-msg">No recipes match those filters.</p>';
}

// ── Ingredient rows (scaled) ──────────────────────────────────────────────────
// Priority: 1) RECIPE_DETAILS (detailed itemized)  2) exact ingredients  3) planning_items_per_person
function scaledIngredientRows() {
  const people = getPeople();
  const rows = [];
  for (const entry of selectedMealEntries()) {
    const r = entry.recipe;

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
      continue;
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
          walmart_item: wItem ? wItem.item : '',
          walmart_price: wItem ? fmtMoney(wItem.price) + '/' + wItem.unit : ''
        });
      }
      continue;
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
    tbody.innerHTML = '<tr class="xempty"><td colspan="9">Select meals above — your shopping list builds automatically.</td></tr>';
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
  const headers = ['Day', 'Meal', 'Recipe', 'Grab&Go', 'Cost/Scout', 'Running Total/Scout', 'Group Total', 'Walmart Note'];
  let running = 0;
  const rows = entries.map(e => {
    const cost = getRecipeCost(e.recipe.id, e.recipe.meal_type);
    running += cost;
    return [e.day, niceMeal(e.meal), e.recipe.title, e.recipe.grab_and_go ? 'Yes' : 'No',
      cost.toFixed(2), running.toFixed(2), (cost * people).toFixed(2), getWalmartNote(e.recipe.id)];
  });
  const summary = [[], ['','','TOTAL/SCOUT','','',running.toFixed(2),'',''], ['','','TOTAL TRIP','','','',(running * people).toFixed(2),''], ['','','BUDGET/SCOUT','','',budget.toFixed(2),'',''], ['','','REMAINING','','', (budget - running).toFixed(2),'','']];
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
    const missing = mealSlots.filter(m => !day.meals[m]);
    md += `- **${day.name}:** ${missing.length ? 'Missing ' + missing.map(niceMeal).join(', ') : 'All slots covered'}\n`;
  });
  md += '\n';

  md += '## Menu by Day\n\n';
  days.forEach(day => {
    md += `### ${day.name}\n\n| Meal | Recipe | $/Scout | Note |\n|---|---|---:|---|\n`;
    mealSlots.forEach(meal => {
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
    totalPerKid = running;
    md += `| ${e.day} | ${niceMeal(e.meal)} | ${e.recipe.title}${e.recipe.grab_and_go ? ' ★' : ''} | ${fmtMoney(cost)} | ${fmtMoney(running)} |\n`;
  });
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
    const cost = getRecipeCost(r.id, r.meal_type);
    md += `### ${e.day} ${niceMeal(e.meal)}: ${r.title}${r.grab_and_go ? ' ★ Grab & Go' : ''}\n\n`;
    md += `**Cost:** ${fmtMoney(cost)}/scout (${fmtMoney(cost * people)} total)  \n`;
    md += `**Walmart:** ${getWalmartNote(r.id)}  \n`;
    if (!r.grab_and_go) md += `**Time:** prep ${r.prep_minutes} min, cook ${r.cook_minutes} min  \n`;
    const equip = (r.equipment || []).join(', ');
    if (equip) md += `**Equipment:** ${equip}  \n`;
    md += '\n';
    const rows = scaledIngredientRows().filter(x => x.recipe === r.title && x.day === e.day && x.meal === e.meal);
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
  const totalPerKid = entries.reduce((s, e) => s + getRecipeCost(e.recipe.id, e.recipe.meal_type), 0);
  return JSON.stringify({
    campout_name: $('campName').value || 'Camp Menu Plan',
    people, budget_per_kid: getBudgetPerKid(),
    total_cost_per_kid: Math.round(totalPerKid * 100) / 100,
    total_trip_cost: Math.round(totalPerKid * people * 100) / 100,
    days,
    selected_meals: entries.map(e => ({
      day: e.day, meal: e.meal, recipe_id: e.recipe.id, title: e.recipe.title,
      grab_and_go: !!e.recipe.grab_and_go,
      cost_per_person: getRecipeCost(e.recipe.id, e.recipe.meal_type),
      walmart_note: getWalmartNote(e.recipe.id)
    })),
    shopping_list: combinedShoppingList(),
    equipment: toolsList(),
    generated_at: new Date().toISOString()
  }, null, 2);
}

// ── Render all ────────────────────────────────────────────────────────────────
function renderAll() {
  renderCoverage();
  renderCostTable();
  renderBudgetMeter();
  renderShoppingGrid();
}

function generatePlan() {
  $('planOutput').value = buildMarkdown();
}

// ── Event wiring ──────────────────────────────────────────────────────────────
$('addDayBtn').addEventListener('click', () => {
  days.push({ name: `Day ${days.length + 1}`, meals: { breakfast: '', lunch: '', dinner: '', dessert: '' } });
  renderDays(); renderAll();
});
$('clearPlanBtn').addEventListener('click', () => {
  days = days.map(d => ({ ...d, meals: { breakfast: '', lunch: '', dinner: '', dessert: '' } }));
  renderDays(); renderAll(); $('planOutput').value = '';
});
['generateBtn', 'generateBtn2'].forEach(id => $(id).addEventListener('click', generatePlan));
$('downloadMarkdownBtn').addEventListener('click', () => download(`camp-menu-${slugDate()}.md`, buildMarkdown(), 'text/markdown'));
$('downloadShoppingCsvBtn').addEventListener('click', () => download(`walmart-shopping-${slugDate()}.csv`, shoppingCsv(), 'text/csv'));
$('downloadShoppingCsvBtn2').addEventListener('click', () => download(`walmart-shopping-${slugDate()}.csv`, shoppingCsv(), 'text/csv'));
$('downloadCostCsvBtn').addEventListener('click', () => download(`cost-report-${slugDate()}.csv`, costReportCsv(), 'text/csv'));
$('downloadJsonBtn').addEventListener('click', () => download(`camp-plan-${slugDate()}.json`, currentPlanJson(), 'application/json'));
$('printBtn').addEventListener('click', () => { generatePlan(); window.print(); });

['searchBox', 'mealFilter', 'difficultyFilter', 'costFilter', 'cookFilter'].forEach(id => $(id).addEventListener('input', renderRecipeList));
$('peopleCount').addEventListener('input', () => { renderBudgetMeter(); renderCostTable(); renderShoppingGrid(); if ($('planOutput').value) generatePlan(); });
$('budgetPerKid').addEventListener('input', renderBudgetMeter);

// ── Init ─────────────────────────────────────────────────────────────────────
renderDays();
renderRecipeList();
renderAll();
