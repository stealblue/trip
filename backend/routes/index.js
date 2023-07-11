const express = require("express");
const board = require("./boardRouter");
const chat = require("./chatRouter");
const auth = require("./authRouter");
const room = require("./roomRouter");
const area = require('./areaRouter');
const router = express.Router();

router.get("/", function (req, res) {return res.json({ msg: "main" });});
router.use("/board", board);
router.use("/auth", auth);
router.use("/chat", chat);
router.use("/room", room);
router.use('/area',area);

module.exports = router;
