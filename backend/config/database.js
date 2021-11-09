const mongoose = require('mongoose');


mongoose.connect(
    "mongodb+srv://samvit:samvit9021@cluster0.fcvhj.mongodb.net/Cluster0?retryWrites=true&w=majority",
    {useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(con => {
      console.log("connected with mongo")
    })
