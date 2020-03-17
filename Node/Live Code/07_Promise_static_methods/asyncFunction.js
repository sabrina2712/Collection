// this is the same as -> ref[1]
async function main() {
  try {
    const requests = [
      fsPromises.readFile("./testFiles/" + authorFilePath, "utf8"),
      fsPromises.readFile("./testFiles/" + postsFilePath, "utf8")
    ];

    const data = await Promise.all(requests);
    return data; // return ref[2]
  } catch (e) {
    console.log("Failed");
    throw e;
  }
}

main();

// async function what does it actually do ref[1]
const main2 = new Promise((resolve, reject) => {
  try {
    const requests = [
      fsPromises.readFile("./testFiles/" + authorFilePath, "utf8"),
      fsPromises.readFile("./testFiles/" + postsFilePath, "utf8")
    ];

    const data = Promise.all(requests).then((data) => {
      resolve(data); // ref[2] becomes your resolve
    });
  } catch (e) {
    reject(e);
  }
});

main2.catch((e) => console.log("Failed"));
