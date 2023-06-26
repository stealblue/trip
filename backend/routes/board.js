const express = require("express");

const app = express();
const board = express.Router();

board.get("/", (req, res) => {
  return res.send("board Router");
});

module.exports = board;
