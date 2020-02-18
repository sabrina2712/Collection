{
  // const isEvenArray = (arr) => {
  //   return new Promise((resolve, reject) => {
  //     if (arr.length % 2 === 0) {
  //       resolve(true);
  //     }
  //     reject(new Error("This thing is not even honey!"));
  //   });
  // };
  // isEvenArray([])
  //   .then((realValue) => {
  //     console.log("realValue: ", realValue);
  //     return "realValue" + realValue;
  //   })
  //   .then((otherValue) => {
  //     if (typeof otherValue !== "object") {
  //       const err = new Error("Want objects");
  //       err.kind = "AuthError";
  //       throw err;
  //     }
  //     console.log("otherValue: ", otherValue);
  //   })
  //   .catch((err) => {
  //     console.dir(err);
  //   });
  // console.log("typeof value: ", typeof value);
  // pseudo code
  // loginUser(user)
  //   .then(gotToUserDashboard)
  //   .then(throwIfNotOnDashboard)
  //   .then(openMessages)
  //   .then(throwIfNotOnMessages)
  //   .then(showCurrentMessages);
}
// Async Await
{
  console.log("___________ASYNC AWAIT _____________");

  // async (fn) =>
  //   new Promise((resolve, reject) => {
  //     try {
  //       const value = fn();
  //       resolve(value);
  //     } catch (err) {
  //       throw err;
  //     }
  //   });

  const isEvenArray = async (arr) => {
    throw new Error("Hello");
  };

  (async function() {
    try {
      const isEven = await isEvenArray();
      console.log(isEven);
    } catch (e) {
      console.log(e);
    }
  })();

  isEvenArray()
    .then((value) => console.log(value))
    .catch(console.error);
}

(function() {
  console.log("Muhahahaah IIFE");
})();
