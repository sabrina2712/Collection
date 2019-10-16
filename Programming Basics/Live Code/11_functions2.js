/**
 * Functions
 *
 * Functions are like recipes, we can define them once and then re-cook them.
 */

const createTunaPizza = () => {
  console.log("Delicious Tuna Pizza");
};

const table = createTunaPizza();
const makePizzzzzza = createTunaPizza;
console.log(makePizzzzzza === createTunaPizza);

/**
 * Let's generalize (abstract) our function
 */

const createPizza = topping => {
  return `Delicious ${topping} Pizza`;
};

const tunaPizza = createPizza("Tuna");
const salamiPizza = createPizza("Salami");

console.log(`${tunaPizza}
${salamiPizza}`);

/**
 * Why returning values
 *
 * Everything is about IO (Input / Output)
 * Our functions input are the parameters (endless amount)
 * the output is the return value.
 */

const transmitOrderToRestaurant = order => {
  console.log(`Yelling at the cook make some: ${order}`);
};

const userInput = "Salami";
const order = createPizza(userInput);
transmitOrderToRestaurant(order);

/**
 * Function Expression vs Arrow Functions
 *
 */

function funcExpressionNamed(paramter) {
  return "Return Value";
}

const funcExpression = function(parameter) {
  return "Return Value";
};

const arrowFunction = paramter => {
  return "Return Value";
};

//arrow one-liner (implicit return)
const arrowFunc = paramter => "Return Value";

/**
 * Light Testing (Light Unit Testing)
 * *optional*
 */

// Create a function that accepts dish kind and 3 ingredients (order form most to least)
// Dish description
// 1. kind: Soup, ingredients: Potato, Chicken, Garlic
// -> "Potato Soup:
//      with chicken and garlic"
// 2. kind: Pizza, ingredients: Tuna, Onions, Basil
// -> "Tuna Pizza:
//     with onions and basil"

// We could create a snippet out of this 🤔
const test = (value, expectedResult) => {
  if (value === expectedResult) {
    console.log("✅");
    return;
  }

  return console.log(`❌ Expected: 
              ${expectedResult}
but recieved: 
              ${value}`);
};

const dishDescription = (kind, ing1, ing2, ing3) => {
  ing2 = ing2.toLowerCase();
  ing3 = ing3.toLowerCase();

  return `${ing1} ${kind}: with ${ing2} and ${ing3}`;
};
//  const dishDescription = (kind, ing1, ing2,ing3) => {

//  }

test(
  dishDescription("Soup", "Potato", "Chicken", "Garlic"),
  "Potato Soup: with chicken and garlic"
);

test(
  dishDescription("Pizza", "Tuna", "Onions", "Basil"),
  "Tuna Pizza: with onions and basil"
);

/**
 * testing *optional* END
 */
