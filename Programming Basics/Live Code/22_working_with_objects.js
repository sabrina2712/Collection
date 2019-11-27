/**
 * Object.keys()
 *
 *
 */

const room = {
  number: "1.4",
  building: "DCI",
  seats: 14
};

console.log(Object.keys(room));

/**
 * Object.values()
 *
 */

console.log(Object.values(room));

/**
 * Object.entries()
 *
 */

console.log(Object.entries(room));

/**
 *
 * Destructure
 *
 */

const [winner, ...loosers] = ["Jake", "Marie", "Sophie"];

console.log(winner, loosers);

const { name } = { name: "JavaScript", uid: 1000 };
console.log(name);

// Rename destructuring (name is renamed to bestLangEver)
const { name: bestLangEver } = { name: "JavaScript", uid: 1000 };
console.log(bestLangEver);

// Why renaming?
const devFeatures = { name: "JavaScript" };

const personResume = (name, { name: langName }) => {
  console.log(name, langName);
};

personResume("oliver", devFeatures);

/**
 * Named parameters through destructuring
 *
 */

const hello = ({ name, greeting = "Hello", city }) => {
  console.log(`${greeting} ${name} how is ${city}`);
};

hello({ name: "Paul", city: "LA" });
