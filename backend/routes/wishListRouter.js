const express = require("express");
const { addWishList } = require("../controllers/wishListController");

const app = express();
const wishList = express.Router();

wishList.post("/", addWishList);

module.exports = wishList;
