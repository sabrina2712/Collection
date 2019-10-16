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

// Functions we already know!
// console.log
// parseInt()

// Write a function that prints out each individual character
// of a given string.

function printEachCharOfWord(word) {
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
  }
}

printEachCharOfWord("Some string");

// 2 Types of functions
// - function expression
// - arrow function

// Arrow function syntax
const myFirstArrowFunc = () => console.log("hi");
// variable = (parameters) "Fat Arrow" => return
// with code block
const withCodeBlock = () => {
  return console.log("hi");
};

// with implicit return
const addArrow = (num1, num2) => num1 + num2;
// with explicit return
const addArrow2 = (num1, num2) => {
  return num1 + num2;
};
console.log(addArrow(1, 100));

/**
 * Pure vs Impure Functions
 */
let store = "Value";
const name = "Oliver";
const pureFunction = name => {
  return `Hello ${name}`;
};

console.log(pureFunction("Paul"));

const impureFunction = () => {
  return `Hello ${name}`;
};

console.log(impureFunction());

// Changing values on the outside does not work when pure function
const changeStore = storeVar => {
  storeVar += " cool";
  return storeVar;
};

console.log(changeStore(store), " : ", store);

/**
 * Pure are easier to debug (find out what is wrong)
 * Gold Rule: Try to be as pure as possible (when writing functions)
 */

/**
 * Functions are first class citizen
 * - Functions are just values
 */

console.log("Hello");

let multi = (num1, num2) => num1 * num2;
let multi2 = function(num1, num2) {
  return num1 * num2;
};
console.log(multi, multi(2, 10));

// Long arrow functions should have a code block
// when to use code block
const reverseString = string =>
  string &&
  string
    .split("")
    .reverse()
    .join();

// Better

const reverseString2 = string => {
  if (string) {
    string = string
      .split("")
      .reverse()
      .join("");
  }

  return string;
};

console.log(reverseString2("Hi how are you"));

{
  let calcResult = null;
  const add = (num1, num2) => num1 + num2;
  const multi = (num1, num2) => num1 * num2;
  const div = (num1, num2) => num1 / num2;
  const sub = (num1, num2) => num1 - num2;
  const resultFunc = (result, actionFunction) => actionFunction(result);
  const addToCalcResult = val => (calcResult += val);

  resultFunc(multi(2, div(5, 2.5)), console.log);
  resultFunc(10, addToCalcResult);
}

{
  debugger;
  let myString = "Students: ";
  const students = ["Paul", 5, "George", true, "Mariam", NaN];

  function stringsInArray(array, fn) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "string") {
        fn(array[i]);
      }
    }
  }
  const addStudentToMyString = student =>
    (myString = myString + student + ", ");

  stringsInArray(students, addStudentToMyString);
  console.log(myString);
}

{
  const myFuncs = [
    word => console.log(word),
    name => console.log("hi " + name)
  ];
  const values = ["Word of the day", "George"];

  for (let i = 0; i < values.length; i++) {
    myFuncs[i](values[i]);
  }
}
