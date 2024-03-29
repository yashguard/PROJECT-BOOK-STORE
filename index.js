const express = require("express");
const server = express();
server.use(express.json());
const connect = require("./db");
const middleWare = require("./check");
const User = require("./bookSchema");
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send(`
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <h1>Welcome to home page</h1>
      </body>
      </html>`);
});

server.get("/bookfillup", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.post("/bookdetails", middleWare, (req, res) => {
  User.create(req.body);
  res.send("Data for book details has been created successfully for you");
});

server.get("/book", async (req, res) => {
  const bookDetails = await User.find({});
  res.status(200).send(bookDetails);
});

server.listen(8010, () => {
  console.log("listening on http://localhost:" + 8010);
  connect();
});
