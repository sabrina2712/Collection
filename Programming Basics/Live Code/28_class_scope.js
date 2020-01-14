class Example {
  constructor() {
    this.test = true;
  }

  logTest = () => {
    console.log(this.test);
  };
}

const myEx1 = new Example();
myEx1.logTest();

function Example2() {
  this.test = true;
}

Example2.prototype.logTest = () => {
  console.log(this.test);
  return this.test;
};

const myEx2 = new Example2();
myEx2.logTest();
