// Cooking instructions part 2 — extends window.COOKING_INSTRUCTIONS (A–K)
(function() {
  Object.assign(window.COOKING_INSTRUCTIONS, {

  // BREAKFASTS ──────────────────────────────────────────────────────────────────

  "basic-french-toast": {
    equipment: "Gas grill — skillet or griddle",
    steps: [
      "Set grill to medium. Place skillet on grate and heat 2–3 min.",
      "In a bowl, beat 2 eggs with 1/4 cup milk, 1/2 tsp cinnamon, and 1 tsp vanilla per 4 slices.",
      "Melt a pat of butter in the skillet.",
      "Dip each bread slice in the egg mixture, coating both sides. Let the excess drip off.",
      "Lay slices in the skillet. Cook 2–3 min per side until golden brown.",
      "Serve with powdered sugar and syrup."
    ],
    done_when: "Both sides are golden brown, egg coating is fully cooked through.",
    safety: "Eggs must be fully cooked — no wet or runny egg visible at the edges."
  },
  "breakfast-cornbread": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Cook sausage in Dutch oven over medium heat, breaking apart, 6–7 min. Drain fat.",
      "In a bowl, mix Jiffy corn muffin mix, eggs, and milk per box. Stir in shredded cheese.",
      "Pour batter over the cooked sausage in the Dutch oven. Spread evenly.",
      "Cover and cook on medium-low 18–22 min until golden and toothpick comes out clean.",
      "Let cool 5 min before cutting into wedges."
    ],
    done_when: "Toothpick clean, top golden, no raw batter.",
    safety: "Dutch oven lid is very hot — always use heat gloves."
  },
  "breakfast-sausage-balls": {
    equipment: "Gas grill — skillet",
    steps: [
      "In a bowl, mix raw ground sausage, Bisquick, and shredded cheddar together with your hands until combined.",
      "Roll into 1-inch balls.",
      "Heat skillet on grill over medium. No oil needed — sausage has enough fat.",
      "Place balls in skillet. Cook 10–12 min, turning every 3 min, until browned all over and cooked through.",
      "Drain on paper towels. Serve with dipping sauce."
    ],
    done_when: "Browned all over, internal temp 165°F, no pink inside.",
    safety: "Wash hands well after mixing and rolling raw sausage."
  },
  "egg-fu-yung": {
    equipment: "Gas grill — skillet",
    steps: [
      "Set grill to medium. Heat a little oil in the skillet.",
      "Beat 2–3 eggs per person with a fork. Stir in diced ham, bean sprouts, and green onion.",
      "Pour about 1/3 cup of the egg mixture per patty into the hot skillet.",
      "Cook 2 min until the bottom is set and golden. Flip carefully with a spatula. Cook 1–2 more min.",
      "Serve with soy sauce on the side."
    ],
    done_when: "Both sides golden, eggs fully set throughout.",
    safety: "Eggs must be fully cooked — no runny center."
  },
  "egg-in-a-hole": {
    equipment: "Gas grill — skillet",
    steps: [
      "Set grill to medium. Melt butter in skillet.",
      "Use a cup or a knife to cut a circle from the center of each bread slice.",
      "Place bread slices in the skillet. Crack one egg into the hole in each slice.",
      "Cook 2–3 min until the egg white is set on the bottom. Flip the whole thing carefully.",
      "Cook 1–2 more min for a set yolk, or less if scouts like it runny.",
      "Toast the bread circles in the butter at the same time. Serve together."
    ],
    done_when: "Egg whites are fully set and no longer translucent.",
    safety: "Flip carefully — the egg will slide out if the spatula is too small."
  },
  "egg-in-an-orange": {
    equipment: "Gas grill — foil packet on grates",
    steps: [
      "Cut the top off each orange about 1/4 of the way down. Scoop out the inside pulp with a spoon (eat the pulp as a snack).",
      "Crack one egg into the hollow orange shell. Season with salt and pepper.",
      "Set the stuffed orange in the center of a square of foil. Fold the foil up around it to hold it upright.",
      "Place on grill over medium heat. Cook 12–15 min until the egg is set inside.",
      "Open foil carefully and eat the egg right out of the orange shell with a spoon."
    ],
    done_when: "Egg whites fully set, yolk cooked to preference.",
    safety: "Foil and the orange shell are hot — use gloves when handling. Also works over campfire coals for 12 min."
  },
  "granny-s-french-toast": {
    equipment: "Gas grill — skillet",
    steps: [
      "Beat eggs with milk, vanilla, and cinnamon in a bowl — about 2 eggs per 4 slices.",
      "Melt butter in skillet on grill over medium.",
      "Dip thick-cut bread in egg mixture, coating both sides. Let excess drip off.",
      "Cook 3 min per side until deep golden brown.",
      "Serve with powdered sugar, fresh berries if available, and syrup."
    ],
    done_when: "Deep golden on both sides, egg fully cooked through.",
    safety: "Use thick bread — thin slices get soggy and fall apart when flipping."
  },
  "hashbrown-chicken-casserole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Sauté diced onion in a little butter 3–4 min.",
      "Add cooked, shredded chicken, frozen hashbrowns, cream of chicken soup, and sour cream. Stir to combine.",
      "Sprinkle shredded cheddar cheese over the top.",
      "Cover and cook on medium-low 25–30 min until hashbrowns are tender and cheese is melted.",
      "Let rest 5 min before scooping."
    ],
    done_when: "Hashbrowns soft when poked, cheese melted on top.",
    safety: "If using raw chicken, fully cook it first to 165°F before mixing into the casserole."
  },
  "huevos-rancheros": {
    equipment: "Gas grill — large skillet",
    steps: [
      "Heat skillet on grill over medium. Warm canned salsa or Ro-Tel in the skillet 2 min.",
      "Crack eggs directly into the salsa, spacing them out.",
      "Cover the skillet with a lid or foil. Cook 4–5 min until egg whites are set.",
      "Warm tortillas on grate 30 sec per side.",
      "Lay a tortilla on each plate. Spoon an egg and some salsa on top. Top with canned black beans, shredded cheese, and sour cream."
    ],
    done_when: "Egg whites fully set and opaque, yolk cooked to preference.",
    safety: "Egg whites must be fully set — clear/translucent whites mean they're not done yet."
  },
  "jellied-french-toast": {
    equipment: "Gas grill — skillet",
    steps: [
      "Make a jam sandwich: spread jelly or jam between two slices of bread.",
      "Beat eggs with milk and a pinch of cinnamon. Dip the whole sandwich in the egg mixture.",
      "Melt butter in skillet on grill over medium.",
      "Cook the stuffed sandwich 3 min per side until golden brown on both sides.",
      "Cut diagonally and serve with powdered sugar."
    ],
    done_when: "Golden on both sides, jam warmed inside.",
    safety: "Press down gently with spatula to keep the sandwich together while cooking."
  },
  "mini-hash": {
    equipment: "Gas grill — large skillet",
    steps: [
      "Set grill to medium-high. Heat a little oil in the skillet.",
      "Add diced potatoes and cook 5 min until starting to brown. Don't stir too much.",
      "Add diced ham or cooked sausage and diced onion. Cook 4 more min, stirring occasionally.",
      "Add diced bell pepper, season with garlic powder, salt, and pepper. Cook 3 more min.",
      "Push everything to the edges. Crack eggs into the center. Scramble gently, then mix everything together.",
      "Cook until eggs are fully set. Serve with hot sauce."
    ],
    done_when: "Potatoes golden, eggs fully set, no runny egg.",
    safety: "Wash hands after handling raw eggs."
  },
  "mumbo-jumbo-breakfast": {
    equipment: "Gas grill — large skillet",
    steps: [
      "Set grill to medium-high. Cook diced bacon or sausage in skillet until browned. Drain most fat.",
      "Add frozen hashbrowns. Press flat. Cook 4–5 min without stirring until brown on the bottom.",
      "Flip and cook 3 more min.",
      "Add any leftover veggies or cooked meat from the cooler. Stir together.",
      "Beat eggs and pour over everything. Scramble until set, about 3 min.",
      "Season generously. Top with cheese and cover with foil 1 min to melt."
    ],
    done_when: "Eggs fully set, hashbrowns golden.",
    safety: "This is a great way to use up leftover ingredients from the cooler — make sure everything was stored properly (below 40°F)."
  },
  "pizza-for-breakfast": {
    equipment: "Gas grill — skillet",
    steps: [
      "Set grill to medium. Heat a little oil in the skillet.",
      "Cook scrambled eggs in the skillet until fully set. Remove and set aside.",
      "Lay a large flour tortilla in the skillet. Spread pizza sauce over the tortilla.",
      "Add scrambled eggs, crumbled cooked sausage, and shredded mozzarella on top.",
      "Cover skillet with foil. Cook on low 3–4 min until cheese melts.",
      "Slide onto a cutting board, cut into wedges, and serve."
    ],
    done_when: "Cheese melted, tortilla lightly crisped on the bottom.",
    safety: "Eggs must be fully cooked before adding to the pizza."
  },
  "pom-pom-french-toast": {
    equipment: "Gas grill — skillet",
    steps: [
      "Cut bread into small cubes (about 1-inch). Beat eggs with milk, cinnamon, and vanilla.",
      "Toss bread cubes in the egg mixture until all coated.",
      "Melt butter in skillet on grill over medium.",
      "Add coated bread cubes in a single layer. Cook 2 min, toss gently, cook 2 more min until golden all over.",
      "Serve in a bowl with syrup poured over the top."
    ],
    done_when: "Bread cubes golden and crispy on all sides, egg fully cooked.",
    safety: "Stir gently — cubes break apart if you're too rough."
  },
  "pork-chops-and-veggies": {
    equipment: "Gas grill — skillet",
    steps: [
      "Season pork chops with salt, pepper, and garlic powder on both sides.",
      "Set grill to medium-high. Heat oil in skillet.",
      "Sear pork chops 4–5 min per side until golden and internal temp reaches 145°F.",
      "Remove chops. In the same skillet, add diced bell pepper and onion. Cook 4 min until soft.",
      "Return chops to pan, reduce heat to medium-low, cover with foil. Cook 3 more min.",
      "Serve chops with the sautéed veggies over the top."
    ],
    done_when: "Pork internal temp 145°F, juices run clear, veggies soft.",
    safety: "Pork must reach 145°F — use a thermometer. Undercooked pork can make you very sick."
  },
  "spud-egg": {
    equipment: "Gas grill — large skillet",
    steps: [
      "Set grill to medium-high. Heat oil in skillet.",
      "Add diced potatoes (or frozen hashbrowns). Cook 6–8 min, stirring occasionally, until browned and crispy.",
      "Season with salt, pepper, and garlic powder.",
      "Push potatoes to the sides. Crack eggs into the center.",
      "Scramble the eggs, then mix with the potatoes until eggs are fully set.",
      "Serve topped with shredded cheese."
    ],
    done_when: "Potatoes golden, eggs fully cooked.",
    safety: "Wash hands after handling raw eggs."
  },
  "wake-em-up": {
    equipment: "Gas grill — skillet",
    steps: [
      "Set grill to medium. Cook bacon in skillet until crispy. Remove and crumble.",
      "In the bacon drippings, cook diced potatoes 6–8 min until golden.",
      "Add diced onion and bell pepper. Cook 3 more min.",
      "Beat eggs with a splash of hot sauce. Pour over the potato mixture.",
      "Scramble everything together until eggs are set.",
      "Top with crumbled bacon and shredded cheese."
    ],
    done_when: "Eggs fully set, potatoes golden.",
    safety: "Hot sauce is optional — ask scouts' preference before adding."
  },
  "zip-loc-omelette": {
    equipment: "Gas grill — large pot of boiling water",
    steps: [
      "Bring a large pot of water to a boil on the grill.",
      "Each scout writes their name on a quart-size FREEZER zip-lock bag.",
      "Each scout cracks 2 eggs into their bag and adds their choice of mix-ins: diced ham, cheese, diced pepper, onion.",
      "Squeeze out excess air and seal the bag tightly.",
      "Lower all bags into the boiling water with tongs. Make sure bags float freely without touching the pot bottom.",
      "Cook 12–15 min until eggs are fully set. Squeeze the bag — it should feel firm.",
      "Lift out with tongs. Open carefully — steam escapes first. Roll the omelette onto a plate."
    ],
    done_when: "Eggs are fully set and firm when squeezed.",
    safety: "FREEZER bags only — regular bags melt in boiling water. Use tongs always."
  },

  // LUNCHES ─────────────────────────────────────────────────────────────────────

  "camp-wontons": {
    equipment: "Dutch oven — with oil, on gas grill",
    steps: [
      "Mix ground pork or beef with shredded cabbage, soy sauce, garlic powder, and ginger powder in a bowl.",
      "Lay wonton wrappers flat. Place 1 tsp filling in the center of each.",
      "Wet the edges of the wrapper with a finger dipped in water. Fold in half, pressing edges firmly to seal.",
      "Pour 2 inches of vegetable oil into Dutch oven on grill over medium-high. Heat until oil shimmers (about 350°F — drop a small piece of wrapper in; if it sizzles and floats, it's ready).",
      "Fry wontons in batches 3–4 min until golden brown. Drain on paper towels.",
      "Serve with soy sauce for dipping."
    ],
    done_when: "Wontons golden brown all over, filling cooked through.",
    safety: "Hot oil burns severely — never leave the Dutch oven unattended. Use tongs, never fingers. Keep lid nearby in case of grease fire."
  },
  "club-house-grill-sandwich": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Layer turkey or ham, bacon, and a slice of cheese between three slices of bread.",
      "Butter the outside of the top and bottom bread slices.",
      "Place directly on grill grates over medium heat.",
      "Grill 3 min, then carefully flip with a wide spatula. Grill 3 more min until bread is golden and cheese is melted.",
      "Cut diagonally and serve with a pickle."
    ],
    done_when: "Bread golden on both sides, cheese melted inside.",
    safety: "Butter drips can cause small flare-ups — watch closely and close lid briefly if needed."
  },
  "jerky": {
    equipment: "Gas grill — low heat, grates",
    steps: [
      "Slice beef (top round or flank steak) very thin — about 1/8 inch. Freeze the meat 30 min first to make slicing easier.",
      "Marinate strips in soy sauce, Worcestershire, garlic powder, onion powder, black pepper for at least 2 hours (or overnight in the cooler).",
      "Set gas grill to the lowest possible heat setting.",
      "Lay strips directly on the grill grates. Close the lid.",
      "Cook on low heat 2–4 hours, turning once halfway through, until strips are dry and chewy — not wet in the center.",
      "Cool completely before eating or storing."
    ],
    done_when: "Strips are dry all the way through and bend without breaking.",
    safety: "Meat must reach 165°F to be safe. This is a long, slow process — jerky made at camp should be eaten the same day, not stored."
  },
  "nacho-dip": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium.",
      "Brown ground beef with taco seasoning 7–8 min, breaking apart. Drain fat.",
      "Add a jar of salsa and a block of Velveeta cut into cubes. Stir.",
      "Reduce to low heat. Stir continuously until Velveeta is completely melted and smooth, about 5 min.",
      "Pour in canned black beans (drained). Stir. Keep warm on low.",
      "Serve with a big bag of tortilla chips for dipping."
    ],
    done_when: "Cheese fully melted and smooth, beef cooked through.",
    safety: "Once Velveeta is melted, keep heat very low — it scorches quickly. Stir frequently."
  },

  // DINNERS — BEEF ──────────────────────────────────────────────────────────────

  "2-hour-chili": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown ground beef and diced onion 7–8 min. Drain fat.",
      "Add minced garlic, chili powder, cumin, garlic powder, salt, and pepper. Stir and cook 2 min.",
      "Add diced tomatoes, tomato sauce, kidney beans, and 1 cup beef broth. Stir.",
      "Bring to a boil, reduce to medium-low. Simmer uncovered 90 min, stirring every 15 min.",
      "Taste and adjust seasoning. Serve topped with shredded cheese and sour cream."
    ],
    done_when: "Chili is thick, dark, and deeply flavored. Fat has risen to the top.",
    safety: "Long simmering chili can scorch on the bottom — stir every 15 min and reduce heat if needed."
  },
  "5-alarm-chili": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown beef and onion 7–8 min. Drain fat.",
      "Add 2 Tbsp chili powder, 1 tsp cayenne, 1 tsp cumin, garlic powder, and salt. Stir 1 min.",
      "Add Ro-Tel, tomato sauce, kidney beans, and 1 cup beef broth. Stir.",
      "Bring to a boil, reduce to medium-low. Simmer 30 min, stirring occasionally.",
      "Top with shredded cheese. Warn scouts this is spicy before serving."
    ],
    done_when: "Chili thick and deeply colored. Has some kick.",
    safety: "This is genuinely spicy — have milk or sour cream on hand to cut the heat."
  },
  "barbeque-hamburger": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Form ground beef into patties about 1/2 inch thick. Season both sides with salt and pepper.",
      "Preheat grill to medium-high.",
      "Place patties on grates. Don't press down — it squeezes out the juice.",
      "Cook 4–5 min until juices are bubbling on top. Flip once and cook 4 more min.",
      "Brush BBQ sauce on both sides in the last 2 min of cooking.",
      "Melt a slice of cheese on top by tenting foil over the burger for 1 min.",
      "Serve on bun with your toppings."
    ],
    done_when: "Internal temp 160°F, juices run clear when pressed.",
    safety: "Ground beef must reach 160°F — no pink in the center. Use a thermometer."
  },
  "beef-burgundy": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Cut beef chuck into 1-inch cubes. Season with salt and pepper.",
      "Heat Dutch oven on grill over medium-high with a little oil. Brown beef in batches, 3–4 min per side. Remove.",
      "In the same pot, cook diced onion and sliced mushrooms 4 min.",
      "Return beef to the pot. Add beef broth, a splash of Worcestershire sauce, garlic powder, and dried thyme.",
      "Bring to a boil. Reduce to medium-low, cover, and simmer 60–90 min until beef is fork-tender.",
      "Taste and adjust salt. Serve over egg noodles or with bread."
    ],
    done_when: "Beef is very tender and pulls apart easily with a fork.",
    safety: "Long simmering — stir every 20 min to prevent sticking on the bottom."
  },
  "beef-curry": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high with a little oil.",
      "Brown ground beef or beef chunks 7–8 min. Drain fat.",
      "Add diced onion and cook 3 min. Add curry powder (2 Tbsp) and garlic powder. Stir 1 min.",
      "Pour in one can of coconut milk and one can of diced tomatoes. Stir and bring to a boil.",
      "Reduce to medium-low. Simmer 20–25 min until sauce thickens slightly.",
      "Serve over instant white rice, cooked separately."
    ],
    done_when: "Beef cooked through, sauce thickened and fragrant.",
    safety: "Coconut milk can boil over quickly — reduce heat as soon as you see it start to bubble hard."
  },
  "beef-goulash": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown ground beef and diced onion 7–8 min. Drain fat.",
      "Add garlic powder, paprika (2 Tbsp), Italian seasoning, salt, and pepper. Stir.",
      "Add diced tomatoes, tomato sauce, and 1 cup beef broth. Stir and bring to a boil.",
      "Add dry elbow macaroni. Stir to submerge. Reduce to medium-low.",
      "Cover and cook 10–12 min, stirring every 3 min, until pasta is tender.",
      "Serve topped with shredded cheddar."
    ],
    done_when: "Pasta tender, sauce thick, beef cooked through.",
    safety: "Stir regularly — pasta sticks and burns on the bottom."
  },
  "beef-pot-roast": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Season a chuck roast generously on all sides with salt, pepper, and garlic powder.",
      "Heat Dutch oven on grill over medium-high with oil. Sear the roast 4 min per side until browned. Remove.",
      "Add diced onion, carrots, and diced potatoes to the pot. Cook 3 min.",
      "Place roast on top of the vegetables. Pour beef broth over everything until the roast is about halfway covered.",
      "Cover with lid. Reduce grill to medium-low. Cook 2–3 hours, checking every 30 min and adding broth if needed.",
      "Done when a fork slides easily into the meat and it pulls apart."
    ],
    done_when: "Meat is fall-apart tender when pulled with two forks.",
    safety: "This is a long cook — keep grill at medium-low and check regularly so it doesn't boil dry."
  },
  "cow-sludge-on-rice": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Cook instant white rice in a separate pot per package directions.",
      "Meanwhile, brown ground beef in Dutch oven over medium-high, 7–8 min. Drain fat.",
      "Add cream of mushroom soup, beef broth, and garlic powder. Stir until combined.",
      "Simmer on medium-low 10 min, stirring occasionally, until sauce thickens.",
      "Serve the beef and mushroom gravy over the rice."
    ],
    done_when: "Sauce thickened and creamy, beef fully cooked.",
    safety: "This is rich and filling — plan for about 3/4 cup of rice per scout."
  },
  "easy-brisket": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Rub a small brisket flat on all sides with salt, pepper, garlic powder, and onion powder.",
      "Heat Dutch oven on grill over medium-high with oil. Sear brisket 4 min per side until browned. Remove.",
      "Add sliced onion to the pot. Cook 2 min. Add beef broth and a few splashes of Worcestershire sauce.",
      "Place brisket back in the pot, fat-side up. Broth should come up the sides about 1 inch.",
      "Cover tight. Reduce to medium-low. Cook 3–4 hours, checking every 45 min.",
      "Done when brisket is fork-tender and shreds easily. Slice against the grain."
    ],
    done_when: "Brisket shreds when pulled with a fork, internal temp 200°F.",
    safety: "Long cook — never let the pot go dry. Add broth as needed."
  },
  "fast-teriyaki-flank-steak": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Marinate flank steak in teriyaki sauce at least 30 min in the cooler (overnight is better).",
      "Set grill to high. Remove steak from marinade and pat lightly with a paper towel — don't dry it out.",
      "Place steak on grates. Cook 4–5 min per side for medium, 3 min per side for medium-rare.",
      "Let the steak rest 5 min before slicing.",
      "Slice AGAINST the grain in thin strips — this makes it tender."
    ],
    done_when: "Internal temp 135°F (medium-rare) to 160°F (well done). Always rest before slicing.",
    safety: "Teriyaki marinade burns quickly on high heat — watch for flare-ups."
  },
  "french-roast-beef": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Place a chuck roast in the Dutch oven. Pour one can of French onion soup and one can of beef broth over it.",
      "Add a splash of Worcestershire sauce and garlic powder.",
      "Cover with lid. Cook on grill over medium-low 2.5–3 hours.",
      "Check every 45 min — add a splash of water if the liquid gets low.",
      "Done when meat pulls apart easily. Serve the beef with the juices poured over it on a roll."
    ],
    done_when: "Meat pulls apart with two forks.",
    safety: "Low and slow — keep heat at medium-low the entire time."
  },
  "hungarian-goulash": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown beef chunks with diced onion 7–8 min. Drain fat.",
      "Add 2 Tbsp sweet paprika, garlic powder, salt, and pepper. Stir 1 min.",
      "Add diced tomatoes and beef broth until beef is about halfway covered.",
      "Bring to a boil. Reduce to medium-low, cover, simmer 45–60 min until beef is tender.",
      "Stir in a large spoonful of sour cream at the end. Serve over egg noodles."
    ],
    done_when: "Beef is fork-tender, sauce has thickened.",
    safety: "Add sour cream off the direct heat — it can curdle if it boils."
  },
  "hot-n-spicey-bbq-beef": {
    equipment: "Gas grill — grates",
    steps: [
      "Mix BBQ sauce with hot sauce and garlic powder in a bowl.",
      "Season beef strips, short ribs, or burgers with salt and pepper.",
      "Grill on grates over medium-high heat 4–5 min per side.",
      "Brush liberally with the spicy BBQ sauce in the last 2 min. Flip and brush the other side.",
      "Let rest 3 min before serving."
    ],
    done_when: "Internal temp 160°F, sauce is caramelized (dark and sticky, not burnt).",
    safety: "BBQ sauce burns fast at high heat — add it in the LAST 2 min only."
  },
  "kabobs": {
    equipment: "Gas grill — grates with skewers",
    steps: [
      "If using wooden skewers, soak them in water for 30 min so they don't burn.",
      "Cut beef (or chicken), bell peppers, onion, and mushrooms into 1-inch chunks.",
      "Thread onto skewers: alternate meat and vegetables.",
      "Season all over with salt, pepper, and garlic powder. Brush with olive oil or melted butter.",
      "Grill on grates over medium-high heat, turning every 3 min for 12–15 min total.",
      "Done when meat is cooked through and vegetables have charred edges."
    ],
    done_when: "Beef 160°F, chicken 165°F, vegetables soft with char marks.",
    safety: "Metal skewer tips are extremely hot — handle from the end only. If chicken is used, it must reach 165°F."
  }

  });
})();
