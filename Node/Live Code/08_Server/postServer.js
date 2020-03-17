const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    console.log("Chunk: ", chunk.toString());
    body += chunk.toString(); // convert Buffer to string
  });

  req.on("end", () => {
    body = JSON.parse(body);
    res.end(`${body.num1 + body.num2}`);
  });
});

server.listen(port, () => {
  console.log(`Server started on ${port}`);
});
