# Recipe data (Google Sheets integration)

All recipe data — including the 240+ built-in recipes — lives in a Google
Sheet ("CampMenuDB") and is served to the app through a small Google Apps
Script "Web App". This is **required**: the app has no bundled recipe data
of its own, and needs an internet connection to load. If the sheet/script is
unreachable, the app shows an error screen instead of recipes.

This also powers the "Share a Recipe" panel on the Research tab — new
submissions are appended to the same sheet with `Status = Pending` for a
leader to review and approve.

It also powers the **"✏️ Edit" button** on each recipe card in the Research
tab. Edits are written **directly** to that recipe's existing row — no review
queue, no `Status` change. Anyone using the app can edit any recipe and the
change is live for everyone the next time they load the recipe list.

## How it works

- A Google Sheet ("CampMenuDB"), tab **`Recipes`**, holds one row per recipe
  (built-in and community-submitted).
- A Google Apps Script "Web App" (a free script Google hosts for you)
  reads/writes that sheet over HTTP.
- On load, the app fetches every row with `Status = Approved`, parses its
  `Recipe JSON` cell, and uses that as its **entire** recipe pool — Research
  tab, Plan tab dropdowns/sides picker, cost table, shopping list, recipe
  cards, schedule, and exports.
- The "Share a Recipe" form sends new submissions to the same script, which
  appends them to the sheet with `Status = Pending`. You review pending rows
  and change `Status` to `Approved` (or `Rejected`) — that's the entire
  moderation workflow.
- Each recipe card on the Research tab shows a thumbnail (from
  `header_image`, or a placeholder if none is set), and has dietary filter
  checkboxes above the list (dairy, egg, gluten/wheat, tree nuts, peanuts) to
  hide recipes matching `common_allergens`.
- The "✏️ Edit" button on a recipe card opens a form pre-filled with that
  recipe's data. Saving sends `action: 'update'` to the script, which
  overwrites that row's `Title`, `Meal Type`, and `Recipe JSON` in place.

## Sheet schema (7 columns)

Row 1 of the `Recipes` tab must have this exact header row, in this order:

| Column | Example | Notes |
|---|---|---|
| `ID` | `chili-mac` | Stable recipe id |
| `Status` | `Approved` | `Approved` (visible in app) / `Pending` / `Rejected` |
| `Submitted By` | `Built-in` | Free text, for sheet browsing |
| `Timestamp` | `2026-06-10T00:00:00.000Z` | ISO timestamp, filled in automatically for new submissions |
| `Title` | `Chili Mac` | For sheet sorting/searching |
| `Meal Type` | `dinner` | For sheet sorting/searching |
| `Recipe JSON` | `{"id":"chili-mac","title":"Chili Mac",...}` | The **entire** recipe object as a single-line JSON string |

`doGet` only reads `Status` and `Recipe JSON` — the other columns exist so
the sheet stays human-browsable. `Recipe JSON` can include, when present,
`header_image: { src, alt }`, `cooking_instructions: { equipment, steps,
done_when, safety }`, `recipe_details: [...]`, `cost_per_person`, and
`walmart_note`, in addition to the normal recipe fields (ingredients,
prep/cook times, etc.).

## 1. Create the Google Sheet

1. Create a new Google Sheet. Name it whatever you like (e.g. `CampMenuDB`).
2. Rename the first tab to **`Recipes`**.
3. Paste the 7-column header row above into row 1.

## 2. Add the Apps Script

1. In the Sheet, go to **Extensions → Apps Script**.
2. Delete any starter code in `Code.gs` and paste in the contents of
   [`scripts/community_recipes_apps_script.gs`](../scripts/community_recipes_apps_script.gs)
   from this repo.
3. Click **Save** (the disk icon).

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Click **Deploy**, then **Authorize access** and approve the permissions
   (this is your own script accessing your own sheet — the warning about an
   "unverified app" is expected for personal scripts; click through it).
5. Copy the **Web app URL** — it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`.

## 4. Connect the app

Open `assets/app.js` and find this line near the top:

```js
const RECIPES_API_URL = '';
```

Paste your Web App URL between the quotes:

```js
const RECIPES_API_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
```

## 5. Load the built-in recipes into the sheet

The repo includes a one-time migration script that combines all the
built-in recipe data (ingredients, cooking instructions, header images,
costs) into a single TSV file ready to import:

```sh
node scripts/migrate_recipes_to_sheet.mjs
```

This writes `scripts/recipes_migration.tsv`. In your Google Sheet:

1. **File → Import → Upload**, select `scripts/recipes_migration.tsv`.
2. **Import location**: "Replace current sheet" (the `Recipes` tab).
3. **Separator type**: Tab.
4. Click **Import data**.

All 240+ built-in recipes now live in the sheet with `Status = Approved`,
`Submitted By = Built-in`. Reload the app — recipes load from the sheet.

## 6. Reviewing submissions

New submissions appear as rows with `Status = Pending`. To publish one,
open the sheet and change that row's `Status` cell to `Approved` — it'll
show up the next time someone loads the app. Set `Status` to `Rejected` (or
just delete the row) to discard a submission. There's no other moderation
UI; the sheet *is* the moderation queue.

## 7. Updating the Apps Script later

When `scripts/community_recipes_apps_script.gs` in this repo changes (for
example, the `action: 'update'` handler that powers the Research tab's
"✏️ Edit" button), your deployed script needs to be updated too:

1. In the Sheet, go to **Extensions → Apps Script**.
2. Select all the existing code in `Code.gs` and replace it with the new
   contents of `scripts/community_recipes_apps_script.gs`.
3. Click **Save** (the disk icon).
4. Click **Deploy → Manage deployments**.
5. Click the pencil/edit icon on your existing Web App deployment.
6. Set **Version** to **New version**, then click **Deploy**.

The Web App URL stays the same — `RECIPES_API_URL` in `assets/app.js` does
not need to change. Until you redeploy, "✏️ Edit" saves will fail with an
error (the live script doesn't recognize `action: 'update'` yet).

## Notes & limitations

- Recipe data is loaded once on page load, before anything renders. A
  loading spinner is shown while the fetch is in progress.
- If the sheet/script is unreachable (offline, wrong URL, Google outage, or
  the sheet has zero `Approved` rows), the app shows a full-page error
  message instead of recipes — there is no built-in fallback data anymore.
- `Cost Per Person` / `Walmart Note` (inside `Recipe JSON`) are optional. If
  absent, the app uses its normal per-meal-type default cost estimate from
  `data/walmart_item_prices.js`.
- Editing a recipe via "✏️ Edit" drops its `recipe_details` (a separate
  itemized ingredient breakdown some built-in recipes have). The ingredient
  list in the edit form becomes the new source of truth for shopping-list
  quantities going forward.
