# Camp Menu Builder Repository

Static recipe data and a browser-only meal planning application for campouts.

Generated: 2026-06-08

## What is included

- `index.html` — the app entry point.
- `assets/styles.css` — app styling.
- `assets/app.js` — all app logic.
- `data/recipes.js` — recipe data loaded as a plain JavaScript variable, so the app does not need a backend.
- `data/recipes.json` — same recipe data in JSON format for future development.
- `data/recipes.csv` — spreadsheet-friendly recipe index.
- `data/tools.json` — unique cooking tools/equipment list.
- `docs/schema.md` — data model.
- `docs/static_app_notes.md` — how the app works and how to host it.

## How to run

Open `index.html` in a browser, or upload the full folder to any static web host. No database, server, login, or build step is required.

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
