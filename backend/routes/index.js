const express = require("express");
const board = require("./boardRouter");
const chat = require("./chatRouter");
const auth = require("./authRouter");
const room = require("./roomRouter");
const area = require('./areaRouter');
const wishList = require('./wishListRouter');
const traffic = require('./trafficRouter');
const admin = require("./adminRouter");
const router = express.Router();

router.get("/", function (req, res) { return res.json({ msg: "main" }); });
router.use("/board", board);
router.use("/auth", auth);
router.use("/admin", admin);
router.use("/chat", chat);
router.use("/room", room);
router.use('/area', area);
router.use('/wishList', wishList);
router.use('/traffic', traffic);

module.exports = router;
