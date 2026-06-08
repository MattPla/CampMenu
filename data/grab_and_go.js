// Grab-and-go breakfasts — no cooking, no cleanup, perfect for breakdown day
// Pushed into window.RECIPES after recipes.js loads
(function () {
  if (!Array.isArray(window.RECIPES)) return;

  window.RECIPES.push(

    {
      id: "grab-go-pop-tarts",
      title: "Pop-Tarts & Juice Box",
      grab_and_go: true, no_cook: true,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "no_cook"],
      methods: ["No Cook"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 2, cook_minutes: 0, total_minutes: 2,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: [],
      protein_tags: ["none"], common_allergens: ["gluten/wheat"], food_safety_flags: [],
      ingredients: [
        { item: "Pop-Tarts 2-count packet", amount: 1, unit: "each", notes: "any flavor" },
        { item: "juice box", amount: 1, unit: "each" }
      ],
      planning_items_per_person: [],
      directions_summary: "Hand out one Pop-Tarts packet and one juice box per scout. Zero cleanup. Great for final morning.",
      cook_notes: ["No fire, no stove, no dishes."]
    },

    {
      id: "grab-go-granola-banana",
      title: "Granola Bar & Banana",
      grab_and_go: true, no_cook: true,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "no_cook", "healthy"],
      methods: ["No Cook"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 2, cook_minutes: 0, total_minutes: 2,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: [],
      protein_tags: ["none"], common_allergens: ["gluten/wheat", "nuts"], food_safety_flags: [],
      ingredients: [
        { item: "Nature Valley granola bar 2-count pack", amount: 1, unit: "each" },
        { item: "banana", amount: 1, unit: "each" }
      ],
      planning_items_per_person: [],
      directions_summary: "Hand out one granola bar pack and one banana. No prep, no fire, no dishes.",
      cook_notes: ["Buy bananas ahead; they hold well overnight in a mesh bag."]
    },

    {
      id: "grab-go-instant-oatmeal",
      title: "Instant Oatmeal Cup",
      grab_and_go: true, no_cook: false,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "hot_water_only"],
      methods: ["Hot Water Only"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 5, cook_minutes: 0, total_minutes: 5,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: ["Camp stove", "Water pot"],
      protein_tags: ["none"], common_allergens: ["gluten/wheat"], food_safety_flags: [],
      ingredients: [
        { item: "Quaker instant oatmeal cup", amount: 1, unit: "each", notes: "just add boiling water" }
      ],
      planning_items_per_person: [],
      directions_summary: "Boil one pot of water, pour into each cup, stir and eat. One pot to wash. No plates needed.",
      cook_notes: ["Only one pot of water needed for whole patrol.", "Scout holds the cup — no dishes except the pot."]
    },

    {
      id: "grab-go-cereal-milk",
      title: "Cereal Cup & Shelf-Stable Milk",
      grab_and_go: true, no_cook: true,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "no_cook"],
      methods: ["No Cook"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 2, cook_minutes: 0, total_minutes: 2,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: [],
      protein_tags: ["dairy"], common_allergens: ["gluten/wheat", "dairy"], food_safety_flags: [],
      ingredients: [
        { item: "individual cereal cup (Cheerios, Frosted Flakes, etc.)", amount: 1, unit: "each" },
        { item: "shelf-stable milk box (8 oz)", amount: 1, unit: "each", notes: "no refrigeration needed" }
      ],
      planning_items_per_person: [],
      directions_summary: "No refrigeration needed — buy shelf-stable milk boxes. Open, pour, eat out of the cup. Zero cleanup.",
      cook_notes: ["Walmart carries shelf-stable Parmalat or Great Value milk boxes."]
    },

    {
      id: "grab-go-bagel-cream-cheese",
      title: "Bagel & Cream Cheese",
      grab_and_go: true, no_cook: true,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "no_cook"],
      methods: ["No Cook"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 3, cook_minutes: 0, total_minutes: 3,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: [],
      protein_tags: ["dairy"], common_allergens: ["gluten/wheat", "dairy"], food_safety_flags: ["cooler"],
      ingredients: [
        { item: "bagel", amount: 1, unit: "each" },
        { item: "individual cream cheese cup (1 oz)", amount: 1, unit: "each", notes: "keep in cooler" }
      ],
      planning_items_per_person: [],
      directions_summary: "Hand out one bagel and one cream cheese cup per scout. Use a plastic knife. One napkin each, no dishes.",
      cook_notes: ["Cream cheese cups keep in cooler until morning of."]
    },

    {
      id: "grab-go-muffins",
      title: "Bakery Muffins & Applesauce Pouch",
      grab_and_go: true, no_cook: true,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "no_cook"],
      methods: ["No Cook"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 2, cook_minutes: 0, total_minutes: 2,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: [],
      protein_tags: ["none"], common_allergens: ["gluten/wheat", "egg", "dairy"], food_safety_flags: [],
      ingredients: [
        { item: "Walmart bakery muffin", amount: 1, unit: "each", notes: "buy day before — bakery muffin packs" },
        { item: "GoGo squeeZ applesauce pouch", amount: 1, unit: "each" }
      ],
      planning_items_per_person: [],
      directions_summary: "Grab a muffin and an applesauce pouch. Zero prep, zero dishes. Walmart bakery section has individual muffins or multi-packs.",
      cook_notes: ["Buy a Walmart jumbo muffin pack the day before."]
    },

    {
      id: "grab-go-nutrigrain",
      title: "Nutri-Grain Bar & OJ Bottle",
      grab_and_go: true, no_cook: true,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "no_cook"],
      methods: ["No Cook"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 1, cook_minutes: 0, total_minutes: 1,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: [],
      protein_tags: ["none"], common_allergens: ["gluten/wheat"], food_safety_flags: [],
      ingredients: [
        { item: "Kellogg's Nutri-Grain breakfast bar", amount: 1, unit: "each" },
        { item: "individual OJ bottle (6-8 oz)", amount: 1, unit: "each" }
      ],
      planning_items_per_person: [],
      directions_summary: "One bar, one drink, done. Buy a multi-pack box and individual OJ bottles. Scouts pocket it and go.",
      cook_notes: []
    },

    {
      id: "grab-go-donuts",
      title: "Donuts & Chocolate Milk",
      grab_and_go: true, no_cook: true,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "no_cook", "treat"],
      methods: ["No Cook"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 2, cook_minutes: 0, total_minutes: 2,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: [],
      protein_tags: ["dairy"], common_allergens: ["gluten/wheat", "dairy", "egg"], food_safety_flags: [],
      ingredients: [
        { item: "donut", amount: 2, unit: "each", notes: "Walmart bakery glazed or chocolate donuts" },
        { item: "shelf-stable chocolate milk box (8 oz)", amount: 1, unit: "each" }
      ],
      planning_items_per_person: [],
      directions_summary: "The breakdown-day treat. Grab two donuts and a chocolate milk box. Zero cleanup, high morale.",
      cook_notes: ["Walmart Great Value donuts are affordable in a 12-count box."]
    },

    {
      id: "grab-go-pb-crackers",
      title: "Peanut Butter Crackers & Fruit Pouch",
      grab_and_go: true, no_cook: true,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "no_cook"],
      methods: ["No Cook"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 1, cook_minutes: 0, total_minutes: 1,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: [],
      protein_tags: ["nuts"], common_allergens: ["gluten/wheat", "peanuts"], food_safety_flags: [],
      ingredients: [
        { item: "Ritz Bits Peanut Butter cracker pack", amount: 1, unit: "each" },
        { item: "GoGo squeeZ fruit pouch", amount: 1, unit: "each" }
      ],
      planning_items_per_person: [],
      directions_summary: "Pre-packaged cracker packs and fruit pouches — no prep, no dishes, allergy note: contains peanuts.",
      cook_notes: ["Check for nut allergies in the patrol before choosing this option."]
    },

    {
      id: "grab-go-trail-mix",
      title: "Trail Mix Bag & String Cheese",
      grab_and_go: true, no_cook: true,
      status: "exact_quantities",
      meal_type: "breakfast",
      categories: ["grab_and_go", "no_cook"],
      methods: ["No Cook"],
      default_servings: 1, scaling_model: "per_person",
      prep_minutes: 2, cook_minutes: 0, total_minutes: 2,
      difficulty: 1, effort: "very_low", patrol_fit: "excellent",
      equipment: [],
      protein_tags: ["dairy", "nuts"], common_allergens: ["nuts", "dairy"], food_safety_flags: ["cooler"],
      ingredients: [
        { item: "individual trail mix bag (1.5 oz)", amount: 1, unit: "each" },
        { item: "string cheese stick", amount: 1, unit: "each", notes: "keep in cooler overnight" }
      ],
      planning_items_per_person: [],
      directions_summary: "High-energy, protein-rich grab-and-go. String cheese from the cooler, trail mix from the food bin.",
      cook_notes: ["Walmart Great Value trail mix variety packs are budget-friendly."]
    }

  );
}());

