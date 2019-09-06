// Line Comment

/*
 Hi i'm a multi
 line comment
*/

/**
 * Data Types
 */

// Number
// Decimal Number 10
// Floats 12.9
console.log(10);

// String
// "Something like this"
console.log("I'm a String");

// Boolean
// true / false
console.log(true);

/**
 * Variables
 * var, let and const
 */

let number = 1;
let number2 = 2;
let result;

result = number + number2;
console.log("Result: ", result);

// Undefined Data Type
let whatAmI;
console.log(whatAmI);

let name = "John";
let age = 5;
let message = "Hi I'm " + name + ", and i am " + age + " year old";

console.log(message);

// Long text concat
let text =
  "Lorem Ipsum is simply 'dummy text' of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text \n ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a \n" +
  age +
  " type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n It was popularised in the 1960s with the release of Letraset sheets containing " +
  name +
  "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

console.log(text);

let anothertext = `${name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

// Single vs Double Quotes

let quote = 'This is my "Quote"';
let otherQuote = 'This is my Quote: \n"Hi I\'m Oliver"';
console.log(otherQuote);

let formattedText = `

Welcome:
      This is formatted text!

`;

console.log(formattedText);

console.log(object);

/**
 * Boolean
 * Null
 * Undefined
 * Number
 * String
 * Object (Array is an Object)
 */

let hey = null;

// console.log(undefined == null);

// No strict typing
let name = "Oliver";
name = 8798790;
console.log(name);

/**
 * Strict typing
 * let name:String = "Oliver"
 * name = 7897594
 *
 * does not work in javascript
 */

const hi = "I'm a constant";
console.log(hi);

// hi = "Hi";
// constants can not be reassigned!

const obj = { name: "Oliver" };
obj.name = "Joe";

console.log(obj);

// Assigning / Mutation

const constant = "I'm a string";

// What the heck is an object
const DCI = {
  name: "DCI",
  students: 120,
  fun: true
};

console.log(DCI);

DCI.fun = false;
DCI.name = { fullname: "Digital Career Institute", short: "DCI" };

console.log(DCI);

const table = {
  surface: { material: "Wood", messy: true },
  legs: {
    "leg 1": {
      material: "Wood"
    },
    "leg 2": {
      material: "Steel"
    },
    "leg 3": {
      material: "Stone"
    },
    "leg 4": {
      material: "Plastic"
    }
  }
};

let theLegIWant = "leg 4";
console.log(table.legs[theLegIWant].material);
theLegIWant = "leg 2";
console.log(table.legs[theLegIWant].material);
// const materialOfTheLegIWant = table["legs"][theLegIWant]["material"];
// const o = table.legs[theLegIWant];
// console.log(o);
// // console.log(table);
// console.log(materialOfTheLegIWant);

console.log(console);
