// Cooking instructions — equipment: portable gas grill, gas pizza oven, Dutch ovens.
// One method per recipe. Additional files extend this object.
window.COOKING_INSTRUCTIONS = {

  // BREAKFASTS ──────────────────────────────────────────────────────────────────

  "breakfast-burritos": {
    equipment: "Gas grill — large skillet on grate",
    steps: [
      "Set grill to medium. Place skillet on grate and let it heat 2 min.",
      "Add sausage, break apart, cook 6–7 min until no pink. Drain fat.",
      "Crack eggs over the sausage. Scramble together 3 min until fully set.",
      "Warm tortillas directly on the grate 30 sec per side — they should flex, not crisp.",
      "Spoon filling onto each tortilla, top with cheese and salsa, roll up tightly and serve."
    ],
    done_when: "Eggs fully set, no runny parts. Sausage has no pink.",
    safety: "Wash hands after handling raw eggs and raw sausage."
  },
  "simple-breakfast-burritos": {
    equipment: "Gas grill — skillet",
    steps: [
      "Set grill to medium. Heat skillet on grate.",
      "Cook sausage 6–7 min, breaking apart. Drain fat.",
      "Crack eggs over sausage, scramble together until fully cooked, about 3 min.",
      "Warm tortillas on grate 30 sec per side.",
      "Fill, top with cheese, roll, and serve."
    ],
    done_when: "Eggs set, sausage no pink.",
    safety: "Wash hands after raw eggs and raw meat."
  },
  "pecs-breakfast": {
    equipment: "Gas grill — large cast-iron skillet",
    steps: [
      "Set grill to medium-high. Heat skillet 3 min.",
      "Cook sausage, breaking apart, 6–7 min until browned. Remove and leave drippings.",
      "Add frozen hashbrowns in a flat layer. Press down. Cook 5 min without stirring.",
      "Flip hashbrowns in sections, cook 4 more min until golden and crispy.",
      "Return sausage to the center. Crack eggs over everything and scramble until set, about 3 min.",
      "Top with cheese, cover with foil 1 min to melt. Salt and pepper to taste."
    ],
    done_when: "Hashbrowns golden, eggs fully set.",
    safety: "Cast iron gets very hot — use heat gloves when moving the skillet."
  },
  "breakfast-in-a-bag": {
    equipment: "Gas grill — large pot of boiling water",
    steps: [
      "Bring a large pot of water to a boil on the grill.",
      "Each scout cracks 2 eggs into a quart-size FREEZER zip-lock bag (must be freezer grade — regular bags melt).",
      "Add crumbled cooked sausage and a handful of frozen hashbrowns to each bag.",
      "Squeeze out air, seal tight. Lower all bags into the boiling water with tongs.",
      "Boil 13–15 min. Gently squeeze a bag — if the center feels firm, it's done.",
      "Lift out with tongs. Snip a corner open carefully — steam escapes first. Eat from the bag."
    ],
    done_when: "Eggs are firm all the way through when squeezed.",
    safety: "Use FREEZER bags only — regular bags melt. Use tongs in and out. Steam burns."
  },
  "pancakes": {
    equipment: "Gas grill — flat griddle or large skillet",
    steps: [
      "Set grill to medium. Place griddle on grate, heat 3–4 min.",
      "Mix pancake batter with water per box. Lumps are fine — don't overmix.",
      "Melt a pat of butter on the griddle. Pour 1/4 cup batter per pancake.",
      "Cook until bubbles form on top and edges look dry, about 2 min. Flip once.",
      "Cook 1–2 more min until golden on the bottom. Don't flip again.",
      "Keep finished pancakes warm tented under foil. Serve with syrup."
    ],
    done_when: "Both sides golden, no raw batter oozes when pressed.",
    safety: "Don't press down on pancakes with a spatula — it makes them dense."
  },
  "mcpancakes": {
    equipment: "Gas grill — grates for sausage, skillet for pancakes",
    steps: [
      "Set grill to medium. Lay sausage links directly on grates. Turn every 2 min for 8–10 min until browned all over.",
      "While sausage cooks, mix pancake batter per box.",
      "Melt butter in skillet on grate. Pour 1/4 cup batter per pancake. Cook 2 min until bubbles form, flip once, 1–2 more min.",
      "Serve 2–3 pancakes per scout with syrup and 2 sausage links."
    ],
    done_when: "Sausage links reach 160°F, no pink inside. Pancakes golden both sides.",
    safety: "Sausage fat drips on the grate — keep lid nearby in case of flare-up."
  },
  "scramble": {
    equipment: "Gas grill — large skillet",
    steps: [
      "Set grill to medium. Heat skillet on grate.",
      "Cook sausage, breaking apart, 6–7 min until browned. Drain most fat.",
      "Add diced pepper and onion, cook 3 min until soft.",
      "Beat eggs with a fork in a bowl. Pour over the skillet mixture.",
      "Let sit 30 sec, then push from edges to center slowly with a spatula.",
      "Remove from heat when eggs are just set but still moist — they finish cooking from the pan's heat.",
      "Sprinkle cheese on top, cover with foil 1 min to melt."
    ],
    done_when: "Eggs set but moist — not browned, not runny.",
    safety: "Eggs must be fully cooked. Wash hands after cracking."
  },
  "armadillo-eggs": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Hard-boil eggs: place in pot of cold water on grill, bring to boil, cook 10 min. Cool in cold water, peel.",
      "Flatten a handful of raw breakfast sausage in your palm into a flat round.",
      "Place one peeled egg in the center. Wrap the sausage around it completely and seal all gaps.",
      "Place wrapped eggs on grill grate over medium heat.",
      "Cook 10–12 min, turning every 2–3 min, until sausage is golden brown all over.",
      "Top with shredded cheese in the last minute and tent with foil to melt."
    ],
    done_when: "Sausage golden brown all over, no pink, internal temp 165°F.",
    safety: "Wash hands well after forming raw sausage. Jalapeño juice burns eyes — don't touch your face."
  },
  "breakfast-casserole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook sausage 6–7 min, breaking apart. Drain fat.",
      "Spread frozen hashbrowns in an even layer over the sausage. Don't stir.",
      "Beat eggs with milk, salt, and pepper. Pour evenly over the hashbrowns.",
      "Sprinkle cheese over the top. Cover with lid.",
      "Reduce grill to medium-low. Cook 22–25 min — don't lift the lid.",
      "Shake the pot gently. If it doesn't jiggle, it's done. Let rest 5 min before scooping."
    ],
    done_when: "Center fully set (no jiggle), cheese melted, edges lightly golden.",
    safety: "Dutch oven lid is extremely hot — always use heat gloves."
  },
  "mountain-man-omelette": {
    equipment: "Dutch oven — 14-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Cook sausage until browned, breaking apart. Remove.",
      "Add oil, spread hashbrowns in an even layer. Cook 5 min until the bottom starts to brown.",
      "Add diced peppers and onion over the top. Cook 3 more min.",
      "Return sausage to the pot and spread everything evenly.",
      "Beat eggs with milk, pour evenly over the mixture. Sprinkle cheese on top.",
      "Cover and reduce to medium-low. Cook 15–20 min until eggs are set.",
      "Test by pressing the center — it should feel firm, not liquid. Let rest 5 min."
    ],
    done_when: "Eggs fully set throughout, no runny liquid.",
    safety: "This feeds the whole patrol — confirm every section of eggs is cooked before serving."
  },
  "egg-bake": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook sausage until browned. Drain fat.",
      "Beat eggs with milk, salt, and pepper. Pour over sausage.",
      "Sprinkle cheese over the top. Cover with lid.",
      "Cook on medium-low 18–22 min until eggs are set.",
      "Shake gently — no jiggle means done. Scoop into portions."
    ],
    done_when: "Eggs fully set, cheese melted, no liquid when pressed.",
    safety: "Eggs must reach 160°F. The center takes longer than the edges — always check it."
  },

  // LUNCHES ─────────────────────────────────────────────────────────────────────

  "taco-in-a-bag": {
    equipment: "Gas grill — small skillet",
    steps: [
      "Cook ground beef in skillet on grill over medium-high, breaking apart, 7–8 min until no pink. Drain fat.",
      "Add taco seasoning and 1/4 cup water. Stir and simmer 2 min.",
      "Open each Fritos bag and tear or cut across the top, fold the sides down.",
      "Spoon 3–4 Tbsp seasoned beef into each bag on top of the chips.",
      "Top with beans, cheese, sour cream, and salsa. Eat from the bag with a fork."
    ],
    done_when: "Beef fully browned, no pink.",
    safety: "Ground beef must reach 160°F. Drain fat carefully — it's hot."
  },
  "a-w-chili-dogs": {
    equipment: "Gas grill — grates and small pot",
    steps: [
      "Pour canned chili into a small pot on grill over low heat. Stir occasionally until hot.",
      "Lay hot dogs on grates over medium heat. Turn every 2 min for 6–7 min.",
      "Toast bun halves face-down on grate for 60 sec.",
      "Put dog in bun, spoon warm chili over top. Top with shredded cheddar."
    ],
    done_when: "Hot dogs heated through with grill marks. Chili is steaming.",
    safety: "Don't let chili scorch — stir it."
  },
  "sonic-s-chili-dogs": {
    equipment: "Gas grill — grates and small pot",
    steps: [
      "Warm canned chili in a pot on grill over low heat.",
      "Grill hot dogs on grates over medium, turning every 2 min for 6–7 min.",
      "Toast buns face-down on grate 60 sec.",
      "Assemble: dog in bun, chili, diced onion, shredded cheese, mustard."
    ],
    done_when: "Hot dogs heated with grill marks.",
    safety: "Stir chili so it doesn't scorch."
  },
  "corn-dogs": {
    equipment: "Gas grill — grates",
    steps: [
      "Set grill to medium. Place frozen corn dogs directly on grates.",
      "Turn every 2–3 min for 10–12 min total until coating is golden brown all over.",
      "Serve with ketchup and mustard."
    ],
    done_when: "Coating golden brown all over, internal temp 165°F.",
    safety: "Frozen corn dogs take longer — check the center is hot before serving."
  },
  "tuna-tortillas": {
    equipment: "No cooking needed",
    steps: [
      "Drain canned tuna and break apart in a bowl.",
      "Mix with mayonnaise and sweet relish until combined.",
      "Lay tortilla flat. Spread tuna down the center. Top with shredded lettuce.",
      "Roll tightly and serve."
    ],
    done_when: "Ready immediately.",
    safety: "Keep mayo-based mix cold. Don't leave it sitting in the sun."
  },
  "meatball-subs": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Pour marinara into Dutch oven on grill over medium. Warm 5 min.",
      "Add frozen meatballs. Stir to coat. Cover and cook 15–20 min, stirring every 5 min, until meatballs reach 165°F.",
      "Split sub rolls and toast face-down on grate 90 sec.",
      "Place 5 meatballs per roll, spoon sauce over, top with mozzarella.",
      "Wrap in foil 2 min to melt cheese."
    ],
    done_when: "Meatballs steaming hot throughout, 165°F.",
    safety: "Sauce splatters at a boil — keep lid on and stir carefully."
  },

  // DINNERS ─────────────────────────────────────────────────────────────────────

  "chili-mac": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Cook ground beef and diced onion 7–8 min, breaking apart. Drain fat.",
      "Add both cans of Ro-Tel (undrained) and 1 cup water. Stir and bring to a boil.",
      "Add dry elbow macaroni. Stir so pasta is submerged.",
      "Reduce to medium-low, cover, cook 10–12 min, stirring every 3–4 min.",
      "When pasta is tender and liquid mostly absorbed, remove from heat. Top with cheese, cover 2 min to melt."
    ],
    done_when: "Pasta tender, liquid mostly absorbed, cheese melted.",
    safety: "Stir regularly — pasta scorches on the bottom fast."
  },
  "cowboy-stew": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown ground beef with chili powder, garlic powder, salt, and pepper, 7–8 min. Drain fat.",
      "Add diced potatoes, stir 3 min.",
      "Add beef broth, diced tomatoes, beans, and corn. Stir and bring to a boil.",
      "Reduce to medium-low, cover, simmer 20–25 min until potatoes are fork-tender.",
      "Taste, adjust salt and pepper."
    ],
    done_when: "Potatoes soft when poked with a fork.",
    safety: "Tilt the lid away from you when lifting — steam burns."
  },
  "train-wreck": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown ground beef, season with salt, pepper, garlic powder. Drain fat.",
      "Add diced tomatoes and beef broth. Stir and bring to a boil.",
      "Add dry elbow macaroni, stir to submerge. Reduce to medium-low.",
      "Cover and cook 10–12 min, stirring every 3 min, until pasta is tender.",
      "Stir in shredded cheese until melted. Serve immediately."
    ],
    done_when: "Pasta tender, cheese melted, liquid mostly gone.",
    safety: "Pasta soaks up liquid fast — add a splash of broth if it looks dry."
  },
  "simple-chili": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Cook ground beef and diced onion 7–8 min. Drain fat.",
      "Add kidney beans, diced tomatoes, tomato sauce, and chili seasoning packet. Stir.",
      "Bring to a boil, reduce to medium-low. Simmer uncovered 15–20 min, stirring occasionally.",
      "Taste, adjust seasoning. Top bowls with shredded cheese."
    ],
    done_when: "Chili thick and bubbling, beef fully cooked.",
    safety: "Use a long-handled spoon — chili splatters when it boils."
  },
  "taco-soup": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Cook ground beef and onion 7–8 min. Drain fat.",
      "Add taco seasoning, stir to coat. Pour in Ro-Tel, beans, corn, and beef broth.",
      "Bring to a boil, reduce to medium-low. Simmer 15 min, stirring occasionally.",
      "Serve in bowls topped with sour cream, cheese, and crushed tortilla chips."
    ],
    done_when: "All ingredients heated through and soup is bubbling.",
    safety: "Use a big enough Dutch oven — this makes a large batch."
  },
  "spaghetti-1-pot": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown ground beef 7–8 min. Drain fat.",
      "Pour in marinara and 2 cups water. Stir and bring to a boil.",
      "Break dry spaghetti in half, push it under the liquid. Stir well.",
      "Cover, reduce to medium-low. Cook 10–12 min, stirring every 3 min.",
      "Serve topped with Parmesan when pasta is tender and sauce is thick."
    ],
    done_when: "Pasta tender, sauce thick and clinging to noodles.",
    safety: "Stir often — pasta clumps and burns on the bottom if left alone."
  },
  "super-easy-spaghetti": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef in Dutch oven over medium-high, 7–8 min. Drain fat.",
      "Pour in marinara and 2 cups water. Break spaghetti in half into the pot. Stir.",
      "Cover, reduce to medium-low. Cook 10–12 min, stirring every 3 min.",
      "Serve with Parmesan."
    ],
    done_when: "Pasta tender, sauce thick.",
    safety: "Stir every few minutes so pasta doesn't burn on the bottom."
  },
  "hobo-dinner": {
    equipment: "Gas grill — foil packet on grates",
    steps: [
      "Preheat grill to medium-high.",
      "Form beef into a patty. Season both sides with garlic powder, salt, and pepper.",
      "Lay a 2-foot sheet of heavy-duty foil flat. Layer sliced potatoes, then carrots and onion. Place beef patty on top. Add a pat of butter and season the veggies.",
      "Fold foil: bring two long sides up and roll together to seal. Fold in both ends tightly. Double-fold all edges.",
      "Place packets on grate. Close the grill lid. Cook 25–30 min, flipping once at the halfway point.",
      "Move to a plate with tongs. Cut open the top with scissors — steam escapes first. Fork-test a potato."
    ],
    done_when: "Potatoes fork-tender, beef reaches 160°F.",
    safety: "Opening releases VERY hot steam — cut foil pointing away from your face. Also works on a campfire — place packets in hot coals 25 min."
  },
  "burger-beans-biscuits": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown ground beef with salt, pepper, garlic powder. Drain fat.",
      "Add baked beans and brown sugar. Stir and simmer 5 min.",
      "Reduce to medium-low. Open biscuit can and place biscuits on top of the meat mixture, spaced apart.",
      "Cover and cook 15–18 min without lifting the lid.",
      "Check at 15 min — biscuits should be golden, toothpick in a biscuit should come out clean."
    ],
    done_when: "Biscuits golden, toothpick clean, beans bubbling.",
    safety: "Lift the lid away from you — steam builds underneath."
  },
  "burritos": {
    equipment: "Gas grill — skillet",
    steps: [
      "Cook ground beef in skillet on grill over medium-high with taco seasoning per packet, 8–10 min. Drain fat.",
      "In a small pot on low heat, warm refried beans, stirring until smooth.",
      "Warm tortillas on grate 30 sec per side until flexible.",
      "Spread beans down the center of each tortilla, add beef, cheese, salsa, and sour cream.",
      "Fold in sides, roll from the bottom up tightly, and serve."
    ],
    done_when: "Beef fully cooked, beans hot, tortillas warm and pliable.",
    safety: "Work fast after warming tortillas — they stiffen and crack as they cool."
  },
  "taco-tots": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high with a thin layer of oil.",
      "Add frozen tater tots in a single layer. Cook 8–10 min, shaking occasionally.",
      "Flip tots, cook 8 more min until crispy and golden.",
      "Meanwhile cook seasoned ground beef in a separate skillet. Add seasoning packet and 1/4 cup water, simmer 2 min.",
      "Scoop tots onto plates. Top with beef, then cheese. Cover loosely with foil 2 min to melt.",
      "Finish with sour cream and salsa."
    ],
    done_when: "Tots golden and crispy (not soft), beef fully cooked.",
    safety: "Don't overcrowd the Dutch oven — tots need space to crisp, not steam."
  },
  "hamdogs-and-beans": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium.",
      "Slice hot dogs into rounds, dice ham. Add both and cook 3–4 min until lightly browned.",
      "Pour in baked beans, brown sugar, and mustard. Stir to combine.",
      "Simmer uncovered 10 min, stirring occasionally, until beans are thick and bubbling."
    ],
    done_when: "Beans thick and bubbling, hot dogs heated through.",
    safety: "Stir often — beans scorch on the bottom."
  },
  "potato-cheese-soup": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook bacon until crispy, 6–8 min. Remove and crumble. Leave 1 Tbsp drippings.",
      "Add diced onion to drippings, cook 3–4 min until soft.",
      "Add diced potatoes, chicken broth, and garlic powder. Bring to a boil.",
      "Reduce to medium-low, cover, cook 15 min until potatoes are soft.",
      "Smash about 1/4 of the potatoes against the side of the pot to thicken.",
      "Stir in heavy cream and most of the cheese. Cook 3 min until melted.",
      "Season with salt and pepper. Top bowls with remaining cheese, crumbled bacon, and sour cream."
    ],
    done_when: "Potatoes completely soft, soup creamy and thick.",
    safety: "Add cream over low heat only — high heat makes it curdle."
  },
  "dutch-kielbasa": {
    equipment: "Gas grill — grates for searing, Dutch oven for finishing",
    steps: [
      "Slice kielbasa into 1-inch rounds. Grill directly on grates over medium-high 3–4 min per side until charred. Set aside.",
      "In Dutch oven on grill over medium, sauté diced onion in oil 3 min.",
      "Add parboiled diced potatoes, grilled kielbasa, sauerkraut, and garlic powder. Stir.",
      "Cover and cook 12–15 min until potatoes are fork-tender and everything is heated through.",
      "Serve with mustard."
    ],
    done_when: "Potatoes fork-tender, kielbasa hot throughout.",
    safety: "Kielbasa fat drips and causes flare-ups — keep grill lid nearby."
  },

  // PIZZA ───────────────────────────────────────────────────────────────────────

  "dutch-oven-pizza": {
    equipment: "Gas pizza oven",
    steps: [
      "Preheat gas pizza oven to 450–500°F for at least 10 min.",
      "Stretch or roll dough on a floured surface. Dust pizza peel or pan with cornmeal.",
      "Spread sauce, leaving a 1-inch border. Add cheese and toppings — don't overload.",
      "Slide pizza into the oven. Bake 8–12 min until crust is golden and cheese is bubbling.",
      "Rotate halfway through with the peel for even cooking. Remove and slice."
    ],
    done_when: "Crust golden all over, cheese bubbling, underside firm when lifted.",
    safety: "Pizza oven runs VERY hot — always use the peel. Keep hands clear of the opening."
  },
  "simple-dutch-oven-pizzas": {
    equipment: "Gas pizza oven",
    steps: [
      "Preheat gas pizza oven to 450°F for 10 min.",
      "Press or roll dough onto a lightly oiled pizza pan. Spread sauce, add cheese and toppings.",
      "Slide into the oven. Bake 8–12 min, rotating once at the halfway point.",
      "Crust should be golden on the bottom and the edges browned."
    ],
    done_when: "Crust golden on bottom and top, cheese fully melted.",
    safety: "Use the peel to load and retrieve. Never reach bare-handed into a hot pizza oven."
  },
  "pie-iron-pizzas": {
    equipment: "Gas grill — grates with pie irons",
    steps: [
      "Set grill to medium. Butter the inside of each pie iron.",
      "Place one bread slice butter-side-down in the iron. Spread pizza sauce on the bread.",
      "Add cheese and toppings. Place second slice butter-side-up on top.",
      "Close and latch. Trim bread that hangs out.",
      "Hold over grate 3–4 min per side until golden and crispy.",
      "Open away from face — steam escapes. Eat immediately."
    ],
    done_when: "Bread golden on both sides, cheese melted inside.",
    safety: "Pie iron handles get very hot — use heat gloves. Open the iron away from your face."
  },
  "pocket-pizza": {
    equipment: "Gas grill — grates with pie irons",
    steps: [
      "Set grill to medium. Butter bread, place butter-side-down in pie iron.",
      "Spread sauce, add cheese and pepperoni. Close and cook 3–4 min per side until golden.",
      "Open iron away from face. Eat immediately."
    ],
    done_when: "Bread golden, cheese melted.",
    safety: "Open iron away from face — steam inside."
  },

  // DESSERTS ────────────────────────────────────────────────────────────────────

  "banana-boats": {
    equipment: "Gas grill — foil packet on grates",
    steps: [
      "Preheat grill to medium.",
      "Without peeling, cut each banana lengthwise along the inner curve — don't cut all the way through.",
      "Gently open like a canoe. Pack the cut with mini chocolate chips and mini marshmallows.",
      "Wrap the whole banana tightly in foil, sealing all edges.",
      "Place on grate. Cook 10–12 min until banana is soft.",
      "Move to a plate with tongs. Cool 2 min. Cut open the top slowly — steam inside. Eat with a spoon."
    ],
    done_when: "Banana dark and soft inside the peel, filling melted.",
    safety: "Steam inside the foil is very hot — open the foil pointed away from your face. Also works over campfire coals — place foil packets near hot coals for 10 min."
  },
  "peach-cobbler": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Grease the inside of the Dutch oven with butter.",
      "Pour canned peach pie filling into the bottom. Spread evenly.",
      "Sprinkle dry cake mix evenly over the filling. DO NOT STIR.",
      "Sprinkle cinnamon on top. Dot with thin slices of cold butter.",
      "Cover and cook on grill over medium-low 30–40 min.",
      "Done when top is golden and dry, filling bubbling at the edges. Let cool 5 min."
    ],
    done_when: "Top dry and golden, filling bubbling.",
    safety: "Don't stir — the layering creates the cobbler texture. Lid is very hot — use gloves."
  },
  "black-forest-cobbler": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Grease Dutch oven with butter.",
      "Pour cherry pie filling into the bottom. Spread evenly.",
      "Sprinkle dry chocolate cake mix evenly over the filling. DO NOT STIR.",
      "Dot with thin slices of cold butter.",
      "Cover and cook on grill over medium-low 30–40 min until top is set and filling bubbles at edges."
    ],
    done_when: "Top dry and set like baked cake, filling bubbling.",
    safety: "Let cool 5 min before serving — filling holds heat and burns mouths."
  },
  "fizzy-fruit-cobbler": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Grease Dutch oven with butter.",
      "Pour fruit pie filling into the bottom. Spread evenly.",
      "Sprinkle dry cake mix evenly over filling. DO NOT STIR.",
      "Slowly pour one can of Sprite over the top, pouring gently so it soaks in. No butter needed.",
      "Cover and cook on grill over medium-low 30–35 min until top is golden and set."
    ],
    done_when: "Top golden, soda evaporated, filling bubbling.",
    safety: "Bubbles more than regular cobbler — make sure lid seals well."
  },
  "monkey-bread": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix granulated sugar and cinnamon in a zip-lock bag.",
      "Open biscuit cans. Cut each biscuit into quarters.",
      "Toss biscuit quarters in the cinnamon-sugar bag in batches.",
      "Pile coated pieces loosely into a greased Dutch oven.",
      "Mix melted butter and brown sugar. Pour evenly over the top.",
      "Cover and cook on grill over medium-low 25–30 min until deep golden and toothpick comes out clean."
    ],
    done_when: "Top deep golden, biscuits cooked through.",
    safety: "The caramel butter is extremely hot — let cool 2 min before serving."
  },
  "apple-crisp": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Peel and slice apples thin. Toss with 2 Tbsp sugar and cinnamon. Spread in greased Dutch oven.",
      "In a bowl, mix oats, brown sugar, flour, and cold butter with fingers until crumbly.",
      "Spread topping evenly over the apples.",
      "Cover and cook on grill over medium-low 30–35 min until apples bubble and topping is golden.",
      "Let cool 10 min before serving."
    ],
    done_when: "Topping golden and crispy, apples bubbling and soft.",
    safety: "Filling stays hot a long time — tell scouts to blow on their serving."
  },
  "pie-iron-pies": {
    equipment: "Gas grill — grates with pie irons",
    steps: [
      "Set grill to medium. Butter one side of each bread slice.",
      "Place one slice butter-side-down in the pie iron.",
      "Spoon 3 Tbsp fruit pie filling in the center — keep away from the edges.",
      "Place second slice butter-side-up on top. Close and latch. Trim excess bread.",
      "Hold over grate 3–4 min per side until golden.",
      "Open away from face. Dust with powdered sugar."
    ],
    done_when: "Bread golden on both sides, filling hot.",
    safety: "Pie iron handles get hot — use gloves. Open slowly."
  },
  "dutch-oven-pies": {
    equipment: "Gas pizza oven",
    steps: [
      "Preheat gas pizza oven to 375°F.",
      "Press pie crust into an oven-safe dish. Fill with pie filling. Top with second crust, crimp edges, cut 3 slits in top.",
      "Bake 35–40 min until crust is golden and filling bubbles through the slits.",
      "Let cool 15 min before cutting — filling is molten."
    ],
    done_when: "Crust golden, filling bubbling through slits.",
    safety: "Fresh pie filling holds heat — wait before serving."
  },
  "s-more-pie": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Crush Graham crackers and press firmly into the bottom of a greased Dutch oven.",
      "Break chocolate bars into pieces and lay evenly over the crust.",
      "Cover chocolate completely with mini marshmallows.",
      "Cover Dutch oven with lid. Cook on grill over low heat 8–10 min.",
      "Done when marshmallows are puffed and golden, chocolate melted. Serve immediately."
    ],
    done_when: "Marshmallows puffed and golden, chocolate fully melted.",
    safety: "Molten marshmallow and chocolate hold heat intensely — let cool 3–4 min."
  },
  "banana-coffee-cake": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Mash 2 ripe bananas until smooth. Stir in Bisquick, sugar, and cinnamon until a thick batter forms.",
      "Pour batter into a greased Dutch oven. Spread evenly.",
      "Mix brown sugar, cinnamon, and a little butter for a crumb topping. Sprinkle over batter.",
      "Cover and cook on grill over medium-low 25–30 min until toothpick comes out clean.",
      "Let cool 10 min before scooping."
    ],
    done_when: "Toothpick clean, top golden, edges pulling from the pot slightly.",
    safety: "Dense batter — check the center is fully cooked, not just the outside."
  },
  "cornbread": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Grease Dutch oven with butter. Set grill to medium.",
      "Mix Jiffy corn muffin mix, egg, and milk per box. Don't overmix.",
      "Pour batter into Dutch oven. Spread evenly.",
      "Cover and cook on medium 15–18 min. Toothpick should come out clean.",
      "Let cool 5 min before cutting."
    ],
    done_when: "Top golden, toothpick clean, edges pull from the side.",
    safety: "Dutch oven bottom gets very hot — use gloves when moving."
  },
  "baked-beans": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook bacon until crispy. Remove and crumble. Leave 1 Tbsp drippings.",
      "Add diced onion, cook 3 min. Pour in canned baked beans, brown sugar, mustard, and ketchup. Stir.",
      "Simmer uncovered on medium-low 20 min, stirring every 5 min.",
      "Top with crumbled bacon before serving."
    ],
    done_when: "Beans thick, sticky, and bubbling.",
    safety: "Beans scorch if heat is too high — stir every 5 min."
  },

  // GRAB AND GO ─────────────────────────────────────────────────────────────────

  "grab-go-pop-tarts": {
    equipment: "No equipment needed",
    steps: ["Hand each scout one Pop-Tarts packet and one juice box.", "Wrappers go in the trash bag."],
    done_when: "Scout is holding food.", safety: "Check for food allergies before selecting flavors."
  },
  "grab-go-granola-banana": {
    equipment: "No equipment needed",
    steps: ["Hand each scout one granola bar and one banana.", "Wrappers and peels go in the trash bag."],
    done_when: "Immediate.", safety: "Check for tree nut allergies — most granola bars contain or are processed near nuts."
  },
  "grab-go-instant-oatmeal": {
    equipment: "Gas grill — one pot of boiling water",
    steps: [
      "Bring a large pot of water to a boil on the grill.",
      "Set one oatmeal cup in front of each scout.",
      "One designated person carefully pours boiling water into each cup to the fill line. Stir, cover, wait 3 min.",
      "Eat from the cup. Cups go in the trash — only the pot to wash."
    ],
    done_when: "Oats have absorbed all water and are soft.",
    safety: "Boiling water burns — use a ladle, not the pot. Have one designated person pour."
  },
  "grab-go-cereal-milk": {
    equipment: "No equipment needed",
    steps: ["Hand each scout a cereal cup and a shelf-stable milk box.", "Open the cup, pour milk in, eat with a spoon.", "Trash goes in the bag."],
    done_when: "Immediate.", safety: "Shelf-stable milk doesn't need refrigeration until opened."
  },
  "grab-go-bagel-cream-cheese": {
    equipment: "No equipment needed",
    steps: ["Pull bagels and cream cheese cups from the cooler.", "Hand each scout one bagel and one cream cheese cup with a plastic knife.", "Spread and eat. Wrappers in the trash."],
    done_when: "Immediate.", safety: "Keep cream cheese cold until handing out."
  },
  "grab-go-donuts": {
    equipment: "No equipment needed",
    steps: ["Open the donut box. Hand each scout 2 donuts and one chocolate milk box.", "Eat. Wrappers in the trash bag."],
    done_when: "Immediate.", safety: "No prep, no fire, no dishes."
  },
  "grab-go-muffins": {
    equipment: "No equipment needed",
    steps: ["Hand each scout one muffin and one applesauce pouch.", "Wrappers go in the trash bag."],
    done_when: "Immediate.", safety: "Buy muffins the day before — keep in a sealed bag overnight."
  },
  "grab-go-nutrigrain": {
    equipment: "No equipment needed",
    steps: ["Hand each scout one Nutri-Grain bar and one OJ bottle.", "Eat. Trash in the bag."],
    done_when: "Immediate.", safety: "No prep required."
  },
  "grab-go-pb-crackers": {
    equipment: "No equipment needed",
    steps: ["Hand each scout one Ritz Bits PB pack and one fruit pouch.", "Eat. Wrappers in the trash."],
    done_when: "Immediate.", safety: "Contains peanuts — check for nut allergies in the patrol first."
  },
  "grab-go-trail-mix": {
    equipment: "No equipment needed",
    steps: ["Pull string cheese from the cooler.", "Hand each scout one trail mix bag and one string cheese.", "Wrappers in the trash."],
    done_when: "Immediate.", safety: "Keep string cheese refrigerated until ready. May contain nuts — check for allergies."
  }

};
