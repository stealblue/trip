const axios = require('axios');
const { wishList } = require("../models/mysql/index");

exports.addWishList = async (req, res) => {
  const { contentid, id, title } = req.body;
  console.log('wishListController');
  console.log(req.body);
  console.log(`contentid : ${contentid} , id : ${id} , title : ${title}`);
  try {
    const newWishList = await wishList.create({
      id,
      title,
      contentId: contentid
    });
    console.log('wishList Success!');
    return res.json({ wishList: newWishList });
  } catch (e) {
    console.log('wishList Failure!');
    return res.status(400).json(e);
  }
};
