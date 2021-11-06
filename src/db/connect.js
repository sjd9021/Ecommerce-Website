const mongoose = require("mongoose");

async function connecttodb(){
    await mongoose.connect("mongodb+srv://samvit:samvit9021@cluster0.fcvhj.mongodb.net/Cluster0?retryWrites=true&w=majority");
}

module.exports = connecttodb;