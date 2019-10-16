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
