# Menu Planner Logic

## Weekend Campout Pattern

A common weekend plan is:

- Friday dinner: either eat before arrival or use a very-low cleanup option.
- Saturday breakfast: hearty but not too slow.
- Saturday lunch: fast, low-cook, or trail-friendly.
- Saturday dinner: main patrol cooking event.
- Saturday dessert/cracker barrel: optional morale item.
- Sunday breakfast: fast, minimal cleanup, easy pack-out.

## Filtering Rules

Use these rules before selecting meals:

1. Match recipe equipment to what the patrol actually has.
2. Avoid high-effort Dutch oven meals when arrival is late or weather is bad.
3. Do not pick multiple high-cleanup meals in one day.
4. Balance protein across the weekend: avoid beef for every meal.
5. For younger Scouts, prefer `difficulty_1_to_5 <= 2` unless adults are cooking.
6. For patrol method, choose at least one meal where Scouts can do assembly work: foil packs, tacos in a bag, burritos, pie iron meals, or pancakes.

## Scaling Rules

### Linear Batch

Use when ingredients scale cleanly by servings.

`scaled_amount = base_amount * target_servings / base_servings`

Round practical grocery quantities up to package sizes.

### Per-Person

Use when each Scout receives their own packet, bag, burrito, foil dinner, omelette, or portion.

`shopping_amount = per_person_amount * people_count`

This is best for recipes like Taco in a Bag, foil dinners, burritos, and some stews that define ingredients per person.

## Complexity Scoring

Start with recipe difficulty. Add friction for:

- Dutch oven charcoal management.
- Raw poultry.
- Many chopped vegetables.
- Multi-step frying plus baking.
- Multiple pots/pans.
- Breakfast recipes with eggs for large groups.

Reduce friction for:

- Per-person assembly.
- Shelf-stable ingredients.
- One-pot meals.
- Low cleanup.
- Make-ahead components.

## Suggested App Filters

- Meal slot: Friday dinner, Saturday breakfast, Saturday lunch, Saturday dinner, dessert, Sunday breakfast.
- Patrol size.
- Cooking method.
- Complexity limit.
- Cleanup level.
- Cooler space.
- Allergy flags.
- No-repeat protein rule.
- Scout-led only.
