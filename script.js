
const mocktails = [
  {
    name: "The Ho Fo Sho",
    brand: "Ritual Zero Proof",
    ingredients: "Ritual Tequila Alternative, lime juice, agave syrup, jalapeño slices",
    instructions: "Shake ingredients with ice and strain into a chili-lime salt rimmed glass.",
    personality: "Bold, spicy, and unapologetically extra."
  },
  {
    name: "The Hot Mess",
    brand: "Seedlip Spice 94",
    ingredients: "Pineapple juice, coconut cream, dash of cinnamon",
    instructions: "Blend until smooth and garnish with toasted coconut flakes.",
    personality: "Sweet, tropical, and a little bit chaotic."
  },
  {
    name: "The Fit Fatale",
    brand: "Athletic Brewing Co.",
    ingredients: "Upside Dawn NA Beer, grapefruit juice, rosemary syrup",
    instructions: "Combine ingredients and serve over ice with a rosemary sprig.",
    personality: "Citrusy and classy with a gym bag in one hand and drama in the other."
  },
  {
    name: "The Sober Siren",
    brand: "NOgroni",
    ingredients: "NOgroni, orange twist, tonic water",
    instructions: "Stir gently and serve over ice in a rocks glass.",
    personality: "Elegant and mysterious with a no-nonsense charm."
  },
  {
    name: "The Chill Pill",
    brand: "Kin Euphorics",
    ingredients: "Kin Spritz, cucumber, mint, lemon juice",
    instructions: "Muddle cucumber and mint, shake with Kin and lemon juice, serve chilled.",
    personality: "Cool, refreshing, and your go-to when it's all too much."
  }
,

  {
    name: "The Morning After Glow",
    brand: "Kin Euphorics",
    ingredients: "Kin Spritz, orange juice, turmeric, honey",
    instructions: "Shake and serve over ice with an orange wheel.",
    personality: "Radiant and centered, even when the group chat’s wild."
  },
  {
    name: "The Not Tonight Satan",
    brand: "Seedlip Garden 108",
    ingredients: "Seedlip, elderflower tonic, lemon slice",
    instructions: "Pour over ice and stir gently.",
    personality: "Cool, calm, and saying “no” in style."
  },
  {
    name: "The Dressed Down Diva",
    brand: "Ritual Whiskey",
    ingredients: "Ritual Whiskey, iced tea, peach puree",
    instructions: "Shake and strain into a coupe glass.",
    personality: "Relaxed, but still the center of attention."
  },
  {
    name: "The Self Saboteur",
    brand: "Curious Elixir No. 4",
    ingredients: "Curious Elixir, lime, a splash of bitters",
    instructions: "Serve chilled with a lime twist.",
    personality: "Dramatic, unpredictable, but irresistible."
  },
  {
    name: "The Sassquatch",
    brand: "Ghia Original",
    ingredients: "Ghia, rosemary syrup, lemon soda",
    instructions: "Build in a glass with ice and garnish with rosemary.",
    personality: "Big presence, bigger mouth."
  },
  {
    name: "The CEO of Nothing",
    brand: "Lyre’s Italian Orange",
    ingredients: "Lyre’s, grapefruit juice, agave",
    instructions: "Shake, pour over crushed ice, garnish with mint.",
    personality: "Acts important, knows nothing, owns the room."
  },
  {
    name: "The Bitter Baby",
    brand: "NOgroni",
    ingredients: "NOgroni, soda water, burnt orange peel",
    instructions: "Stir and serve in rocks glass.",
    personality: "Small, sharp, and snappy."
  },
  {
    name: "The Caffeine Queen",
    brand: "Ritual Rum",
    ingredients: "Ritual Rum, cold brew coffee, vanilla syrup",
    instructions: "Shake with ice and strain into martini glass.",
    personality: "Can’t be tamed before noon."
  },
  {
    name: "The Snaccident",
    brand: "HOP WTR",
    ingredients: "HOP WTR, muddled strawberries, basil",
    instructions: "Build in glass with ice.",
    personality: "Oops... did it again (and looks cute doing it)."
  },
  {
    name: "The Canceled Plans",
    brand: "Seedlip Grove 42",
    ingredients: "Seedlip, cucumber, mint, lime",
    instructions: "Muddle and build in highball glass.",
    personality: "Always down, until she isn’t."
  },
  {
    name: "The Soft Launch",
    brand: "Ritual Gin",
    ingredients: "Ritual Gin, lavender syrup, lemon soda",
    instructions: "Stir gently over ice.",
    personality: "Mysterious, curated, and probably dating someone new."
  },
  {
    name: "The Pre Nup",
    brand: "Lyre’s Dry London",
    ingredients: "Lyre’s, white cranberry, rosemary",
    instructions: "Shake and strain into a martini glass.",
    personality: "Elegant with terms and conditions."
  },
  {
    name: "The Drama Clean",
    brand: "Pentire Coastal",
    ingredients: "Pentire, pineapple juice, lime",
    instructions: "Shake and serve up.",
    personality: "Nothing toxic, except the ex she mentions."
  },
  {
    name: "The Zero Chill",
    brand: "Ghia Lime & Salt",
    ingredients: "Ghia, coconut water, lime",
    instructions: "Shake with ice, serve in a coconut shell if dramatic.",
    personality: "Resting 'rage text' face."
  },
  {
    name: "The Oversharer",
    brand: "Curious Elixir No. 3",
    ingredients: "Curious Elixir, ginger syrup, soda",
    instructions: "Shake lightly, top with soda.",
    personality: "Laughs too loud, tells too much, regrets nothing."
  },
  {
    name: "The Fridge Forager",
    brand: "Athletic Lite",
    ingredients: "Athletic Lite, muddled berries, lemon",
    instructions: "Stir with ice, garnish with anything 'still good.'",
    personality: "Resourceful with chaotic energy."
  },
  {
    name: "The Loyal Liability",
    brand: "Lyre’s Amaretti",
    ingredients: "Lyre’s, cola, lime",
    instructions: "Stir and serve with maraschino cherry.",
    personality: "You shouldn’t, but you always do."
  },
  {
    name: "The Menu Manipulator",
    brand: "Seedlip Spice 94",
    ingredients: "Seedlip, mango puree, lime, Tajin rim",
    instructions: "Shake and strain into a Tajin-rimmed glass.",
    personality: "Allergic to 'no substitutions.'"
  },
  {
    name: "The Escape Plan",
    brand: "Monday Mezcal",
    ingredients: "Monday Mezcal, blood orange juice, mint",
    instructions: "Shake and strain into chilled glass.",
    personality: "Gone before the check hits the table."
  },
  {
    name: "The Mood Swing",
    brand: "Lyre’s Aperitif Rosso",
    ingredients: "Lyre’s, hibiscus tea, lemon",
    instructions: "Build and stir over ice.",
    personality: "Sweet. Then sour. Then sweet again."
  }
];

