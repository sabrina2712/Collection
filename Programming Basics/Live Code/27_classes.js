class Animal {
  constructor(name, type, countOfLegs, sound) {
    this.name = name;
    this.type = type;
    this.countOfLegs = countOfLegs;
    this.sound = sound || "Silence";
  }

  makeSound() {
    return this.name + ": " + this.sound;
  }
}

class Dog extends Animal {
  constructor(name, countOfLegs = 4) {
    super(name, "Dog", countOfLegs, "Bark");
    this.tail = true;
  }

  kopieren() {
    this.tail = false;
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name, "Fish", 0, "Blubb");
  }

  // Overwrite functionality of base class (Animal)
  makeSound() {
    return null;
  }
}

const myDogo = new Dog("Pongo", 3);
console.log(myDogo.makeSound());
myDogo.kopieren();
console.log(myDogo);

const pete = new Fish("Goldie");
console.log(pete.makeSound());
console.log(pete);

/**
 * Sidebar
 * Vscode sidebar
 * 👈
 */

class Sidebar {
  constructor(isOpen = true) {
    this.panels = [
      "Explorer",
      "Search",
      "Source Control",
      "Debug",
      "Extensions"
    ];
    this.open = isOpen;
    this.panel = 0; // does not store this
  }

  toggleSidebarVisibility() {
    // if(this.open === false) return this.open = true
    // return this.open = false
    // or short:
    this.open = !this.open;
  }

  getNameForPanelIndex(index) {
    return this.panels[index];
  }

  togglePanel(index) {
    const isClosed = !this.open;
    const samePanel = index === this.panel;

    if (isClosed) {
      this.toggleSidebarVisibility();
      this.panel = index;
      return;
    }

    if (samePanel) {
      return this.toggleSidebarVisibility();
    }

    this.panel = index;
  }

  getSettings() {
    return {
      open: this.open
    };
  }
}

const vsCodeStore = {
  sideBarOpen: true
};

let sidebar;

function launchVSCode() {
  sidebar = new Sidebar(vsCodeStore.sideBarOpen);
}

function quitVSCode() {
  const { open } = sidebar.getSettings();
  vsCodeStore.sideBarOpen = open;
  sidebar = null;
}

launchVSCode();

sidebar.toggleSidebarVisibility();
sidebar.toggleSidebarVisibility();

quitVSCode();
console.log(vsCodeStore);
