const User = require("./bookSchema");

const middleWare = (req, res, next) => {
  let { name, url, price, author, description } = req.body;
  if (name && url && price && author && description) {
    User.findOne({ name: name }).then((user) => {
      if (user) {
        res.status(422).json({ message: "Book name already exists" });
      } else {
        next();
      }
    });
  } else {
    res.status(400).json({
      message: "Please fill all the fields",
    });
  }
};

module.exports = middleWare;
