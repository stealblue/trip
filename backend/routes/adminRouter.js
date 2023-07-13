const express = require("express");
const { deleteUser, getUserList, getUserDetail } = require("../controllers/adminController");
const app = express();
const admin = express.Router();

admin.post("/user/deleteUser", deleteUser);
admin.get("/user/getUserList", getUserList);
admin.get("/user/getUserDetail", getUserDetail);


module.exports = admin;
