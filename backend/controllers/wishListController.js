const axios = require('axios');
const { wishList } = require("../models/mysql");

exports.addWishList = async (req, res) => {
  const { contentid, id, title } = req.body;
  console.log('wishListController');
  console.log(`contentid : ${contentid} , id : ${id} , title : ${title}`);
  try {
    const newWishList = wishList.create({
      id,
      contentId: contentid,
      title
    });
    return res.json({ wishList: newWishList });
  } catch (e) {
    return res.status(400).json(e);
  }
};
