const express = require("express");
const { deleteUser, getUserList, getUserAction, getUserDetail, deleteBoard, getBoardList, getBoardDetail, getBoardAction, createNotice, doneNotice, changePhoto } = require("../controllers/adminController");
const app = express();
const admin = express.Router();

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

admin.post("/terms/changePhoto/:id",changePhoto);

module.exports = admin;
