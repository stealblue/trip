const express = require("express");
const { deleteUser, getUserList, getUserDetail, deleteBoard, getBoardList, getBoardDetail } = require("../controllers/adminController");
const app = express();
const admin = express.Router();

admin.delete("/user/deleteUser/:id", deleteUser);
admin.get("/user/getUserList", getUserList);
admin.post("/user/getUserDetail", getUserDetail);

admin.delete("/board/deleteBoard/:no", deleteBoard);
admin.get("/board/getBoardList", getBoardList);
admin.post("/board/getBoardDetail", getBoardDetail);


module.exports = admin;
