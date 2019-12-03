# Objects

Objects are groups of values.
We organize them in key (property) <-> value pairs

```js
{
  <key>:<value>
}
```

See the following example:

```js
const name = "Peter";
const company = "Google";
const title = "Developer";
const email = "peter@dev.google.com";

// vs

const personObject = {
  name: "Peter",
  company: "Google",
  title: "Developer",
  email: "peter@dev.google.com"
};
```

We create an object called `personObject` which holds 4 values and puts them in relation for us.
We can access those values in two different ways:

## Dot Notation

Dot notation is pretty straight forward:

```js
console.log(personObject.name); // -> "Peter"
```

## Bracket Notation

Bracket notation is a bit less convenient to write but much more powerful.

```js
console.log(personObject["name"]) // "Peter"
// ok but but what do you mean by more powerful?
// glad you asked...

// imagine we don't know the property we want to access
const propertyWeWant = "name"
console.log(personObject[propertyWeWant]) // "Peter"
// this is not possible with dot notation

// and one last thing, "strange" property names (e.g. with space) can
// just be accessed with bracket notation
{"home address": "Nice Rd. 4"}["home address"]
```

## Nesting Objects

Objects can contain Objects which can contain Objects which can contain Objects which can contain Objects...

**You get it.**

```js
const personObject = {
  name: "Peter",
  company: {
    name: "Google",
    address: "Road 2",
    links: {
      www: "google.com"
    }
  }
};
```

##### Dot notation

```js
console.log(personObject.company.links.www);
```

##### Bracket notation

```js
console.log(personObject["company"]["links"]["www"]);
```

##### Or mix it up 🤪

```js
console.log(personObject["company"].links["www"]);
```

## Destructuring Objects

We can also retrieve values of objects by destructuring them.

```js
const person = { name: "Jessica", age: 54 };
const { age } = person;
console.log(age); // 54
```

What happens here is that we create a new `const` that holds the same value as `person.age`
So we could also write it in this way:

```js
const person = { name: "Jessica", age: 54 };
const age = person.age;
console.log(age); // 54
```

When you destructure your variable name needs to be the same as the property name (in our example age).

### Destructuring and renaming

But what if we have a variable with that name already in scope 😭. No worries Object destructuring allows renaming.

The following problem definition:

```js
const name = "Frida Kahlo";
const husband = { name: "Diego Rivera" };
const { name } = husband;
// would result in an error as name is already defined.
```

Renaming as a solution:

```js
const name = "Frida Kahlo";
const person = { name: "Diego Rivera" };
const { name: spouse } = person;
console.log(spouse);
```
