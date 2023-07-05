const mongoose = require("mongoose");
const temporarySchema = new mongoose.Schema({
  authNum:{
    type:Number,
  },
  phone:{
    type:String,
  },
  expire:{
    type:String,
  },
  ok:{
    type:Object
  }
});

module.exports = mongoose.model("Temporary", temporarySchema);
