const myFirstObject = {
  isCool: true,
  isItReallyCool: function() {
    return this.isCool;
  }
};

console.log(
  myFirstObject.isCool, // use property
  myFirstObject.isItReallyCool(), // using method
  myFirstObject.isItReallyCool // function value
);

// Blockstatement vs Object Literal

// No code block (does not work)
// const createPerson = (firstName, lastName) => {firstName: firstName, lastName: lastName}

// codeblock with explicit return
const createPerson = (firstName, lastName) => {
  return { firstName: firstName, lastName: lastName };
};

// with implicit return without codeblock
const createPerson2 = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName
});

// Students Signup Form
const createStudent = (name, className, age) => {
  return { name, className, age };
};
// even shorter implicit return
// const createStudent = (name, className, age) => ({ name, className, age });

console.log(createStudent("Peter", "BER-FBW-250"));
const firstStudent = createStudent("Ayham", "BER-FBW-2", 2);
console.log("here", firstStudent);
firstStudent.age = 27;

console.log(firstStudent);

// Animal Creator

const animalCreator = (animalName, animalType) => {
  // Type should be Cat || Dog
  const animal = { name: animalName, type: animalType, standardPet: false };

  if (animalType === "Dog" || animalType === "Cat") {
    animal.standardPet = true;
  }

  return animal;
};

console.log(animalCreator("Wuffy", "Dog"));
console.log(animalCreator("Birgit", "Otter"));

// But what is when i want to have properties like `animal type`

const testAnimal = {
  name: "Wuffy",
  "animal type": "Dog"
};

console.log(testAnimal["animal type"]);
