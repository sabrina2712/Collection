/**
 * Functions
 * aka subroutines
 *
 * - Reusability
 * - Abstraction
 * - Organisation
 *
 * Steps:
 *  - Create Function
 *  - Call Function (Invoking a function)
 */

function myFirstFunction() {
  console.log("Hi I'm your first function :)");
}

// Named functions are stored in variables and are values like any other in JS
var myFirstFunction = function() {
  console.log("2nd function");
};

// Call our function
myFirstFunction();
// Referencing function (Value / Variable that hold function)
console.log(myFirstFunction);

// String functions in constants
const hello = function(other, name) {
  console.log(`Hello ${other}`);
  console.log(`Hello ${name}`);
};

hello("John", "Paul");

const greeting = function(personName) {
  console.log(`Hi ${personName}`);
  console.log("Hi " + personName);
};

greeting("Rebecca");
greeting("Hector");

// Working with values the function creates
debugger;
const times2 = function(aNumber) {
  const result = aNumber * 2;

  return result;
};

const dayOfTheWeek = times2(1);
console.log(dayOfTheWeek);

// Write a function called "add" that accepts 2 parameters
// and returns the addition of both numbers

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, "Hello") === "5Hello");
console.log(add(1, 2) === 3);
console.log(add(6, 4) === 10);
