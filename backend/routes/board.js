const express = require("express");
const { boardListPage, boardDetailPage, boardAdd, boardModify, boardRemove, boardLike, replyAdd, replyRead, replyModify, replyRemove } = require("../controllers/boardController");

const app = express();
const board = express.Router();

board.get("/", boardListPage); // localhost:4000/board method:get
board.post("/write", boardAdd);
board.get("/read/:boardNo", boardDetailPage);
board.post("/modify", boardModify);
board.post("/Remove/:boardNo", boardRemove);
board.post("/like", boardLike);
board.post("/write/reply/:bno", replyAdd);
board.get("/read/reply/:bno", replyRead);
board.post("/read/reply/modify", replyModify);
board.post("/read/reply/remove/:bno", replyRemove);

module.exports = board;
