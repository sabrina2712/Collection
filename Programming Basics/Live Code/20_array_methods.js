/**
 * Array Methods
 *
 * arrays have many build-in methods that make
 * it very easy to work with
 */

const simpleFruits = ["Apple", "Banana"];

console.log(typeof simpleFruits);
console.log(Array.isArray(simpleFruits));

/**
 * Array.prototype.indexOf()
 */
// we want to make sure we have bananas
const indexOfBanana = simpleFruits.indexOf("Banana");
console.log(indexOfBanana);

/**
 * Array.prototype.push()
 */
const test = ["one"];
test.push("two");
console.log(test);

/**
 * Attention!
 * the `push` method is mutating the array
 * even when we do that inside of a function
 * see `shoppingFruits`
 */

function shoppingFruits(fruits) {
  //  We go for shopping
  // this is an impure function we modify simpleFruits as
  // fruits and shoppingFruits make reference
  // to same memory location (simpleFruits)
  const shoppingFruits = fruits;
  shoppingFruits.push("Peach");
  return shoppingFruits;
}
// we call it here with
// the reference of simple fruits     ↓
const shoppedFruits = shoppingFruits(simpleFruits);
console.log(shoppedFruits === simpleFruits);

/**
 * Array.prototype.unshift()
 */
simpleFruits.unshift("Watermelon", "Pomelo");
console.log(simpleFruits);

/**
 * Array.prototype.pop()
 */
const lastFruit = simpleFruits.pop();
console.log(lastFruit);
const nextFruit = simpleFruits.pop();
console.log(nextFruit, simpleFruits);

/**
 * Array.prototype.shift()
 */
console.log("before shift: ", simpleFruits);
const firstElement = simpleFruits.shift();
console.log("shifted element: ", firstElement);
console.log("after shift: ", simpleFruits);
/**
 * Array.prototype.reverse()
 */
simpleFruits.reverse();
console.log(simpleFruits);

const string = "Hello JavaScript!";
const stringAsArray = string.split("");
const reversedArray = stringAsArray.reverse();
const joinedString = reversedArray.join("");
console.log(joinedString);

// Or quickly in one line
console.log(
  "Hello JS"
    .split("")
    .reverse()
    .join("")
);
{
  console.log("While");
  const fruits = ["Banana", "Peach", "Pomelo"];
  while (fruits.length !== 0) {
    console.log("Hmmmmmmmmm " + fruits.pop());
  }
}

{
  console.log("Do While");
  const fruits = ["Banana", "Peach", "Pomelo"];
  do {
    console.log(fruits.length);
    console.log("Hmmmmmmmmm " + fruits.pop());

    fruits.length === 0 && console.log("I need to buy fruits");
  } while (fruits.length !== 0);
}
