const express = require("express");
const { getProfile, changeImage, changeProfile, withdraw, getBoardList, deleteBoard, getReplyList, deleteReply, getLikeList, deleteLike, getWishList, deleteWish, nickChk} = require("../controllers/profileController");
const app = express();
const profile = express.Router();

profile.get("/:id", getProfile);
// profile.post("/changeImage/:id", changeImage);
profile.post("/changeProfile/:id", changeProfile);
profile.post("/nickChk/:nick", nickChk);
profile.delete("/withdraw/:id", withdraw);

profile.get("/getBoardList/:id", getBoardList);
profile.delete("/deleteBoard/:no", deleteBoard);

profile.get("/getReplyList/:id", getReplyList);
profile.delete("/deleteReply/:no", deleteReply);

profile.get("/getLikeList/:id", getLikeList);
profile.delete("/deleteLike/:no", deleteLike);

profile.get("/getWishList/:id", getWishList);
profile.delete("/deleteWish/:no", deleteWish);

module.exports = profile;
