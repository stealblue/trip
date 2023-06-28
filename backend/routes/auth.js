const express = require("express");
const { login } = require("../controllers/loginController");
const app = express();
const auth = express.Router();

auth.post("/login", login);

module.exports = auth;
