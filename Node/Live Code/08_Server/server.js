const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      res.end("You got Hello");
      break;
    case "POST":
      res.end("No not accepting this request");
    default:
      break;
  }
});

server.listen(port, () => {
  console.log(`Server started on ${port}`);
});
