// Cooking instructions part 3 — extends window.COOKING_INSTRUCTIONS (L–Z)
(function() {
  Object.assign(window.COOKING_INSTRUCTIONS, {

  // DINNERS — CHICKEN ───────────────────────────────────────────────────────────

  "chicken-and-dumplings": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Add canned chicken broth, cooked shredded chicken, diced celery, carrots, and onion.",
      "Bring to a boil. Season with garlic powder, salt, and pepper.",
      "In a bowl, mix Bisquick and milk together until a soft dough forms — don't overmix.",
      "Drop spoonfuls of dough onto the top of the simmering soup. Space them out.",
      "Cover tightly with lid. Cook on medium-low 12–15 min — DON'T LIFT THE LID during this time.",
      "Dumplings are done when they look dry on top and a toothpick comes out clean."
    ],
    done_when: "Dumplings puffed and dry on top, no raw dough inside.",
    safety: "Do not lift the lid while dumplings cook — the steam is what cooks them through."
  },
  "chicken-cacciateri": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high with oil. Season bone-in chicken pieces with salt and pepper.",
      "Sear chicken skin-side down 4–5 min until golden. Flip, sear 3 more min. Remove.",
      "Add diced onion, bell pepper, and garlic powder to the pot. Cook 3 min.",
      "Add crushed tomatoes, Italian seasoning, and a splash of chicken broth. Stir.",
      "Return chicken to the pot, pushing it into the sauce.",
      "Cover and reduce to medium-low. Cook 35–40 min until chicken reaches 165°F.",
      "Serve with bread to soak up the sauce."
    ],
    done_when: "Chicken internal temp 165°F, meat pulls from the bone easily.",
    safety: "Chicken must reach 165°F — always check the thickest part."
  },
  "chicken-creole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Cook diced chicken with Cajun seasoning 6–7 min until no longer pink.",
      "Add diced onion, bell pepper, celery, and garlic powder. Cook 4 min.",
      "Add diced tomatoes, tomato sauce, chicken broth, and a pinch of cayenne. Stir.",
      "Bring to a boil. Reduce to medium-low and simmer 20 min.",
      "Serve over instant white rice cooked separately."
    ],
    done_when: "Chicken cooked through at 165°F, sauce thickened.",
    safety: "Cajun seasoning is salty — taste before adding more salt."
  },
  "chicken-foil-dinner": {
    equipment: "Gas grill — foil packet on grates",
    steps: [
      "Preheat grill to medium-high.",
      "Season boneless chicken breast with salt, pepper, and garlic powder.",
      "Lay a 2-foot sheet of heavy-duty foil flat. Add sliced potatoes, then sliced carrots and onion. Place chicken on top. Add a pat of butter. Season veggies.",
      "Fold and seal the foil tightly — bring two long sides up and roll, fold in both ends.",
      "Place packet on grates. Close lid. Cook 25–30 min.",
      "Open carefully, fork-test the potato, and check chicken reaches 165°F."
    ],
    done_when: "Chicken 165°F, potatoes fork-tender.",
    safety: "Open foil away from your face — steam burns. Works over campfire coals for 25–30 min too."
  },
  "chicken-quesadillas": {
    equipment: "Gas grill — skillet",
    steps: [
      "Cook diced chicken breast in skillet on grill over medium-high with salt, pepper, and cumin, 6–7 min until no longer pink. Remove.",
      "Lay one tortilla flat in the skillet over medium heat.",
      "Spread cooked chicken on one half of the tortilla. Add shredded cheese and salsa.",
      "Fold the tortilla in half. Press down with spatula.",
      "Cook 2–3 min until golden brown. Flip carefully. Cook 2 more min.",
      "Cut into wedges and serve with sour cream and guacamole."
    ],
    done_when: "Tortilla golden and crispy on both sides, cheese fully melted inside.",
    safety: "Chicken must reach 165°F before folding it into the quesadilla."
  },
  "chicken-stir-fry": {
    equipment: "Gas grill — large skillet or wok",
    steps: [
      "Set grill to high heat. Heat a good amount of oil in the skillet until it shimmers.",
      "Add bite-size chicken breast pieces. Cook 4–5 min without stirring until seared. Then stir and cook 2 more min. Remove chicken.",
      "In the same skillet, add sliced bell peppers, broccoli, and onion. Stir constantly for 3–4 min on high heat.",
      "Return chicken to the pan. Pour in a few tablespoons of soy sauce and a little sesame oil (or teriyaki sauce). Toss to coat.",
      "Cook 1 more min. Serve over instant white rice."
    ],
    done_when: "Chicken 165°F, vegetables crisp-tender and slightly charred.",
    safety: "High heat + oil can splatter — keep face clear of the pan. Use a long-handled utensil."
  },
  "chili-chicken-and-dumplings": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Add chicken broth, canned white beans, cooked shredded chicken, a can of Ro-Tel, garlic powder, and cumin. Stir.",
      "Bring to a boil. Mix Bisquick and milk into a soft dough.",
      "Drop spoonfuls of dough on top of the simmering soup.",
      "Cover tightly — DON'T LIFT the lid. Cook on medium-low 12–15 min.",
      "Dumplings are done when they look dry on top."
    ],
    done_when: "Dumplings puffed and dry, broth hot and bubbling.",
    safety: "Don't open the lid — it ruins the dumplings."
  },
  "citrus-chicken": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Mix orange juice, lemon juice, garlic powder, and olive oil for a marinade. Marinate chicken pieces at least 30 min in the cooler.",
      "Set grill to medium-high. Remove chicken from marinade.",
      "Grill bone-in pieces 8–10 min per side, or boneless breasts 5–6 min per side.",
      "Use a thermometer to confirm 165°F before serving.",
      "Serve with the remaining marinade (that has NOT touched raw chicken) heated separately."
    ],
    done_when: "Internal temp 165°F, juices run clear.",
    safety: "Never reuse marinade that touched raw chicken — it's contaminated. Heat a separate portion if you want it as sauce."
  },
  "cola-chicken": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Place chicken pieces in Dutch oven. Season with salt and pepper.",
      "Pour one can of cola over the chicken.",
      "Add a cup of ketchup and a splash of Worcestershire sauce. Stir gently.",
      "Cover and cook on grill over medium 45–55 min.",
      "Halfway through, turn the chicken pieces over so they cook evenly.",
      "Done when chicken reaches 165°F and sauce has reduced and caramelized."
    ],
    done_when: "Chicken 165°F, sauce thick and sticky.",
    safety: "Cola makes the sauce very sweet — it can scorch. Keep heat at medium, not high."
  },
  "creamy-chicken-rice": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Add a can of cream of chicken soup, chicken broth, and garlic powder. Stir.",
      "Add cooked shredded chicken and bring to a simmer.",
      "Stir in instant white rice. Cover and reduce to low.",
      "Cook 5–7 min until rice absorbs the liquid.",
      "Fluff with a fork. Sprinkle shredded cheese on top and cover 2 min to melt."
    ],
    done_when: "Rice fully cooked and fluffy, cheese melted on top.",
    safety: "Cream soup burns fast on the bottom — keep heat on low after adding rice."
  },
  "dutch-oven-chicken": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Season a whole cut-up chicken (or pieces) generously with salt, pepper, garlic powder, and paprika.",
      "Heat Dutch oven on grill over medium-high with a little oil. Sear chicken pieces skin-side down 4–5 min. Flip, sear 3 more min. Remove.",
      "Add diced onion and a little broth to the pot. Scrape up any browned bits.",
      "Return chicken to the pot. Add enough broth to come up about 1 inch.",
      "Cover and reduce to medium-low. Cook 40–50 min until chicken reaches 165°F.",
      "Serve with the pan juices poured over the top."
    ],
    done_when: "Internal temp 165°F, meat pulls from the bone easily.",
    safety: "Chicken must always reach 165°F — use a thermometer in the thickest part."
  },
  "dutch-oven-chicken-breast-dinner": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Season chicken breasts with salt, pepper, garlic powder, and Italian seasoning.",
      "Heat Dutch oven on grill over medium-high with oil. Sear breasts 3–4 min per side until golden. Remove.",
      "Add diced potatoes and onion to the pot. Cook 3 min.",
      "Place chicken on top of the vegetables. Pour chicken broth over everything.",
      "Cover and reduce to medium-low. Cook 30–35 min until chicken is 165°F and potatoes are tender.",
      "Serve chicken over the vegetables with the pan juices."
    ],
    done_when: "Chicken 165°F, potatoes fork-tender.",
    safety: "Thick chicken breasts need the full 165°F — always verify with a thermometer."
  },
  "dutch-oven-pineapple-chicken": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high with a little oil. Brown chicken pieces 4 min per side. Remove.",
      "Pour one can of crushed pineapple (with juice), soy sauce, garlic powder, and a little brown sugar into the pot. Stir.",
      "Return chicken to the pot. Spoon sauce over the pieces.",
      "Cover and reduce to medium-low. Cook 35–40 min, turning chicken halfway through.",
      "Serve over rice with the pineapple sauce spooned over the top."
    ],
    done_when: "Chicken 165°F, sauce thick and sticky.",
    safety: "Sweet sauce burns — keep heat at medium-low after chicken goes back in."
  },
  "easy-barbeque-chicken-bits": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Cut chicken into bite-size chunks. Season with salt, pepper, and garlic powder.",
      "Set grill to medium-high. Grill chicken pieces directly on grates, turning every 3 min for 10–12 min total.",
      "In the last 2 min, brush generously with BBQ sauce. Flip and brush the other side.",
      "Serve on toothpicks or with bread."
    ],
    done_when: "Internal temp 165°F, sauce caramelized and sticky.",
    safety: "Add BBQ sauce in the last 2 min only — it burns fast on high heat."
  },
  "fancy-chicken-breasts": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Pound chicken breasts to an even thickness with a heavy pan so they cook evenly.",
      "Season with salt, pepper, garlic powder, and Italian seasoning.",
      "Set grill to medium-high. Grill breasts 6–7 min per side without moving them.",
      "In the last 2 min, top each breast with a slice of ham and a slice of Swiss cheese.",
      "Cover briefly with foil to melt the cheese.",
      "Let rest 3 min before serving."
    ],
    done_when: "Internal temp 165°F, cheese melted on top.",
    safety: "Don't move chicken while it grills — let it develop a sear before flipping."
  },
  "faux-chicken-cordon-bleu": {
    equipment: "Gas grill — skillet",
    steps: [
      "Pound chicken breasts flat. Place one slice of ham and one slice of Swiss cheese on each breast.",
      "Roll the chicken up tightly around the filling. Secure with toothpicks.",
      "Roll each stuffed piece in breadcrumbs.",
      "Heat oil in skillet on grill over medium-high. Brown rolls 3–4 min per side until golden all over.",
      "Reduce to medium-low. Cover and cook 15 more min until internal temp reaches 165°F.",
      "Remove toothpicks before serving."
    ],
    done_when: "Internal temp 165°F, breading golden, cheese melted inside.",
    safety: "Remove ALL toothpicks before serving — count them going in and count them coming out."
  },
  "fancy-franks-and-beans": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Slice hot dogs in half lengthwise, then into pieces. Heat in Dutch oven on grill over medium with a little oil, 3–4 min until browned.",
      "Add baked beans, mustard, brown sugar, and a splash of hot sauce. Stir.",
      "Simmer uncovered on medium-low 10–12 min, stirring occasionally, until thick.",
      "Serve in bowls with bread or crackers."
    ],
    done_when: "Beans thick and bubbling, hot dogs browned.",
    safety: "Stir often — beans scorch quickly."
  },
  "hawaiian-chicken": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high with oil. Brown chicken pieces 4 min per side. Remove.",
      "Add one can of crushed pineapple (with juice), soy sauce, ketchup, and garlic powder. Stir.",
      "Return chicken to the pot. Spoon sauce over pieces.",
      "Cover and reduce to medium-low. Cook 35–40 min, flipping chicken halfway.",
      "Serve over rice, spooning extra sauce over the top."
    ],
    done_when: "Chicken 165°F, sauce thickened.",
    safety: "Keep heat at medium-low once chicken goes back in — sweet sauce burns."
  },
  "hawaiian-steak-strips": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Marinate thin steak strips in pineapple juice, soy sauce, and garlic powder for 30 min in the cooler.",
      "Set grill to high. Shake excess marinade off the strips.",
      "Grill 2–3 min per side — they're thin and cook fast.",
      "Serve over rice with the remaining (unused) marinade heated separately as a sauce."
    ],
    done_when: "Internal temp 145°F (medium) or 160°F (well done).",
    safety: "Never serve the marinade that touched raw meat — heat a separate portion for sauce."
  },
  "mountain-dew-chicken": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Place chicken pieces in Dutch oven. Season with salt and pepper.",
      "Pour one can of Mountain Dew over the chicken. Add a cup of BBQ sauce.",
      "Cover and cook on grill over medium 45–55 min.",
      "Flip chicken halfway through. Sauce will reduce and get sticky.",
      "Done when chicken reaches 165°F and sauce is thick and caramelized."
    ],
    done_when: "Chicken 165°F, sauce thick and sticky.",
    safety: "Sweet sauce scorches — keep heat at medium, not high."
  },
  "simple-chicken-alfredo": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Cook penne pasta in a large pot of boiling water per package directions. Drain.",
      "In Dutch oven on grill over medium, heat a jar of Alfredo sauce.",
      "Add bite-size cooked chicken pieces and stir to coat.",
      "Add drained pasta. Toss to combine. Add a little pasta water if it's too thick.",
      "Serve topped with Parmesan and black pepper."
    ],
    done_when: "Pasta tender, sauce heated through, chicken at 165°F.",
    safety: "Alfredo sauce burns fast on high heat — keep it on medium and stir constantly."
  },
  "sausage-creole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Slice smoked sausage into rounds. Heat Dutch oven on grill over medium-high.",
      "Cook sausage 4 min until browned. Add diced onion, bell pepper, and celery. Cook 4 more min.",
      "Add garlic powder, Cajun seasoning, diced tomatoes, and chicken broth. Stir.",
      "Bring to a boil. Reduce to medium-low. Simmer 20 min.",
      "Serve over rice cooked separately."
    ],
    done_when: "Vegetables soft, sausage heated through, sauce slightly thickened.",
    safety: "Cajun seasoning is salty — taste before adding any extra salt."
  },
  "white-chicken-chili": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Add chicken broth, two cans of white beans (drained), cooked shredded chicken, a can of diced green chiles, garlic powder, and cumin. Stir.",
      "Bring to a boil. Reduce to medium-low. Simmer 20 min.",
      "Stir in a block of cream cheese cut into pieces. Stir until melted and creamy.",
      "Taste and adjust seasoning. Serve topped with shredded Monterey Jack, sour cream, and crushed tortilla chips."
    ],
    done_when: "Cream cheese fully melted, soup creamy and hot.",
    safety: "Add cream cheese over low heat — it can curdle at high temperatures."
  },

  // DINNERS — PORK ──────────────────────────────────────────────────────────────

  "hot-and-sweet-sausage": {
    equipment: "Gas grill — grates",
    steps: [
      "Set grill to medium-high. Place whole sausage links on grates.",
      "Grill 10–12 min total, turning every 3 min, until browned all over and internal temp reaches 160°F.",
      "Brush with a sweet BBQ sauce or honey in the last 2 min.",
      "Serve on buns or sliced with peppers and onions."
    ],
    done_when: "Internal temp 160°F, skins nicely charred.",
    safety: "Sausage fat drips and causes flare-ups — don't leave the grill unattended."
  },
  "mint-pork-chops": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Mix mint jelly, a splash of apple juice, and garlic powder for a glaze.",
      "Season pork chops with salt and pepper on both sides.",
      "Set grill to medium-high. Grill chops 4–5 min per side.",
      "Brush mint glaze on both sides in the last 2 min of cooking.",
      "Rest 3 min before serving."
    ],
    done_when: "Internal temp 145°F, juices run clear, glaze is caramelized.",
    safety: "Pork must reach 145°F — use a thermometer. Mint jelly glaze burns fast — add it last."
  },
  "pork-chops-and-potatoes": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Season pork chops with salt, pepper, and garlic powder.",
      "Heat Dutch oven on grill over medium-high with oil. Sear pork chops 3–4 min per side until golden. Remove.",
      "Add sliced potatoes and diced onion to the pot. Season with salt and pepper. Cook 3 min.",
      "Place pork chops on top of the potatoes. Pour chicken broth over everything.",
      "Cover and reduce to medium-low. Cook 25–30 min until potatoes are soft and pork is 145°F.",
      "Serve pork chops over the potatoes with pan juices."
    ],
    done_when: "Pork 145°F, potatoes fork-tender.",
    safety: "Pork must always reach 145°F before eating."
  },
  "zingy-pork-chops": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Make a marinade: soy sauce, Worcestershire, garlic powder, brown sugar, and a splash of hot sauce.",
      "Marinate pork chops at least 30 min in the cooler.",
      "Set grill to medium-high. Grill 4–5 min per side.",
      "Rest 3 min before serving."
    ],
    done_when: "Internal temp 145°F.",
    safety: "Pork must reach 145°F. Sweet marinade burns — watch for flare-ups and move chops if flames get high."
  },
  "tri-tip-teriyaki": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Marinate tri-tip in teriyaki sauce at least 1 hour in the cooler, or overnight.",
      "Set grill to medium-high. Remove tri-tip from marinade.",
      "Grill 5–6 min per side for medium-rare, 7–8 min for medium.",
      "Let rest 10 min before slicing — this is important for a roast-style cut.",
      "Slice AGAINST the grain in thin strips."
    ],
    done_when: "Internal temp 135°F (medium-rare) or 145°F (medium). Always rest before slicing.",
    safety: "Always slice against the grain on tri-tip — with the grain makes it very tough and chewy."
  },
  "pig-on-a-stick": {
    equipment: "Gas grill — grates with skewers",
    steps: [
      "Cut sausage or hot dogs into 1-inch chunks.",
      "Thread onto skewers, alternating with onion chunks and bell pepper.",
      "Brush with BBQ sauce.",
      "Grill on grates over medium heat, turning every 3 min for 10–12 min total.",
      "Brush with more BBQ sauce in the last 2 min."
    ],
    done_when: "Sausage browned and heated through, vegetables have char marks.",
    safety: "Hot skewer tips — handle from the non-food end only."
  },
  "frank-s-drumsticks": {
    equipment: "Gas grill — grates with skewers",
    steps: [
      "Wrap each hot dog spirally with a strip of raw bacon, securing the ends with a wooden toothpick.",
      "Thread onto metal skewers.",
      "Grill over medium heat, turning every 3 min for 10–12 min total, until bacon is crispy and browned.",
      "Remove toothpicks. Serve with mustard and ketchup."
    ],
    done_when: "Bacon crispy all over, hot dog heated through.",
    safety: "Remove all toothpicks before serving. Bacon fat causes flare-ups — watch closely."
  },
  "hawaiian-swiss-crescents": {
    equipment: "Gas pizza oven",
    steps: [
      "Preheat gas pizza oven to 375°F.",
      "Open a can of crescent rolls. Lay each triangle flat.",
      "Place a small piece of ham and a small piece of Swiss cheese at the wide end.",
      "Roll up from the wide end, curling the ends in to make a crescent shape.",
      "Place on a greased baking sheet.",
      "Bake in pizza oven 12–15 min until golden brown.",
      "Brush with melted butter and a drizzle of honey when they come out."
    ],
    done_when: "Golden brown on top, cheese melted inside.",
    safety: "Pizza oven runs hot — check after 10 min so they don't over-brown."
  },

  // DINNERS — PASTA/RICE ────────────────────────────────────────────────────────

  "fried-rice": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "You need cooked rice that is COLD — cook rice the night before and refrigerate, or use instant rice and spread it out to cool 30 min.",
      "Heat Dutch oven on grill over high heat with a good pour of oil.",
      "Add cold rice. Let it sit 2 min without stirring until it starts to crisp on the bottom.",
      "Stir and toss. Push rice to the sides. Crack 2–3 eggs into the center and scramble quickly.",
      "Mix eggs into the rice. Add diced ham or leftover meat, frozen peas and carrots (if available).",
      "Add a few tablespoons of soy sauce and a little sesame oil (if available). Toss everything together on high heat 2 min."
    ],
    done_when: "Rice is hot throughout, eggs are cooked, rice has some crispy bits.",
    safety: "Cold rice only — warm rice makes mushy fried rice. High heat is required for this recipe."
  },
  "jambalaya": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Cook sliced sausage and diced chicken 6–7 min until browned. Remove.",
      "Add diced onion, bell pepper, and celery. Cook 4 min.",
      "Add garlic powder, Cajun seasoning, and tomato paste. Stir 1 min.",
      "Add diced tomatoes, chicken broth, and dry white rice. Stir well. Return meat to the pot.",
      "Bring to a boil. Reduce to medium-low, cover, cook 20–22 min until rice absorbs all the liquid.",
      "Fluff with a fork and serve."
    ],
    done_when: "Rice fully cooked and fluffy, all liquid absorbed.",
    safety: "Don't lift the lid while the rice cooks — let it steam. Cajun seasoning is spicy — taste before adding more."
  },
  "lasagna": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef in Dutch oven on grill over medium-high. Drain fat. Add marinara sauce. Stir and remove from pot.",
      "In a bowl, mix ricotta cheese with an egg and Italian seasoning.",
      "Layer in the greased Dutch oven: sauce/meat on the bottom, then no-boil lasagna noodles broken to fit, then ricotta mixture, then shredded mozzarella. Repeat layers.",
      "Top with mozzarella and a final layer of sauce.",
      "Cover with lid. Cook on medium-low 40–45 min.",
      "Let rest 10 min before cutting — it needs time to set up."
    ],
    done_when: "Noodles soft when poked with a fork, cheese bubbling at the edges.",
    safety: "Use NO-BOIL lasagna noodles only — regular noodles don't cook properly in this method."
  },
  "mexican-macaroni": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef with taco seasoning in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add one can of Ro-Tel, one can of black beans (drained), and 2 cups water or beef broth. Stir.",
      "Bring to a boil. Add dry elbow macaroni. Stir to submerge.",
      "Reduce to medium-low, cover, cook 10–12 min, stirring every 3 min.",
      "Top with shredded Mexican blend cheese. Cover 2 min to melt."
    ],
    done_when: "Pasta tender, liquid mostly absorbed, cheese melted.",
    safety: "Stir often so pasta doesn't stick and burn on the bottom."
  },
  "pasghetti": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef in Dutch oven on grill over medium-high, 7–8 min. Drain fat.",
      "Add marinara sauce and Italian seasoning. Stir and bring to a simmer.",
      "In a separate pot, boil water and cook spaghetti 1–2 min less than the package says. Drain.",
      "Add drained pasta to the meat sauce. Toss to coat. Cook together 2 min.",
      "Serve topped with Parmesan."
    ],
    done_when: "Pasta tender, sauce thick and clinging.",
    safety: "Cook pasta slightly under — it finishes in the hot sauce and can get mushy if overcooked first."
  },
  "stroganoff": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Cook egg noodles in a pot of boiling water per package directions. Drain.",
      "Meanwhile, brown ground beef in Dutch oven on grill over medium-high, 7–8 min. Drain fat.",
      "Add sliced mushrooms and diced onion. Cook 4 min.",
      "Add cream of mushroom soup and beef broth. Stir until combined. Simmer 5 min.",
      "Remove from heat. Stir in a large spoonful of sour cream.",
      "Toss drained egg noodles into the sauce. Serve immediately."
    ],
    done_when: "Beef cooked through, sauce creamy and smooth.",
    safety: "Add sour cream OFF the heat — it curdles if it boils."
  },
  "creole-beans-and-rice": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook sliced sausage 4 min until browned.",
      "Add diced onion, bell pepper, and celery. Cook 4 min.",
      "Add kidney beans (undrained), chicken broth, Cajun seasoning, and garlic powder. Stir.",
      "Bring to a boil. Reduce to medium-low. Simmer 20 min.",
      "Serve over cooked white rice."
    ],
    done_when: "Beans tender, sauce thickened, sausage heated through.",
    safety: "Cajun seasoning is salty — taste before adding any extra salt."
  },
  "curry-beef-rice": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef in Dutch oven on grill over medium-high, 7–8 min. Drain fat.",
      "Add diced onion and cook 3 min. Add 2 Tbsp curry powder and garlic powder. Stir 1 min.",
      "Pour in beef broth and diced tomatoes. Stir and bring to a boil.",
      "Reduce to medium-low. Simmer 15 min until sauce thickens.",
      "Serve over cooked white rice."
    ],
    done_when: "Beef cooked through, sauce thickened.",
    safety: "Curry powder stains clothing permanently — warn scouts to be careful when stirring."
  },
  "jamaican-couscous": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Bring 2 cups chicken broth to a boil in Dutch oven on grill.",
      "Add sliced cooked sausage, drained black beans, a can of diced tomatoes with green chiles, and jerk seasoning. Stir.",
      "Stir in 1.5 cups dry instant couscous. Remove from heat. Cover tightly.",
      "Let stand 5 min. Fluff with a fork and serve."
    ],
    done_when: "Couscous fully expanded and fluffy, liquid absorbed.",
    safety: "Couscous is done off the heat — don't keep it on the grill or it gets mushy."
  },

  // DINNERS — CASSEROLES ────────────────────────────────────────────────────────

  "au-gratin-ham-and-potatoes": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Slice potatoes very thin (about 1/8 inch). Dice ham into small cubes.",
      "In a bowl, mix cream of mushroom soup, milk, garlic powder, salt, and pepper.",
      "Layer in a greased Dutch oven: potatoes, then ham, then a spoonful of soup mixture. Repeat.",
      "Top with shredded cheddar cheese.",
      "Cover and cook on grill over medium-low 45–55 min until potatoes are fully tender.",
      "Let rest 5 min before scooping."
    ],
    done_when: "Potatoes are completely soft when poked, cheese golden on top.",
    safety: "Thin potato slices cook through — thick slices will still be raw in the middle."
  },
  "ccc-casserole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef in Dutch oven on grill over medium-high, 7–8 min. Drain fat.",
      "Add cream of chicken soup, chicken broth, frozen corn, and canned diced green chiles. Stir.",
      "Bring to a simmer. Open a can of biscuits and place them on top of the mixture.",
      "Cover and cook on medium-low 15–18 min until biscuits are cooked through.",
      "Test with a toothpick — biscuits should come out clean."
    ],
    done_when: "Biscuits golden and cooked through, filling bubbling.",
    safety: "Keep the lid on while biscuits cook — the steam is what makes them rise."
  },
  "chuck-wagon-casserole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef and diced onion in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add a can of kidney beans, diced tomatoes, frozen corn, and chili powder. Stir.",
      "Top with a layer of Fritos or crushed tortilla chips.",
      "Sprinkle shredded cheddar over the chips.",
      "Cover and cook on medium-low 15 min until cheese melts and filling bubbles.",
      "Scoop and serve — try to keep some chips on top of each portion."
    ],
    done_when: "Filling bubbling, cheese melted on top.",
    safety: "Chips on top can burn quickly — check after 12 min."
  },
  "frito-casserole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef with taco seasoning in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add canned Ro-Tel and stir. Reduce to medium-low and simmer 5 min.",
      "Pour a bag of Fritos over the meat mixture. Press them in slightly.",
      "Top with shredded cheddar cheese.",
      "Cover and cook 8–10 min until cheese melts.",
      "Serve topped with sour cream and diced onion."
    ],
    done_when: "Cheese fully melted, filling bubbling.",
    safety: "Fritos on top brown fast — keep heat on low."
  },
  "ham-bake": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "In Dutch oven on grill over medium, cook diced ham 3–4 min until lightly browned.",
      "Add sliced potatoes, diced onion, and a can of cream of potato soup. Stir.",
      "Add a little milk to thin the soup slightly. Season with garlic powder, salt, and pepper.",
      "Cover and cook on medium-low 30–35 min until potatoes are fully tender.",
      "Top with shredded cheese, cover 2 min to melt."
    ],
    done_when: "Potatoes completely soft when poked, cheese melted.",
    safety: "Check and stir every 10 min so the cream soup doesn't scorch."
  },
  "pizza-casserole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Cook penne pasta in boiling water per package directions. Drain.",
      "Brown ground beef or Italian sausage in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add marinara sauce, Italian seasoning, and sliced pepperoni. Stir.",
      "Add drained pasta. Toss to coat.",
      "Top with shredded mozzarella and more pepperoni.",
      "Cover and cook on medium-low 10–12 min until cheese melts."
    ],
    done_when: "Cheese melted and bubbling, pasta hot throughout.",
    safety: "Pasta and sauce together can scorch — keep heat at medium-low."
  },
  "chili-casserole": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Make a basic chili: brown ground beef, add beans, tomatoes, and chili seasoning. Simmer 15 min.",
      "Spread the chili evenly in the Dutch oven.",
      "Open a can of corn muffin mix or Jiffy mix. Follow box instructions for batter.",
      "Pour batter over the chili. Spread evenly.",
      "Cover and cook on medium-low 20–25 min until cornbread top is set.",
      "Test with a toothpick — should come out clean."
    ],
    done_when: "Cornbread topping is golden and toothpick comes out clean.",
    safety: "Cornbread needs gentle, even heat — don't rush it with high heat."
  },
  "enchiladas": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Season and cook ground beef or shredded chicken in a skillet on grill until cooked through. Drain fat.",
      "Mix meat with shredded cheese and a spoonful of enchilada sauce.",
      "Warm tortillas on the grill grate 30 sec per side so they're flexible.",
      "Fill each tortilla with the meat mixture and roll up. Place seam-side down in a greased Dutch oven.",
      "Pour enchilada sauce over the rolled tortillas. Top with shredded cheese.",
      "Cover and cook on medium-low 20–25 min until heated through and cheese is melted."
    ],
    done_when: "Cheese melted and bubbling, tortillas heated through.",
    safety: "Warm the tortillas first — cold tortillas crack and fall apart when you roll them."
  },
  "girl-scout-stew": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef in Dutch oven on grill over medium-high, 7–8 min. Drain fat.",
      "Add a can of mixed vegetables (drained), a can of diced tomatoes, beef broth, and diced potatoes.",
      "Season with garlic powder, salt, and pepper. Stir and bring to a boil.",
      "Reduce to medium-low, cover, simmer 20–25 min until potatoes are tender.",
      "Stir in a can of condensed vegetable soup to thicken."
    ],
    done_when: "Potatoes soft, stew slightly thickened.",
    safety: "Classic patrol recipe — scales well for large groups."
  },
  "30-minute-stew": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown stew beef pieces 5–6 min. Drain.",
      "Add frozen stew vegetables (or diced carrots and potatoes), beef broth, garlic powder, and Worcestershire sauce.",
      "Bring to a boil. Reduce to medium-low and simmer 25–30 min until vegetables are tender.",
      "Mix a tablespoon of cornstarch with a little cold water, stir into the stew to thicken."
    ],
    done_when: "Vegetables soft, stew thickened, beef tender.",
    safety: "Add cornstarch slurry after removing from heat — it can get lumpy if added to a hard boil."
  },
  "hobo-stew": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Brown ground beef in Dutch oven on grill over medium-high, 7–8 min. Drain fat.",
      "Add diced potatoes, sliced carrots, diced onion, and beef broth to cover the vegetables.",
      "Season with garlic powder, salt, and pepper.",
      "Bring to a boil. Cover and reduce to medium-low. Simmer 25 min until vegetables are tender.",
      "Taste and adjust seasoning."
    ],
    done_when: "All vegetables fork-tender, broth flavorful.",
    safety: "Simple and reliable — good for a crowd."
  },
  "coffee-can-stew": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Brown beef chunks in Dutch oven on grill over medium-high with oil 5 min. Remove.",
      "Cook diced onion and diced potatoes in the pot 3 min.",
      "Return beef. Add beef broth, diced tomatoes, garlic powder, and black pepper.",
      "Bring to a boil. Reduce to medium-low. Cover and simmer 45–60 min.",
      "Add frozen peas and corn in the last 5 min. Stir and serve."
    ],
    done_when: "Beef fork-tender, vegetables soft.",
    safety: "Long simmer — stir every 15 min and add broth if the level drops too low."
  },
  "mexican-stew": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef with diced onion in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add taco seasoning, one can of Ro-Tel, one can of black beans (drained), diced potatoes, and beef broth. Stir.",
      "Bring to a boil. Reduce to medium-low. Simmer 20–25 min until potatoes are tender.",
      "Serve in bowls topped with sour cream, shredded cheese, and crushed chips."
    ],
    done_when: "Potatoes soft, stew bubbling and seasoned.",
    safety: "Adjust spice level before serving — add cayenne for heat or sour cream to cool it down."
  },
  "dutch-oven-beef-stew": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Cut beef chuck into 1-inch cubes. Season with salt and pepper.",
      "Heat Dutch oven on grill over medium-high with oil. Brown beef in batches 3 min per side. Remove.",
      "Add diced onion, carrots, and celery to the pot. Cook 4 min.",
      "Return beef. Add beef broth, diced potatoes, tomato paste, garlic powder, and thyme. Stir.",
      "Bring to a boil. Reduce to medium-low, cover, simmer 60–90 min until beef is fork-tender.",
      "Mix 2 Tbsp cornstarch with cold water. Stir into the stew to thicken. Cook 5 more min."
    ],
    done_when: "Beef very tender, gravy thick and rich.",
    safety: "Long cook — check every 20 min and add broth if needed."
  },
  "venison-stew": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Cut venison into 1-inch cubes. Soak in cold salted water 30 min if possible — pour off and pat dry.",
      "Season with salt, pepper, and garlic powder.",
      "Heat Dutch oven on grill over medium-high with oil. Brown venison 3–4 min per side. Remove.",
      "Cook diced onion, carrots, and potatoes in the pot 4 min.",
      "Return venison. Add beef broth, Worcestershire sauce, thyme, and garlic powder.",
      "Bring to a boil. Reduce to medium-low. Cover and simmer 60–90 min until tender."
    ],
    done_when: "Venison fork-tender, vegetables soft, broth rich.",
    safety: "Venison is very lean — the long simmer is what makes it tender. Don't skip it."
  },
  "bow-tie-soup": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown Italian sausage (or ground beef) in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add diced onion, diced tomatoes, chicken or beef broth, and Italian seasoning. Stir.",
      "Bring to a boil. Add dry bowtie (farfalle) pasta.",
      "Reduce to medium-low. Cook 10–12 min until pasta is tender.",
      "Stir in baby spinach (if available) — it wilts in about 1 min.",
      "Serve with shredded Parmesan."
    ],
    done_when: "Pasta tender, broth flavorful.",
    safety: "Pasta swells and soaks up liquid — add more broth if it gets too thick."
  },
  "brv-soup": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef in Dutch oven on grill over medium-high, 7–8 min. Drain fat.",
      "Add diced onion, sliced carrots, and diced potatoes. Cook 3 min.",
      "Add beef broth, diced tomatoes, garlic powder, and Worcestershire. Stir and bring to a boil.",
      "Reduce to medium-low. Simmer 20–25 min until vegetables are tender.",
      "Season with salt and pepper."
    ],
    done_when: "Vegetables soft, broth rich.",
    safety: "Add salt last — broth is already salty."
  },
  "clam-chowder": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Cook bacon in Dutch oven on grill over medium until crispy. Remove and crumble. Leave 1 Tbsp drippings.",
      "Add diced onion and celery. Cook 3–4 min until soft.",
      "Add diced potatoes and clam juice (from canned clams). Bring to a boil.",
      "Reduce to medium-low. Cook 15 min until potatoes are soft.",
      "Stir in heavy cream and two cans of drained chopped clams. Simmer 5 min.",
      "Season with salt and pepper. Top with crumbled bacon."
    ],
    done_when: "Potatoes soft, soup creamy and thick, clams heated through.",
    safety: "Add cream over low heat — it curdles at a hard boil."
  },
  "fish-chowder": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook bacon until crispy. Remove and crumble. Leave drippings.",
      "Add diced onion and celery. Cook 3 min.",
      "Add diced potatoes and chicken or fish broth. Bring to a boil.",
      "Reduce to medium-low. Cook 15 min until potatoes are soft.",
      "Add cod or tilapia cut into chunks. Stir in heavy cream.",
      "Simmer gently 5–6 min until fish is opaque and flakes easily.",
      "Season with salt, pepper, and Old Bay seasoning."
    ],
    done_when: "Fish flakes easily with a fork, potatoes soft, soup creamy.",
    safety: "Don't boil the chowder after adding fish and cream — gentle simmer only."
  },
  "peter-s-fish-soup": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Add diced onion and cook 3 min in a little oil.",
      "Add diced potatoes, sliced carrots, diced tomatoes, and chicken broth. Bring to a boil.",
      "Reduce to medium-low. Cook 15 min until vegetables are almost soft.",
      "Add fish fillets cut into large chunks. Season with garlic powder, salt, pepper, and a little dill.",
      "Simmer 6–8 min until fish is opaque and flakes.",
      "Serve with crackers or bread."
    ],
    done_when: "Fish flakes easily, vegetables soft, broth flavorful.",
    safety: "Fish cooks fast — don't overcook or it falls apart into tiny pieces."
  },
  "real-chicken-soup": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Add diced onion, sliced carrots, and diced celery. Cook 4 min.",
      "Add cooked shredded chicken, chicken broth, garlic powder, and dried thyme. Stir.",
      "Bring to a boil. Add egg noodles or rice.",
      "Reduce to medium-low. Cook 10–12 min until noodles are tender.",
      "Season with salt and pepper. Serve."
    ],
    done_when: "Noodles tender, vegetables soft, broth hot and fragrant.",
    safety: "Noodles soak up broth fast — add more broth if the soup gets too thick."
  },
  "split-pea-soup": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Dice a ham hock or cubed ham. Heat Dutch oven on grill over medium.",
      "Add diced onion, carrots, and ham. Cook 4 min.",
      "Add dry split peas (rinsed), chicken broth, garlic powder, and thyme. Stir.",
      "Bring to a boil. Reduce to medium-low. Cover and simmer 45–60 min, stirring every 15 min.",
      "Peas will break down and soup will thicken. Season with salt and pepper."
    ],
    done_when: "Peas have fully broken down into a thick, creamy texture.",
    safety: "Long simmer — check every 15 min and add broth if needed. Peas on the bottom will scorch if heat is too high."
  },
  "chicken-gumbo": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Cook diced chicken until no longer pink, 6–7 min. Remove.",
      "In the same pot, cook diced onion, bell pepper, and celery 4 min.",
      "Add garlic powder, Cajun seasoning, and a can of diced tomatoes. Stir.",
      "Add chicken broth and sliced okra (fresh or frozen). Bring to a boil.",
      "Return chicken. Reduce to medium-low. Simmer 20 min.",
      "Serve over rice."
    ],
    done_when: "Chicken at 165°F, okra soft, gumbo thick.",
    safety: "Okra thickens the gumbo naturally — add it early enough for it to fully soften."
  },
  "cajun-gumbo": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Cook sliced smoked sausage 4 min until browned. Remove.",
      "Add diced onion, bell pepper, and celery. Cook 4 min.",
      "Add Cajun seasoning (2 tsp), garlic powder, diced tomatoes, and chicken broth. Stir.",
      "Bring to a boil. Add shrimp (if available) or canned chicken. Add sliced okra.",
      "Return sausage. Reduce to medium-low. Simmer 15–20 min.",
      "Serve over rice."
    ],
    done_when: "Vegetables soft, sausage heated through, gumbo thickened.",
    safety: "If using shrimp, it cooks in 3–4 min — add it in the last 5 min of cooking only."
  },

  // DINNERS — FISH ──────────────────────────────────────────────────────────────

  "baked-salmon": {
    equipment: "Gas grill — foil packet on grates",
    steps: [
      "Preheat grill to medium-high.",
      "Place each salmon fillet on a sheet of heavy-duty foil. Drizzle with olive oil.",
      "Season with garlic powder, salt, pepper, and a squeeze of lemon juice.",
      "Fold foil up around the salmon and seal all edges tightly.",
      "Place packets on grates. Cook 12–15 min. Salmon is done when it flakes easily.",
      "Open foil away from your face and serve from the packet."
    ],
    done_when: "Salmon flakes easily with a fork and is no longer translucent.",
    safety: "Open foil away from your face — steam burns. Also works directly on campfire coals."
  },
  "fish-fry": {
    equipment: "Dutch oven — with oil, on gas grill",
    steps: [
      "Pat fish fillets completely dry. Season with salt and pepper.",
      "Mix cornmeal, flour, garlic powder, and Old Bay seasoning in a bag for breading.",
      "Coat each fillet in the breading mix.",
      "Pour 2–3 inches of vegetable oil into Dutch oven on grill over medium-high. Heat until a small piece of breading dropped in sizzles immediately (about 350°F).",
      "Fry fillets in batches 3–4 min per side until golden brown and fish flakes easily.",
      "Drain on paper towels. Serve with ketchup or tartar sauce."
    ],
    done_when: "Golden brown on both sides, fish flakes with a fork.",
    safety: "Hot oil is a severe burn risk — never leave the Dutch oven unattended. Keep lid nearby for a grease fire."
  },
  "salmon-in-foil-pack": {
    equipment: "Gas grill — foil packet on grates",
    steps: [
      "Preheat grill to medium-high.",
      "Season salmon fillets with garlic powder, salt, pepper, and lemon slices.",
      "Place each fillet on its own heavy-duty foil sheet. Seal tightly.",
      "Grill 12–15 min until salmon flakes easily.",
      "Open foil away from face and serve from the packet."
    ],
    done_when: "Salmon flakes easily and is no longer translucent in the center.",
    safety: "Also works over campfire coals for 12 min. Open foil away from your face."
  },
  "simply-salmon": {
    equipment: "Gas grill — directly on grates",
    steps: [
      "Brush salmon fillets with olive oil on both sides. Season with salt, pepper, and garlic powder.",
      "Set grill to medium-high. Oil the grates lightly to prevent sticking.",
      "Place salmon skin-side up. Cook 4 min without moving.",
      "Flip carefully. Cook 4–5 more min until salmon flakes with a fork.",
      "Squeeze lemon over the top and serve."
    ],
    done_when: "Salmon flakes easily, no longer translucent.",
    safety: "Oil the grates before placing fish — salmon sticks and falls apart if grates are dry."
  },

  // DINNERS — MISC ──────────────────────────────────────────────────────────────

  "bacon-spuds": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook bacon until crispy. Remove and crumble. Leave drippings.",
      "Add diced potatoes and onion. Season with garlic powder, salt, and pepper.",
      "Cook 15–20 min, stirring every 5 min, until potatoes are golden and soft.",
      "Stir in sour cream and shredded cheddar. Mix until melted.",
      "Top with crumbled bacon."
    ],
    done_when: "Potatoes golden and fork-tender, cheese melted.",
    safety: "Bacon drippings are very hot — stir carefully."
  },
  "baking-powder-biscuits": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix 2 cups flour, 1 Tbsp baking powder, 1 tsp salt in a bowl.",
      "Cut in 1/3 cup butter with a fork until mixture looks like crumbs.",
      "Add 2/3 cup milk. Stir just until a soft dough forms — don't overmix.",
      "Pat dough out about 1/2 inch thick. Cut into rounds with a cup.",
      "Place biscuits in a greased Dutch oven. They can touch.",
      "Cover and cook on grill over medium 12–15 min until tops are golden and toothpick comes out clean."
    ],
    done_when: "Golden on top, cooked through, toothpick clean.",
    safety: "Don't overmix the dough — it makes tough, dense biscuits."
  },
  "bannock": {
    equipment: "Gas grill — skillet on grates",
    steps: [
      "Mix 2 cups flour, 1 Tbsp baking powder, 1 tsp salt in a bowl.",
      "Add 2 Tbsp oil and about 3/4 cup water. Mix until a smooth dough forms.",
      "Heat a lightly oiled skillet on grill over medium.",
      "Press dough into the skillet to about 1/2 inch thick.",
      "Cover with foil. Cook 8–10 min until the bottom is golden. Flip carefully.",
      "Cook 8 more min until both sides are golden and a toothpick comes out clean."
    ],
    done_when: "Golden on both sides, no raw dough when poked with a toothpick.",
    safety: "Traditional camp bread — simple and sturdy. Can also be cooked wrapped around a stick over a campfire."
  },
  "burrito-ranchero": {
    equipment: "Gas grill — skillet",
    steps: [
      "Cook ground beef with diced onion and taco seasoning in skillet on grill, 7–8 min. Drain fat.",
      "Add a small can of green chiles and a few tablespoons of salsa verde. Simmer 3 min.",
      "Warm flour tortillas on grate 30 sec per side.",
      "Fill each tortilla with the beef mixture, refried beans, and shredded Monterey Jack cheese.",
      "Roll up tightly. Top with extra salsa verde and cheese if desired."
    ],
    done_when: "Beef fully cooked, beans hot, tortillas warm.",
    safety: "Work fast after warming tortillas — they stiffen and crack as they cool."
  },
  "dill-potato-wedges": {
    equipment: "Gas grill — skillet or directly on grates",
    steps: [
      "Cut potatoes into wedges. Toss in a bowl with olive oil, dried dill, garlic powder, salt, and pepper.",
      "SKILLET METHOD: Heat skillet on grill over medium-high. Cook wedges 5–6 min per side until golden and crispy.",
      "GRATE METHOD: Grill potato wedges directly on grates over medium-high 5–6 min per side.",
      "Serve as a side dish."
    ],
    done_when: "Wedges golden and fork-tender.",
    safety: "Potatoes take longer than you think — test one in the center with a fork before serving."
  },
  "dutch-oven-doughnuts": {
    equipment: "Dutch oven — with oil, on gas grill",
    steps: [
      "Open a can of refrigerated biscuit dough. Separate the biscuits.",
      "Use a finger to poke a hole through the center of each biscuit, stretching it to about 1.5 inches.",
      "Pour 2–3 inches of vegetable oil into Dutch oven on grill over medium-high. Heat until oil shimmers (about 350°F).",
      "Fry biscuit doughnuts 2 min per side until golden brown. Don't crowd the pot.",
      "Drain on paper towels. While still warm, toss in a bag of cinnamon sugar."
    ],
    done_when: "Golden brown on both sides, puffed and cooked through.",
    safety: "Hot oil severely burns — keep lid nearby and never leave unattended."
  },
  "dutch-oven-fondue-or-fryer": {
    equipment: "Dutch oven — with oil, on gas grill",
    steps: [
      "FONDUE: Melt a block of Velveeta in the Dutch oven over low heat, stirring constantly. Add a little milk to thin. Keep warm on low. Dip bread, veggies, or chips.",
      "FRYER: Pour 3 inches of vegetable oil into Dutch oven. Heat to 350°F (a biscuit scrap dropped in should sizzle immediately). Fry breaded items 3–4 min until golden. Drain on paper towels."
    ],
    done_when: "Fondue: smooth and pourable. Fryer: items golden brown.",
    safety: "Hot oil is a severe burn risk — keep lid nearby, never leave unattended. To put out a grease fire: smother with the lid, never use water."
  },
  "dutch-oven-hot-chili": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef and diced onion in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add chili powder (3 Tbsp), cayenne pepper (1 tsp), cumin, garlic powder, salt, and pepper. Stir 1 min.",
      "Add diced tomatoes, tomato sauce, kidney beans, and beef broth. Stir.",
      "Bring to a boil. Reduce to medium-low. Simmer uncovered 30 min, stirring occasionally.",
      "Taste and add more cayenne if you want it hotter. Serve with cheese, sour cream, and crackers."
    ],
    done_when: "Chili thick, deeply colored, and genuinely spicy.",
    safety: "This is very spicy — have sour cream and shredded cheese available to cut the heat."
  },
  "garlic-potatoes": {
    equipment: "Gas grill — skillet",
    steps: [
      "Dice potatoes into 1/2-inch cubes.",
      "Heat oil in skillet on grill over medium-high.",
      "Add potatoes. Season with garlic powder, salt, pepper, and dried rosemary if available.",
      "Cook 6–7 min without stirring to let the bottom brown.",
      "Stir and cook 5 more min, turning occasionally, until golden on most sides and fork-tender.",
      "Finish with a little butter tossed in at the end."
    ],
    done_when: "Potatoes golden and crispy on the outside, soft inside.",
    safety: "Don't crowd the skillet — too many potatoes steam instead of fry."
  },
  "hearty-potatoes": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Slice potatoes 1/4 inch thick. Slice onion into rings.",
      "Heat Dutch oven on grill over medium. Add butter and let it melt.",
      "Add potatoes and onion in layers. Season each layer with salt, pepper, and garlic powder.",
      "Cover and cook on medium-low 20–25 min, stirring gently halfway through.",
      "Potatoes should be soft and slightly browned. Top with shredded cheese and cover 2 min to melt."
    ],
    done_when: "Potatoes completely soft, cheese melted.",
    safety: "Check and stir halfway through to prevent the bottom from scorching."
  },
  "hoppin-john": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook diced bacon until crispy. Remove and crumble. Leave drippings.",
      "Add diced onion, celery, and bell pepper. Cook 4 min.",
      "Add two cans of black-eyed peas (undrained), chicken broth, garlic powder, and cayenne. Stir.",
      "Bring to a boil. Reduce to medium-low. Simmer 20 min.",
      "Stir in cooked white rice and crumbled bacon. Cook 5 more min.",
      "Serve with hot sauce on the side."
    ],
    done_when: "Rice heated through, peas soft, broth mostly absorbed.",
    safety: "Classic Southern camp meal — make sure bacon is fully cooked before removing."
  },
  "hopping-black-eyed-peas": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Cook diced bacon in Dutch oven on grill over medium until crispy. Remove and crumble.",
      "Add diced onion to the drippings. Cook 3 min.",
      "Add two cans of black-eyed peas (undrained), garlic powder, chicken broth, and black pepper.",
      "Bring to a simmer. Cook on medium-low 20 min.",
      "Top with crumbled bacon. Serve with cornbread."
    ],
    done_when: "Peas soft and liquid partially absorbed.",
    safety: "Simple recipe — main risk is scorching on too-high heat."
  },
  "hot-dish": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef in Dutch oven on grill over medium-high. Drain fat.",
      "Add cream of mushroom soup, frozen mixed vegetables, garlic powder, salt, and pepper. Stir.",
      "Bring to a simmer on medium-low.",
      "Top with tater tots arranged in a single layer.",
      "Cover and cook 20–25 min until tots are heated and cooked through.",
      "Serve scooped directly from the Dutch oven."
    ],
    done_when: "Tots hot and cooked through (not frozen in the center), filling bubbling.",
    safety: "Check that tater tots are truly cooked through — frozen centers stay cold a long time."
  },
  "irish-soda-bread": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix 4 cups flour, 1 tsp baking soda, 1 tsp salt in a large bowl.",
      "Add 1.5 cups buttermilk (or regular milk mixed with 1 Tbsp vinegar). Stir until a rough dough forms.",
      "Shape the dough into a round ball. Flatten it slightly into the greased Dutch oven.",
      "Score an X into the top about 1/2 inch deep with a knife.",
      "Cover and cook on grill over medium-low 30–40 min.",
      "Done when the bread sounds hollow when tapped on the bottom and toothpick comes out clean."
    ],
    done_when: "Hollow sound when tapped, toothpick clean, golden brown exterior.",
    safety: "Bread is hot throughout when done — let cool 10 min before cutting."
  },
  "layered-taco-pie": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef with taco seasoning in Dutch oven on grill, 7–8 min. Drain fat. Remove and set aside.",
      "Layer in greased Dutch oven: flour tortilla on the bottom, then seasoned beef, refried beans, salsa, and shredded cheese. Repeat layers.",
      "End with a tortilla on top covered with shredded cheese.",
      "Cover and cook on medium-low 15–20 min until cheese is melted and layers are hot.",
      "Cut into wedges like a pie. Serve with sour cream."
    ],
    done_when: "Cheese melted on top, layers heated through.",
    safety: "Let rest 5 min before cutting so the layers don't slide apart."
  },
  "meat-loaf": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "In a bowl, mix ground beef, one egg, breadcrumbs, diced onion, Worcestershire sauce, salt, and pepper.",
      "Shape the mixture into a loaf that fits in the center of the Dutch oven.",
      "Mix ketchup with a little brown sugar for a glaze. Spread over the top of the loaf.",
      "Cover Dutch oven with lid. Cook on grill over medium-low 45–55 min.",
      "Done when internal temp reaches 160°F. Let rest 5 min before slicing."
    ],
    done_when: "Internal temp 160°F throughout, no pink in the center.",
    safety: "Use a meat thermometer — the outside looks done long before the center is."
  },
  "meatballs-in-gravy": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Pour in beef broth and a can of cream of mushroom soup. Stir until smooth.",
      "Add frozen meatballs. Stir to coat in the gravy.",
      "Cover and cook on medium-low 20–25 min, stirring every 5 min, until meatballs are heated through.",
      "Serve over egg noodles or mashed potato flakes."
    ],
    done_when: "Meatballs at 165°F, gravy smooth and hot.",
    safety: "Cream soup burns on high heat — keep it on medium-low and stir often."
  },
  "mexican-meatloaf": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix ground beef, one egg, taco seasoning packet, drained Ro-Tel, and crushed tortilla chips in a bowl.",
      "Shape into a loaf in the greased Dutch oven.",
      "Spread salsa over the top. Sprinkle shredded Mexican blend cheese.",
      "Cover and cook on grill over medium-low 45–55 min until internal temp reaches 160°F.",
      "Let rest 5 min. Serve with sour cream."
    ],
    done_when: "Internal temp 160°F throughout.",
    safety: "Same rules as regular meatloaf — use a thermometer to check the center."
  },
  "mushroom-round-steak": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Season round steak with salt and pepper. Cut into serving-size pieces.",
      "Heat Dutch oven on grill over medium-high with oil. Brown steak 3 min per side. Remove.",
      "Add sliced mushrooms and diced onion. Cook 4 min.",
      "Add cream of mushroom soup and beef broth. Stir until smooth.",
      "Return steak to the pot. Cover and reduce to medium-low.",
      "Simmer 45–60 min until steak is fork-tender. Serve over rice."
    ],
    done_when: "Steak very tender and fork-tender, gravy thick.",
    safety: "Round steak is a tough cut — it needs the long simmer to become tender."
  },
  "swiss-steak": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Pound round steak with the back of a heavy spoon to tenderize it. Cut into pieces. Season with salt and pepper.",
      "Heat Dutch oven on grill over medium-high with oil. Brown steak 3–4 min per side. Remove.",
      "Add diced onion, celery, and diced tomatoes with their juice to the pot.",
      "Return steak. Add Worcestershire sauce, garlic powder, and a little beef broth.",
      "Cover and reduce to medium-low. Simmer 60–75 min until steak is very tender."
    ],
    done_when: "Steak falls apart when poked with a fork.",
    safety: "This is a long braise — add broth if the liquid drops too low."
  },
  "trail-beef-potatos-and-gravy": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown beef strips or stew beef in Dutch oven on grill over medium-high, 5–6 min. Remove.",
      "Cook diced potatoes and onion in the pot 5 min.",
      "Return beef. Add beef gravy from a jar or packet mixed with water. Stir.",
      "Cover and reduce to medium-low. Cook 25–30 min until potatoes are soft.",
      "Serve over bread or eat as-is."
    ],
    done_when: "Potatoes fork-tender, gravy thick and hot.",
    safety: "Jarred gravy burns fast — keep heat low and stir often."
  },
  "short-corn": {
    equipment: "Gas grill — grates",
    steps: [
      "Pull back the corn husks but don't remove them. Remove the silks.",
      "Brush corn with butter, garlic powder, salt, and pepper.",
      "Pull the husks back up around the corn. Wrap tightly in foil.",
      "Grill on grates over medium heat 20–25 min, turning every 5 min.",
      "Open foil carefully — steam inside. Pull back husks and eat."
    ],
    done_when: "Corn is soft and steamed, kernels tender.",
    safety: "Foil and corn are very hot when done — let cool 2 min before handing to scouts."
  },
  "old-style-green-beans": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Cook bacon in Dutch oven on grill over medium until crispy. Remove and crumble. Leave drippings.",
      "Add diced onion. Cook 3 min.",
      "Add canned green beans (with their liquid), garlic powder, salt, and pepper.",
      "Simmer on medium-low 15–20 min.",
      "Top with crumbled bacon before serving."
    ],
    done_when: "Beans tender and fully flavored.",
    safety: "Simple side dish — main risk is boiling dry. Keep heat low."
  },
  "ticks-on-a-toilet-seat": {
    equipment: "Gas grill — skillet",
    steps: [
      "Unroll crescent roll dough and separate into triangles.",
      "Wrap each triangle around a cocktail sausage (or hot dog piece), starting at the wide end.",
      "Heat a little oil in skillet on grill over medium.",
      "Place wrapped sausages in the skillet. Cook 2–3 min per side until golden brown all over.",
      "Serve with mustard and ketchup for dipping."
    ],
    done_when: "Crescent dough golden brown all over, sausage heated through.",
    safety: "Crescent dough burns fast — medium heat only, watch closely."
  },
  "witches-brew": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium-high. Brown ground beef 7–8 min. Drain fat.",
      "Add kidney beans, diced tomatoes, corn, canned tomato soup, and chili seasoning. Stir.",
      "Bring to a boil. Reduce to medium-low. Simmer 20 min, stirring occasionally.",
      "Serve with shredded cheese and crackers. Great Halloween or fall campout recipe."
    ],
    done_when: "Stew thick and bubbling.",
    safety: "High-volume recipe — make sure the Dutch oven is big enough."
  },

  // DESSERTS ────────────────────────────────────────────────────────────────────

  "apple-fluff": {
    equipment: "No cooking needed — no-bake dessert",
    steps: [
      "Drain a can of apple pie filling and chop the apple pieces smaller.",
      "In a large bowl, mix the apples with a tub of whipped topping (Cool Whip) and a bag of mini marshmallows.",
      "Stir in a spoonful of cinnamon.",
      "Serve immediately or refrigerate in the cooler until ready.",
      "Scoop into cups and serve."
    ],
    done_when: "All ingredients combined and fluffy.",
    safety: "Keep refrigerated until serving — whipped topping melts in heat."
  },
  "blonde-brownies": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "In a bowl, mix melted butter, brown sugar, one egg, and vanilla until smooth.",
      "Stir in flour and baking powder until just combined.",
      "Fold in chocolate chips and chopped nuts if desired.",
      "Pour batter into a greased Dutch oven. Spread evenly.",
      "Cover and cook on grill over medium-low 20–25 min.",
      "Toothpick should come out with a few moist crumbs — not wet batter."
    ],
    done_when: "Toothpick comes out with moist crumbs (not wet), edges pulling from the sides.",
    safety: "Don't overcook — brownies continue to set after removing from heat."
  },
  "candied-apples": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Core apples and place them in the Dutch oven.",
      "Mix brown sugar, cinnamon, a pat of butter, and a little water in a bowl. Spoon into each apple core hole.",
      "Cover Dutch oven with lid. Cook on grill over medium-low 20–25 min.",
      "Apples should be soft when poked with a fork and the sugar should be caramelized.",
      "Let cool 5 min before eating — they're very hot inside."
    ],
    done_when: "Apples completely soft, sugar caramelized.",
    safety: "Caramelized sugar is extremely hot — wait before eating."
  },
  "cheesecake": {
    equipment: "No cooking needed — no-bake cheesecake",
    steps: [
      "Crush Graham crackers in a bag. Mix with melted butter. Press firmly into the bottom of a pot or pan as the crust.",
      "Beat a block of softened cream cheese with powdered sugar and vanilla until smooth.",
      "Fold in a tub of whipped topping until combined.",
      "Spoon the cheesecake filling over the crust. Smooth the top.",
      "Cover and refrigerate in the cooler at least 2 hours before serving.",
      "Top with fruit pie filling before scooping."
    ],
    done_when: "Set and firm after chilling. Scoops cleanly.",
    safety: "Must stay cold — keep in the cooler until serving. Don't leave out in warm weather."
  },
  "chocolate-chip-cookies": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix softened butter, brown sugar, and granulated sugar until combined. Beat in one egg and vanilla.",
      "Stir in flour, baking soda, and salt. Fold in chocolate chips.",
      "Line the Dutch oven with parchment paper or foil. Drop spoonfuls of dough in the Dutch oven — space them apart.",
      "Cover and cook on grill over medium-low 12–15 min.",
      "Done when edges are set and golden. Centers will still look soft — they firm up as they cool.",
      "Let cool in the Dutch oven 10 min before removing."
    ],
    done_when: "Edges set and golden, centers soft but not wet.",
    safety: "Don't overcook — cookies look underdone when they're actually perfectly done."
  },
  "chocolate-upside-down-cake": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "In a bowl, prepare chocolate cake mix per box with eggs, water, and oil.",
      "Melt butter in the bottom of the greased Dutch oven. Sprinkle brown sugar over the melted butter.",
      "Arrange sliced bananas or pineapple rings over the brown sugar.",
      "Pour cake batter over the top.",
      "Cover and cook on grill over medium-low 30–35 min until toothpick comes out clean.",
      "Let cool 5 min. Place a plate on top of the Dutch oven and flip quickly. Lift the pot off."
    ],
    done_when: "Toothpick clean, caramel bubbling at the edges.",
    safety: "Flipping the Dutch oven — have a helper hold the plate. Both the pot and plate will be hot — use gloves."
  },
  "cooked-apples": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Peel, core, and slice apples into wedges.",
      "Toss with brown sugar, cinnamon, and a pat of butter in the Dutch oven.",
      "Cook on grill over medium-low 15–20 min, stirring occasionally, until apples are soft and caramelized.",
      "Serve warm over pancakes, cornbread, or on their own with whipped cream."
    ],
    done_when: "Apples completely soft and coated in caramelized syrup.",
    safety: "Simple and fast — main risk is scorching on the bottom. Stir every 5 min."
  },
  "cup-cakes": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Prepare cake mix per box with eggs, water, and oil.",
      "Grease the inside of the Dutch oven or use small foil cups if available.",
      "Pour batter in — about 2/3 full if using foil cups, or pour the whole batch into the Dutch oven.",
      "Cover and cook on grill over medium-low 25–30 min.",
      "Test with a toothpick — should come out clean.",
      "Let cool before frosting with canned frosting."
    ],
    done_when: "Toothpick clean, edges pulling from the sides.",
    safety: "Baking in a Dutch oven takes longer than a home oven — don't rush it with higher heat."
  },
  "dessert-burritos": {
    equipment: "Gas grill — skillet",
    steps: [
      "Warm flour tortillas on grill grate 30 sec per side until flexible.",
      "Spread Nutella or peanut butter down the center of each tortilla.",
      "Add sliced bananas and mini marshmallows.",
      "Roll up tightly.",
      "Place seam-side down in a buttered skillet on grill over medium heat. Cook 2 min per side until golden and crispy.",
      "Dust with powdered sugar and serve."
    ],
    done_when: "Tortilla golden and crispy, filling warm inside.",
    safety: "Nutella and marshmallow filling gets very hot — let cool briefly before eating."
  },
  "easy-pie": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Unroll refrigerated pie crust and press into the bottom of a greased Dutch oven, pressing it up the sides.",
      "Pour pie filling of choice over the crust.",
      "Place a second pie crust over the top. Crimp the edges together. Cut 3 slits in the top.",
      "Cover and cook on grill over medium-low 30–35 min.",
      "Done when crust is golden and filling is bubbling through the slits.",
      "Cool 15 min before cutting."
    ],
    done_when: "Crust golden, filling bubbling.",
    safety: "Filling is molten when it comes out — wait before serving."
  },
  "good-bars": {
    equipment: "No cooking needed — no-bake bar",
    steps: [
      "Melt 1 cup peanut butter with 1 cup honey in a pot over low heat or in a Dutch oven, stirring until smooth.",
      "Pour over 4–5 cups of oats in a large bowl. Mix well.",
      "Add chocolate chips, dried fruit, or M&Ms if available.",
      "Press the mixture firmly into a greased pan or Dutch oven lined with foil.",
      "Refrigerate in the cooler 1–2 hours until set.",
      "Cut into bars and serve."
    ],
    done_when: "Firm and holds its shape when cut.",
    safety: "Must stay cold to hold together — keep in the cooler until serving."
  },
  "meaty-meat-pie": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef with diced onion and garlic powder in Dutch oven on grill, 7–8 min. Drain fat.",
      "Stir in a can of cream of mushroom soup and a splash of Worcestershire sauce.",
      "Unroll refrigerated biscuit dough and place biscuits on top of the meat mixture, covering the top.",
      "Cover and cook on medium-low 15–18 min until biscuits are golden.",
      "Toothpick in a biscuit should come out clean."
    ],
    done_when: "Biscuits golden and cooked through, filling bubbling.",
    safety: "Keep the lid on while biscuits cook — steam is what makes them rise."
  },
  "pineapple-upside-down-cake": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Melt 1/4 cup butter in the bottom of the Dutch oven. Sprinkle 1/2 cup brown sugar over the butter.",
      "Drain a can of pineapple rings. Arrange rings over the brown sugar.",
      "Place a maraschino cherry in the center of each pineapple ring.",
      "Mix yellow cake mix per box with eggs, oil, and water. Pour batter over the pineapple.",
      "Cover and cook on grill over medium-low 30–35 min until toothpick comes out clean.",
      "Cool 5 min. Flip onto a plate — lift the pot off carefully."
    ],
    done_when: "Toothpick clean, cake pulling from the sides.",
    safety: "Flipping a full Dutch oven — use gloves and have a helper hold the plate."
  },
  "raisin-bread-pudding": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Cube day-old bread and spread in a greased Dutch oven.",
      "In a bowl, whisk 4 eggs, 2 cups milk, 1/4 cup sugar, 1 tsp cinnamon, and 1 tsp vanilla.",
      "Scatter raisins over the bread. Pour the egg mixture evenly over everything.",
      "Press down gently so the bread soaks up the mixture.",
      "Cover and cook on grill over medium-low 30–35 min until the center is set.",
      "Let cool 5 min. Serve warm with caramel sauce or maple syrup."
    ],
    done_when: "Center is set (no jiggle), toothpick comes out clean.",
    safety: "Eggs in the custard must be fully cooked — check the center."
  },
  "shepherd-pie": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef with diced onion in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add mixed vegetables, beef broth, Worcestershire sauce, and garlic powder. Stir and simmer 10 min.",
      "Prepare instant mashed potatoes per package directions.",
      "Spread mashed potatoes in an even layer over the meat mixture.",
      "Top with shredded cheddar cheese.",
      "Cover and cook on medium-low 10–12 min until cheese melts and top is golden."
    ],
    done_when: "Cheese melted, mashed potato top golden, filling bubbling at the edges.",
    safety: "Instant mashed potatoes make this easy at camp — don't bother peeling real potatoes."
  },
  "soda-pineapple-beans": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook diced bacon until crispy. Remove and crumble.",
      "Add diced onion to drippings. Cook 3 min.",
      "Add two cans of pork and beans, a can of crushed pineapple (drained), brown sugar, and mustard. Stir.",
      "Simmer on medium-low 20 min, stirring occasionally, until thick.",
      "Top with crumbled bacon. Serve with cornbread."
    ],
    done_when: "Beans thick and caramelized.",
    safety: "Sweet pineapple makes this scorch fast — stir every 5 min."
  },
  "spiced-rhubarb": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Chop rhubarb stalks into 1-inch pieces.",
      "Combine rhubarb with brown sugar, cinnamon, a pinch of cloves, and 1/4 cup water in Dutch oven.",
      "Cook on grill over medium-low 20–25 min, stirring occasionally, until rhubarb breaks down into a sauce.",
      "Taste and add more sugar if needed — rhubarb is very tart.",
      "Serve warm over vanilla ice cream (if available) or cornbread."
    ],
    done_when: "Rhubarb has broken down into a thick sauce.",
    safety: "Rhubarb LEAVES are poisonous — use the stalks only. Stalks are safe."
  },
  "spicy-cornbread": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix Jiffy corn muffin mix, eggs, milk, drained canned jalapeños, and shredded cheddar per box instructions.",
      "Pour batter into a greased Dutch oven. Spread evenly.",
      "Cover and cook on grill over medium 15–18 min until golden and toothpick comes out clean.",
      "Let cool 5 min before cutting."
    ],
    done_when: "Toothpick clean, top golden.",
    safety: "Warn scouts this cornbread is spicy before serving. Wash hands after handling jalapeños."
  },
  "stromboli": {
    equipment: "Gas pizza oven",
    steps: [
      "Preheat gas pizza oven to 400°F.",
      "Unroll pizza dough on a floured surface into a large rectangle.",
      "Layer sliced deli meats (pepperoni, ham, salami) and shredded mozzarella down the center.",
      "Fold the long sides over the filling, then seal the ends by pinching tightly.",
      "Place seam-side down on a greased pan. Brush the top with melted butter.",
      "Bake in pizza oven 18–22 min until golden brown.",
      "Let rest 5 min before slicing into portions."
    ],
    done_when: "Golden brown all over, cheese melted inside.",
    safety: "Sealing the edges is important — if they open during baking, cheese spills out. Pinch firmly."
  },
  "sugar-cookies": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix softened butter, sugar, one egg, and vanilla until smooth.",
      "Stir in flour, baking powder, and a pinch of salt.",
      "Press dough into the bottom of a greased Dutch oven about 1/2 inch thick.",
      "Cover and cook on grill over medium-low 12–15 min.",
      "Done when edges are golden and center is set.",
      "Cool completely, then frost with canned frosting and cut into squares."
    ],
    done_when: "Edges golden, center set (not jiggly).",
    safety: "Cookie dough looks underdone when it's actually ready — trust the golden edges."
  },
  "sunrise-cake": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix yellow cake batter per box with eggs, oil, and orange juice instead of water.",
      "Stir in 1 tsp orange zest if you have an orange on hand.",
      "Pour batter into a greased Dutch oven.",
      "Cover and cook on grill over medium-low 30–35 min until toothpick comes out clean.",
      "Frost with canned vanilla frosting when cooled."
    ],
    done_when: "Toothpick clean, edges pulling from the sides.",
    safety: "Substituting OJ for water makes it denser — allow extra cook time."
  },
  "super-chocolate-brownie": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix brownie mix per box with eggs, oil, and water.",
      "Stir in a bag of chocolate chips and a handful of chopped walnuts if available.",
      "Pour into a greased Dutch oven. Spread evenly.",
      "Cover and cook on grill over medium-low 22–28 min.",
      "Done when a toothpick comes out with moist crumbs (not wet batter). Let cool completely before cutting."
    ],
    done_when: "Toothpick with moist crumbs, edges set and pulling from the sides.",
    safety: "Brownies take longer than home ovens — don't rush with higher heat or they burn on the bottom."
  },
  "wormy-apples": {
    equipment: "Gas grill — foil packet on grates",
    steps: [
      "Core each apple but leave the bottom intact.",
      "Stuff the core hole with gummy worms, brown sugar, and a cinnamon stick.",
      "Wrap each stuffed apple tightly in heavy-duty foil.",
      "Grill over medium heat 15–20 min until apples are soft.",
      "Open foil away from your face — steam inside. Eat with a spoon."
    ],
    done_when: "Apple completely soft when squeezed through the foil.",
    safety: "Steam burns — open foil slowly and away from your face. Works great over campfire coals for 15 min too."
  },
  "yams-apples-potatoes": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Peel and slice yams, apples, and sweet potatoes into 1/2-inch rounds.",
      "Layer in a greased Dutch oven, alternating yams, apples, and sweet potatoes.",
      "Mix brown sugar, cinnamon, nutmeg, and melted butter. Drizzle over each layer.",
      "Cover and cook on grill over medium-low 30–35 min until everything is soft.",
      "Top with mini marshmallows. Cover 2 min to melt."
    ],
    done_when: "All slices completely soft, marshmallows melted.",
    safety: "Sweet ingredients scorch fast — keep heat at medium-low and don't rush."
  },

  // SPECIAL METHODS ─────────────────────────────────────────────────────────────

  "hoppin-john": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Cook diced bacon until crispy. Remove and crumble. Leave drippings.",
      "Add diced onion, celery, and bell pepper. Cook 4 min.",
      "Add two cans of black-eyed peas (undrained), chicken broth, garlic powder, and cayenne. Stir.",
      "Bring to a boil. Reduce to medium-low. Simmer 20 min.",
      "Stir in cooked white rice and crumbled bacon. Cook 5 more min.",
      "Serve with hot sauce on the side."
    ],
    done_when: "Rice heated through, peas soft, broth mostly absorbed.",
    safety: "Classic Southern camp meal — make sure bacon is fully cooked before removing."
  },

  // MISC ────────────────────────────────────────────────────────────────────────

  "chipped-beef-on-toast": {
    equipment: "Gas grill — skillet",
    steps: [
      "Melt butter in skillet on grill over medium.",
      "Whisk in flour (2 Tbsp per serving) and cook 1–2 min, stirring constantly — don't let it brown.",
      "Slowly whisk in milk, a little at a time, until you get a smooth white sauce. Cook 4–5 min, stirring, until thickened.",
      "Add dried beef (rinse it first if it's very salty) cut into small pieces. Stir to combine.",
      "Season with black pepper. Serve spooned over toast."
    ],
    done_when: "White sauce is thick and coats the back of a spoon, dried beef is heated through.",
    safety: "Keep stirring the white sauce constantly — it lumps and scorches if left alone even for 30 sec."
  },
  "chinese-to-go": {
    equipment: "Dutch oven — on gas grill",
    steps: [
      "Cook instant white rice per package directions. Set aside.",
      "Heat Dutch oven on grill over medium-high with oil.",
      "Cook bite-size chicken or beef 5–6 min until cooked through.",
      "Add a bag of frozen stir-fry vegetables. Cook 4 min, stirring often.",
      "Pour in a bottle of teriyaki or stir-fry sauce. Toss everything to coat.",
      "Serve over rice in individual bowls."
    ],
    done_when: "Meat cooked through (165°F for chicken), vegetables tender-crisp.",
    safety: "High heat for stir-fry — keep stirring constantly so nothing burns."
  },
  "cranberry-delight-spread": {
    equipment: "No cooking needed — no-bake spread",
    steps: [
      "Soften a block of cream cheese by leaving it out of the cooler 15–20 min.",
      "Mix cream cheese with a can of whole-berry cranberry sauce until swirled (not fully combined — you want some streaks).",
      "Spoon into a bowl. Serve with crackers.",
      "Optional: mix in chopped walnuts or pecans for crunch."
    ],
    done_when: "Cream cheese is soft and spreadable, cranberry sauce swirled through.",
    safety: "Keep refrigerated until serving. Don't leave out in warm weather."
  },
  "crawfish-cornbread": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix Jiffy corn muffin mix, eggs, milk, shredded cheddar, diced jalapeños, and canned or frozen crawfish tails in a large bowl.",
      "Drain any excess liquid from the crawfish first.",
      "Pour batter into a greased Dutch oven. Spread evenly.",
      "Cover and cook on grill over medium 20–25 min.",
      "Toothpick should come out clean, top golden."
    ],
    done_when: "Toothpick clean, top golden.",
    safety: "Make sure crawfish is fully cooked and heated through."
  },
  "bacon-chicken-nuggets": {
    equipment: "Gas grill — grates",
    steps: [
      "Cut chicken breast into 1-inch chunks. Season with salt, pepper, and garlic powder.",
      "Wrap each chunk with a half-strip of bacon. Secure with a toothpick.",
      "Set grill to medium-high. Place bacon-wrapped nuggets on grates.",
      "Grill 4–5 min per side, turning carefully, until bacon is crispy and chicken reaches 165°F.",
      "Remove toothpicks before serving."
    ],
    done_when: "Bacon crispy all over, chicken 165°F.",
    safety: "Remove ALL toothpicks before serving — count them in and count them out. Bacon fat causes flare-ups."
  },
  "chicken-enchilada-pie": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Shred or dice cooked chicken. Mix with shredded cheddar, sour cream, and a spoonful of enchilada sauce.",
      "Layer in greased Dutch oven: flour tortilla, then chicken mixture, then enchilada sauce. Repeat.",
      "Top layer should be a tortilla covered with enchilada sauce and shredded cheese.",
      "Cover and cook on grill over medium-low 20–25 min until heated through and cheese is melted.",
      "Let rest 5 min. Cut into wedges."
    ],
    done_when: "Cheese melted on top, layers heated through.",
    safety: "Make sure chicken was fully cooked before assembling — this dish just heats it, doesn't cook raw chicken."
  },
  "chicken-pot-pie": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Heat Dutch oven on grill over medium. Melt butter, whisk in flour (3 Tbsp), cook 1 min.",
      "Slowly whisk in chicken broth and milk until smooth. Cook 5 min, stirring, until thickened.",
      "Stir in cooked shredded chicken, frozen mixed vegetables, garlic powder, salt, and pepper.",
      "Open a can of refrigerated biscuits and place on top of the filling, covering the surface.",
      "Cover and cook on medium-low 15–18 min until biscuits are golden and cooked through.",
      "Toothpick in a biscuit should come out clean."
    ],
    done_when: "Biscuits golden, toothpick clean, filling bubbling at the edges.",
    safety: "Chicken must already be fully cooked to 165°F before going in."
  },
  "chili-rellano": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Beat 4 eggs with 1/4 cup milk, a pinch of salt, and baking powder in a bowl.",
      "Open two cans of whole green chiles. Drain and pat dry. Slit each chile open and remove seeds.",
      "Stuff each chile with a strip of Monterey Jack or cheddar cheese.",
      "Place stuffed chiles in a greased Dutch oven. Pour egg batter over them.",
      "Cover and cook on grill over medium-low 20–25 min until egg is set and top is golden.",
      "Serve with salsa and sour cream."
    ],
    done_when: "Egg batter is set throughout, no runny areas, top golden.",
    safety: "Eggs must be fully cooked — no runny or translucent areas."
  },
  "cornmeal-chili": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef and diced onion in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add chili seasoning packet, diced tomatoes, tomato sauce, and kidney beans. Stir and bring to a boil.",
      "Reduce to medium-low. Simmer 15 min, stirring occasionally.",
      "Mix Jiffy corn muffin mix per box. Drop spoonfuls on top of the chili.",
      "Cover and cook on medium-low 15–18 min without lifting the lid until cornbread is set.",
      "Toothpick in the cornbread should come out clean."
    ],
    done_when: "Cornbread golden on top, toothpick clean, chili bubbling underneath.",
    safety: "Don't lift the lid while the cornbread cooks — steam is what sets it."
  },
  "hudson-bay-bread": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Mix 4 cups rolled oats, 1.5 cups brown sugar, 1 cup melted butter, and 1 Tbsp corn syrup in a large bowl.",
      "Press the mixture very firmly into a greased Dutch oven about 1 inch thick.",
      "Cover and cook on grill over medium-low 20–25 min until golden brown.",
      "Let cool COMPLETELY in the Dutch oven before cutting — it needs to harden as it cools.",
      "Cut into bars. This is a high-energy trail bar that stores for days."
    ],
    done_when: "Golden brown, completely firm after cooling.",
    safety: "It will seem soft when it comes off the heat — don't cut until fully cooled or it crumbles."
  },
  "huggies": {
    equipment: "Gas grill — skillet",
    steps: [
      "Mix ground beef, taco seasoning, and shredded cheddar in a bowl.",
      "Lay crescent roll triangles flat. Place a spoonful of meat mixture at the wide end.",
      "Roll up toward the point, enclosing the filling. Pinch the sides closed.",
      "Heat a little oil in skillet on grill over medium.",
      "Cook 3–4 min per side until crescent dough is golden brown.",
      "Serve with salsa or sour cream for dipping."
    ],
    done_when: "Crescent dough golden on all sides, filling cooked through.",
    safety: "Make sure ground beef is fully cooked to 160°F before wrapping in dough."
  },
  "no-bean-hot-chili": {
    equipment: "Dutch oven — 12-inch, on gas grill",
    steps: [
      "Brown ground beef and diced onion in Dutch oven on grill, 7–8 min. Drain fat.",
      "Add 2 Tbsp chili powder, 1 tsp cumin, 1/2 tsp cayenne, garlic powder, salt, and pepper. Stir 1 min.",
      "Add diced tomatoes and tomato sauce. Stir well.",
      "Bring to a boil. Reduce to medium-low. Simmer uncovered 25–30 min, stirring every 5–10 min.",
      "Taste and adjust seasoning. Serve with shredded cheese, crackers, or cornbread."
    ],
    done_when: "Chili thick and deeply colored, beef fully cooked.",
    safety: "No-bean chili gets thicker faster — watch for scorching and stir often."
  }

  });
})();
