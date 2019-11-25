// const name = "Peter";
// const company = "Google";
// const title = "Developer";
// const email = "peter@dev.google.com";
// const www = "google.com";
// the above as object

const personObject = {
  name: "Peter",
  isRetired: false,
  company: {
    name: "Google",
    address: "Road 2",
    www: "google.com"
  },
  title: "Developer",
  email: "peter@dev.google.com",
  address: "Road 1",
  property: "Noooooo"
};

const aboutPerson = `${personObject.name} is working at ${personObject.company.name} you can reach them via ${personObject.email}`;
console.log(aboutPerson);

// Check this out: "Error: TypeError: Cannot read property 'year' of undefined"
// which means not that year is undefined but age is!
// console.log(personObject.age.year);

// Are there other ways to access object properties?
// Glad you asked!
// More powerful 💪
const giveMeXFromY = (object, property) => {
  return object[property];
};
const methodOfLogging = "info";
console[methodOfLogging](giveMeXFromY(personObject, "name"));
console[methodOfLogging]("Hi");
console["log"]("Hi");

// Consol.log() -> 🤔 is that a function in an object?
// YES we call it method

const obj = {
  firstName: "Peter",
  firstName: "Other", // Properties are unique
  lastName: "Schmidt",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  whatIsThis: function() {
    console.log(this);
  }
};
obj.firstName = "Oliver";
console.log(obj.fullName());

obj.whatIsThis();
