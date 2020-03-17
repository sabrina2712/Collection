const axios = require("axios").default;

async function main() {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:4000/",
      data: {
        calcMethod: "add",
        num1: 1,
        num2: 2
      }
    });
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}

main();
