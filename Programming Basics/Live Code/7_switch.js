if (true) {
} else if (true) {
} else if (true) {
} else {
}

const transportationMethod = "Walking"; // This comes form somewhere we do not control
let matchedCase;
switch (transportationMethod) {
  case "Moon Walking":
    matchedCase = "Moon Walking";
  case "Walking":
    matchedCase = "Walking";
  case "Running":
    matchedCase = "Running";
    console.log("🏃‍♂️" + " " + matchedCase);
    break;
  case "Bike":
    console.log("🚲");
    break;
  case "Car":
    console.log("🚗");
    break;
  default:
    console.log("🤷‍♀");
    break;
}

switch (transportationMethod) {
  case "Next":
  case "Running": {
    console.log("🏃‍♀️");
    break;
  }
  case "Walking": {
    console.log("🏃‍♀️");
    break;
  }
  case "Bike": {
    console.log("🚲");
    break;
  }
  case "Car": {
    console.log("🚗");
    break;
  }
  default: {
    console.log("🤷‍♀");
  }
}

console.log("Hi");
