/**
 * Repeat
 */

const myString = "String literal";
let something;

// something is undefined (the value of something)
console.log(something);

something = "A fancy string!";
console.log(something);

// Intentionally removing this value
something = null;
console.log(something);

// const can not be reassigned
const hi = "Hi";

// but const can be mutated
const james = {
  name: "james",
  age: 80
};

const john = {
  name: "john",
  age: 50
};

console.log(james, john);
// mutating
john.name = "peter";
console.log(john);

// john = james;
// ↑ reassigning does not work (uncomment to see error)

/**
 * Assignment Operators
 */

let operatorAssign = "=";
operatorAssign = operatorAssign + ", +=";
// shortcut for this
operatorAssign += ", -=";
operatorAssign -= "OMG what will happen";
console.log(
  "typeof NaN is: ",
  typeof operatorAssign,
  "value: ",
  operatorAssign
);

let studentsCount = 100;
studentsCount += 1;
console.log(studentsCount);
studentsCount -= 50;
console.log(studentsCount);

let studentsCount2 = 100;
studentsCount2 = studentsCount2 + 1;
studentsCount2 = studentsCount2 - 50;
console.log(studentsCount2);

// Types and the "Everything is an object"

// not really

/**
 * Booleans
 * Strings
 * Numbers
 * undefined
 * null
 * NaN
 *
 * all of the above are not objects
 */

/**
 * Strings 🎉
 * 
 * 
- Escaping special chars: `\'`, `\"`, `\n`
- Syntax debugging IV: Strings and quotes
- String interpolation: template literals, using expressions within strings
- Getting the length of a string: `String.prototype.length`
- Getting a character in a string: bracket notation
- Syntax debugging VI: Unclosed brackets
 */

let stringWithQuote = "Some said on some point: 'Really?'";
stringWithQuote = 'Some said on some point: "Really?"';
// prettier-ignore
stringWithQuote = "Some \'said\' on some point: \"Really?\"";
console.log(1, stringWithQuote);

stringWithQuote = "Line breaks \nare great";
console.log(1, stringWithQuote);

stringWithQuote = `Line breaks
are great, using the backticks character`;
console.log(3, stringWithQuote);

const person = "John";
const currentDay = "Saturday";
const mood = "Grumpy";
const dayOfTheWeek = 7;

let greeting =
  "Hi " +
  person +
  " how are you?" +
  "\nJohn: today is " +
  currentDay +
  " so I'm a bit " +
  mood +
  "\n\n";
console.log(greeting);

greeting = `Backticks: Hi ${person} how are you?
John today is ${currentDay} (day of the week ${dayOfTheWeek}) so I'm a bit ${mood}
Also line returns work 🎉
`;

console.log(greeting);

/**
 * String properties (that make a string not an Object :))
 */
let testString = "Hello World";

console.log((testString.length = 5));
// String.prototype.length is read only
console.log(testString.length);

// Accessing on character of a String (String: sequence of characters)
console.log(testString[0]);

/** 
 * String Methods
- Converting case with: `String.prototype.toUpperCase()`, `String.prototype.toLowerCase()`
- Extracting parts of a string: `String.prototype.substring()`
- Checking if a string is inside another string: `String.prototype.includes()`
- Removing padding spaces: `String.prototype.trim()`
- String.prototype.slice
 */

let low = "silent pssst";
console.log(low.toUpperCase());
console.log(low);
// toUpperCase does not change the value of our string... it returns a new one

low = low.toUpperCase();
console.log(low);
// if you forget the parenthesis you will get the value of toUpperCase as it is : type function
console.log(low.toUpperCase);

// .toUpperCase returns a new string... strings have methods .toLowerCase
console.log("Low case string".toUpperCase().toLowerCase());
// Chaining methods you can do it literal (multi line) or in a one liner
// as every methode returns a new string
let exampleChainMethods = "Innocent String";
exampleChainMethods = exampleChainMethods.toUpperCase();
exampleChainMethods = exampleChainMethods.toLowerCase();
// same as
exampleChainMethods = exampleChainMethods.toUpperCase().toLowerCase();
console.log(exampleChainMethods);

// String.prototype.includes
// Checking if a string contains a nother string
const birthdayBoy = "JOHN";
const gift = "This gift is for John";
// prettier-ignore
const isThisGiftForJohn = gift.toLowerCase().includes(birthdayBoy.toLowerCase());
console.log(isThisGiftForJohn);

// String.prototype.substring()
let str = "Mozilla";
console.log(str.substring(0, str.length));
console.log(str.substring(1, 5));
console.log(str.substring(2));

// String.prototype.trim()
// Remove Whitespace characters
{
  const birthdayBoy = "            JOHN   ";
  const gift = "This gift is for John";

  const isThisGiftForJohn = gift
    .toLowerCase()
    .includes(birthdayBoy.toLowerCase().trim());
  console.log("Trim: gift  ", isThisGiftForJohn);
  console.log(birthdayBoy);
  console.log(birthdayBoy.trim());
}

// String.prototype.slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#Differences_between_substring()_and_slice()
