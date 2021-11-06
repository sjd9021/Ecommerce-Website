const express = require("express");

const connecttodb = require("./src/db/connect");
const app = express();
const path = require("path");
const userrouter = require("./src/routes/user");
app.use(userrouter);

app.use(express.static(path.join(__dirname, "public")));

connecttodb().then(() => {
    app.listen(3000, () => console.log("server is up and running"));
}).catch(() => console.log("could not connect to database"));