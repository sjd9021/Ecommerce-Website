const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const userrouter = require("./routes/routes");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://samvit:samvit9021@cluster0.fcvhj.mongodb.net/Cluster0?retryWrites=true&w=majority"
);
app.use(express.json());

app.use("/app", userrouter);
app.use(express.static(path.join(__dirname, "public")));

app.listen(4000, () => console.log("server is rinning"));
