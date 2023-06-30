const express = require("express");
const board = require("./board");
const chat = require("./chat");
const auth = require("./auth");
const router = express.Router();

router.get("/", function (req, res, next) {
  return res.json({ msg: "test!!!!!!!!!!!!!!!" });
});
router.use("/board", board);
router.use("/auth", auth);
router.use("/chat", chat);

module.exports = router;
