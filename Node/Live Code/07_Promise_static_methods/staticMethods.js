// Static Methods
class Human {
  constructor(humObj) {
    this.name = humObj.name;
    this.lastName = humObj.lastName;
  }

  static verifyObj(humObj) {
    // there is no this inside of a static method
    if (humObj.name && humObj.lastName) {
      return true;
    } else {
      return false;
    }
  }
}

let person = { name: "Peter" };

if (Human.verifyObj(person)) {
  new Human(person);
}

///
class Dog {
  constructor(name, kind, size, color) {
    this.name = name;
    this.kind = kind;
    this.size = size;
    this.color = color;
  }

  get sound() {
    return Dog.sound;
  }

  static get sound() {
    console.log("Wuff");
  }
}

class Cat {
  constructor(name, kind, size, color) {
    this.name = name;
    this.kind = kind;
    this.size = size;
    this.color = color;
    this.sound = "Miau";
  }

  sound() {
    return Cat.sound;
  }

  static get sound() {
    console.log("MAIAUUUUU!!! 😾");
  }
}

const animals = [Dog, Cat];

animals.forEach((animal) => animal.sound);

// function createForms(animals) {
//   // 4 forms fields (name,kind,size,color)
//   createAButton((featureArray) => {
//     // has all features? featureArray: name,kind,size,color
//     // yes? -> new Animal(...featureArray)
//     // else -> Animal.sound()
//   });
// }

// createForms(animals);

class Person {
  constructor(name, lastName, birthday) {
    this.name = name;
    this.lastName = lastName;
    this._birthday = birthday; // 19.02.1970
  }

  get birthday() {
    return this._birthday;
  }

  set birthday(data) {
    this._birthday = data;
  }

  get fullName() {
    return this.name + this.lastName;
  }

  get age() {
    //calculate age
    return age;
  }
}

const peter = new Person("Peter", "Schmidt", "19.02.1970");
peter.birthday = "Wuhahaha";
console.log(peter.birthday);
