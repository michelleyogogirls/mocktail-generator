
const mocktails = [
  {
    name: "Cucumber Cooler",
    ingredients: "Cucumber, mint, lime, soda water",
    instructions: "Muddle cucumber and mint, add lime juice, top with soda water."
  },
  {
    name: "Ginger Fizz",
    ingredients: "Ginger beer, lime, dash of bitters (optional)",
    instructions: "Mix ginger beer with lime juice, serve over ice."
  },
  {
    name: "Berry Basil Smash",
    ingredients: "Mixed berries, basil, lemon juice, sparkling water",
    instructions: "Muddle berries and basil, add lemon juice, top with sparkling water."
  },
  {
    name: "Coconut Lime Spritz",
    ingredients: "Coconut water, lime juice, club soda",
    instructions: "Combine all ingredients over ice, stir gently."
  }
];

function generateMocktail() {
  const drink = mocktails[Math.floor(Math.random() * mocktails.length)];
  document.getElementById("name").innerText = drink.name;
  document.getElementById("ingredients").innerText = drink.ingredients;
  document.getElementById("instructions").innerText = drink.instructions;
}
