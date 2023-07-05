const express = require("express");
const { boardListPage, boardDetailPage, boardAdd, boardModify, boardRemove, boardLike } = require("../controllers/boardController");

const app = express();
const board = express.Router();

board.get("/", boardListPage); // localhost:4000/board method:get
board.post("/write", boardAdd);
board.get("/read/:boardNo", boardDetailPage);
board.post("/modify", boardModify);
board.post("/Remove/:boardNo", boardRemove);
board.post("/like", boardLike);

module.exports = board;