function generateMocktail() {
  const drink = mocktails[Math.floor(Math.random() * mocktails.length),

  {
    name: "The Morning After Glow",
    brand: "Kin Euphorics",
    ingredients: "Kin Spritz, orange juice, turmeric, honey",
    instructions: "Shake and serve over ice with an orange wheel.",
    personality: "Radiant and centered, even when the group chat’s wild."
  },
  {
    name: "The Not Tonight Satan",
    brand: "Seedlip Garden 108",
    ingredients: "Seedlip, elderflower tonic, lemon slice",
    instructions: "Pour over ice and stir gently.",
    personality: "Cool, calm, and saying “no” in style."
  },
  {
    name: "The Dressed Down Diva",
    brand: "Ritual Whiskey",
    ingredients: "Ritual Whiskey, iced tea, peach puree",
    instructions: "Shake and strain into a coupe glass.",
    personality: "Relaxed, but still the center of attention."
  },
  {
    name: "The Self Saboteur",
    brand: "Curious Elixir No. 4",
    ingredients: "Curious Elixir, lime, a splash of bitters",
    instructions: "Serve chilled with a lime twist.",
    personality: "Dramatic, unpredictable, but irresistible."
  },
  {
    name: "The Sassquatch",
    brand: "Ghia Original",
    ingredients: "Ghia, rosemary syrup, lemon soda",
    instructions: "Build in a glass with ice and garnish with rosemary.",
    personality: "Big presence, bigger mouth."
  },
  {
    name: "The CEO of Nothing",
    brand: "Lyre’s Italian Orange",
    ingredients: "Lyre’s, grapefruit juice, agave",
    instructions: "Shake, pour over crushed ice, garnish with mint.",
    personality: "Acts important, knows nothing, owns the room."
  },
  {
    name: "The Bitter Baby",
    brand: "NOgroni",
    ingredients: "NOgroni, soda water, burnt orange peel",
    instructions: "Stir and serve in rocks glass.",
    personality: "Small, sharp, and snappy."
  },
  {
    name: "The Caffeine Queen",
    brand: "Ritual Rum",
    ingredients: "Ritual Rum, cold brew coffee, vanilla syrup",
    instructions: "Shake with ice and strain into martini glass.",
    personality: "Can’t be tamed before noon."
  },
  {
    name: "The Snaccident",
    brand: "HOP WTR",
    ingredients: "HOP WTR, muddled strawberries, basil",
    instructions: "Build in glass with ice.",
    personality: "Oops... did it again (and looks cute doing it)."
  },
  {
    name: "The Canceled Plans",
    brand: "Seedlip Grove 42",
    ingredients: "Seedlip, cucumber, mint, lime",
    instructions: "Muddle and build in highball glass.",
    personality: "Always down, until she isn’t."
  },
  {
    name: "The Soft Launch",
    brand: "Ritual Gin",
    ingredients: "Ritual Gin, lavender syrup, lemon soda",
    instructions: "Stir gently over ice.",
    personality: "Mysterious, curated, and probably dating someone new."
  },
  {
    name: "The Pre Nup",
    brand: "Lyre’s Dry London",
    ingredients: "Lyre’s, white cranberry, rosemary",
    instructions: "Shake and strain into a martini glass.",
    personality: "Elegant with terms and conditions."
  },
  {
    name: "The Drama Clean",
    brand: "Pentire Coastal",
    ingredients: "Pentire, pineapple juice, lime",
    instructions: "Shake and serve up.",
    personality: "Nothing toxic, except the ex she mentions."
  },
  {
    name: "The Zero Chill",
    brand: "Ghia Lime & Salt",
    ingredients: "Ghia, coconut water, lime",
    instructions: "Shake with ice, serve in a coconut shell if dramatic.",
    personality: "Resting 'rage text' face."
  },
  {
    name: "The Oversharer",
    brand: "Curious Elixir No. 3",
    ingredients: "Curious Elixir, ginger syrup, soda",
    instructions: "Shake lightly, top with soda.",
    personality: "Laughs too loud, tells too much, regrets nothing."
  },
  {
    name: "The Fridge Forager",
    brand: "Athletic Lite",
    ingredients: "Athletic Lite, muddled berries, lemon",
    instructions: "Stir with ice, garnish with anything 'still good.'",
    personality: "Resourceful with chaotic energy."
  },
  {
    name: "The Loyal Liability",
    brand: "Lyre’s Amaretti",
    ingredients: "Lyre’s, cola, lime",
    instructions: "Stir and serve with maraschino cherry.",
    personality: "You shouldn’t, but you always do."
  },
  {
    name: "The Menu Manipulator",
    brand: "Seedlip Spice 94",
    ingredients: "Seedlip, mango puree, lime, Tajin rim",
    instructions: "Shake and strain into a Tajin-rimmed glass.",
    personality: "Allergic to 'no substitutions.'"
  },
  {
    name: "The Escape Plan",
    brand: "Monday Mezcal",
    ingredients: "Monday Mezcal, blood orange juice, mint",
    instructions: "Shake and strain into chilled glass.",
    personality: "Gone before the check hits the table."
  },
  {
    name: "The Mood Swing",
    brand: "Lyre’s Aperitif Rosso",
    ingredients: "Lyre’s, hibiscus tea, lemon",
    instructions: "Build and stir over ice.",
    personality: "Sweet. Then sour. Then sweet again."
  }
];
  document.getElementById("name").innerText = drink.name;
  document.getElementById("brand").innerText = drink.brand;
  document.getElementById("ingredients").innerText = drink.ingredients;
  document.getElementById("instructions").innerText = drink.instructions;
  document.getElementById("personality").innerText = drink.personality;
}
