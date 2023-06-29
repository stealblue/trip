const express = require("express");
const { login, register } = require("../controllers/loginController");
const app = express();
const auth = express.Router();

auth.post("/login", login);
auth.post("/register", register);
// auth.post("/check", check);
// auth.post("/logout", logout);

module.exports = auth;
