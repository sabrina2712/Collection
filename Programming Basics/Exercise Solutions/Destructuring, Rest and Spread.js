// 1. Create a function that accepts an unlimited amount of parameter and log them as an array
// 2. Create a function that accepts one object with the properties name and age; destructure those in the parameters and log them out in the function body
// 3. Use this array with `Math.max` array: [2,354,2,452,52,5,2,2,4,52,487]

// 1.
function ex1(...rest) {
  console.log(rest);
}

ex1(1, 4, 5, 67, 4, 6, 4, 76, 64, 7);

// 2.
function ex2({ name, age, other }) {
  console.log(name, age, other);
}

ex2({ name: "Jürgen", age: 110, other: true });

// Without destructuring and one objet as parameter
function ex21(props) {
  console.log(props.name, props.age, props.other);
}

ex21({ name: "Jürgen", age: 110, other: true });

// Or 3 parameters but now the order becomes important
function ex22(name, age, other) {
  console.log(name, age, other);
}

ex22("Jürgen", 21, true);

// 3.

const array = [2, 354, 2, 452, 52, 5, 2, 2, 4, 52, 487];

console.log(Math.max(...array));
