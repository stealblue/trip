const { Sequelize } = require("sequelize");
const { board, like, reply } = require("../models/mysql");
const sanitizeHtml = require("sanitize-html");

const removeHtml = (body) => {
  const filtered = sanitizeHtml(body, {
    allowedTags: [],
  });
  return filtered.length < 1000 ? filtered : `${filtered.slice(0, 1000)}...`;
};

const sanitizeOption = {
  allowedTags: [
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
  ],
  allowedAttributes: {
    a: ["href", "name", "target"],
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
  },
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
};

exports.boardListPage = async (req, res, next) => {
  console.log("boardLitpage들어옴");
  try {
    const boards = await board.findAll({
      order: [['no', 'DESC']]
    });
    return res.json(boards);
  } catch (error) {
    return res.json(error);
  }
};

exports.boardDetailPage = async (req, res) => {
  try {
    const no = req.params.boardNo;
    const boards = await board.findOne({
      where: {
        no,
      },
    });
    if (req.cookies["f" + no] == undefined) {
      const addr = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      res.cookie("f" + no, addr, {
        maxAge: 30000,
      });
      await board.update(
        {
          cnt: boards.cnt + 1,
        },
        {
          where: {
            no,
          },
        }
      );
    }
    const detailPage = await board.findOne({
      where: { no },
    });
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
      content,
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
    const { title, content, no } = req.body;
    console.log("no : ", no);
    console.log("수정하기");

    await board.update(
      {
        title,
        content: req.body.content,
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
    await board.destroy({
      where: { no },
    });
    return res.send("삭제");
  } catch (error) {
    console.error(error);
  }
};

exports.boardLike = async (req, res) => {
  const { no, id } = req.body;
  try {
    const originLike = await like.findOne({ where: { bno: no, id } });
    const originBoard = await board.findOne({ no });
    if (!originLike) {
      await like.create({ bno: no, id });
      await board.update({ like: originBoard.like + 1 }, { where: { no } });
    } else {
      await like.destroy({ where: { bno: no, id } });
      await board.update({ like: originBoard.like - 1 }, { where: { no } });
    }
    const post = await board.findOne({ where: { no } });
    res.json(post);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.replyAdd = async (req, res) => {
  console.log("commentAdd 들어왔나 ===> ", req.params);
  try {
    const no = req.params.bno;
    const { bno, id, content } = req.body;
    const commentAdd = await reply.create(
      {
        bno,
        id,
        content,
      },
      {
        where: {
          bno,
        },
      }
    );

    return res.json(commentAdd);
  } catch (error) {
    res.json(error);
  }
};

exports.replyRead = async (req, res, next) => {
  const bno = req.params.bno;
  try {
    const replys = await reply.findAll({
      where: { bno },
    });
    return res.json(replys);
  } catch (error) {
    return res.json(error);
  }
};

exports.replyModify = async (req, res, next) => {
  try {
    const { content, no } = req.body;
    await reply.update(
      {
        content,
        updateAt: Sequelize.Sequelize.literal("now()"),
      },
      {
        where: { no },
      }
    );
    return res.send("내 꿈은 꼬마박사");
  } catch (error) {
    return res.json(error);
  }
};

exports.replyRemove = async (req, res, next) => {
  const { bno, no } = req.body;
  try {
    await reply.destroy({
      where: { no },
    });
    const replys = await reply.findAll({
      where: { bno }
    })
    return res.json(replys);
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
};

exports.isLike = async (req, res) => {
  try {
    const { bno } = req.params;
    const { id } = req.query;
    console.log(`isLike ===> bno : ${bno}  / id : ${id}`);
    const checkLike = await like.findOne({ where: { bno, id } });
    if (!checkLike || checkLike === {}) {
      // return res.json({ like: null });
      console.log('insert like!!!');
      await like.create({
        bno,
        id
      });
      return res.json({ like: 'create' });
    }
    else {
      await like.destroy({ where: { bno, id } });
      return res.json({ like: 'delete' });
    }
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
}
