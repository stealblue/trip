const mongoose = require("mongoose");
const participateSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    required: true,
  },
  users: {
    type: [String],
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Participates", participateSchema);
