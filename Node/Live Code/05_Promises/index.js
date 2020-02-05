// // before
// asyncCodeWithCallback((error, data) => {
//   // gets error and data
// });

// // after
// asyncCodeAsPromise()
//   .then((data) => {
//     // gets called if successful
//   })
//   .catch((error) => {
//     // gets called if promise fails
//   });

new Promise((resolveWithThen, rejectWithCatch) => {
  // rejectWithCatch(new Error("Not in my house!"));
  setTimeout(function() {
    resolveWithThen("Success!"); // Yay! Everything went well!
  }, 550);
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("Are you resolved yet?");
