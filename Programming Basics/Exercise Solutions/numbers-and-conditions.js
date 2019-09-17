// # Exercise Numbers and Conditions
//this is my comment space. :*
// ## **Print your results to the console**

// ### **Logical Operators Exercises**

// These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console.** **Every capitalized word stands for the logical operator that you must use in each task.** Make sure that you are using the correct logical operator.
console.log("**Logical Operators Exercises**");
// Declare two variables "a" with the value of true and "b" with the value of false.
let a = true;
let b = false;

console.log("1. Task");
// 1. Check the result of a AND b.
console.log(a && b);

console.log("2. Task");
// 2. Check the result of a OR b.
console.log(a || b);

console.log("3. Task");
// 3. Check the result of NOT a AND b.
console.log(!a && b);

console.log("4. Task");
// 4.  Declare three more variables "x", "y", "z". Give these variables number values.
let x = 4;
let y = 10;
let z = 5;
console.log("5. Task");
console.log(x > z && x > y);
console.log("6. Task");
// 6. Check the result of whether x is NOT equal to y.
console.log(x != y);
console.log("7. Task");
// 7. Check the result of whether z is less than y OR z is greater than x.
console.log(z < y || z > x);
console.log("8. Task");
// 8. Check the result of whether x is equal to z OR x is NOT equal to y.
console.log(x === z || x !== y);
console.log("9. Task");
// 9. Check the result of whether x is greater than or equal to 10 AND y is less than or equal to 10.
console.log(x >= 10 && x <= 10);
console.log("10. Task");
// 10. Check the result of whether x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
console.log(x * z < 100 || x * y > 100);

// ### **Comparison Operators Exercises**

// These exercises are aimed at making you familiar with the comparison operators. **Print all your checks to the console.**

// Declare two variables "x" and "y". Assign a value of 20 to x. Assign a value of 30 to y.
x = 20;
y = 30;

// 1. Check whether x and y are equal.
console.log(x === y);
// 2. Check whether x and y are **not** equal.
console.log(x != y);
// 3. Check whether x is greater than y.
console.log(x > y);
// 4. Check whether x is less than or equal to y.
console.log(x <= y);
// 5. Check whether y is greater than x.
console.log(y > x);
// 6. Declare another variable "z" and give it a value of 5. Multiply z and x and, check whether this result is greater than z added to y.
console.log(z * x > z + y);
// 7. Subtract z from x and check whether this result is less than y divided by z.
console.log(x - z < y / z);
// 8. Check whether z, x and y are equal.
console.log(z === y && x === y);
console.log(z === y && x === y && z === x);
// 9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal.
console.log(x % z === y % z);
// 10. Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.
console.log("Here");
console.log(z + x >= y - z);
// ### Conditions

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
console.log((x >= 50 && x <= 99) || (y >= 50 && y <= 99));

const isXInRange = x >= 50 && x <= 99;
const isYInRange = y >= 50 && y <= 99;
console.log(isXInRange || isYInRange);

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
const firstInteger = 71;
const secondInteger = 55;
const thirdInteger = 90;

const firstIntegerInRange = firstInteger >= 50 && firstInteger <= 99;
const secondIntegerInRange = secondInteger >= 50 && secondInteger <= 99;
const thirdIntegerInRange = thirdInteger >= 50 && thirdInteger <= 99;
const oneInRange =
  firstIntegerInRange || secondIntegerInRange || thirdIntegerInRange;

!oneInRange && console.log("At least one in range: ", true);

true && console.log("Hi form &&");
false || console.log("Hi from ||");

let inputVal = "Dieter";
// Create Default values
const name = inputVal || "John Doe";

// 3. Declare the variables a, b and c - give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
a = 45;
b = 20;
const c = 21;

const highestValue = Math.max(a, b, c);

console.log(highestValue);

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let java = "JavaScript";

if (java.substring(0, 2) === "Py") {
  console.log(java);
} else {
  console.log(`Py${java}`);
}
// 5. Calculate the sum of the two integers. If the sum is in the range 50..80 print 65 other wise print 80.

const oneValue = 21;
const anotherValue = 33;

const sum = oneValue + anotherValue;

if (sum > 50 && sum < 80) {
  console.log(65);
} else console.log(80);

// 6. Check whether the sum of two integers is 8 or whether their difference is 8. If one of these is the case, print true.
console.log("6. Task", a, b);
if (a + b == 8 || a - b == 8) console.log("true");
else {
  console.log("false");
}
// 7. Check whether one of two integers is 15 or if their sum is 15. If one of these is the case, print true.
if (a == 15 || z == 15 || a + z == 15) {
  console.log(true);
} else {
  console.log(false);
}
// Or
console.log(a == 15 || z == 15 || a + z == 15);
// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let number1 = 12;

if (number1 % 7 == 0 || number1 % 11 == 0) {
  console.log(true);
} else {
  console.log(false);
}
// 9. Calculate the sum of the two given integers. If the two values are same, then print triple their sum.
const sum9 = a + b;
if (a === b) console.log(sum9 * 3);
// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let ten = a - 19 > 19 ? (a - 19) * 2 : false;

console.log(ten);

// 11. Check if a number is even or odd; print even or odd
let evenOrOdd = 2;
console.log(evenOrOdd % 2 === 0 ? "even" : "odd");
// 12. Check if a number is divisible by 3. If it is, print "Fizz". Check if a number is divisible by "5". If it is, print "Buzz". Check is a number is divisible by both 3 and 5. If it is, print "FizzBuzz". If none of the above apply, print the number.
let fizzNumber = 2;
let word = "word";
if (fizzNumber % 3 === 0) {
  if (fizzNumber % 5 === 0) {
    word = "FizzBuzz";
  } else {
    word = "Fizz";
  }
} else if (fizzNumber % 5 === 0) {
  if (fizzNumber % 3 === 0) {
    word = "FizzBuzz";
  } else {
    word = "Buzz";
  }
} else {
  console.log(a);
}
// #if (a % 2 == 0) {

// console.log(a - 19);
// if (a > 19) console.log(2 * (a - 19));  console.log("even");
// } else {
//     console.log("odd");
//   }      if (b % 3 == 0 && b % 5 == 0) console.log("FizzBuzz");
// else if (b % 5 == 0) console.log("Buzz");
// else if (b % 3 == 0) console.log("Fizz");
// else if (b % 3 != 0) console.log(b);
// else if (b % 5 != 0) console.log(b);
// else if (b % 3 == 0 && b % 5 == 0) console.log(b);

// /3 && /5 -> FizzBuzz
// /3 -> Fizz
// /5 -> Buzz
const fizzyNumber = fizzNumber % 3 === 0;
const buzzyNumber = fizzNumber % 5 === 0;
let print = "";

if (fizzyNumber && buzzyNumber) {
  print += "FizzBuzz";
} else if (fizzyNumber) {
  print += "Fizz";
} else if (buzzyNumber) {
  print += "Buzz";
} else {
  print += fizzyNumber;
}
