const express = require("express");
const { boardListPage, boardAdd } = require("../controllers/boardController");

const app = express();
const board = express.Router();

board.get("/", boardListPage); // localhost:4000/board method:get
board.post("/write", boardAdd);

module.exports = board;
