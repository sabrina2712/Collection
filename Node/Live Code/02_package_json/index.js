const isEven = require("is-even");
const { name: appName } = require("./package");

const log = (...values) => console.log(appName + ": ", ...values);

log("Start App");
log(isEven(2));
