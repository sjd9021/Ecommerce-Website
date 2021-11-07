const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: String,
  googleId: String,
  email: String,
  password: String,
  address: { type: String, default: "home" },
  mobile: String,
  orders: [{ type: String }],
  cart: [{ type: String }],
  wishlist: [{ type: String }],
});

module.exports = mongoose.model("User", user);
