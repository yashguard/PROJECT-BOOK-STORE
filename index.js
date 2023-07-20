const express = require("express");
const server = express();
server.use(express.json());
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

server.listen(8010, () => {
  console.log("listening on http://localhost:" + 8010);
});
