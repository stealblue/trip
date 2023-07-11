const axios = require('axios');
const { wishList } = require("../models/mysql");

exports.addWishList = async (req, res) => {
  const { contentid, id } = req.body;
  console.log('wishListController');
  console.log(`contentid : ${contentid} === id : ${id}`);
  try {
    const newWishList = wishList.create({
      id,
      contentId: contentid
    });
    return res.json({ wishList: newWishList });
  } catch (e) {
    return res.status(400).json(e);
  }
};
