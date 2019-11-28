// Hoisted Declarations
var hello;

/**
 * The current context of execution. The context in which values and expressions are "visible," or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
 */
console.log(hello);
// console.log(goodbye); -> let is not hoisted so goodbye is not defined
// Hoisting
var hello = 5;
let goodbye = "ciao";
const ciao = "👋";

console.log(hello, goodbye);

if (hello) {
  let goodbye = ciao;
  goodbye += "  Ciao";
  console.log(goodbye);
}

console.log(ciao);

console.log(isGonnaHoist);
let letItBe;

if ("hoisted" === "hoisted") {
  var isGonnaHoist = true;
  letItBe = "access outside";
  imNeverDeclared = "Bad Var";
}

console.log(isGonnaHoist);
console.log(letItBe);
console.log(imNeverDeclared);

if (false) {
  var hoistedVal = "hi";
}

console.log(hoistedVal);
