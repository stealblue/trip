const express = require("express");
const multer = require("multer");
const path = require("path");
const { user } = require("../models/mysql");
const { deleteUser, getUserList, getUserAction, getUserDetail, deleteBoard, getBoardList, getBoardDetail, getBoardAction, createNotice, doneNotice, getAdmin, changeInform, getAdminTerms, editAdminTerms, getStyle, changeStyle } = require("../controllers/adminController");
const app = express();
const admin = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "../frontend/public/assets"); //파일 저장경로, 없는 경로 입력할 경우 500 에러 발생
    },
    filename(req, file, done) {
      done(null, path.basename("logo.jpg")); //로고 파일명 logo.jpg로 저장되게하여 바로 적용, 기존의 logo 파일을 덮어씌움
    },
  }),
  fileFilter: (req, file, cb) => {
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
  limits: { fileSize: 5 * 1024 * 1024 },
});


admin.delete("/user/deleteUser/:id", deleteUser);
admin.get("/user/getUserList", getUserList);
admin.post("/user/getUserDetail", getUserDetail);
admin.get("/user/getUserAction", getUserAction);

admin.delete("/board/deleteBoard/:no", deleteBoard);
admin.get("/board/getBoardList", getBoardList);
admin.post("/board/getBoardDetail", getBoardDetail);
admin.get("/user/getBoardAction", getBoardAction);
admin.post('/notice/createNotice', createNotice);
admin.post('/notice/doneNotice', doneNotice);

admin.get("/terms/:id", getAdmin);
admin.post("/terms/changePhoto/:id", upload.single("img"), async (req, res) => {

  const { id } = req.params;
  const img = req.file.filename;

  try {
    await user.update({ img: img }, { where: { id } });

    return res.status(200).json({ img });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ imgError: true });
  }
});
admin.post("/terms/changeInform/:id", changeInform);
admin.get("/terms/getAdminTerms/:id/:type", getAdminTerms);
admin.post("/terms/editAdminTerms/:id/:type", editAdminTerms);

admin.get("/style/:id", getStyle);
admin.post("/style/changeStyle/:id/:adminStyle", changeStyle);

module.exports = admin;
