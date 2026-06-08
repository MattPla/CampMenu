// Detailed, itemized per-person ingredient lists for common scout camp recipes.
// These override the generic planning_items_per_person in recipes.js.
// Each entry: { item, amount_per_person, unit, walmart_item, walmart_price }
// Scaling: scaled_amount = amount_per_person × scouts_eating
// walmart_search: optional specific search override for Walmart link

window.RECIPE_DETAILS = {

  // ── BREAKFASTS ──────────────────────────────────────────────────────────

  "breakfast-burritos": [
    { item: "large eggs",                  amount_per_person: 2,    unit: "each",  walmart_item: "Great Value Large Eggs 18ct",               walmart_price: "$4.50/18ct" },
    { item: "Jimmy Dean pork sausage roll",amount_per_person: 2,    unit: "oz",    walmart_item: "Jimmy Dean Regular Pork Sausage 16oz roll",  walmart_price: "$4.00/roll" },
    { item: "flour tortillas (8-inch)",    amount_per_person: 2,    unit: "each",  walmart_item: "Mission Flour Tortillas 10ct",               walmart_price: "$2.50/10ct" },
    { item: "shredded Mexican blend cheese",amount_per_person:0.25, unit: "cup",   walmart_item: "Great Value Mexican 4-Cheese Blend 8oz",     walmart_price: "$3.00/8oz" },
    { item: "salsa",                        amount_per_person: 2,   unit: "Tbsp",  walmart_item: "Great Value Chunky Salsa 16oz",              walmart_price: "$3.00/jar" },
    { item: "vegetable oil (cooking)",      amount_per_person: 0.5, unit: "tsp",   walmart_item: "Great Value Vegetable Oil 48oz",             walmart_price: "$4.00/bottle" },
  ],

  "simple-breakfast-burritos": [
    { item: "large eggs",                  amount_per_person: 2,    unit: "each",  walmart_item: "Great Value Large Eggs 18ct",               walmart_price: "$4.50/18ct" },
    { item: "pork sausage roll",           amount_per_person: 2,    unit: "oz",    walmart_item: "Jimmy Dean Regular Pork Sausage 16oz",      walmart_price: "$4.00/roll" },
    { item: "flour tortillas (10-inch)",   amount_per_person: 1,    unit: "each",  walmart_item: "Mission Flour Tortillas 10ct",              walmart_price: "$2.50/10ct" },
    { item: "shredded cheddar cheese",     amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Shredded Cheddar 8oz",          walmart_price: "$3.00/8oz" },
    { item: "vegetable oil (cooking)",     amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Vegetable Oil 48oz",            walmart_price: "$4.00/bottle" },
  ],

  "pecs-breakfast": [
    { item: "large eggs",                  amount_per_person: 2,    unit: "each",  walmart_item: "Great Value Large Eggs 18ct",               walmart_price: "$4.50/18ct" },
    { item: "pork sausage roll",           amount_per_person: 2,    unit: "oz",    walmart_item: "Jimmy Dean Regular Pork Sausage 16oz",      walmart_price: "$4.00/roll" },
    { item: "frozen hashbrowns",           amount_per_person: 0.5,  unit: "cup",   walmart_item: "Great Value Frozen Hashbrown Patties 22oz", walmart_price: "$3.50/bag" },
    { item: "shredded cheddar cheese",     amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Shredded Cheddar 8oz",          walmart_price: "$3.00/8oz" },
    { item: "vegetable oil (cooking)",     amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Vegetable Oil 48oz",            walmart_price: "$4.00/bottle" },
    { item: "salt and pepper",             amount_per_person: 1,    unit: "pinch", walmart_item: "Morton Salt 26oz + Great Value Black Pepper", walmart_price: "$2.00 total" },
  ],

  "breakfast-in-a-bag": [
    { item: "large eggs",                  amount_per_person: 2,    unit: "each",  walmart_item: "Great Value Large Eggs 18ct",               walmart_price: "$4.50/18ct" },
    { item: "pork sausage roll",           amount_per_person: 2,    unit: "oz",    walmart_item: "Jimmy Dean Regular Pork Sausage 16oz",      walmart_price: "$4.00/roll" },
    { item: "frozen hashbrowns",           amount_per_person: 0.5,  unit: "cup",   walmart_item: "Great Value Frozen Hashbrown Patties 22oz", walmart_price: "$3.50/bag" },
    { item: "quart zip-lock freezer bag",  amount_per_person: 1,    unit: "each",  walmart_item: "Great Value Freezer Bags Quart 50ct",       walmart_price: "$4.00/50ct" },
  ],

  "pancakes": [
    { item: "Great Value complete pancake mix", amount_per_person: 0.5, unit: "cup",  walmart_item: "Great Value Complete Pancake Mix 32oz",  walmart_price: "$3.00/box" },
    { item: "water (for mix)",             amount_per_person: 0.4,  unit: "cup",   walmart_item: "—",                                         walmart_price: "—" },
    { item: "Great Value pancake syrup",   amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Pancake Syrup 24oz",            walmart_price: "$3.50/bottle" },
    { item: "butter (cooking & topping)",  amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb (4 sticks)",  walmart_price: "$4.00/lb" },
    { item: "vegetable oil (skillet)",     amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Vegetable Oil 48oz",            walmart_price: "$4.00/bottle" },
  ],

  "mcpancakes": [
    { item: "Great Value complete pancake mix", amount_per_person: 0.5, unit: "cup",  walmart_item: "Great Value Complete Pancake Mix 32oz",  walmart_price: "$3.00/box" },
    { item: "water (for mix)",             amount_per_person: 0.4,  unit: "cup",   walmart_item: "—",                                         walmart_price: "—" },
    { item: "pancake syrup",               amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Pancake Syrup 24oz",            walmart_price: "$3.50/bottle" },
    { item: "butter",                      amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",             walmart_price: "$4.00/lb" },
    { item: "pork sausage links",          amount_per_person: 2,    unit: "each",  walmart_item: "Jimmy Dean Fully Cooked Sausage Links 18ct",walmart_price: "$5.00/box" },
  ],

  "scramble": [
    { item: "large eggs",                  amount_per_person: 2,    unit: "each",  walmart_item: "Great Value Large Eggs 18ct",               walmart_price: "$4.50/18ct" },
    { item: "pork sausage roll",           amount_per_person: 2,    unit: "oz",    walmart_item: "Jimmy Dean Regular Pork Sausage 16oz",      walmart_price: "$4.00/roll" },
    { item: "shredded cheddar cheese",     amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Shredded Cheddar 8oz",          walmart_price: "$3.00/8oz" },
    { item: "diced bell pepper",           amount_per_person: 2,    unit: "Tbsp",  walmart_item: "fresh bell peppers (green or red)",         walmart_price: "$1.00/each" },
    { item: "diced onion",                 amount_per_person: 1,    unit: "Tbsp",  walmart_item: "yellow onion",                              walmart_price: "$1.00/each" },
    { item: "butter (cooking)",            amount_per_person: 0.5,  unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",             walmart_price: "$4.00/lb" },
    { item: "salt and pepper",             amount_per_person: 1,    unit: "pinch", walmart_item: "Morton Salt + Great Value Black Pepper",    walmart_price: "$2.00 total" },
  ],

  "armadillo-eggs": [
    { item: "large eggs",                  amount_per_person: 2,    unit: "each",  walmart_item: "Great Value Large Eggs 18ct",               walmart_price: "$4.50/18ct" },
    { item: "pork sausage roll (wrapped around egg)", amount_per_person: 2, unit: "oz", walmart_item: "Jimmy Dean Regular Pork Sausage 16oz", walmart_price: "$4.00/roll" },
    { item: "shredded cheddar cheese",     amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Shredded Cheddar 8oz",          walmart_price: "$3.00/8oz" },
    { item: "jalapeño peppers",            amount_per_person: 0.5,  unit: "each",  walmart_item: "fresh jalapeños",                           walmart_price: "$1.50/pack" },
    { item: "butter (cooking)",            amount_per_person: 0.5,  unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",             walmart_price: "$4.00/lb" },
  ],

  "breakfast-casserole": [
    { item: "large eggs",                  amount_per_person: 2,    unit: "each",  walmart_item: "Great Value Large Eggs 18ct",               walmart_price: "$4.50/18ct" },
    { item: "pork sausage roll (cooked, crumbled)", amount_per_person: 2, unit: "oz", walmart_item: "Jimmy Dean Regular Pork Sausage 16oz", walmart_price: "$4.00/roll" },
    { item: "frozen shredded hashbrowns",  amount_per_person: 0.5,  unit: "cup",   walmart_item: "Great Value Frozen Shredded Hashbrowns 30oz",walmart_price: "$3.50/bag" },
    { item: "shredded cheddar cheese",     amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Shredded Cheddar 8oz",          walmart_price: "$3.00/8oz" },
    { item: "milk",                        amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Whole Milk 1 gallon",           walmart_price: "$3.50/gal" },
    { item: "salt",                        amount_per_person: 1,    unit: "pinch", walmart_item: "Morton Salt 26oz",                          walmart_price: "$1.50/box" },
    { item: "black pepper",                amount_per_person: 1,    unit: "pinch", walmart_item: "Great Value Black Pepper 3oz",              walmart_price: "$1.50/jar" },
  ],

  "mountain-man-omelette": [
    { item: "large eggs",                  amount_per_person: 3,    unit: "each",  walmart_item: "Great Value Large Eggs 18ct",               walmart_price: "$4.50/18ct" },
    { item: "pork sausage roll (cooked, crumbled)", amount_per_person: 2, unit: "oz", walmart_item: "Jimmy Dean Regular Pork Sausage 16oz", walmart_price: "$4.00/roll" },
    { item: "frozen shredded hashbrowns",  amount_per_person: 0.5,  unit: "cup",   walmart_item: "Great Value Frozen Shredded Hashbrowns 30oz",walmart_price: "$3.50/bag" },
    { item: "shredded cheddar cheese",     amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Shredded Cheddar 8oz",          walmart_price: "$3.00/8oz" },
    { item: "diced bell pepper",           amount_per_person: 2,    unit: "Tbsp",  walmart_item: "fresh bell peppers",                        walmart_price: "$1.00/each" },
    { item: "diced onion",                 amount_per_person: 2,    unit: "Tbsp",  walmart_item: "yellow onion",                              walmart_price: "$1.00/each" },
    { item: "butter (cooking)",            amount_per_person: 0.5,  unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",             walmart_price: "$4.00/lb" },
    { item: "milk",                        amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Whole Milk 1 gallon",           walmart_price: "$3.50/gal" },
    { item: "salt and pepper",             amount_per_person: 1,    unit: "pinch", walmart_item: "Morton Salt + Great Value Black Pepper",    walmart_price: "$2.00 total" },
  ],

  // ── LUNCHES ─────────────────────────────────────────────────────────────

  "taco-in-a-bag": [
    { item: "individual Fritos snack bag (1 oz)", amount_per_person: 1, unit: "each", walmart_item: "Fritos Original Corn Chips 1oz 30-Pack", walmart_price: "$4.00/30ct" },
    { item: "80/20 ground beef (cooked, seasoned)", amount_per_person: 3, unit: "oz", walmart_item: "Great Value 80/20 Ground Beef 1lb",   walmart_price: "$5.00/lb" },
    { item: "taco seasoning packet",        amount_per_person: 0.1,  unit: "oz",    walmart_item: "Old El Paso Taco Seasoning 1oz packet 3-pack",walmart_price: "$3.00/3pk" },
    { item: "canned pinto beans (drained)", amount_per_person: 0.33, unit: "cup",   walmart_item: "Great Value Pinto Beans 15oz",          walmart_price: "$1.00/can" },
    { item: "shredded Mexican blend cheese",amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Mexican 4-Cheese Blend 8oz",walmart_price: "$3.00/8oz" },
    { item: "sour cream",                   amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Sour Cream 16oz",           walmart_price: "$2.00/tub" },
    { item: "salsa",                        amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Chunky Salsa 16oz",         walmart_price: "$3.00/jar" },
  ],

  "a-w-chili-dogs": [
    { item: "hot dogs",                     amount_per_person: 2,    unit: "each",  walmart_item: "Ball Park Franks 8ct",                  walmart_price: "$3.50/8ct" },
    { item: "hot dog buns",                 amount_per_person: 2,    unit: "each",  walmart_item: "Great Value Hot Dog Buns 8ct",          walmart_price: "$2.50/8ct" },
    { item: "canned chili with beans",      amount_per_person: 0.4,  unit: "cup",   walmart_item: "Hormel Chili with Beans 15oz",          walmart_price: "$2.00/can" },
    { item: "shredded cheddar cheese",      amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Shredded Cheddar 8oz",      walmart_price: "$3.00/8oz" },
    { item: "yellow mustard",               amount_per_person: 1,    unit: "tsp",   walmart_item: "French's Yellow Mustard 20oz",          walmart_price: "$2.00/bottle" },
  ],

  "sonic-s-chili-dogs": [
    { item: "hot dogs",                     amount_per_person: 2,    unit: "each",  walmart_item: "Ball Park Franks 8ct",                  walmart_price: "$3.50/8ct" },
    { item: "hot dog buns",                 amount_per_person: 2,    unit: "each",  walmart_item: "Great Value Hot Dog Buns 8ct",          walmart_price: "$2.50/8ct" },
    { item: "canned chili with beans",      amount_per_person: 0.4,  unit: "cup",   walmart_item: "Hormel Chili with Beans 15oz",          walmart_price: "$2.00/can" },
    { item: "shredded cheddar cheese",      amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Shredded Cheddar 8oz",      walmart_price: "$3.00/8oz" },
    { item: "diced onion",                  amount_per_person: 1,    unit: "Tbsp",  walmart_item: "yellow onion",                          walmart_price: "$1.00/each" },
    { item: "yellow mustard",               amount_per_person: 1,    unit: "tsp",   walmart_item: "French's Yellow Mustard 20oz",          walmart_price: "$2.00/bottle" },
  ],

  "corn-dogs": [
    { item: "State Fair beef corn dogs",    amount_per_person: 2,    unit: "each",  walmart_item: "State Fair Beef Corn Dogs 16ct",        walmart_price: "$6.00/16ct" },
    { item: "yellow mustard",               amount_per_person: 1,    unit: "Tbsp",  walmart_item: "French's Yellow Mustard 20oz",          walmart_price: "$2.00/bottle" },
    { item: "ketchup",                      amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Ketchup 32oz",              walmart_price: "$2.00/bottle" },
  ],

  "tuna-tortillas": [
    { item: "canned tuna in water (drained)", amount_per_person: 1.5, unit: "oz",  walmart_item: "Great Value Chunk Light Tuna in Water 5oz",walmart_price: "$1.50/can" },
    { item: "flour tortillas (10-inch)",    amount_per_person: 1,    unit: "each",  walmart_item: "Mission Flour Tortillas 10ct",          walmart_price: "$2.50/10ct" },
    { item: "mayonnaise",                   amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Mayonnaise 30oz",           walmart_price: "$3.50/jar" },
    { item: "sweet pickle relish",          amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Sweet Relish 10oz",         walmart_price: "$2.00/jar" },
    { item: "shredded lettuce or cabbage",  amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Shredded Lettuce (bag salad)",walmart_price: "$2.50/bag" },
  ],

  "meatball-subs": [
    { item: "frozen Italian-style meatballs", amount_per_person: 5, unit: "each",  walmart_item: "Great Value Homestyle Meatballs 28oz",  walmart_price: "$5.00/bag" },
    { item: "sub / hoagie rolls",           amount_per_person: 1,    unit: "each",  walmart_item: "Great Value Hoagie Rolls 6ct",          walmart_price: "$3.00/6ct" },
    { item: "Prego marinara sauce",         amount_per_person: 0.33, unit: "cup",   walmart_item: "Prego Traditional Pasta Sauce 24oz",    walmart_price: "$2.50/jar" },
    { item: "shredded mozzarella cheese",   amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Shredded Mozzarella 8oz",   walmart_price: "$3.00/8oz" },
  ],

  // ── DINNERS ─────────────────────────────────────────────────────────────

  "cowboy-stew": [
    { item: "80/20 ground beef",            amount_per_person: 3,    unit: "oz",    walmart_item: "Great Value 80/20 Ground Beef 1lb",     walmart_price: "$5.00/lb" },
    { item: "canned diced tomatoes",        amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Diced Tomatoes 14.5oz",     walmart_price: "$1.50/can" },
    { item: "canned pinto beans (drained)", amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Pinto Beans 15oz",          walmart_price: "$1.00/can" },
    { item: "canned corn (drained)",        amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Whole Kernel Corn 15.25oz", walmart_price: "$1.00/can" },
    { item: "russet potatoes (diced, 1-inch)", amount_per_person: 0.5, unit: "cup", walmart_item: "Russet Potatoes 5lb bag",               walmart_price: "$4.00/5lb" },
    { item: "beef broth",                   amount_per_person: 0.5,  unit: "cup",   walmart_item: "Great Value Beef Broth 32oz carton",    walmart_price: "$2.00/carton" },
    { item: "chili powder",                 amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Chili Powder 2.5oz",        walmart_price: "$1.50/jar" },
    { item: "garlic powder",                amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Garlic Powder 3.12oz",      walmart_price: "$1.50/jar" },
    { item: "salt and pepper",              amount_per_person: 1,    unit: "pinch", walmart_item: "Morton Salt + Great Value Black Pepper", walmart_price: "$2.00 total" },
  ],

  "train-wreck": [
    { item: "80/20 ground beef",            amount_per_person: 3,    unit: "oz",    walmart_item: "Great Value 80/20 Ground Beef 1lb",     walmart_price: "$5.00/lb" },
    { item: "elbow macaroni (dry)",         amount_per_person: 0.5,  unit: "cup",   walmart_item: "Great Value Elbow Macaroni 1lb",        walmart_price: "$1.50/lb" },
    { item: "canned diced tomatoes",        amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Diced Tomatoes 14.5oz",     walmart_price: "$1.50/can" },
    { item: "shredded cheddar cheese",      amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Shredded Cheddar 8oz",      walmart_price: "$3.00/8oz" },
    { item: "water or beef broth",          amount_per_person: 0.75, unit: "cup",   walmart_item: "Great Value Beef Broth 32oz carton",    walmart_price: "$2.00/carton" },
    { item: "garlic powder",                amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Garlic Powder 3.12oz",      walmart_price: "$1.50/jar" },
    { item: "salt and pepper",              amount_per_person: 1,    unit: "pinch", walmart_item: "Morton Salt + Great Value Black Pepper", walmart_price: "$2.00 total" },
  ],

  "simple-chili": [
    { item: "80/20 ground beef",            amount_per_person: 3,    unit: "oz",    walmart_item: "Great Value 80/20 Ground Beef 1lb",     walmart_price: "$5.00/lb" },
    { item: "canned kidney beans (drained)",amount_per_person: 0.33, unit: "cup",   walmart_item: "Great Value Dark Red Kidney Beans 15oz",walmart_price: "$1.00/can" },
    { item: "canned diced tomatoes",        amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Diced Tomatoes 14.5oz",     walmart_price: "$1.50/can" },
    { item: "tomato sauce",                 amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Tomato Sauce 15oz",         walmart_price: "$1.00/can" },
    { item: "chili seasoning packet",       amount_per_person: 0.13, unit: "packet",walmart_item: "McCormick Chili Seasoning 1.25oz packet",walmart_price: "$1.00/packet" },
    { item: "diced onion",                  amount_per_person: 1,    unit: "Tbsp",  walmart_item: "yellow onion",                          walmart_price: "$1.00/each" },
    { item: "shredded cheddar (garnish)",   amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Shredded Cheddar 8oz",      walmart_price: "$3.00/8oz" },
  ],

  "taco-soup": [
    { item: "80/20 ground beef",            amount_per_person: 3,    unit: "oz",    walmart_item: "Great Value 80/20 Ground Beef 1lb",     walmart_price: "$5.00/lb" },
    { item: "taco seasoning packet",        amount_per_person: 0.13, unit: "packet",walmart_item: "Old El Paso Taco Seasoning 1oz packet 3-pack",walmart_price: "$3.00/3pk" },
    { item: "canned diced tomatoes with green chiles (Ro-Tel)", amount_per_person: 0.25, unit: "cup", walmart_item: "Ro-Tel Original Diced Tomatoes & Green Chilies 10oz", walmart_price: "$1.50/can" },
    { item: "canned kidney beans (drained)",amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Dark Red Kidney Beans 15oz",walmart_price: "$1.00/can" },
    { item: "canned corn (drained)",        amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Whole Kernel Corn 15.25oz", walmart_price: "$1.00/can" },
    { item: "beef broth",                   amount_per_person: 0.5,  unit: "cup",   walmart_item: "Great Value Beef Broth 32oz carton",    walmart_price: "$2.00/carton" },
    { item: "sour cream (garnish)",         amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Sour Cream 16oz",           walmart_price: "$2.00/tub" },
    { item: "shredded cheddar (garnish)",   amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Shredded Cheddar 8oz",      walmart_price: "$3.00/8oz" },
    { item: "tortilla chips (garnish)",     amount_per_person: 0.5,  unit: "oz",    walmart_item: "Great Value Tortilla Chips 13oz",       walmart_price: "$2.50/bag" },
  ],

  "spaghetti-1-pot": [
    { item: "80/20 ground beef",            amount_per_person: 3,    unit: "oz",    walmart_item: "Great Value 80/20 Ground Beef 1lb",     walmart_price: "$5.00/lb" },
    { item: "spaghetti noodles (dry)",      amount_per_person: 2,    unit: "oz",    walmart_item: "Great Value Spaghetti 16oz",            walmart_price: "$1.50/lb" },
    { item: "Prego Traditional marinara",   amount_per_person: 0.5,  unit: "cup",   walmart_item: "Prego Traditional Pasta Sauce 24oz",    walmart_price: "$2.50/jar" },
    { item: "water (for boiling pasta)",    amount_per_person: 1,    unit: "cup",   walmart_item: "—",                                     walmart_price: "—" },
    { item: "garlic powder",                amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Garlic Powder 3.12oz",      walmart_price: "$1.50/jar" },
    { item: "Italian seasoning",            amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Italian Seasoning 0.87oz",  walmart_price: "$1.50/jar" },
    { item: "shredded Parmesan (garnish)",  amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Kraft Grated Parmesan Cheese 8oz",      walmart_price: "$4.00/jar" },
  ],

  "super-easy-spaghetti": [
    { item: "80/20 ground beef",            amount_per_person: 3,    unit: "oz",    walmart_item: "Great Value 80/20 Ground Beef 1lb",     walmart_price: "$5.00/lb" },
    { item: "spaghetti noodles (dry)",      amount_per_person: 2,    unit: "oz",    walmart_item: "Great Value Spaghetti 16oz",            walmart_price: "$1.50/lb" },
    { item: "Prego Traditional marinara",   amount_per_person: 0.5,  unit: "cup",   walmart_item: "Prego Traditional Pasta Sauce 24oz",    walmart_price: "$2.50/jar" },
    { item: "water (for boiling pasta)",    amount_per_person: 1,    unit: "cup",   walmart_item: "—",                                     walmart_price: "—" },
    { item: "salt (for pasta water)",       amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Morton Salt 26oz",                      walmart_price: "$1.50/box" },
    { item: "shredded Parmesan (optional)", amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Kraft Grated Parmesan Cheese 8oz",      walmart_price: "$4.00/jar" },
  ],

  "hobo-dinner": [
    { item: "80/20 ground beef (formed into patty)", amount_per_person: 4, unit: "oz", walmart_item: "Great Value 80/20 Ground Beef 1lb",  walmart_price: "$5.00/lb" },
    { item: "russet potato (sliced thin)",  amount_per_person: 1,    unit: "medium",walmart_item: "Russet Potatoes 5lb bag",               walmart_price: "$4.00/5lb" },
    { item: "carrots (sliced)",             amount_per_person: 0.25, unit: "cup",   walmart_item: "fresh carrots 1lb bag",                 walmart_price: "$1.50/bag" },
    { item: "diced onion",                  amount_per_person: 2,    unit: "Tbsp",  walmart_item: "yellow onion",                          walmart_price: "$1.00/each" },
    { item: "butter",                       amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",         walmart_price: "$4.00/lb" },
    { item: "garlic powder",                amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Garlic Powder 3.12oz",      walmart_price: "$1.50/jar" },
    { item: "salt and pepper",              amount_per_person: 1,    unit: "pinch", walmart_item: "Morton Salt + Great Value Black Pepper", walmart_price: "$2.00 total" },
    { item: "heavy-duty aluminum foil",     amount_per_person: 2,    unit: "sq ft", walmart_item: "Reynolds Wrap Heavy Duty Foil 50 sq ft",walmart_price: "$7.00/roll" },
  ],

  "burger-beans-biscuits": [
    { item: "80/20 ground beef",            amount_per_person: 3,    unit: "oz",    walmart_item: "Great Value 80/20 Ground Beef 1lb",     walmart_price: "$5.00/lb" },
    { item: "Bush's Original Baked Beans",  amount_per_person: 0.5,  unit: "cup",   walmart_item: "Bush's Best Original Baked Beans 28oz", walmart_price: "$2.50/can" },
    { item: "Pillsbury Grands! Biscuits",   amount_per_person: 1,    unit: "each",  walmart_item: "Pillsbury Grands! Southern Homestyle Biscuits 8ct",walmart_price: "$3.00/can" },
    { item: "ketchup",                      amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Ketchup 32oz",              walmart_price: "$2.00/bottle" },
    { item: "yellow mustard",               amount_per_person: 0.5,  unit: "tsp",   walmart_item: "French's Yellow Mustard 20oz",          walmart_price: "$2.00/bottle" },
    { item: "brown sugar (for beans)",      amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Light Brown Sugar 2lb",     walmart_price: "$2.00/bag" },
    { item: "salt and pepper",              amount_per_person: 1,    unit: "pinch", walmart_item: "Morton Salt + Great Value Black Pepper", walmart_price: "$2.00 total" },
  ],

  "burritos": [
    { item: "80/20 ground beef",            amount_per_person: 3,    unit: "oz",    walmart_item: "Great Value 80/20 Ground Beef 1lb",     walmart_price: "$5.00/lb" },
    { item: "taco seasoning packet",        amount_per_person: 0.13, unit: "packet",walmart_item: "Old El Paso Taco Seasoning 1oz packet",  walmart_price: "$1.00/packet" },
    { item: "flour tortillas (10-inch)",    amount_per_person: 1.5,  unit: "each",  walmart_item: "Mission Flour Tortillas 10ct",          walmart_price: "$2.50/10ct" },
    { item: "canned refried beans",         amount_per_person: 0.33, unit: "cup",   walmart_item: "Old El Paso Refried Beans 16oz",        walmart_price: "$1.50/can" },
    { item: "shredded Mexican blend cheese",amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Mexican 4-Cheese Blend 8oz",walmart_price: "$3.00/8oz" },
    { item: "salsa",                        amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Chunky Salsa 16oz",         walmart_price: "$3.00/jar" },
    { item: "sour cream",                   amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Sour Cream 16oz",           walmart_price: "$2.00/tub" },
  ],

  "taco-tots": [
    { item: "80/20 ground beef",            amount_per_person: 3,    unit: "oz",    walmart_item: "Great Value 80/20 Ground Beef 1lb",     walmart_price: "$5.00/lb" },
    { item: "taco seasoning packet",        amount_per_person: 0.13, unit: "packet",walmart_item: "Old El Paso Taco Seasoning 1oz packet",  walmart_price: "$1.00/packet" },
    { item: "Ore-Ida tater tots (frozen)",  amount_per_person: 0.5,  unit: "cup",   walmart_item: "Ore-Ida Golden Tater Tots 32oz",        walmart_price: "$4.50/bag" },
    { item: "shredded Mexican blend cheese",amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Mexican 4-Cheese Blend 8oz",walmart_price: "$3.00/8oz" },
    { item: "sour cream",                   amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Sour Cream 16oz",           walmart_price: "$2.00/tub" },
    { item: "salsa",                        amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Chunky Salsa 16oz",         walmart_price: "$3.00/jar" },
    { item: "cooking oil (frying tots)",    amount_per_person: 1,    unit: "tsp",   walmart_item: "Great Value Vegetable Oil 48oz",        walmart_price: "$4.00/bottle" },
  ],

  "hamdogs-and-beans": [
    { item: "hot dogs",                     amount_per_person: 1,    unit: "each",  walmart_item: "Ball Park Franks 8ct",                  walmart_price: "$3.50/8ct" },
    { item: "diced ham",                    amount_per_person: 2,    unit: "oz",    walmart_item: "Great Value Diced Ham 16oz",            walmart_price: "$4.00/pkg" },
    { item: "Bush's Original Baked Beans",  amount_per_person: 0.5,  unit: "cup",   walmart_item: "Bush's Best Original Baked Beans 28oz", walmart_price: "$2.50/can" },
    { item: "brown sugar",                  amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Light Brown Sugar 2lb",     walmart_price: "$2.00/bag" },
    { item: "yellow mustard",               amount_per_person: 0.5,  unit: "tsp",   walmart_item: "French's Yellow Mustard 20oz",          walmart_price: "$2.00/bottle" },
  ],

  "potato-cheese-soup": [
    { item: "russet potatoes (diced)",      amount_per_person: 0.75, unit: "cup",   walmart_item: "Russet Potatoes 5lb bag",               walmart_price: "$4.00/5lb" },
    { item: "shredded cheddar cheese",      amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Shredded Cheddar 8oz",      walmart_price: "$3.00/8oz" },
    { item: "chicken broth",                amount_per_person: 0.5,  unit: "cup",   walmart_item: "Great Value Chicken Broth 32oz carton", walmart_price: "$2.00/carton" },
    { item: "heavy cream or half-and-half", amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Heavy Whipping Cream 16oz", walmart_price: "$3.00/pint" },
    { item: "bacon (crumbled topping)",     amount_per_person: 1,    unit: "strip", walmart_item: "Great Value Thick Cut Bacon 1lb",       walmart_price: "$6.00/lb" },
    { item: "butter",                       amount_per_person: 0.5,  unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",         walmart_price: "$4.00/lb" },
    { item: "diced onion",                  amount_per_person: 1,    unit: "Tbsp",  walmart_item: "yellow onion",                          walmart_price: "$1.00/each" },
    { item: "garlic powder",                amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Garlic Powder 3.12oz",      walmart_price: "$1.50/jar" },
    { item: "salt and pepper",              amount_per_person: 1,    unit: "pinch", walmart_item: "Morton Salt + Great Value Black Pepper", walmart_price: "$2.00 total" },
    { item: "sour cream (garnish)",         amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Sour Cream 16oz",           walmart_price: "$2.00/tub" },
  ],

  "dutch-kielbasa": [
    { item: "kielbasa / smoked sausage",    amount_per_person: 3,    unit: "oz",    walmart_item: "Hillshire Farm Beef Smoked Sausage 14oz",walmart_price: "$4.50/pkg" },
    { item: "russet potatoes (diced)",      amount_per_person: 0.5,  unit: "cup",   walmart_item: "Russet Potatoes 5lb bag",               walmart_price: "$4.00/5lb" },
    { item: "sauerkraut (drained)",         amount_per_person: 0.25, unit: "cup",   walmart_item: "Great Value Sauerkraut 14.4oz can",     walmart_price: "$1.50/can" },
    { item: "diced onion",                  amount_per_person: 2,    unit: "Tbsp",  walmart_item: "yellow onion",                          walmart_price: "$1.00/each" },
    { item: "garlic powder",                amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Garlic Powder 3.12oz",      walmart_price: "$1.50/jar" },
    { item: "vegetable oil (cooking)",      amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Vegetable Oil 48oz",        walmart_price: "$4.00/bottle" },
  ],

  // ── DESSERTS ─────────────────────────────────────────────────────────────

  "banana-boats": [
    { item: "banana",                       amount_per_person: 1,    unit: "each",  walmart_item: "fresh bananas (priced by lb ~$0.58/lb)", walmart_price: "$0.58/lb" },
    { item: "mini chocolate chips",         amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Toll House Mini Morsels Semi-Sweet 10oz",walmart_price: "$3.50/bag" },
    { item: "mini marshmallows",            amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Jet-Puffed Mini Marshmallows 10oz",     walmart_price: "$2.00/bag" },
    { item: "heavy-duty aluminum foil",     amount_per_person: 1,    unit: "sq ft", walmart_item: "Reynolds Wrap Heavy Duty Foil 50 sq ft",walmart_price: "$7.00/roll" },
  ],

  "peach-cobbler": [
    { item: "canned peach pie filling",     amount_per_person: 0.5,  unit: "cup",   walmart_item: "Great Value Peach Pie Filling 21oz",    walmart_price: "$2.00/can" },
    { item: "yellow cake mix (dry)",        amount_per_person: 0.25, unit: "cup",   walmart_item: "Betty Crocker Super Moist Yellow Cake Mix 15.25oz", walmart_price: "$2.00/box" },
    { item: "cold butter (sliced on top)",  amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",         walmart_price: "$4.00/lb" },
    { item: "cinnamon",                     amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Ground Cinnamon 2.37oz",    walmart_price: "$1.50/jar" },
  ],

  "monkey-bread": [
    { item: "Pillsbury Grands! Biscuits",   amount_per_person: 1.5,  unit: "each",  walmart_item: "Pillsbury Grands! Southern Homestyle Biscuits 8ct",walmart_price: "$3.00/can" },
    { item: "butter (melted)",              amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",         walmart_price: "$4.00/lb" },
    { item: "granulated sugar",             amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Pure Cane Sugar 4lb",       walmart_price: "$3.00/bag" },
    { item: "ground cinnamon",              amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Ground Cinnamon 2.37oz",    walmart_price: "$1.50/jar" },
    { item: "light brown sugar (glaze)",    amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Light Brown Sugar 2lb",     walmart_price: "$2.00/bag" },
  ],

  "s-more-pie": [
    { item: "Graham cracker sheets",        amount_per_person: 4,    unit: "each",  walmart_item: "Honey Maid Graham Crackers 14.4oz",     walmart_price: "$3.50/box" },
    { item: "Hershey's milk chocolate bars",amount_per_person: 0.5,  unit: "each",  walmart_item: "Hershey's Milk Chocolate Bar 1.55oz",   walmart_price: "$1.25/bar" },
    { item: "large marshmallows",           amount_per_person: 3,    unit: "each",  walmart_item: "Jet-Puffed Marshmallows 10oz",          walmart_price: "$2.00/bag" },
    { item: "heavy-duty aluminum foil",     amount_per_person: 1,    unit: "sq ft", walmart_item: "Reynolds Wrap Heavy Duty Foil 50 sq ft",walmart_price: "$7.00/roll" },
  ],

  "apple-crisp": [
    { item: "Granny Smith or Fuji apples (peeled, sliced)", amount_per_person: 0.5, unit: "cup", walmart_item: "Gala apples 3lb bag", walmart_price: "$4.00/3lb bag" },
    { item: "old-fashioned rolled oats",    amount_per_person: 3,    unit: "Tbsp",  walmart_item: "Great Value Old Fashioned Oats 42oz",   walmart_price: "$4.00/canister" },
    { item: "light brown sugar",            amount_per_person: 2,    unit: "Tbsp",  walmart_item: "Great Value Light Brown Sugar 2lb",     walmart_price: "$2.00/bag" },
    { item: "all-purpose flour",            amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value All-Purpose Flour 5lb",     walmart_price: "$3.00/bag" },
    { item: "cold butter (cut in pieces)",  amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",         walmart_price: "$4.00/lb" },
    { item: "ground cinnamon",              amount_per_person: 0.25, unit: "tsp",   walmart_item: "Great Value Ground Cinnamon 2.37oz",    walmart_price: "$1.50/jar" },
  ],

  "pie-iron-pies": [
    { item: "white sandwich bread",         amount_per_person: 2,    unit: "slices",walmart_item: "Great Value White Bread 20oz",          walmart_price: "$3.00/loaf" },
    { item: "fruit pie filling (cherry, apple, or blueberry)", amount_per_person: 3, unit: "Tbsp", walmart_item: "Great Value Cherry Pie Filling 21oz", walmart_price: "$2.00/can" },
    { item: "butter (for iron)",            amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",         walmart_price: "$4.00/lb" },
    { item: "powdered sugar (dusting)",     amount_per_person: 1,    unit: "tsp",   walmart_item: "Great Value Powdered Sugar 2lb",        walmart_price: "$2.00/bag" },
  ],

  "dutch-oven-pies": [
    { item: "Pillsbury refrigerated pie crust", amount_per_person: 0.13, unit: "crust", walmart_item: "Pillsbury Pet-Ritz Deep Dish Pie Crusts 2ct",walmart_price: "$3.50/2ct" },
    { item: "fruit pie filling",            amount_per_person: 0.33, unit: "cup",   walmart_item: "Great Value Cherry or Apple Pie Filling 21oz",walmart_price: "$2.00/can" },
    { item: "butter",                       amount_per_person: 0.5,  unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",         walmart_price: "$4.00/lb" },
    { item: "granulated sugar (optional)",  amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Pure Cane Sugar 4lb",       walmart_price: "$3.00/bag" },
  ],

  "black-forest-cobbler": [
    { item: "cherry pie filling",           amount_per_person: 0.4,  unit: "cup",   walmart_item: "Great Value Cherry Pie Filling 21oz",   walmart_price: "$2.00/can" },
    { item: "chocolate cake mix (dry)",     amount_per_person: 0.25, unit: "cup",   walmart_item: "Betty Crocker Super Moist Chocolate Fudge Cake Mix 15.25oz",walmart_price: "$2.00/box" },
    { item: "cold butter (sliced on top)",  amount_per_person: 1,    unit: "Tbsp",  walmart_item: "Great Value Salted Butter 1lb",         walmart_price: "$4.00/lb" },
    { item: "water (small amount for mix)", amount_per_person: 1,    unit: "Tbsp",  walmart_item: "—",                                     walmart_price: "—" },
  ],

  "fizzy-fruit-cobbler": [
    { item: "fruit pie filling (any flavor)",amount_per_person: 0.4, unit: "cup",   walmart_item: "Great Value Pie Filling 21oz (any flavor)",walmart_price: "$2.00/can" },
    { item: "yellow cake mix (dry)",        amount_per_person: 0.25, unit: "cup",   walmart_item: "Betty Crocker Super Moist Yellow Cake Mix 15.25oz",walmart_price: "$2.00/box" },
    { item: "Sprite or 7-Up (poured over)", amount_per_person: 2,    unit: "oz",    walmart_item: "Sprite 2-Liter bottle",                 walmart_price: "$2.00/2L" },
  ],

  "cornbread": [
    { item: "Jiffy corn muffin mix",        amount_per_person: 0.17, unit: "box",   walmart_item: "Jiffy Corn Muffin Mix 8.5oz",           walmart_price: "$0.89/box" },
    { item: "large egg",                    amount_per_person: 0.17, unit: "each",  walmart_item: "Great Value Large Eggs 18ct",           walmart_price: "$4.50/18ct" },
    { item: "milk",                         amount_per_person: 0.17, unit: "cup",   walmart_item: "Great Value Whole Milk 1 gallon",       walmart_price: "$3.50/gal" },
    { item: "butter (pan grease)",          amount_per_person: 0.5,  unit: "tsp",   walmart_item: "Great Value Salted Butter 1lb",         walmart_price: "$4.00/lb" },
  ],

};
