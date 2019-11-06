// What is an array

// Objects -> every element has a name

const animals = {
  animal: { name: "Wuffy" },
  animal: { name: "Birgit" },
  animal: { name: "Peter" }
};

console.log(animals);

// Arrays are lists
const randomNumbers = [32, 42, 89590, 3920, 493];
console.log(randomNumbers);

console.log(randomNumbers[0]);

// Fake array
// const fakearray = {
//   0: false,
//   1: "Hahaha so fake",
//   length: 2
// };

// console.log(fakearray[0], fakearray.length);

const animalList = [{ name: "Wuffy" }, { name: "Birgit" }, { name: "Peter" }];
console.log(animalList[0].name);
