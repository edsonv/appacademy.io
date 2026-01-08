/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: 'pie crust', cost: 10.0, quantity: 1 },
  { name: 'sugar', cost: 3.0, quantity: 0.5 },
  { name: 'butter', cost: 1.0, quantity: 1 },
  { name: 'apples', cost: 6.0, quantity: 7 },
  { name: 'cinnamon', cost: 5.5, quantity: 1 },
  { name: 'eggs', cost: 2.0, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: 'pie crust', cost: 10.0, quantity: 1 },
  { name: 'sugar', cost: 3.0, quantity: 0.5 },
  { name: 'butter', cost: 1.0, quantity: 1 },
  { name: 'pumpkin', cost: 3.75, quantity: 2 },
  { name: 'cinnamon', cost: 5.5, quantity: 1 },
  { name: 'eggs', cost: 2.0, quantity: 1 },
];

const cherryPieRecipe = [
  { name: 'pie crust', cost: 10.0, quantity: 1 },
  { name: 'sugar', cost: 3.0, quantity: 0.5 },
  { name: 'butter', cost: 1.0, quantity: 1 },
  { name: 'cherries', cost: 12.0, quantity: 10 },
  { name: 'eggs', cost: 2.0, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe,
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
function findRecipe(pieType) {
  return recipes[pieType];
}

function printIngredients(pieType, recipe) {
  let combiningMsg = `Combining ingredients for ${pieType}: `;
  combiningMsg += recipe.map((ingredient) => ingredient.name).join(', ');
  console.log(combiningMsg);
}

function printBakedNotification(n) {
  console.log(`Baked pie ${n + 1}!`);
}

function bakeNumberOfPies(pieType, recipe, pieQuantity) {
  for (let i = 0; i < pieQuantity; i++) {
    // Print the ingredients for each ingredient in the recipe
    printIngredients(pieType, recipe);

    // Print the nth pie that was baked
    printBakedNotification(i);
  }
}

function calculatePieCost(recipe) {
  return recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);
}

function printPieCost(costOfPie) {
  console.log(`Cost per pie: ${costOfPie}`);
}

function calculateTotalCost(costOfPie, pieQuantity) {
  return costOfPie * pieQuantity;
}

function calculateTotalRevenue(totalCost, profitMargin) {
  return totalCost * (profitMargin || 1.2);
}

function printTotalRevenue(pieQuantity, revenue) {
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  // Find the recipe for the pieType specified
  const recipe = findRecipe(pieType);
  // Bake the number of pies specified by the pieQuantity
  bakeNumberOfPies(pieType, recipe, pieQuantity);

  // Print the cost of each pie based on the cost of each ingredient
  const costOfPie = calculatePieCost(recipe);
  printPieCost(costOfPie);

  // Calculate the total cost of all the pies
  const totalCost = calculateTotalCost(costOfPie, pieQuantity);

  // Print the total revenue calculated using the given profitMargin
  const revenue = calculateTotalRevenue(totalCost, profitMargin);
  printTotalRevenue(pieQuantity, revenue);
}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies,
};
