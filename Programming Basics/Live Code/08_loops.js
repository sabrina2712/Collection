/**
 * Loops
 */
let pensOnTheDesk = 10;
while (pensOnTheDesk >= 0) {
  console.log(
    "Name: pensOnTheDesk",
    "Value: " + pensOnTheDesk,
    "Typeof: ",
    typeof pensOnTheDesk
  );

  // pensOnTheDesk = pensOnTheDesk - 1; // OR
  pensOnTheDesk--;

  // ALWAYS MAKE SURE THAT YOUR CONDITION WILL BE FALSY ON SOME POINT
}

console.log(pensOnTheDesk);

console.log("----- New section logout 0...100 -----");

let itemsThatIChecked = 0;
let numberOFItemsOnTheDesk = 100;
let pensFound = 0;
let cupCapacity = 3;

while (itemsThatIChecked <= numberOFItemsOnTheDesk) {
  const isAPen = itemsThatIChecked % 3 === 0;

  if (isAPen) {
    console.log(itemsThatIChecked);
    pensFound++; // when number matches condition (n % 3 === 0) increment match
  }

  if (pensFound === cupCapacity) break; // stops the loop if 3 numbers are found

  itemsThatIChecked++;
}

console.log("---------- Do while ----------");
let doIterator = 0;
do {
  console.log(doIterator);
  doIterator++;
} while (doIterator < 5);

do {
  console.log("Hi");
} while (false);

console.log("------ For loop ------");

// Want to say hi 5 times
// for (initializer, condition, incrementer) {code}
for (let i = 0; i < 6; i++) {
  console.log("Hi " + i);
}

// equals to ↓

let i = 0;
while (i < 6) {
  console.log("Hi");
  i++;
}

/**
 * -- Human "code"
 * While we didn't logout Hi six times...
 *  logout Hi
 *
 * while logcount !== 6 {
 *    log "Hi"
 *
 *    increment logcount
 * }
 */

// Looping over Strings
const myStringExample = "Dog";
console.log(myStringExample[0]);
console.log(myStringExample.length);
// Print out each character (Char) form string "Dog"
for (let i = 0; i < myStringExample.length; i++) {
  console.log(myStringExample[i]);
}

// Arrays
// Arrays also have and index array[index] and a length property
const itemsOnTheDesk = ["Pen", "Cable", "Mug", "Pen", "Folder"];
console.log(itemsOnTheDesk.length);

for (let i = 0; i < itemsOnTheDesk.length; i++) {
  const item = itemsOnTheDesk[i];
  console.log(item);
}

console.log("--- Iterating to far ---");
// Looping to far .length vs index
const items = ["Pen", "Book"];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i]); // logs out 3 times
  // 3rd time is undefined because we try to access items[3] which is undefined ...
  // exit condition should be i <= items.length -1 OR i < items.length
}
