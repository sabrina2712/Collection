const authorFilePath = "authors.json";
const postsFilePath = "posts.json";

// callback implementation
const fs = require("fs");
const opt = { encoding: "utf8" };

fs.readFile("./testFiles/" + authorFilePath, opt, (err, authors) => {
  fs.readFile("./testFiles/" + postsFilePath, opt, (err, posts) => {
    console.log(authors, posts);
  });
});

{
  const { readFileSync } = require("fs");

  function main() {
    console.log("------- Blocking Synchronous code ------");
    const authors = readFileSync("./testFiles/" + authorFilePath, "utf8");
    const posts = readFileSync("./testFiles/" + postsFilePath, "utf8");
    console.log(authors, posts);
  }

  main();
}

{
  const { readFile } = require("fs").promises;

  async function main() {
    console.log("------- Promise: Non-Blocking Async code ------");
    // loading one file makes the execution of this function wait (await)
    const authors = await readFile("./testFiles/" + authorFilePath, "utf8");
    const posts = await readFile("./testFiles/" + postsFilePath, "utf8");
    // concurrent file loading
    console.log(authors, posts);

    [author2, post2] = await Promise.all([
      readFile("./testFiles/" + authorFilePath, "utf8"),
      readFile("./testFiles/" + postsFilePath, "utf8")
    ]);
    console.log(author2, post2);
    data = post2;
  }

  main();
}
