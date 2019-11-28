/**
 * Conditions
 */

const amountOfApples = "5 Apples please :)";

if (isNaN(amountOfApples)) {
  console.log("Apples are not a number");
}

// if (<condition>) statement

// Block statement
const apple = "Yummy";
const banana = "Yellow";
// outer scope
{
  // inner scope
  const apple = "Nice";
  console.log(apple);
  console.log(banana);
}

console.log(apple);

if (true) console.log("Short");
if (true) {
  console.log("Condition met");
} else {
  console.log("condition falsy");
}

/**
 * Truthy or Falsy Values
 * Strings
 * Numbers
 * NaN
 * undefined
 * null
 */

if (!"") console.log("String is falsy");
if ("Hi") console.log("String with lenght bigger then 0 is truthy");
if (0) console.log("is falsy");
if (12) console.log("is truthy");
if (-12) console.log("is truthy");
if (undefined) console.log("is falsy");
if (null) console.log("is falsy");
if (NaN) console.log("NaN is falsy");

// ! is opposite true or false
// !! convert to Boolean
console.log("This is false", !!"string");

/**
 * Read:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 */
