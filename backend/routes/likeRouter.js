const express = require("express");
const { isLike } = require("../controllers/likeController");

const app = express();
const like = express.Router();

like.get("/:bno", isLike);

module.exports = like;
