# Camp Menu Builder Repository

Static recipe data and a browser-only meal planning application for campouts.

Generated: 2026-06-08

## What is included

- `index.html` — the app entry point.
- `assets/styles.css` — app styling.
- `assets/app.js` — all app logic.
- `data/walmart_item_prices.js` — generic Walmart item price reference data for the shopping list.
- `data/recipes.json` / `data/recipes.csv` — reference snapshot of recipe data (not loaded by the app).
- `data/tools.json` — unique cooking tools/equipment list.
- `docs/schema.md` — data model.
- `docs/static_app_notes.md` — how the app works and how to host it.
- `docs/community_recipes.md` — how recipe data is stored in and served from a Google Sheet.

## How to run

Open `index.html` in a browser, or upload the full folder to any static web host. No database, login, or build step is required — but recipe data is fetched from a Google Sheet on load, so an internet connection is required (see `docs/community_recipes.md`).

## What the app does

A Scout or youth leader can set the number of campers, add campout days, assign meals to breakfast/lunch/dinner/dessert slots, and generate:

- Coverage check by day and meal.
- Scaled shopping list.
- Recipe guide with quantities.
- Unique equipment/tools list.
- Cooking schedule.
- Downloadable Markdown, CSV, and JSON outputs that can be sent to the SPL.

## Data status

Some recipes include exact ingredient quantities. Many entries are planning estimates only. The app clearly labels those estimated entries so the cook can review them before buying food.
