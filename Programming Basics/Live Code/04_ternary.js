let person = "";
let happy = true;

// If else condition as we know it
if (person) {
  console.log("Person truthy");

  if (happy) {
    console.log("Happy");
  }
} else {
  console.log("Person falsy");
}

// Ternary operator
const personsAge = 16;
const motherIsCoolWithIt = true;
const isAllowedToDrink = personsAge >= 18 || motherIsCoolWithIt;
// we need to provide 3 values
// <condition> ? <valueIfTrue > : <valueIfFalse>
const isAllowedToDrinkMessage = isAllowedToDrink ? "Jap" : "Nope";

console.log(isAllowedToDrinkMessage);

let isAllowedToDrink2;

if (personsAge >= 18) {
  isAllowedToDrink2 = "Jap";
} else {
  isAllowedToDrink2 = "Nope";
}

// ↓  This is hard to read please don't do this
//    We use ternary operators for conditional assignment (simple)
//    Not for FlowControl
const coolMessage =
  personsAge >= 18
    ? personsAge > 15
      ? "Almost"
      : "Ha dream on"
    : personsAge < 10
    ? "Ohh baby"
    : "";
