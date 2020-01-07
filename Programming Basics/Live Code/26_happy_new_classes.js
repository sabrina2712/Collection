const sayHelloFunction = function() {
  return "Hi I'm " + this.name;
};

const peter = {
  name: "Peter",
  sayHello: sayHelloFunction,
  dateOfBirth: "1.1.1970",
  age: function() {
    // pseudo code for a computed property
    return inYears(currentDate - this.dateOfBirth);
  }
};

const miranda = {
  sayHello: sayHelloFunction,
  name: "Miranda"
};

console.log(peter, peter.sayHello());
console.log(miranda, miranda.sayHello());

// Classes let's us formulate a base object once
// and create new instances of it
const defaultHumanProps = { nameOfHuman: "", age: 0 };

class Human {
  constructor({ nameOfHuman, age } = defaultHumanProps) {
    // If we would not have destructuring we would need to do 3 things manually
    //    1. Create variable
    //    2. Take value out of argument
    //    3. define default incase the property is null
    // let nameOfHuman = arguments[0].nameOfHuman || defaultHumanProps.nameOfHuman;
    // let age = arguments[0].age || defaultHumanProps.age;
    this.name = nameOfHuman;
    this.age = age;
  }
}

class HumanWithOutDestructuring {
  constructor(props = defaultHumanProps) {
    this.name = props.nameOfHuman;
    this.age = props.age;
  }
}

const human1 = new Human({ nameOfHuman: "Jürgen" });
console.log(human1); // {name: undefined, age:"Jürgen"}

// Review Rest and Spread

// Rest operator
const [first, ...losers] = ["Miranda", "Jürgen", "Milo"];
console.log("Rest: ", first, losers);

const { name, ...blala } = { name: "Milo", age: 5, other: true };
console.log(name, blala);

const MathMax = (...allNumbersAsArray) => {};

// Spread Operator
const array1 = [1, 2, 3, 4];
const array2 = [...array1, 5, 6];
console.log("array2 ", array2);

console.log(Math.max(...array2));

const obj1 = { name: "Tom", age: 5 };
const obj2 = { ...obj1, some: true };
console.log("obj2 ", obj2);
