const express = require("express");
const {login, check, profile, logout, searchId, searchPwd} = require("../controllers/loginController");
const {register, idChk, nickChk, phoneChk, authNumChk} = require("../controllers/registerController");
const app = express();
const auth = express.Router();

auth.post("/login", login);
auth.get("/logout", logout);
auth.post("/register", register);
auth.post("/register/idChk", idChk);
auth.post("/register/nickChk", nickChk);
auth.post("/register/phoneChk", phoneChk);
auth.post("/register/authNumChk", authNumChk);
auth.get("/check", check);
auth.get("/:id", profile);
auth.get("/searchId", searchId);
auth.get("/searchPwd", searchPwd);

module.exports = auth;
