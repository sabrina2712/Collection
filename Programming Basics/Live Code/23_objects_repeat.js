const array = [true, "Developer", "Peter"];
// Below you can see the manifestation in memory of an Array
// {
//   "0": true,
//   "1": "Developer",
//   "2": "Peter"
//   "length": 3
// }

const object = {
  name: "Peter",
  position: "Developer",
  working: true
};

// Everything is an Object! (Beside primitive values)

// function: {
//   name: "myFunc",
//   body: ["return Hi"],
//   isObject: true
// }

const myFunc = () => {
  return "Hi";
};

myFunc.isObject = "hahah got ya!";

console.log(typeof array);
console.log(myFunc());
console.log(myFunc.isObject);

// Objects are named key value pairs

// Reassigning
// const dev = true;
// dev = false;

// Mutating Objects
const person = {
  developer: false,
  "things i like": "nothing"
};

// changing a value of a property
person.developer = true;

// create new properties
person.name = "Peter";
person["hobby"] = "Swimming";

// bracket notation shines with special property names
person["things i like"] = "Reduce :D";

console.log(person);

const arrayTest = ["some", "values"];
console.log(arrayTest[0]);

const personExample = { name: "Peter", scarfColor: "Red", age: 55 };

const askSomeOneAQuestion = (person, questionProperty) => {
  return person[questionProperty];
};

const answer = askSomeOneAQuestion(personExample, "scarfColor");
const answer2 = askSomeOneAQuestion(personExample, "age");
console.log(answer);

// const heatUp = (dish, time) => null;

// heatUp(lastDinner, "5min");
