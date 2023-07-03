const express = require("express");
const {login, check, logout} = require("../controllers/loginController");
const {register} = require("../controllers/registerController");
const { checkLoggedIn } = require("../middleware/authMiddleware");
const app = express();
const auth = express.Router();

auth.post("/login", login);
auth.post("/register", register);
auth.get("/check", check);
auth.post("/logout", logout);

module.exports = auth;
