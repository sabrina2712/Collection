/**
 * Numbers
 * - Combining strings and numbers with +
 * - Integers vs. Floats
 * - Converting strings into Numbers: `parseInt()`, `parseFloat()`
 * - Using modulo
 */
console.log("--------- Numbers ---------\n");
const myNumber = 5;
console.log("Hey this is my favorit number: " + myNumber);
console.log("11" + 1);
console.log("11" - 1);

const myFloat = 5.1;
const myInt = 5;

const orderAmount = "1.99999999";
// Parse: converting and understanding
console.log("\nFloat:", parseFloat(orderAmount));
console.log("Integer:", parseInt(orderAmount), "\n");
// Float: Decimal numbers like 1.1
// Integer: Numbers with out fractions like 55
console.log("User ordered: " + parseFloat(orderAmount) * 2);

console.log(parseInt(1.2343));
console.log(parseFloat(1));

// Modulo (rest operator)
console.log(1.9 % 1);
console.log("Modulo: ", 5 % 2, 5 / 2);

// We have 10 students and 11 books how many books are left?
console.log((11 % 10) + " Book are left!");

// Percentage
console.log((9 / 100) * 10);
console.log(9 * 0.1);

/**
 * Rounding (Math object)
 * - Rounding up with `Math.ceil()`
 * - Rounding down with `Math.floor()`
 * - Commercial Rounding `Math.round()`
 */

// Floor
console.log("\n\n--------- Math ---------\n");
console.log(Math.floor(1.9999999999));
// console.log(parseInt(1.9999999));
// negative
console.log(Math.floor(-1.999999));

//Ceil
console.log(Math.ceil(1.99999));
// negative
console.log(Math.ceil(-1.999999));

// Commercial rounding
console.log("Commercial Rounding");
console.log(Math.round(1.9999));
console.log(Math.round(-1.99999));
console.log(Math.round(1.05));

// Infinit
console.log(Math.pow(10000, 100) - Infinity);

/**
 * - Maximum and minimum with `Math.max()`, `Math.min()`
 * - Getting random numbers with `Math.random()`
 */

// team scores
const team1 = 90;
const team2 = 60;
const team3 = 80;

const highestScore = Math.max(team1, team2, team3);
console.log(highestScore);
const lowestScore = Math.min(team1, team2, team3);
console.log(lowestScore);

// Random Numbers
const randomNumber = Math.random();
console.log(randomNumber);
const min = 5;
const max = 2305;
console.log(Math.random() * (max - min) + min);

/**
 * - Dealing with NaN: `isNaN(<expression>)`, `typeof NaN`
 */

console.log("\n------- with Not Numbers that are Numbers 🤪 aka NAN ------");
const notANumber = "11 apples" - 1;
console.log(notANumber);
console.log("is notANumber a NaN: ", isNaN(notANumber));
console.log("is 5 NaN: ", isNaN(5));
console.log(typeof notANumber === typeof NaN);
console.log(NaN * 5);
