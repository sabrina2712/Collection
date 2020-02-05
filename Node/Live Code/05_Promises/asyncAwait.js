const { readFileSync } = require("fs");
const { readFile } = require("fs").promises;

// getFilePromise("./testFiles/example.txt")
//   .then(fileHandler)
//   .then(tellUserLiveIsGood)
//   .then(tellUserLiveIsGood)
//   .then(tellUserLiveIsGood)
//   .then(() => getFilePromise("./testFiles/exampl.txt"))
//   .then(fileHandler)
//   .catch(console.error);

// setInterval(() => console.log("hello"), 10);

const main = async () => {
  try {
    const file = await readFile("./testFiles/example.txt", {
      encoding: "utf8"
    });
    const handleResult = fileHandler(file);
    tellUserLiveIsGood();
    tellUserLiveIsGood();
    tellUserLiveIsGood();
    const otherFile = await readFile("./testFiles/example.txt", {
      encoding: "utf8"
    });
    const otherHandleResult = fileHandler(otherFile);
    return 0;
  } catch (err) {
    console.log(err);
  }
};

// Synchronous
// try {
//   const file = readFileSync("./testFiles/example.txt", { encoding: "utf8" });
//   const handleResult = fileHandler(file);
//   tellUserLiveIsGood();
//   tellUserLiveIsGood();
//   tellUserLiveIsGood();
//   const otherFile = readFileSync("./testFiles/example.txt", {
//     encoding: "utf8"
//   });
//   const otherHandleResult = fileHandler(otherFile);
// } catch (err) {
//   console.log(err);
// }

// 🤷🏽‍♂️ what about errors?

// helper
function tellUserLiveIsGood(data) {
  console.log("Live is good!");
  return data;
}

function fileHandler(data) {
  console.log("data ready: ", data);
  return data;
}

// Every async function returns a promise
const asyncfunction = async () => {
  if (false) {
    // reject
    throw new Error("Hihihi");
  }

  // resolve
  return "Schnullibuh";
};

asyncfunction()
  .then(console.log)
  .catch(console.log);

const main = async (args) => {
  args = prepareArgs(args);
  const file = await readFile(args.file);
};

main()
  .then(console.log)
  .catch((e) => console.error("Oopes something went wrong"));
