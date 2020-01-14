const utils = require("./modules/utils");
const { log, secretValue, loggi } = require("./modules/utils");
const logger = require("./modules/utils").log;
const secretVal = require("./modules/utils").secretValue;

console.log(utils);
log("App Start");
logger("Hi");

utils.log = () => "nope";
console.log(utils.log());
console.log(utils.secretValue);

loggi("Some");

const getObject = () => {
  return {
    value: true
  };
};

console.log(
  {
    value: true
  }.value
);
