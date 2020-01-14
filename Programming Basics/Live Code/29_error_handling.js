/**
 * Throw - Try Catch Style
 */

const maxNumber = (...numbers) => {
  const areThoseNumbersNumbers = numbers.every(
    (value) => typeof value === "number"
  );

  if (!areThoseNumbersNumbers) {
    const err = new Error("Please use values of type number with maxNumber 🤦‍♂️");
    err.blalalalal = "hi";
    // throw new Error("Please use values of type number with maxNumber 🤦‍♂️");
    throw err;
  }

  const largest = Math.max(...numbers);
  console.log(largest);
};

maxNumber(893, 482, 53894239, 423843);

try {
  maxNumber("five", "four", "three", "XI", "three point five");
} catch (e) {
  console.log(e.blalalalal);
}

/**
 * Tuple Style
 */

const maxNumber2 = (...numbers) => {
  let result;
  let error;

  const areThoseNumbersNumbers = numbers.every(
    (value) => typeof value === "number"
  );

  if (!areThoseNumbersNumbers) {
    error = new Error("Please use values of type number with maxNumber 🤦‍♂️");
  } else {
    result = Math.max(...numbers);
  }

  return [result, error];
};

const [max, error] = maxNumber2(4342, 324, 21, 5);
if (error) console.log("Noo!");
if (max) console.log("Yeahhhh");

const resultTuple = maxNumber2("five", "six", "ten");
const max2 = resultTuple[0];
const error2 = resultTuple[1];

if (error2) console.log("Noo!");
if (max2) console.log("Yeahhhh");

/**
 * Throw escalation
 */

const one = () => {
  throw new Error("Error in one");
};

const two = () => one();

const three = () => {
  try {
    two();
  } catch (error) {
    console.log(error);
  }
};

three();
two();
