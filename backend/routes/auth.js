const express = require("express");

const app = express();
const auth = express.Router();

auth.get("/login", (req, res) => {
  res.send("로그인창 입니다!");
});

module.exports = auth;
