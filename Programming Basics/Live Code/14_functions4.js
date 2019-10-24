/**
 * Default Parameters
 */

// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:

// - sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// - sumOfCubes(2) ➞ 8
// - sumOfCubes() ➞ 0

// Classic default parameters
const sumOfCubes = (num1, num2, num3) => {
  num1 = num1 || 0;
  num2 = num2 || 0;
  num3 = num3 || 0;

  return Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
};

console.log(sumOfCubes(1, 5, 9) === 855);
console.log(sumOfCubes(2) === 8);
console.log(sumOfCubes() === 0);

// The new way (ES6 / ECMA 2015)
const power3 = base => Math.pow(base, 3);
const sumOfCubesES6 = (num1 = 0, num2 = 0, num3 = 0) => {
  return power3(num1) + power3(num2) + power3(num3);
};

console.log(sumOfCubesES6(1, 5, 9) === 855);
console.log(sumOfCubesES6(2) === 8);
console.log(sumOfCubesES6() === 0);

// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:

// - dictionary("bu", "button") ➞ true
// - dictionary("tri", "triplet") ➞ true
// - dictionary("beau", "pastry") ➞ false

const dictionary = (initials, word) => {
  return word.includes(initials);
};
console.log(dictionary("bu", "button") === true);
console.log(dictionary("tri", "triplet") === true);
console.log(dictionary("beau", "pastry") === false);
console.log(dictionary("ing", "skating") === false);

// Starts with with out String.prototype.startsWith()
const startsWith = (initials, word) => {
  debugger;
  let isStartingWith = undefined;

  for (let i = 0; i < initials.length; i++) {
    if (isStartingWith === false) break;

    if (initials[i] === word[i]) {
      isStartingWith = true;
    } else {
      isStartingWith = false;
    }
  }

  return isStartingWith;
};

console.log(startsWith("bu", "button") === true);
console.log(startsWith("tri", "triplet") === true);
console.log(startsWith("beau", "pastry") === false);
console.log(startsWith("ing", "skating") === false);

// Without default parameters
const sumOfCubesWithOutDefaults = (...base) => {
  let result = 0;

  for (let i = 0; i < base.length; i++) {
    result += Math.pow(base[i], 3);
  }

  return result;
};

console.log(sumOfCubesWithOutDefaults(1, 5, 9) === 855);
console.log(sumOfCubesWithOutDefaults(2) === 8);
console.log(sumOfCubesWithOutDefaults() === 0);
