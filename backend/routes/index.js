const express = require("express");
const board = require("./board");
const chat = require("./chat");
const auth = require("./auth");
const router = express.Router();

router.use("/board", board);
router.use("/auth", auth);
router.use("/register", auth);
router.use("/chat", chat);

module.exports = router;
