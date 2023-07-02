const express = require("express");
const { boardListPage, boardDetailPage, boardAdd } = require("../controllers/boardController");

const app = express();
const board = express.Router();

board.get("/", boardListPage); // localhost:4000/board method:get
board.post("/write", boardAdd);
board.get("/read/:boardNo", boardDetailPage);

module.exports = board;
