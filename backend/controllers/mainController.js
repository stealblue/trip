const { Sequelize } = require("sequelize");
const { user, board } = require("../models/mysql");
const { Op } = require("sequelize");

exports.mainBoardList = async (req, res) => {
  try {
    const boards = await board.findAll({
      order: [["no", "DESC"]],
      where: { grade: 1, done: 1 }
    });
    return res.json(boards);
  } catch (error) {
    return res.json(error);
  }
};

exports.getMainStyle = async (req, res) => {
  try {
    const adminStyle = await user.findOne({raw: true, where: { id: { [Op.like]: "testAdmin@" + "%"}, grade: 2 } });
    const mainStyle = adminStyle.style;

    return res.status(200).json({ mainStyle });
  } catch (e) {
    console.error(e);
    return res.status(400).json({styleError: true});
  }
};
