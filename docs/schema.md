# Recipe Data Schema

Each recipe is a plain JavaScript/JSON object designed for static-browser menu planning.

| Field | Type | Purpose |
|---|---|---|
| `id` | string | Stable slug for recipe selection. |
| `title` | string | Recipe name. |
| `status` | enum | `exact_quantities` or `planning_estimate`. |
| `meal_type` | enum | `breakfast`, `lunch`, `dinner`, or `dessert`. |
| `categories` | string[] | Tags such as `chili`, `stew`, `dutch_oven`, `pasta`, or `foil_pack`. |
| `methods` | string[] | Main cooking method labels. |
| `default_servings` | number | Base servings for exact ingredient scaling. |
| `scaling_model` | string | Usually `linear_batch`; some simple items can be `per_person`. |
| `prep_minutes` | number | Estimated prep time. |
| `cook_minutes` | number | Estimated cook time. |
| `total_minutes` | number | Prep plus cook time. |
| `difficulty` | number | 1 easy to 5 advanced. |
| `effort` | string | `very_low`, `low`, `medium`, `high`, or `very_high`. |
| `patrol_fit` | string | Planning hint for youth-led cooking. |
| `equipment` | string[] | Normalized unique tools needed. |
| `protein_tags` | string[] | Protein planning tags. |
| `common_allergens` | string[] | Common allergen flags when known or inferred. |
| `food_safety_flags` | string[] | Cooler/raw meat/poultry flags when known or inferred. |
| `ingredients` | object[] | Exact base ingredients when available. |
| `planning_items_per_person` | object[] | Per-person estimated quantities when exact ingredients are missing. |
| `directions_summary` | string | Practical cooking note or summary. |
| `cook_notes` | string[] | Extra difficulty or planning notes. |

## Scaling Logic

For exact ingredients, the app uses:

`scaled amount = ingredient amount × campers / default_servings`

For planning estimates, the app uses:

`scaled amount = per-person amount × campers`

Exact and estimate shopping lines are labeled separately in the generated output.
