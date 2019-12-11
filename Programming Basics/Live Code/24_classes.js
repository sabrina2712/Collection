// That would be great!
// Todos.user()
// Todos.todos()

// Todo.userWithMostTodos()
// Todo.todosForUserId(1)

// Todo.todosForUserName("John")

const PetersTodos = {
  _todos: [{ id: 1, title: "Make some shopping" }],
  todos: function() {
    return this._todos;
  }
};

console.log(PetersTodos.todos());

const person = new Object();
person.name = "Jane";
const otherPerson = {
  name: "Other"
};
console.log(person, otherPerson);

// Create a new instance of Array with 2 values
const array = new Array(1, 2); // with constructor
const array2 = [1, 2]; // Array literal
console.log(array, array2);

// Everything is an Object so are classes
class TodoList {
  constructor(arrayOfTodos) {
    this._todos = arrayOfTodos;
  }

  todos() {
    return this._todos;
  }
}

const janesTodos = new TodoList([{ id: 1, title: "Make some shopping" }]);
const peterTodos = new TodoList([{ id: 1, title: "Get shit done!" }]);
console.log(janesTodos, peterTodos);

// What are DataTypes?
// ES6
class Animal {
  constructor(kind, name, countOfLegs) {
    this.kind = kind;
    this.name = name;
    this.legCount = countOfLegs;
  }

  walk() {
    console.log(this.name, ": Tap tap *sound*");
  }
}

const peter = new Animal("Dog", "Peter", 4);
const tom = new Animal("Cat", "Tom", 4);

console.log(peter, tom);

peter.walk();
tom.walk();

/**
 * Time Travel!
 * old way just for reference
 */
function OtherAnimal(kind, name, countOfLegs) {
  this.kind = kind;
  this.name = name;
  this.legCount = countOfLegs;
}

const peterOther = new OtherAnimal("Dog", "Peter", 4);
const tomOther = new OtherAnimal("Cat", "Tom", 4);

OtherAnimal.prototype.walk = function() {
  console.log(this.name, ": Tap tap *sound*");
};

console.log(peterOther, tomOther);
peterOther.walk();
tomOther.walk();

// Beware don't destroy javascript it's fragile!
String.prototype.includes = function() {
  console.log("hahahaahaha you are doomed");
};

"Some string".includes("string");
