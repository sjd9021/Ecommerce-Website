const express = require("express");
const app = express();
const errormiddleware = require("./middlewares/errors");

app.use(express.json());

const products = require("./routes/product");
app.use("/api/v1", products);

app.use(errormiddleware);

module.exports = app;
