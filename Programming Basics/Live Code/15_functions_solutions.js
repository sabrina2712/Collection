// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * XO("ooxx") ➞ true
// * XO("xooxx") ➞ false
// * XO("ooxXm") ➞ true (case insensitive)
// * XO("zpzpzpp") ➞ true (returns true if no x and o)
// * XO("zzoo") ➞ false

const XO = searchString => {
  const sString = searchString.toLowerCase();
  let countOfX = 0;
  let countOfO = 0;

  for (let i = 0; i < sString.length; i++) {
    const charToCompare = sString[i];
    // check is x if increment count of x
    if (charToCompare === "x") countOfX = countOfX + 1;
    // check is 0 if increment count of 0
    if (charToCompare === "0") countOfO = countOfO + 1;
  }

  // if (countOfX === countOfO) {
  //   return true
  // }else {
  //   return false
  // }
  return countOfX === countOfO;
};

console.log(XO("ooxx") === true);
console.log(XO("xooxx") === false);
console.log(XO("ooxXm") === true);
console.log(XO("zpzpzpp") === true);
console.log(XO("zzoo") === false);

// **12. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false

const isPrime1 = number => {
  if (number <= 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
};

console.log(isPrime1(7) === true);
console.log(isPrime1(9) === false);
console.log(isPrime1(10) === false);

//12. isPrime?

function isPrime(prime) {
  if (prime === 1) {
    return `1 is not a prime number`;
  } else if (
    prime === 2 ||
    prime === 3 ||
    prime === 5 ||
    prime === 7 ||
    prime === 11
  ) {
    return `${prime} is a prime number`;
  } else if (
    prime % 2 !== 0 &&
    prime % 3 !== 0 &&
    prime % 5 !== 0 &&
    prime % 7 !== 0 &&
    prime % 11 !== 0
  ) {
    return `${prime} is a prime number`;
  } else {
    return `${prime} is not a prime number`;
  }
}

console.log(isPrime(221));

// **13. Validate Email.**
// Create a function that takes a string, checks if it's a valid email address, and then accordingly returns either true or false.

// * The string must contain an "@" character.
// * The string must contain a "." character.
// * The "@" must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The "." and the "@" must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

const isHostName = hostname => hostname.includes(".");

const isEmail = emailString => {
  const emailParts = emailString.split("@");

  // no @ sign list.length === 1
  console.log(emailString, emailParts);
  if (emailParts.length === 1) return false;

  const mailbox = emailParts[0];
  const host = emailParts[1];

  const hostNameIsNotValid = !isHostName(host);
  if (hostNameIsNotValid) return false;

  if (mailbox.length <= 0) return false;

  return true;
};

console.log(isEmail("john.example.com") === false);
console.log(isEmail("somebody@domaincom.") === false);
console.log(isEmail("some.body@domaincom") === false);
console.log(isEmail("@domain.com") === false);
console.log(isEmail("hello@company.com") === true);
console.log(isEmail("j@uix.io") === true);
