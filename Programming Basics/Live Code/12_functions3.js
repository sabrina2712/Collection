/**
 * Closures
 * the: what, why and how
 * https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
 */

function outer(outerVar) {
  // const outerVar = "Value form outer function";
  function innerfunction() {
    console.log(outerVar);
  }

  return innerfunction;
}

const innerFunctionExposed = outer("hi");
innerFunctionExposed();

const innerFunctionExposed2 = outer("Cool");
innerFunctionExposed2();

// Illustrated
{
  const hi = "hi";
  function outer(outerVar) {
    // Global: hi,
    // Local: innerfunction, outerVar

    function innerfunction() {
      // Global: hi,
      // Parent Scope: innerfunction, outerVar
      console.log(outerVar);
    }

    return innerfunction;
  }

  const innerExposed = outer("outerVar"); // Local: nope, Closure: outerVar["outerVar"], Global: hi["hi"]
}
/**
 * Execution Context
 */

const add = (num1, num2) => {
  debugger;
  // if (!num2) throw new Error("Undefined secound parameter");
  return num1 + num2;
};
console.log(add(1, 2) === 3);

const main = () => {
  console.log("Main Start");
  const sum = add(133);
  console.log(sum === 250);
};

main();

/**
 * Function arguments aka parameters
 */

const funnyFunc = (para1, para2, para3) => {
  console.log(para1, para2, para3);
  return "hi";
};

console.log(funnyFunc("hello", "goodbye", "some", "hi"));

const max = Math.max(
  4,
  23,
  6,
  2,
  5,
  2,
  5,
  798,
  7,
  9,
  79,
  79,
  75945,
  7564975,
  578349579435,
  239472937593245234,
  4329479234,
  432984783294
);
console.log(max);

function func() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

func(12, 42, 3, 123, 54);

const arrowFunc = (...args) => {
  console.log(args);
};

arrowFunc(843, 34384092, 34397492, 43, 4);

const personGotFruits = (name, ...fruits) => {
  let sumOfFruits = 0;
  for (let i = 0; i < fruits.length; i++) {
    sumOfFruits += fruits[i];
  }
  return `${name} got ${sumOfFruits} fruits`;
};

console.log(personGotFruits("Oliver", 3, 4, 6, 21, 5, 2, 54, 234, 54));
