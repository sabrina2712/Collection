if (true) {
} else if (true) {
} else if (true) {
} else {
}

const transportationMethod = "Moon Walking"; // This comes form somewhere we do not control
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
    return;
  }
  case "Walking": {
    console.log("🏃‍♀️");
    return;
  }
  case "Bike": {
    console.log("🚲");
    return;
  }
  case "Car": {
    console.log("🚗");
    return;
  }
  default: {
    console.log("🤷‍♀");
    return;
  }
}
