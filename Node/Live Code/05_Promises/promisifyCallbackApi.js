const fs = require("fs");
// Abstraction for readFile
const getFile = (filePath, successCallback) => {
  fs.readFile(filePath, { encoding: "utf8" }, (error, data) => {
    if (error) {
      console.log("Error", error);
    }

    successCallback(data);
  });
};

getFile("./testFiles/example.txt", (data) => {
  console.log(data);
});

// Promisify
const getFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: "utf8" }, (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    });
  });
};

const tellUserLiveIsGood = (data) => {
  console.log("Live is good!");
  return data;
};

const fileHandler = (data) => {
  console.log("data ready: ", data);
  return data;
};

getFilePromise("./testFiles/example.txt")
  .then(fileHandler)
  .then(tellUserLiveIsGood)
  .then(tellUserLiveIsGood)
  .then(tellUserLiveIsGood)
  .then(() => getFilePromise("./testFiles/exampl.txt"))
  .then(fileHandler)
  .catch(console.error);

const log = (val) => {
  console.log(val);
  return val + 1;
};

const thenFunctions = [log, log, log, log];
const catchfunction = undefined;
const promiseData = 1;
console.log(thenFunctions.map((func) => func(promiseData)));
