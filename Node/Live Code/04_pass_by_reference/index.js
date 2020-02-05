// // Objects (Arrays) and Primitive values behave differently in comparisons
// //           1      2
// console.log({} === {}); // 🤷🏽‍♂️ why

// const person = {
//   name: "Peter",
//   age: 55
// };

// const changeAge = (person) => {
//   person.age = 17;

//   return person;
// };

// changeAge(person);

// console.log(person);

// // Comparison of objects
// //  MemId = 5
// let person1 = {
//   name: "Joe",
//   age: 15
// };

// //  MemId = 6
// let person2 = {
//   age: 15,
//   name: "Joe"
// };
// //                5 === 6
// console.log(person1 === person2);
// console.dir(JSON.parse(JSON.stringify(person1)));
// console.log("HERE:", JSON.stringify(person1) === JSON.stringify(person2));

// {
//   let person1 = {
//     name: "Josephine",
//     age: 15,
//     hello: true
//   };

//   //  MemId = 6
//   let person2 = {
//     age: 15,
//     name: "Joe"
//   };

//   let mergedPerson = Object.assign({}, person1, person2, { age: false });
//   console.log(mergedPerson === person1, mergedPerson);

//   let mergedPerson2 = { ...person1, ...person2, ...{ age: false } };
//   console.log(mergedPerson2);
// }

{
  // What is happening here:
  let person1 = { name: "joe" };
  let person2 = { name: "josephine" };
  const person = { ...person1, ...person2, ...{ age: false } };
  // person = {} -- new object
  // ...person1 -> name: "joe"
  // { name: "joe" }
  // ...person2 -> name: "josephine"
  // person.name = person2.name
  console.log(person);

  const hello = {};
  hello.something = true;
  hello.something = false;
  console.log(hello);
}
