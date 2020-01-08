# Callback functions

## What is a callback?

You ever used the callback feature from customer support? There is no current free case manager, you leave them your phone number so once they have capacities they can call you back.

**Condition**:

- call me back when you are free

**Requirements**:

- a way to reach initiator (phone number)

You don't know when they have capacities but once they are available they should use your phone number to reach you.
We use quite the same concept in programming. But there are actually two kinds of callbacks (two different reasons why we use them).

- synchronous callback
- asynchronous callback

While the metaphor I use above fits best for asynchronous callbacks we will first take a look into synchronous callbacks.

## Synchronous Callback

In a synchronous callback (metaphor) there is no time passing between you passing a callback and executing it. You give the customer support your name and right in that moment your phone is ringing.

Why do we have synchronous callbacks if there is nothing to wait for?

One word: **Abstraction**. We try to limit the amount we repeat ourself in programming. Let's see an example of abstraction with a synchronous callback.

We want to filter arrays:

```js
const numbers = [10, 55, 100, 4, 134, 500];
const users = ["Albert", "Jessica", "Ben", "Alejandra"];

// filtering for numbers > 100
const numbersOver100 = (numberArray) => {
  const resultArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 100) {
      resultArray.push(numberArray[i]);
    }
  }

  return resultArray;
};

const filteredNumbers = numbersOver100(numbers);
console.log(filteredNumbers); // [ 134, 500 ]

// filtering user names which have more then 4 characters
const userWithLongNames = (stringArray) => {
  const resultArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > 4) {
      resultArray.push(stringArray[i]);
    }
  }

  return resultArray;
};

const filteredUsers = userWithLongNames(users);
console.log(filteredUsers); // [ 'Albert', 'Jessica', 'Alejandra' ]
```

😨 I know quite a lot of code...
Take your time to read through, and see what is actually different in those two functions.

Here is what is the same:

```js
const name = (parameter) =>{
  // our new array that just contains the elements we want
  const resultArray = []

  // Setting up a loop to go over each element
  for(let i = 0; i < parameter.length; i++){
    if (/*<condition>*/){
        // depending on our condition we want to
        // include this element in our new array
      resultArray.push(parameter[i])
    }
  }

  // Finally we can return our new array,
  // with just the elements we want
  return resultArray
}
```

The only thing that changes is the condition. Thats why we have `Array.prototype.filter` for convenience. See how much shorter this code is.

```js
const numbers = [10, 55, 100, 4, 134, 500];
const users = ["Albert", "Jessica", "Ben", "Alejandra"];

// filtering for just numbers > 100
const filteredNumbers = numbers.filter((element) => element > 100);
console.log(filteredNumbers); // [ 134, 500 ]

// filtering user names which have more then 4 characters
const filteredUsers = users.filter((userName) => userName.length > 4);
console.log(filteredUsers); // [ 'Albert', 'Jessica', 'Alejandra' ]
```

But how is this possible 🤔
Lets write our own filter function which has the same power like filter (simplified).

```js
const filter = (array, filterCallback) => {
  // we accept two parameters the array we want to filter
  // and a function which will evaluate if our element should
  // be in the new array or not
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    // calling our callback function with the current element
    if (filterCallback(array[i])) {
      // depending on our condition we want to
      // include this element in our new array
      resultArray.push(array[i]);
    }
  }

  // Finally we can return our new array,
  // with just the elements we want
  return resultArray;
};
```

We want to evaluate for each element if it should be in the new array, so we use our callback function in our condition. We call it with the current element and it should return true if our element should be in the new array and false if not.

All together:

```js
const filter = (array, filterCallback) => {
  // we accept two parameters the array we want to filter
  // and a function which will evaluate if our element should
  // be in the new array or not
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    // calling our callback function with the current element
    if (filterCallback(array[i])) {
      // depending on our condition we want to
      // include this element in our new array
      resultArray.push(array[i]);
    }
  }

  // Finally we can return our new array,
  // with just the elements we want
  return resultArray;
};

const numbers = [10, 55, 100, 4, 134, 500];
const users = ["Albert", "Jessica", "Ben", "Alejandra"];

// filtering for just numbers > 100
const filteredNumbers = filter(numbers, (element) => element > 100);
console.log(filteredNumbers); // [ 134, 500 ]

// filtering user names which have more then 4 characters
const filteredUsers = filter(users, (userName) => userName.length > 4);
console.log(filteredUsers); // [ 'Albert', 'Jessica', 'Alejandra' ]
```

I hope this helps to show you the power of callbacks. Once you get used to callbacks like this (Array methods) they fell much more natural. If I would give you a list of names and the task to create a new list with all the names that are longer the 4 characters you would not need to think about:

- Loop over each name
- Add name to new list
- Return new list to me

This part is pretty natural, the only thing you will need to keep in mind is the condition (length > 4).

## Asynchronous Callback

// WIP
