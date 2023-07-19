const express = require("express");
const multer = require("multer");
const path = require("path");
const { getProfile, changePhoto, changeProfile, withdraw, getBoardList, deleteBoard, getReplyList, deleteReply, getLikeList, deleteLike, getWishList, deleteWish, nickChk} = require("../controllers/profileController");
const { user } = require("../models/mysql");
const app = express();
const profile = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "public/images/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  fileFilter : (req, file, cb) => {
    const typeArray = file.mimetype.split('/');
    const fileType = typeArray[1];

    if (fileType == 'jpg' || fileType == 'png' || fileType == 'jpeg' || fileType == 'gif' || fileType == 'webp') {
        req.fileValidationError = null;
        cb(null, true);
    } else {
        req.fileValidationError = "jpg,jpeg,png,gif,webp 파일만 업로드 가능합니다.";
        cb(null, false)
    }
	},
  limits: { fileSize: 5 * 1024 * 1024},
}); 




profile.get("/:id", getProfile);
profile.post("/changeProfile/:id", changeProfile);
profile.post("/nickChk/:nick", nickChk);
profile.post("/changePhoto/:id", upload.single("img"), async (req, res) => {
	const { id } = req.params;
	const img = res.data;
	console.log(req.file);
	// const img  = res;
	// console.log(img)
	try{
		await user.findOne({
			where: {
				id,
			}
		});
		return res.status(200).json({});
  }catch(e){
    console.error(e);
		return res.status(400).json({imgError: "사진 업로드 실패"});
  }
});

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
