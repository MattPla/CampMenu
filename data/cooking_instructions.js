// Step-by-step cooking instructions for scout camp recipes.
// Equipment assumed: portable gas grill, gas pizza oven, Dutch ovens.
// Each entry: { equipment, steps[], done_when, safety }

window.COOKING_INSTRUCTIONS = {

  // ════════════════════════════════════════════════════════════════════
  // BREAKFASTS
  // ════════════════════════════════════════════════════════════════════

  "breakfast-burritos": {
    equipment: "Gas grill — skillet or grill grate",
    steps: [
      "Set gas grill to medium heat. Place a large skillet or cast-iron pan on the grate.",
      "Add sausage to the skillet. Break it apart with a spatula and cook 5–7 min until no pink remains. Push to one side.",
      "Crack eggs into the skillet next to the sausage. Scramble them together with the meat until fully cooked, about 3 min.",
      "Slide skillet to low heat. Lay tortillas directly on the grill grate for 30 sec per side to warm — watch for char.",
      "Scoop the egg and sausage mixture onto each tortilla. Top with shredded cheese and a spoonful of salsa.",
      "Roll the tortilla tightly: fold in the sides, then roll from the bottom up. Serve immediately."
    ],
    done_when: "Eggs are fully set (no runny parts), sausage is no longer pink.",
    safety: "Raw eggs — wash hands after cracking. Keep skillet handle away from flame."
  },

  "simple-breakfast-burritos": {
    equipment: "Gas grill — skillet",
    steps: [
      "Set gas grill to medium heat, place skillet on grate.",
      "Cook sausage 5–7 min, breaking apart until no pink. Drain excess fat.",
      "Crack eggs over the sausage and scramble together until fully cooked, about 3 min.",
      "Warm tortillas on the grill grate 30 sec per side.",
      "Spoon filling onto tortilla, top with cheese, roll up, and serve."
    ],
    done_when: "Eggs fully set, sausage no longer pink.",
    safety: "Wash hands after handling raw eggs and raw sausage."
  },

  "pecs-breakfast": {
    equipment: "Gas grill — large skillet or cast iron",
    steps: [
      "Set gas grill to medium-high. Place large skillet on grate.",
      "Cook sausage 5–7 min breaking apart until browned. Remove and set aside.",
      "Add frozen hashbrowns to the skillet. Press flat. Cook 5 min without stirring — let them brown on the bottom.",
      "Flip hashbrowns in sections, cook 4 more min until golden and crispy.",
      "Push hashbrowns to the edges. Return sausage to the center.",
      "Crack eggs over the mixture, scramble everything together until eggs are fully set, about 3 min.",
      "Top with shredded cheese, cover skillet with foil or a lid for 1 min to melt. Season with salt and pepper."
    ],
    done_when: "Eggs fully cooked, hashbrowns golden and crispy.",
    safety: "Skillet gets very hot — use heat-resistant gloves when moving it."
  },

  "breakfast-in-a-bag": {
    equipment: "Gas grill — one large pot of boiling water",
    steps: [
      "Fill a large pot with water and bring to a boil on the gas grill.",
      "Each scout: crack 2 eggs into a quart-size zip-lock freezer bag.",
      "Add crumbled cooked sausage and frozen hashbrowns to each bag.",
      "Squeeze out excess air and seal the bag tightly.",
      "Lower all bags into the boiling water. Make sure they float freely.",
      "Boil 12–15 min until eggs are fully set — squeeze the bag gently to check.",
      "Lift bags out with tongs. Open carefully (hot steam). Eat right out of the bag with a fork.",
      "Trash goes in the bag — zip it up and done. No dishes."
    ],
    done_when: "Eggs are fully set and no longer jiggly inside the bag.",
    safety: "Boiling water burns — use tongs to put bags in and take them out. Never use regular zip-lock bags — must be freezer grade."
  },

  "pancakes": {
    equipment: "Gas grill — large skillet or flat griddle",
    steps: [
      "Set gas grill to medium. Place skillet or griddle on grate and let it heat 3–4 min.",
      "In a bowl, mix pancake mix and water per box instructions. Don't over-mix — lumps are fine.",
      "Add a small pat of butter to the skillet and let it melt and spread.",
      "Pour about 1/4 cup batter per pancake. Cook until bubbles form on top and the edges look dry — about 2 min.",
      "Flip once and cook 1–2 more min until golden brown on the bottom.",
      "Repeat in batches. Keep finished pancakes warm on a plate tented with foil.",
      "Serve with butter and syrup."
    ],
    done_when: "Both sides are golden brown. No raw batter should ooze out when pressed.",
    safety: "Batter splatters — keep handle pointing inward. Don't flip more than once or they get tough."
  },

  "mcpancakes": {
    equipment: "Gas grill — large skillet",
    steps: [
      "Cook sausage links on gas grill grate over medium heat, turning every 2 min for 8–10 min until browned all over. Keep warm.",
      "Make pancake batter: mix with water per box, don't over-mix.",
      "Melt butter in skillet over medium heat. Pour 1/4 cup batter per pancake.",
      "Cook until bubbles form on surface and edges look set — about 2 min. Flip once, cook 1–2 more min.",
      "Serve 2–3 pancakes with syrup and 2 sausage links per scout."
    ],
    done_when: "Pancakes golden both sides, sausage links reach 160°F internal temp.",
    safety: "Sausage must be fully cooked — no pink inside."
  },

  "scramble": {
    equipment: "Gas grill — large skillet or Dutch oven",
    steps: [
      "Set gas grill to medium. Heat skillet on grate.",
      "Cook sausage 5–7 min, breaking apart until browned. Drain excess fat.",
      "Add diced bell pepper and onion. Cook 3–4 min until softened.",
      "Crack all eggs into a bowl and beat with a fork. Pour over the skillet mixture.",
      "Let eggs sit 30 sec, then gently push from edges to center with a spatula — keep moving slowly.",
      "When eggs are almost set (still a little shiny), remove from heat — they finish cooking from the heat in the pan.",
      "Sprinkle cheese over the top, cover with a lid or foil for 1 min to melt. Season with salt and pepper."
    ],
    done_when: "Eggs are set but still moist — not browned or dry.",
    safety: "Eggs must be fully cooked with no runny parts. Wash hands after handling raw eggs."
  },

  "armadillo-eggs": {
    equipment: "Gas grill — skillet or flat griddle",
    steps: [
      "Hard-boil eggs first: place in pot of cold water on gas grill, bring to boil, cook 10 min. Remove and cool in cold water. Peel.",
      "While eggs cool, slice jalapeños in half lengthwise and scoop out seeds (use gloves if available).",
      "Flatten a handful of raw sausage in your palm. Place a peeled egg in the center.",
      "Wrap the sausage completely around the egg, sealing all gaps.",
      "Place sausage-wrapped eggs on gas grill over medium heat.",
      "Cook 10–12 min, turning every 2–3 min, until sausage is golden brown on all sides and fully cooked.",
      "Optional: top with shredded cheese for last minute and cover to melt."
    ],
    done_when: "Sausage coating is golden brown all over with no pink. Internal temp 165°F.",
    safety: "Wash hands thoroughly after handling raw sausage. Use gloves when handling jalapeños — the juice burns eyes."
  },

  "breakfast-casserole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat 12-inch Dutch oven on gas grill over medium heat.",
      "Cook sausage in Dutch oven, breaking apart, 5–7 min until browned. Drain most of the fat.",
      "Spread frozen hashbrowns over the sausage in an even layer. Don't stir.",
      "In a bowl, beat eggs with milk, salt, and pepper. Pour the egg mixture evenly over the hashbrowns.",
      "Sprinkle shredded cheese over the top.",
      "Cover the Dutch oven with the lid. Cook over medium-low heat 20–25 min.",
      "Done when the center is set — gently shake the pot. If it doesn't jiggle, it's done.",
      "Let rest 5 min before scooping out."
    ],
    done_when: "Eggs are fully set in the center, cheese is melted, edges are lightly golden.",
    safety: "Dutch oven lid and pot will be extremely hot — always use heat gloves."
  },

  "mountain-man-omelette": {
    equipment: "Dutch oven — 14-inch, on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium-high.",
      "Cook sausage in Dutch oven until browned, breaking apart. Remove and set aside.",
      "Add a little oil to the pot. Spread frozen hashbrowns in an even layer. Cook 5 min until starting to brown on the bottom.",
      "Add diced peppers and onion over the hashbrowns. Stir gently, cook 3 more min.",
      "Return sausage to the pot and spread everything evenly.",
      "Beat eggs with milk in a bowl, pour evenly over the entire mixture.",
      "Sprinkle cheese on top. Cover the Dutch oven with the lid.",
      "Cook 15–20 min on medium-low until eggs are set in the center.",
      "Done when center doesn't jiggle. Let rest 5 min before scooping."
    ],
    done_when: "Eggs fully set throughout, no runny liquid when pressed with spoon.",
    safety: "Feeds the whole patrol at once — make sure ALL eggs are fully cooked. Internal temp should reach 160°F."
  },

  // ════════════════════════════════════════════════════════════════════
  // LUNCHES
  // ════════════════════════════════════════════════════════════════════

  "taco-in-a-bag": {
    equipment: "Gas grill — small skillet",
    steps: [
      "Cook ground beef in skillet on gas grill over medium-high heat. Break apart with spatula.",
      "Cook 7–8 min until beef is browned and no pink remains. Drain excess fat.",
      "Add taco seasoning packet and 1/4 cup water per pound of beef. Stir and simmer 2 min.",
      "Open each Fritos bag: tear the bag open down the center (or cut across the top and fold down).",
      "Spoon 3–4 Tbsp seasoned beef into each bag directly on the chips.",
      "Top with drained beans, shredded cheese, sour cream, and salsa.",
      "Hand each scout a fork and they eat right out of the bag. Fold up the bag and it's trash — zero dishes."
    ],
    done_when: "Beef is fully browned with no pink. Seasoning is mixed in.",
    safety: "Ground beef must be fully cooked to 160°F. Drain fat carefully — it's hot."
  },

  "a-w-chili-dogs": {
    equipment: "Gas grill — grates for hot dogs, small pot for chili",
    steps: [
      "Pour canned chili into a small pot. Place on gas grill over low heat to warm through, stirring occasionally.",
      "Place hot dogs directly on gas grill grates over medium heat.",
      "Grill 5–7 min, turning a quarter-turn every 2 min until grill marks show on all sides.",
      "Place buns face-down on the grill for 60 sec to lightly toast.",
      "Put each hot dog in a bun. Spoon warm chili over the top.",
      "Top with shredded cheddar. Serve with mustard on the side."
    ],
    done_when: "Hot dogs have clear grill marks and are fully heated. Chili is steaming hot.",
    safety: "Hot dogs are already cooked — just need to be heated through. Don't let them burst."
  },

  "sonic-s-chili-dogs": {
    equipment: "Gas grill — grates for dogs, small pot for chili",
    steps: [
      "Warm canned chili in pot on gas grill low heat, stir occasionally.",
      "Grill hot dogs on gas grill grates over medium, turning every 2 min for 5–7 min.",
      "Toast buns face-down on grill 60 sec.",
      "Dice a small amount of raw onion and set aside.",
      "Assemble: hot dog in bun, chili on top, diced onion, shredded cheese, mustard."
    ],
    done_when: "Hot dogs heated through with grill marks all around.",
    safety: "Keep chili stirred so it doesn't scorch on the bottom."
  },

  "corn-dogs": {
    equipment: "Gas grill — grates",
    steps: [
      "Remove corn dogs from packaging. If frozen, they can go straight on the grill.",
      "Set gas grill to medium. Place corn dogs on grates.",
      "Turn every 2–3 min for 10–12 min total until the cornbread coating is golden brown.",
      "Serve with ketchup and mustard."
    ],
    done_when: "Coating is golden brown all over. Internal temp 165°F.",
    safety: "Frozen corn dogs take longer than thawed. Check the center is hot before serving."
  },

  "tuna-tortillas": {
    equipment: "No heat needed (or gas grill to warm tortillas)",
    steps: [
      "Open and drain canned tuna. Put in a bowl.",
      "Mix tuna with mayonnaise and sweet relish until combined.",
      "Optional: warm tortillas on gas grill grate 30 sec per side.",
      "Spread tuna mix down the center of each tortilla.",
      "Add shredded lettuce or cabbage on top.",
      "Roll up tightly and serve."
    ],
    done_when: "Ready immediately — this is a no-cook meal.",
    safety: "Keep tuna cold until ready to use. Don't leave mayo-based mix sitting in the sun."
  },

  "meatball-subs": {
    equipment: "Dutch oven or pot on gas grill",
    steps: [
      "Pour marinara sauce into Dutch oven on gas grill over medium heat. Let it warm 5 min.",
      "Add frozen meatballs to the sauce. Stir to coat.",
      "Cover and cook 15–20 min until meatballs are heated through (internal temp 165°F), stirring every 5 min.",
      "Meanwhile, split sub rolls and place face-down on gas grill for 90 sec to toast.",
      "Use tongs to place 5 meatballs in each roll. Spoon extra sauce over top.",
      "Top with shredded mozzarella. Wrap in foil for 2 min to melt cheese."
    ],
    done_when: "Meatballs are steaming hot throughout and reach 165°F.",
    safety: "Sauce splatters when it boils — keep lid on and stir carefully."
  },

  // ════════════════════════════════════════════════════════════════════
  // DINNERS
  // ════════════════════════════════════════════════════════════════════

  "chili-mac": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium-high.",
      "Add ground beef and diced onion. Cook 7–8 min, breaking apart, until beef is browned. Drain excess fat.",
      "Add both cans of Ro-Tel (undrained) and 1 cup of water. Stir and bring to a boil.",
      "Add dry elbow macaroni. Stir well so pasta is covered in liquid.",
      "Reduce heat to medium-low. Cover with lid and cook 10–12 min, stirring every 3–4 min.",
      "When macaroni is tender and most liquid is absorbed, remove from heat.",
      "Top with shredded cheddar, replace lid for 2 min to melt. Serve."
    ],
    done_when: "Macaroni is tender (taste one), liquid is mostly absorbed, cheese is melted.",
    safety: "Dutch oven stays extremely hot after removing from heat — use gloves. Don't let it boil dry."
  },

  "cowboy-stew": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium-high.",
      "Add ground beef, season with chili powder, garlic powder, salt, and pepper. Cook 7–8 min until browned. Drain fat.",
      "Add diced potatoes. Stir with the beef and cook 3 min.",
      "Pour in beef broth, diced tomatoes, beans, and corn. Stir to combine.",
      "Bring to a boil, then reduce gas grill to medium-low.",
      "Cover with lid and simmer 20–25 min until potatoes are fork-tender.",
      "Taste and adjust salt and pepper before serving."
    ],
    done_when: "Potatoes are soft when poked with a fork. Stew has thickened slightly.",
    safety: "Be careful lifting the lid — steam burns. Tilt the lid away from you."
  },

  "train-wreck": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium-high.",
      "Brown ground beef, season with garlic powder, salt, and pepper. Cook 7–8 min until no pink. Drain fat.",
      "Add diced tomatoes and beef broth. Stir and bring to a boil.",
      "Add dry elbow macaroni. Stir so it's submerged in liquid.",
      "Reduce heat to medium-low. Cover and cook 10–12 min, stirring every 3–4 min, until pasta is tender.",
      "If it looks dry, add a splash more broth. Stir in shredded cheese until melted.",
      "Serve immediately."
    ],
    done_when: "Pasta is tender, cheese is melted, liquid is mostly absorbed.",
    safety: "Pasta soaks up liquid fast — don't let the bottom scorch. Stir regularly."
  },

  "simple-chili": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium-high.",
      "Cook ground beef with diced onion 7–8 min until browned, breaking apart. Drain fat.",
      "Add kidney beans, diced tomatoes, tomato sauce, and chili seasoning packet. Stir well.",
      "Bring to a boil, then reduce heat to medium-low.",
      "Simmer uncovered 15–20 min, stirring occasionally, until thickened.",
      "Taste and adjust seasoning. Serve topped with shredded cheese."
    ],
    done_when: "Chili is thick and bubbling, beef fully cooked.",
    safety: "Chili splatters when it boils — use a long-handled spoon."
  },

  "taco-soup": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium-high.",
      "Cook ground beef with diced onion 7–8 min until browned. Drain fat.",
      "Add taco seasoning and stir to coat the meat.",
      "Pour in Ro-Tel, kidney beans, corn, and beef broth. Stir everything together.",
      "Bring to a boil, then reduce heat to medium-low.",
      "Simmer 15 min, stirring occasionally.",
      "Serve in cups or bowls. Top each with sour cream, shredded cheese, and crushed tortilla chips."
    ],
    done_when: "Soup is bubbling and all ingredients are heated through.",
    safety: "This makes a large batch — use a big enough Dutch oven so it doesn't overflow."
  },

  "spaghetti-1-pot": {
    equipment: "Dutch oven — 12-inch, on gas grill + separate pot for pasta",
    steps: [
      "Fill a large pot with water, add a pinch of salt, bring to a boil on gas grill.",
      "Meanwhile, heat Dutch oven over medium-high. Brown ground beef 7–8 min. Drain fat.",
      "Add marinara sauce, garlic powder, and Italian seasoning to the beef. Stir and reduce heat to low.",
      "Add dry spaghetti to the boiling water. Cook 2 min LESS than the package says (about 7–8 min). It will finish in the sauce.",
      "Drain pasta in a colander or carefully pour off water.",
      "Add drained pasta to the Dutch oven with the meat sauce. Toss to coat.",
      "Simmer everything together 2 min. Serve topped with grated Parmesan."
    ],
    done_when: "Pasta is tender but has a slight bite. Sauce clings to every noodle.",
    safety: "Boiling water + pouring = burn risk. Use tongs or a strainer. Designate one person to handle the boiling pot."
  },

  "super-easy-spaghetti": {
    equipment: "Dutch oven or large pot on gas grill",
    steps: [
      "Fill a large pot with salted water and boil on gas grill.",
      "In Dutch oven, brown ground beef over medium-high 7–8 min. Drain fat.",
      "Pour marinara sauce over beef. Reduce heat to low and simmer.",
      "Cook spaghetti in boiling water 1–2 min less than box says. Drain.",
      "Add pasta to the meat sauce. Toss and serve with Parmesan."
    ],
    done_when: "Pasta is tender, sauce is thick and hot.",
    safety: "Don't leave boiling pasta unattended — it boils over fast on a gas grill set too high."
  },

  "hobo-dinner": {
    equipment: "Gas grill — grates",
    steps: [
      "Pre-heat gas grill to medium-high (about 400°F).",
      "Form ground beef into a patty. Season both sides with garlic powder, salt, and pepper.",
      "Lay a 2-foot section of heavy-duty foil on a flat surface.",
      "Layer sliced potatoes in the center. Add sliced carrots, diced onion. Place the beef patty on top. Add a pat of butter and season the veggies.",
      "Fold the foil: bring two sides up and roll them together to seal. Then fold in both ends tightly. Double-fold all edges so no steam escapes.",
      "Place packets on the grill grate. Close the lid.",
      "Cook 25–30 min. Flip the packets at the halfway point using tongs.",
      "Use tongs to move a packet to a plate. Carefully cut open the top — steam will escape. Test a potato with a fork for doneness."
    ],
    done_when: "Potatoes are fork-tender, beef reaches 160°F internal temp.",
    safety: "Opening the packet releases VERY hot steam — cut the foil pointed away from your face. Use tongs. Foil corners are razor sharp when crumpled."
  },

  "burger-beans-biscuits": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium-high.",
      "Cook ground beef with salt, pepper, and garlic powder 7–8 min until browned. Drain excess fat.",
      "Add baked beans and brown sugar to the meat. Stir to combine.",
      "Let the mixture simmer 5 min, stirring so the bottom doesn't burn.",
      "Reduce heat to medium-low. Open biscuit can and place individual biscuits on top of the meat mixture, spacing evenly.",
      "Cover Dutch oven with lid. Cook 15–18 min without lifting the lid.",
      "After 15 min, peek — biscuits should be golden on top and cooked through. Test by inserting a toothpick into a biscuit: it should come out clean.",
      "Scoop into bowls: get at least one biscuit per person plus the meat and bean mixture underneath."
    ],
    done_when: "Biscuits are golden brown on top, toothpick comes out clean. Beans are bubbling.",
    safety: "Pressure builds under the lid — lift it away from you and let steam escape first."
  },

  "burritos": {
    equipment: "Dutch oven and gas grill — skillet",
    steps: [
      "Cook ground beef in skillet on gas grill over medium-high, add taco seasoning per packet, stir. Cook 8–10 min until fully browned. Drain fat.",
      "In a small pot, warm refried beans over low heat on the grill, stirring until smooth and hot.",
      "Lay tortillas on grill grate 30 sec per side to warm — they should be flexible, not crispy.",
      "Lay each tortilla flat. Spread a layer of refried beans down the center.",
      "Add seasoned beef, shredded cheese, salsa, and sour cream.",
      "Fold in sides, then roll from the bottom up tightly. Serve immediately."
    ],
    done_when: "Beef fully cooked, beans hot, tortillas warm and pliable.",
    safety: "Work fast once the tortillas are warm — they stiffen as they cool and will crack when you roll."
  },

  "taco-tots": {
    equipment: "Dutch oven or cast iron on gas grill",
    steps: [
      "Heat Dutch oven or large cast-iron pan on gas grill over medium-high. Add a small amount of oil.",
      "Add frozen tater tots in a single layer (or as close as possible). Cook 8–10 min, shaking the pan occasionally.",
      "Flip tots and cook another 8 min until crispy and golden brown.",
      "Meanwhile, cook seasoned ground beef in a separate skillet. Add taco seasoning and 1/4 cup water, simmer 2 min.",
      "Scoop tots onto each plate. Top with seasoned beef.",
      "Add shredded cheese, cover loosely with foil for 2 min to melt.",
      "Finish with a dollop of sour cream and a spoonful of salsa per serving."
    ],
    done_when: "Tots are golden and crispy (not soft), beef fully cooked.",
    safety: "Don't overcrowd the Dutch oven — tots need space to crisp up. Overcrowding makes them steam instead of fry."
  },

  "hamdogs-and-beans": {
    equipment: "Dutch oven on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium.",
      "Slice hot dogs and dice ham into bite-size pieces. Add to Dutch oven.",
      "Cook 3–4 min, stirring, until hot dogs and ham are lightly browned.",
      "Pour in baked beans, brown sugar, and mustard. Stir to combine.",
      "Simmer uncovered 10 min, stirring occasionally, until beans are thick and bubbling.",
      "Serve in bowls."
    ],
    done_when: "Beans are thick and bubbling. Hot dogs are heated through.",
    safety: "Hot dogs are pre-cooked — just need to be heated. Don't let beans scorch on the bottom."
  },

  "potato-cheese-soup": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium. Cook bacon strips until crispy, about 6–8 min. Remove and crumble. Leave about 1 Tbsp drippings in the pot.",
      "Add diced onion to the drippings. Cook 3–4 min until softened.",
      "Add diced potatoes, chicken broth, and garlic powder. Stir. Bring to a boil.",
      "Reduce heat to medium-low. Cook covered 15 min until potatoes are soft.",
      "Use the back of a spoon to smash about 1/4 of the potatoes against the side of the pot — this thickens the soup.",
      "Stir in heavy cream and most of the cheese. Cook 3 min until cheese melts.",
      "Taste and season with salt and pepper.",
      "Serve topped with remaining cheese, crumbled bacon, and a spoonful of sour cream."
    ],
    done_when: "Potatoes are completely soft, soup is creamy and thick.",
    safety: "Heavy cream can curdle if it boils hard — keep heat low after adding it."
  },

  "dutch-kielbasa": {
    equipment: "Gas grill (grates for searing) + Dutch oven",
    steps: [
      "Slice kielbasa into 1-inch rounds or split each link lengthwise.",
      "Place kielbasa directly on gas grill grates over medium-high heat. Grill 3–4 min per side until dark grill marks appear. Set aside.",
      "While kielbasa grills, start potatoes: dice into 1-inch cubes and parboil in Dutch oven with water over gas grill 10 min. Drain.",
      "Return Dutch oven to medium heat. Add a little oil, sauté diced onion 3 min.",
      "Add grilled kielbasa, parboiled potatoes, sauerkraut, and garlic powder. Stir together.",
      "Cover and cook 12–15 min until potatoes are fully tender and everything is heated through.",
      "Serve with mustard on the side."
    ],
    done_when: "Potatoes are fork-tender, kielbasa is hot throughout and nicely charred.",
    safety: "Grilling kielbasa causes flare-ups from the fat — have the lid ready to close if flames jump up."
  },

  // ════════════════════════════════════════════════════════════════════
  // PIZZA (USES GAS PIZZA OVEN)
  // ════════════════════════════════════════════════════════════════════

  "dutch-oven-pizza": {
    equipment: "Gas pizza oven (preferred) or Dutch oven",
    steps: [
      "GAS PIZZA OVEN: Preheat to 450–500°F for at least 10 min.",
      "Stretch or roll out pizza dough on a floured surface to fit your pan or pizza peel.",
      "Dust pizza peel or pan with cornmeal or flour so dough slides easily.",
      "Spread pizza sauce evenly, leaving 1-inch crust around the edge.",
      "Add shredded cheese and toppings (don't overload — it won't cook through).",
      "Slide pizza into the oven. Bake 8–12 min until crust is golden and cheese is bubbling.",
      "DUTCH OVEN ALTERNATIVE: Grease Dutch oven. Press dough in. Add toppings. Cover and cook on gas grill over medium for 20–25 min until crust is set underneath.",
      "Cut into slices and serve hot."
    ],
    done_when: "Crust is golden brown, cheese is melted and bubbling, underside is firm when lifted.",
    safety: "Gas pizza oven runs VERY hot — use the peel and keep hands clear of the opening. Rotate pizza halfway through with the peel for even cooking."
  },

  "simple-dutch-oven-pizzas": {
    equipment: "Gas pizza oven (preferred) or Dutch oven",
    steps: [
      "Preheat gas pizza oven to 450°F, or set Dutch oven on gas grill medium.",
      "Press pizza dough into a lightly oiled Dutch oven or onto pizza pan.",
      "Spread sauce over the dough. Add cheese and chosen toppings.",
      "GAS PIZZA OVEN: Bake 8–12 min until crust is golden and cheese bubbles.",
      "DUTCH OVEN: Cover, cook 20–25 min until crust is firm on the bottom.",
      "Lift a corner to check: the bottom should be golden, not pale or soggy."
    ],
    done_when: "Crust is golden on the bottom and top, cheese fully melted and starting to brown.",
    safety: "Use the peel to load and retrieve from pizza oven. Never reach into a hot pizza oven."
  },

  "pie-iron-pizzas": {
    equipment: "Gas grill — grates",
    steps: [
      "Heat gas grill to medium.",
      "Butter the inside of each pie iron.",
      "Place one slice of bread butter-side-down in the iron.",
      "Spread pizza sauce on the bread. Add cheese and any toppings.",
      "Place second slice of bread on top, butter-side-up.",
      "Close and latch the pie iron. Trim excess bread that hangs out.",
      "Hold over gas grill grate 3–4 min per side until bread is golden and crispy.",
      "Open carefully — it will be hot and steaming inside."
    ],
    done_when: "Bread is golden brown on both sides, cheese is melted inside.",
    safety: "Pie iron handles get hot — use heat gloves. Open the iron away from your face."
  },

  "pocket-pizza": {
    equipment: "Gas grill — grates or pie iron",
    steps: [
      "Heat gas grill to medium.",
      "If using pie iron: butter bread, fill with sauce, cheese, pepperoni, close iron and cook 3–4 min per side.",
      "If using foil: place toppings on one piece of bread, fold it like a book, and wrap in foil. Cook on grill 5 min per side.",
      "Unwrap carefully, serve immediately."
    ],
    done_when: "Bread is golden, cheese is melted.",
    safety: "Watch for steam when opening foil packets — open away from face."
  },

  // ════════════════════════════════════════════════════════════════════
  // DESSERTS
  // ════════════════════════════════════════════════════════════════════

  "banana-boats": {
    equipment: "Gas grill — grates",
    steps: [
      "Preheat gas grill to medium.",
      "Without peeling, cut each banana along the inside curve (the concave side) lengthwise — don't cut all the way through.",
      "Gently open the banana like a canoe and stuff the cut with mini chocolate chips and mini marshmallows.",
      "Wrap the entire banana tightly in foil, sealing all edges.",
      "Place on grill grate. Cook 10–12 min until banana is soft.",
      "Use tongs to move to a plate. Let cool 2 min before opening.",
      "Cut or tear open the top of the foil — watch for steam. Eat with a spoon right out of the peel."
    ],
    done_when: "Banana is soft and dark inside the peel, chocolate is melted.",
    safety: "Steam inside the foil is very hot — open slowly with foil pointing away from your face."
  },

  "peach-cobbler": {
    equipment: "Dutch oven — 12-inch, on gas grill OR gas pizza oven",
    steps: [
      "DUTCH OVEN: Grease the inside of the Dutch oven with butter.",
      "Pour canned peach pie filling into the bottom. Spread evenly.",
      "Sprinkle dry cake mix evenly over the filling. DO NOT STIR.",
      "Sprinkle cinnamon over the cake mix.",
      "Dot thin slices of cold butter across the top.",
      "Cover with lid. Place Dutch oven on gas grill over medium-low.",
      "Cook 30–40 min. Check at 30 min — top should be golden brown and dry. Filling should be bubbling at the edges.",
      "GAS PIZZA OVEN: Pour into an oven-safe pan. Bake at 350°F for 30 min.",
      "Let cool 5–10 min before serving. Scoop into bowls."
    ],
    done_when: "Top is golden and dry, filling is bubbling and thick.",
    safety: "Dutch oven lid is hot — use heat gloves when checking. Don't stir — the layering is what makes the cobbler texture."
  },

  "black-forest-cobbler": {
    equipment: "Dutch oven — 12-inch, on gas grill OR gas pizza oven",
    steps: [
      "Grease Dutch oven with butter.",
      "Pour cherry pie filling into the bottom. Spread evenly.",
      "Sprinkle dry chocolate cake mix evenly over filling — DO NOT STIR.",
      "Dot thin slices of cold butter over the cake mix.",
      "Cover and cook on gas grill over medium-low for 30–40 min.",
      "GAS PIZZA OVEN: Bake at 350°F for 30 min in an oven-safe pan.",
      "Done when the top is set and the filling bubbles around the edges."
    ],
    done_when: "Top looks like baked cake (dry, not wet), cherries bubbling at edges.",
    safety: "Let it cool 5 min before serving — the filling holds heat and can burn mouths."
  },

  "fizzy-fruit-cobbler": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Pour fruit pie filling into greased Dutch oven. Spread evenly.",
      "Sprinkle dry cake mix evenly over the filling. DO NOT STIR.",
      "Slowly pour Sprite or 7-Up over the entire top — pour slowly so it soaks in.",
      "DO NOT add butter or water — the soda does the work.",
      "Cover and cook on gas grill over medium-low 30–35 min.",
      "Check at 30 min: top should be golden and mostly dry, filling bubbling at edges."
    ],
    done_when: "Top is golden and set, soda has mostly evaporated, filling is bubbling.",
    safety: "This one bubbles more than regular cobbler — make sure the lid seals well."
  },

  "monkey-bread": {
    equipment: "Dutch oven — 12-inch, on gas grill OR gas pizza oven",
    steps: [
      "Preheat gas pizza oven to 375°F, or set Dutch oven on gas grill medium.",
      "Mix granulated sugar and cinnamon together in a zip-lock bag.",
      "Open biscuit cans. Cut each biscuit into quarters.",
      "Drop biscuit pieces into the cinnamon-sugar bag in batches and shake to coat.",
      "Place coated biscuit pieces in a greased Dutch oven in a loose pile — don't pack them down.",
      "Mix melted butter and brown sugar together. Pour evenly over the biscuit pieces.",
      "DUTCH OVEN: Cover and cook on medium-low for 25–30 min.",
      "GAS PIZZA OVEN: Bake in an oven-safe bundt or round pan at 375°F for 25–30 min.",
      "Done when golden brown on top and a toothpick comes out clean.",
      "Immediately flip out onto a plate (or serve directly from Dutch oven). Best eaten while warm."
    ],
    done_when: "Top is deep golden brown, biscuits are cooked through (no raw dough).",
    safety: "The caramel butter mixture is extremely hot when it comes out. Don't flip it until it's had 2 min to cool slightly."
  },

  "apple-crisp": {
    equipment: "Dutch oven — 12-inch, on gas grill OR gas pizza oven",
    steps: [
      "Peel and slice apples into thin wedges. Toss with 2 Tbsp sugar and cinnamon. Spread in greased Dutch oven.",
      "In a bowl, mix oats, brown sugar, flour, and cold butter. Use your fingers to work the butter in until the mixture looks crumbly.",
      "Spread the oat topping evenly over the apples.",
      "DUTCH OVEN: Cover and cook on gas grill medium-low for 30–35 min.",
      "GAS PIZZA OVEN: Bake uncovered at 375°F for 30–35 min in an oven-safe pan.",
      "Done when apples are soft and the topping is golden brown.",
      "Let cool 10 min before serving. Great with whipped cream if you have it."
    ],
    done_when: "Topping is golden and crispy, apples are bubbling and soft when poked.",
    safety: "The filling will be very hot — remind scouts to blow on their portion before eating."
  },

  "pie-iron-pies": {
    equipment: "Gas grill — grates",
    steps: [
      "Heat gas grill to medium.",
      "Butter one side of each bread slice.",
      "Place one slice butter-side-down in the pie iron.",
      "Add about 3 Tbsp of fruit pie filling in the center of the bread, keeping it away from the edges.",
      "Place the second bread slice on top, butter-side-up.",
      "Close and latch the pie iron firmly. Trim any bread that sticks out.",
      "Hold the iron over the grill grate 3–4 min per side until bread is golden and crispy.",
      "Open the iron away from your face — it will steam. Dust with powdered sugar and serve."
    ],
    done_when: "Bread is golden brown on both sides, filling is hot and bubbling.",
    safety: "Pie iron handles get hot even through insulation — use heat-resistant gloves. Open slowly."
  },

  "dutch-oven-pies": {
    equipment: "Gas pizza oven (preferred) OR Dutch oven",
    steps: [
      "GAS PIZZA OVEN: Preheat to 375°F.",
      "Press Pillsbury pie crust into an oven-safe pie dish. Fill with pie filling of choice. Top with second crust, crimp edges, cut 3 slits in top.",
      "Bake 35–40 min until crust is golden brown.",
      "DUTCH OVEN: Grease Dutch oven. Press crust in, add filling, place second crust on top and crimp to seal.",
      "Cover and cook on gas grill medium-low 35–40 min.",
      "Let cool at least 15 min before cutting — the filling is molten."
    ],
    done_when: "Crust is golden brown, filling is bubbling through the slits.",
    safety: "The filling inside a freshly baked pie holds heat for a long time and will cause burns — wait before serving."
  },

  "s-more-pie": {
    equipment: "Dutch oven on gas grill OR gas pizza oven",
    steps: [
      "Crush Graham crackers in a bag. Spread them in the bottom of a greased Dutch oven to form a crust. Press down firmly.",
      "Break chocolate bars into pieces and lay evenly over the Graham crust.",
      "Cover the chocolate completely with a thick layer of marshmallows.",
      "Cover Dutch oven with lid. Cook on gas grill over low heat 8–10 min.",
      "GAS PIZZA OVEN: Use an oven-safe pan, bake at 325°F for 8–10 min.",
      "Check at 8 min: marshmallows should be puffed and just starting to brown. Chocolate should be melted.",
      "Serve immediately with a Graham cracker as a scoop — it sets up quickly as it cools."
    ],
    done_when: "Marshmallows are puffed and golden on top, chocolate is fully melted underneath.",
    safety: "Molten marshmallow and chocolate hold heat intensely. Let it cool 3–4 min and warn scouts it's hot."
  },

  "banana-coffee-cake": {
    equipment: "Dutch oven on gas grill OR gas pizza oven",
    steps: [
      "Mash ripe bananas in a bowl until smooth.",
      "Stir in Bisquick, sugar, and cinnamon until a thick batter forms.",
      "Pour batter into a greased Dutch oven or oven-safe pan.",
      "In a small bowl mix brown sugar, cinnamon, and a little butter to make a crumb topping. Sprinkle over batter.",
      "DUTCH OVEN: Cover and cook on gas grill medium-low 25–30 min.",
      "GAS PIZZA OVEN: Bake at 375°F for 25–30 min.",
      "Test with a toothpick — should come out clean. Let cool 10 min before serving."
    ],
    done_when: "Toothpick comes out clean, top is golden, edges pull away slightly from the pot.",
    safety: "Bananas make this dense — make sure the center is cooked, not just the outside."
  },

  "cornbread": {
    equipment: "Dutch oven on gas grill OR gas pizza oven",
    steps: [
      "Preheat gas pizza oven to 400°F, or heat Dutch oven on gas grill medium.",
      "In a bowl mix Jiffy corn muffin mix, egg, and milk per package instructions. Don't over-mix.",
      "Grease Dutch oven (or muffin-size pan) with butter.",
      "Pour batter in, spreading evenly.",
      "DUTCH OVEN: Cover and cook on medium for 15–18 min.",
      "GAS PIZZA OVEN: Bake 15–18 min until golden.",
      "Toothpick should come out clean. Let cool 5 min before cutting."
    ],
    done_when: "Top is golden, toothpick clean, edges pull slightly from the side.",
    safety: "Cornbread from the Dutch oven is very hot on the bottom — use gloves when moving."
  },

  "egg-bake": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on gas grill over medium.",
      "Cook sausage in Dutch oven until browned. Drain fat.",
      "In a bowl, beat all eggs with milk, salt, and pepper.",
      "Pour egg mixture over the sausage in the Dutch oven.",
      "Sprinkle shredded cheese over the top.",
      "Cover and cook on medium-low 18–22 min until eggs are fully set.",
      "Test by shaking gently — no jiggle means it's done.",
      "Scoop into portions with a large spoon."
    ],
    done_when: "Eggs fully set throughout, cheese melted, no runny liquid.",
    safety: "Eggs must reach 160°F. Check the center — the sides set before the middle does."
  },

  "baked-beans": {
    equipment: "Dutch oven on gas grill",
    steps: [
      "Heat Dutch oven on gas grill medium.",
      "Cook bacon until crispy. Remove and crumble. Leave 1 Tbsp drippings.",
      "Add diced onion to drippings, cook 3 min.",
      "Pour in canned baked beans. Add brown sugar, mustard, and ketchup.",
      "Stir to combine and bring to a simmer.",
      "Cook uncovered on medium-low 20 min, stirring occasionally.",
      "Top with crumbled bacon before serving."
    ],
    done_when: "Beans are thick, sticky, and bubbling. Bacon is crispy on top.",
    safety: "Beans scorch on the bottom if the heat is too high — stir every 5 min."
  },

  // ════════════════════════════════════════════════════════════════════
  // GRAB AND GO — brief instructions only
  // ════════════════════════════════════════════════════════════════════

  "grab-go-pop-tarts": {
    equipment: "No equipment needed",
    steps: [
      "Open the box. Hand each scout one Pop-Tarts packet and one juice box.",
      "Everyone eats. Wrappers go in the trash bag.",
      "Done. Pack up and head out."
    ],
    done_when: "Scout is holding food.",
    safety: "Check for food allergies in the patrol before selecting flavors."
  },

  "grab-go-granola-banana": {
    equipment: "No equipment needed",
    steps: [
      "Hand each scout one granola bar pack and one banana.",
      "Wrappers and peels go in the trash bag.",
      "Zero cleanup — ready to go."
    ],
    done_when: "Immediate.",
    safety: "Check for tree nut allergies — most granola bars contain nuts or are made in facilities that process nuts."
  },

  "grab-go-instant-oatmeal": {
    equipment: "Gas grill or camp stove — one pot",
    steps: [
      "Fill a large pot with water and bring to a boil on the gas grill.",
      "Open each oatmeal cup and set one in front of each scout.",
      "Pour boiling water into each cup to the fill line.",
      "Stir, replace the lid (or cover with foil), wait 3 min.",
      "Eat straight from the cup. Cup goes in the trash — only the pot to wash."
    ],
    done_when: "Oats have absorbed all the water and are soft.",
    safety: "Boiling water burns — have one designated person pour. Use a ladle, not the pot."
  },

  "grab-go-cereal-milk": {
    equipment: "No equipment needed",
    steps: [
      "Hand each scout one cereal cup and one shelf-stable milk box.",
      "Open the cereal cup, pour milk in, eat with a spoon.",
      "Trash goes in the bag. Done."
    ],
    done_when: "Immediate.",
    safety: "Shelf-stable milk does not need refrigeration until opened — buy at Walmart grocery aisle."
  },

  "grab-go-bagel-cream-cheese": {
    equipment: "No equipment needed",
    steps: [
      "Pull bagels and cream cheese cups from the cooler.",
      "Hand each scout one bagel and one cream cheese cup.",
      "Open the cream cheese cup. Use a plastic knife to spread.",
      "Wrappers and cups go in the trash bag."
    ],
    done_when: "Immediate.",
    safety: "Keep cream cheese cold until handing out — don't leave it sitting in warm weather."
  },

  "grab-go-donuts": {
    equipment: "No equipment needed",
    steps: [
      "Open the donut box.",
      "Hand each scout 2 donuts and one chocolate milk box.",
      "Eat. Wrappers go in the trash bag.",
      "Final-day treat — scouts earned it."
    ],
    done_when: "Immediate.",
    safety: "No prep, no fire, no dishes."
  },

  "grab-go-muffins": {
    equipment: "No equipment needed",
    steps: [
      "Bring out the Walmart bakery muffin pack and applesauce pouches.",
      "Hand each scout one muffin and one pouch.",
      "Wrappers go in the trash bag."
    ],
    done_when: "Immediate.",
    safety: "Buy muffins the day before. Keep in a sealed bag overnight to stay fresh."
  },

  "grab-go-nutrigrain": {
    equipment: "No equipment needed",
    steps: [
      "Open the Nutri-Grain bar box.",
      "Hand each scout one bar and one OJ bottle.",
      "Eat. Trash goes in the bag."
    ],
    done_when: "Immediate.",
    safety: "No prep required."
  },

  "grab-go-pb-crackers": {
    equipment: "No equipment needed",
    steps: [
      "Hand each scout one Ritz Bits PB pack and one fruit pouch.",
      "Eat. All wrappers go in the trash bag."
    ],
    done_when: "Immediate.",
    safety: "Contains peanuts — check for nut allergies in the patrol before choosing this option."
  },

  "grab-go-trail-mix": {
    equipment: "No equipment needed",
    steps: [
      "Pull string cheese sticks from the cooler.",
      "Hand each scout one trail mix bag and one string cheese.",
      "Eat. Wrappers go in the trash."
    ],
    done_when: "Immediate.",
    safety: "Keep string cheese refrigerated until ready. May contain nuts — check for allergies."
  },

};
