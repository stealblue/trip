const { Sequelize } = require("sequelize");
const { board, like, reply } = require("../models/mysql");

exports.mainBoardList = async (req, res, next) => {
  console.log("mainBoardList읽어오기");
  try {
    const boards = await board.findAll({
      order: [["no", "DESC"]],
      where: {
        grade: 1,
        done: 1
      }
    });
    return res.json(boards);
  } catch (error) {
    return res.json(error);
  }
};
