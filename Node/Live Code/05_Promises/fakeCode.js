// Promises
// Disclaimer all code in here is fake!

// Async Code - with callbacks
const content = readFile("./indexOfFiles.csv", (error, data) => {
  // async execution
  // we can just use data in here
  data.forEach((filePath) =>
    readFile("./indexOfFiles.csv", (error, data) => {
      // just here access to one fo many files
    })
  );
});

// With Promises (classic)
readFile("./indexOfFiles.csv")
  .then((data) => {
    return data.forEach((filePath) => {
      readFile("./indexOfFiles.csv");
    });
  })
  .then((data) => {
    // Promise of all files
  })
  .catch((error) => {
    console.log(error);
  });
