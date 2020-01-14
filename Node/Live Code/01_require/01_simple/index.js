// requires return value is the value in module.exports from ./config.js
const allConfig = require("./config");

console.log(allConfig);

const config = allConfig.config;
console.log(config);
console.log(
  `You are running ${config.name} which was created at ${config.createdAt}`
);
