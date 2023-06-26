const express = require("express");

const app = express();
const user = express.Router();

user.get("/", (req, res) => {
  return res.send("user Router");
});

module.exports = user;
