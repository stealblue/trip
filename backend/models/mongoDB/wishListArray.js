const mongoose = require("mongoose");
const wishListArraySchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  name: {
    type: String,
  },
  items: {
    type: Array,
  }
});

module.exports = mongoose.model("wishListArray", wishListArraySchema);
