const express = require("express");
const { deleteUser, getUserList, getUserDetail, deleteBoard, getBoardList, getBoardDetail } = require("../controllers/adminController");
const app = express();
const admin = express.Router();

admin.delete("/user/deleteUser/:id", deleteUser);
admin.get("/user/getUserList", getUserList);
admin.post("/user/getUserDetail", getUserDetail);

admin.delete("/user/deleteBoard/:no", deleteBoard);
admin.get("/user/getBoardList", getBoardList);
admin.post("/user/getBoardDetail", getBoardDetail);


module.exports = admin;
