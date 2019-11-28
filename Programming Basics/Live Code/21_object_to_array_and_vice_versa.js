/**
 * Using reduce to make an Array of Objects an Object
 *
 */

/**
 * We have the following Array with objects
 * but we use an external library that
 * wants to access the language objects based their uid
 * like:
 * lang["1"] -> { name: "JavaScript", uid: "1" }
 */

const langs = [
  { name: "JavaScript", uid: "a101" },
  { name: "Python", uid: "a102" },
  { name: "C", uid: "a103" }
];

// const lang = {
//   a101: { name: "JavaScript", uid: "a101" },
//   a102: { name: "Python", uid: "a102" },
//   a103: { name: "C", uid: "a103" }
// };

const lang = langs.reduce((acc, curr) => {
  //magic
  console.log(curr);

  acc[curr.uid] = curr;
  delete curr.uid;

  return acc;
}, {});

console.log(lang["a101"]);
console.log(lang["a102"]);
console.log(lang);

// cool, and now back!
/**
 * what we have: {
     a101: { name: "JavaScript" },
     a102: { name: "Python" },
     a103: { name: "C" }
   };
 * 
 * what we want: [
  { name: "JavaScript", uid: "a101" },
  { name: "Python", uid: "a102" },
  { name: "C", uid: "a103" }
];
 */

console.log(Object.keys(lang));
const langArr = Object.keys(lang).map(key => {
  const value = lang[key];
  value.uid = key;

  return value;
});

console.log(langArr); // {name: JavaScript...}
