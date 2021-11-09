const app = require("./app");
const mongoose = require("mongoose");
const path = require("path");
const userrouter = require("./routes/routes");
const cors = require("cors");
const connectDatabase = require('./config/database')

  
// app.use
//   cors({
//     origin: "http://localhost:3000", // location of react frontend
//     credentials: true,
//   })
// );


app.listen(4000, () => console.log("server is running"));
