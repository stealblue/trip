const mongoose = require("mongoose");
const temporarySchema = new mongoose.Schema({
  authNum:{
    type:Number,
  },
  phone:{
    type:String,
  },
  insertTime: {
    type:String,
  },
  expire:{
    type:Date,
    expires: 1,
    default:Date.now,
  },
  ok:{
    type:Object
  }
});

module.exports = mongoose.model("Temporary", temporarySchema);
