const { Sequelize } = require("sequelize");
const { board } = require("../models/mysql");
const sanitizeHtml = require("sanitize-html");

const sanitizeOption = {
  allowedTags: ["h1", "h2", "b", "i", "u", "s", "p", "ul", "ol", "li", "blockquote", "a", "img"],
  allowedAttributes: {
    a: ["href", "name", "target"],
    img: ["src"],
    li: ["class"],
  },
  allowedSchemes: ["data", "http"],
};

exports.boardListPage = async (req, res, next) => {
  console.log("boardLitpage들어옴");
  try {
    const boards = await board.findAll();
    // console.log(boards);
    return res.json(boards);
    // /board/105 get
  } catch (error) {
    return res.json(error);
  }
};

exports.boardDetailPage = async (req, res) => {
  console.log("req.params=======>", req.params);
  try {
    const no = req.params.boardNo;
    console.log(no);
    const detailPage = await board.findOne({
      where: { no },
    });
    console.log(detailPage.title);
    return res.json(detailPage);
  } catch (error) {
    return res.json(error);
  }
};

exports.boardAdd = async (req, res) => {
  console.log("boardAdd에 들어왔나");
  try {
    const { no, img, id, title, content, like, cnt } = req.body;
    console.log(`no : ${no} / img : ${img} / id : ${id} / title : ${title} / content : ${content} / like : ${like} / cnt : ${cnt}`);
    console.log(req.body, "boardadd try....");

    const Addboard = await board.create({
      no,
      id,
      img,
      title,
      content: sanitizeHtml(content, sanitizeOption),
      like,
      cnt,
    });

    return res.json(Addboard);
  } catch (error) {
    res.json(error);
  }
};

exports.boardModify = async (req, res) => {
  try {
    console.log("백앤드쪽 req.body : ", req.body);
    // const no = req.params.boardNo;
    const { title, content, no } = req.body;
    console.log("no : ", no);
    // console.log("req.body : ", req.body);
    console.log("수정하기");

    await board.update(
      {
        title,
        content,
        updateAt: Sequelize.Sequelize.literal("now()"),
      },
      {
        where: { no },
      }
    );
    return res.send("내 꿈은 꼬마박사");
  } catch (error) {
    console.error(error);
    return res.status(400).send("대홍단 왕감자");
  }
};

exports.boardRemove = async (req, res) => {
  try {
    const no = req.params.boardNo;
    console.log("removereqbody==>", req.body);
    await board.destroy({
      where: { no },
    });
    return res.send("삭제");
  } catch (error) {
    console.error(error);
  }
};
