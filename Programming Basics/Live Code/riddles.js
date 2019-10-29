/**
 * Riddle
 * 18.10.2019
 * Write a "add" function that works in the following ways:
 * add(10,5) -> 15
 * add(10)(5) -> 15
 *
 * Concept: Currying
 * - Closure
 * - Scope
 */

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(10, 5) === 15);

const add2 = num1 => {
  return num2 => {
    return num1 + num2;
  };
};

console.log(add2(10)(5) === 15);

const addCombined = (num1, num2) => {
  const notNum2 = !num2;
  if (notNum2) {
    return num2 => {
      return num1 + num2;
    };
  }

  return num1 + num2;
};

console.log(addCombined(10, 5) === 15);
console.log(addCombined(10)(5) === 15);

/**
 * Compose Functions
 */

const greet = (greeting, name) => {
  return greeting + " " + name;
};

console.log(greet("Hello", "Oliver"));
// in short: const createGreeting = greeting => name => `${greeting} ${name}`;
const createGreeting = greeting => {
  return function(name) {
    return `${greeting} ${name}`;
  };
};

const germanGreeting = createGreeting("Hallo"); // looks like (name) => `Hallo ${name}`
const englishGreeting = createGreeting("Hello");

console.log(germanGreeting("Bob"), englishGreeting("Tania"));
