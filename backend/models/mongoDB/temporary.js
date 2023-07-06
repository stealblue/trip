const mongoose = require("mongoose");
const temporarySchema = new mongoose.Schema({
  authNum:{
    type:Number,
  },
  phone:{
    type:String,
  },
  expire:{
    type:Date,
    expires:60 // TTL 5s
  },
  ok:{
    type:Object
  }
});

module.exports = mongoose.model("Temporary", temporarySchema);
