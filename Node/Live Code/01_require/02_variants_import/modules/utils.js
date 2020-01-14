module.exports = {
  log: (...input) => {
    console.log("Log: ", ...input);
  },
  secretValue: "Muhahahahaha",
  loggi: (...val) => {
    console.log("Here come a log");
    this.log(...val);
  }
};