// Grab-and-go Walmart cost estimates (added to main cost map)
(function () {
  if (!window.WALMART_RECIPE_COSTS) return;
  Object.assign(window.WALMART_RECIPE_COSTS, {
    "grab-go-pop-tarts":        { cost_per_person: 1.25, walmart_note: "Pop-Tarts 16ct box $6 + Kool-Aid Jammers 10pk $3.50" },
    "grab-go-granola-banana":   { cost_per_person: 1.50, walmart_note: "Nature Valley 12ct box $4.50 + bananas $0.58/lb" },
    "grab-go-instant-oatmeal":  { cost_per_person: 1.25, walmart_note: "Quaker instant oatmeal cups 12ct $10 — just add boiling water" },
    "grab-go-cereal-milk":      { cost_per_person: 1.75, walmart_note: "Kellogg's variety cereal cups 8pk $5 + Parmalat milk boxes 6pk $5" },
    "grab-go-bagel-cream-cheese":{ cost_per_person: 1.75, walmart_note: "Thomas bagels 6ct $3.50 + cream cheese cups 10ct $4" },
    "grab-go-muffins":          { cost_per_person: 1.50, walmart_note: "Great Value muffins 12ct $4 (bakery) + GoGo squeeZ 12pk $7" },
    "grab-go-nutrigrain":       { cost_per_person: 1.50, walmart_note: "Nutri-Grain bars 16ct box $5.50 + Minute Maid OJ 6pk $4" },
    "grab-go-donuts":           { cost_per_person: 2.00, walmart_note: "Great Value glazed donuts 12ct $4.50 + shelf-stable choc milk 6pk $5" },
    "grab-go-pb-crackers":      { cost_per_person: 1.50, walmart_note: "Ritz Bits PB 20ct box $5 + GoGo squeeZ 12pk $7" },
    "grab-go-trail-mix":        { cost_per_person: 2.00, walmart_note: "Great Value trail mix variety 12ct $6 + Sargento string cheese 12ct $6" },
  });
}());
