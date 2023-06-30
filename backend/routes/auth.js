const express = require("express");
const {login} = require("../controllers/loginController");
const {register} = require("../controllers/registerController");
const app = express();
const auth = express.Router();

auth.post("/login", login);
auth.post("/register", register);

module.exports = auth;
