const { Sequelize } = require("sequelize");
const { board } = require("../models/mysql");

exports.boardListPage = async (req, res) => {
  // res.render("/board/list");
  try {
    const boards = await board.findAll();
    res.json(boards);
    // /board/105 get
  } catch (error) {
    res.json(error);
  }
};

exports.boardDetailPage = async (req, res) => {
  try {
    const boardNo = req.params.no;
    const detailPage = await board.findOne({
      no,
    });
    res.json(detailPage);
  } catch (error) {
    res.json(error);
  }
};

exports.boardAdd = async (req, res) => {
  console.log("boardAdd에 들어왔나");
  try {
    const { no, img, id, title, content, like, cnt } = req.body;
    console.log(req.body, "boardadd try....");

    const Addboard = await board.create({
      no,
      id,
      img,
      title,
      content,
      like,
      cnt,
    });

    return res.json(Addboard);
  } catch (error) {
    res.json(error);
  }
};
