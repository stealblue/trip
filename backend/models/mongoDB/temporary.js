const mongoose = require("mongoose");
const temporarySchema = new mongoose.Schema({
  authNum: {
    type: Number,
  },
  phone: {
    type: String,
  },
  insertTime: {
    type: String,
  },
  expire: {
    type: Date,
    expires: 60, // TTL 60s
    default: Date.now,
  },
  ok: {
    type: Object
  }
});

module.exports = mongoose.model("Temporary", temporarySchema);
