const express = require("express");
const { boardListPage, boardDetailPage, boardAdd, boardModify, boardRemove } = require("../controllers/boardController");

const app = express();
const board = express.Router();

board.get("/", boardListPage); // localhost:4000/board method:get
board.post("/write", boardAdd);
board.get("/read/:boardNo", boardDetailPage);
board.post("/modify", boardModify);
board.post("/board/Remove", boardRemove);

module.exports = board;
