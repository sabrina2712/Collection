// Conditions
const age = 20;
const isOlderThen18 = age > 18;
console.log(isOlderThen18);
// Types
// Boolean (True / False)
// Number (0 === false, the rest is true)
// String (String.length is checked ↑)
// Null (False)
// Undefined (False)
// Is value: NaN (Falsy)
const myNumber = 18;
console.log(myNumber);

if (myNumber) {
  console.log("My number true");
}

console.log(!!myNumber);

if (typeof myNumber == "number") {
  const isBool = myNumber != 0 ? console.log("true") : console.log("false");
  console.log(isBool);
}

console.log(typeof 18);

if (typeof myNumber === "number" && (myNumber > 0 || myNumber < 0)) {
  console.log("Number truthy");
} else if (typeof myNumber === "number" && myNumber === 0) {
  console.log("Number Falsy");
} else {
  console.log("Is not a number");
}

const isNumber = typeof myNumber === "number";
if (isNumber && myNumber !== 0) {
  console.log("Number truthy");
} else if (isNumber && myNumber === 0) {
  console.log("Number Falsy");
} else {
  console.log("Is not a number");
}

// Switch Statements
const currentDayTime = "Morning";

switch (currentDayTime) {
  case "Morgen":
  case "Morning":
    console.log("Good Morning");
    break;
  case "Mittag":
  case "Noon":
    console.log("Happy Lunch Break");
    break;
  default:
    console.log("Don't know");
    break;
}

const name = "Paul";
switch (true) {
  case name[0] === "p":
  case name[0] === "P":
    console.log("Name Starts with P");
    break;

  default:
    break;
}

// Loops
// For Loops (While loop but with safety)
// While (While condition is met execute)
// Do While (Executes at least once)
let number = 0;
while (number < 20) {
  console.log(number);
  number = number + 1;
}

for (let number = 0; number < 20; number++) {
  console.log(number);
}

const myString = "Hello";

for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}
