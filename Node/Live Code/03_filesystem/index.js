const { readFile, writeFile } = require("fs");

// dummy code: Callback Hell
// readFile("file", (err, data) => {
//   data += "\n Signature";
//   writeFile("file", data, () => {
//     readFile("file", (err, data) => {
//       readFile("file2", (err, data) => {
//         data += "\n Signature";
//         writeFile("file2", data, () => {
//           readFile("file2", (err, data) => {
//             console.log(data);
//           });
//         });
//       });
//     });
//   });
// });

setTimeout(() => {
  const testFile = writeFile("./testfiles/test.txt", "Hello", () => {});
}, 400);

readFile("./testfiles/test.txt", "utf8", (err, data) => {
  console.log(data);
});

const path = require("path");

const myPath = "~/somefolder/file.ext";

console.log(path.basename(myPath));
console.log(path.join(__dirname, "testfiles", "file.ext"));
console.log(path.parse(path.join(__dirname, "testfiles", "file.ext")));

console.log(
  `
__filename: ${__filename}

__dirname: ${__dirname}

process.cwd(): ${process.cwd()}  
  `
);
