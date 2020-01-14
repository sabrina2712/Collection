const log = (...vals) => {
  console.log(...vals);
};
const fun = function() {
  console.log("Fun fun function");
};

module.exports = {
  fun,
  log
};
