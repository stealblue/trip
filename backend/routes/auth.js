const express = require("express");
const {login, check, logout, profile} = require("../controllers/loginController");
const {register, idChk, nickChk, phoneChk, authNumChk} = require("../controllers/registerController");
const { checkLoggedIn } = require("../middleware/authMiddleware");
const app = express();
const auth = express.Router();

auth.post("/login", login);
auth.post("/register", register);
auth.post("/register/idChk", idChk);
auth.post("/register/nickChk", nickChk);
auth.post("/register/phoneChk", phoneChk);
auth.post("/register/authNumChk", authNumChk);
auth.get("/check", check);
auth.post("/logout", logout);
auth.get("/:id", checkLoggedIn, profile);

module.exports = auth;
