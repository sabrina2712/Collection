/**
 * Recursive Functions
 */

const loopFract = n => {
  let result = 1;
  for (; n > 1; n--) {
    result = result * n;
  }

  return result;
};

console.log(loopFract(4));

const factorial = n => {
  debugger;
  if (n <= 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(45));

// const factorial = 4 => {

//   return 4 * factorial(3){
//     return 3 * factorial(2){
//       return 2 * factorial(1){
//          return 1;
//       }
//     }
//   };
// };

const endlessLoop = loopCount => {
  if (loopCount <= 1) return console.log("Final Loop ☹️");

  console.log("loop loop");
  return endlessLoop(loopCount - 1);
};

endlessLoop(10);

console.log(typeof endlessLoop(1));
