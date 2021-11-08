const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: String,
  googleId: String,
  email: String,
  mobile: String,
  address: { type: String, default: "home" },
  password: String,
  orders: [{ type: String }],
  cart: [{ type: String }],
  wishlist: [{ type: String }],
});

module.exports = mongoose.model("User", user);
