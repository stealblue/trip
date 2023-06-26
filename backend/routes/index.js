const express = require("express");
const board = require("./board");
const chat = require("./chat");
const user = require("./user");
const router = express.Router();

router.use("/board", board);
router.use("/user", user);
router.use("/chat", chat);

module.exports = router;
