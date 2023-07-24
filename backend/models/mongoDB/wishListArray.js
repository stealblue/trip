const mongoose = require("mongoose");
const wishListArraySchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  name: {
    type: Array,
  },
  items: {
    type: Array,
  }
});

module.exports = mongoose.model("wishListArray", wishListArraySchema);
