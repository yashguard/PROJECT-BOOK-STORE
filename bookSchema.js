const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  price: { type: Number, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;