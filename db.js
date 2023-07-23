const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://yashguard2002:Node@bookstore.sgvudbr.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB");
    });
};

module.exports = connect;
