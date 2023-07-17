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
    // We don't currently allow img itself by default, but
    // these attributes would make sense if we did.
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
    // console.log(boards);
    return res.json(boards);
    // /board/105 get
  } catch (error) {
    return res.json(error);
  }
};

exports.boardDetailPage = async (req, res) => {
  // console.log("req.params=======>", req.params);
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

    console.log(no);
    const detailPage = await board.findOne({
      where: { no },
    });
    // console.log(detailPage.title);
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
      // content: removeHtml(req.body.content),
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
    // const no = req.params.boardNo;
    const { title, content, no } = req.body;
    console.log("no : ", no);
    // console.log("req.body : ", req.body);
    console.log("수정하기");

    await board.update(
      {
        title,
        content: removeHtml(req.body.content),
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
  console.log("777777777777777777777777777777777777777777777777777777777777777777777");
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

exports.boardLike = async (req, res) => {
  const { no, id } = req.body;
  // console.log(`no : ${no}  / id : ${id}`);
  try {
    const originLike = await like.findOne({ where: { bno: no, id } });
    const originBoard = await board.findOne({ no });
    // console.log("originLike =========================================> :", originLike);
    if (!originLike) {
      // console.log("check Success1");
      await like.create({ bno: no, id });
      // console.log("check Success2");
      await board.update({ like: originBoard.like + 1 }, { where: { no } });
      // console.log("check Success3");
    } else {
      // console.log("check Success1-1");
      await like.destroy({ where: { bno: no, id } });
      // console.log("check Success2-1");
      await board.update({ like: originBoard.like - 1 }, { where: { no } });
      // console.log("check Success3-1");
    }
    const post = await board.findOne({ where: { no } });
    // console.log("like success?????????????????????????????????????????????????????????", post);
    res.json(post);
    // res.json({ checkLike: newCount }); //업데이트된 숫자
  } catch (error) {
    // console.log("error??????????????????????????????????????  : ", error);
    res.status(400).json({ msg: error });
  }
};

exports.replyAdd = async (req, res) => {
  console.log("commentAdd 들어왔나 ===> ", req.params);
  try {
    const no = req.params.bno;
    const { bno, id, content } = req.body;
    console.log(`no: ${no} / bno : ${bno} / id : ${id} / content : ${content}`);
    // console.log(req.body, "commentAdd try....");

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
  // console.log("commentLitpage들어옴 bno==>", bno);
  try {
    const replys = await reply.findAll({
      where: { bno },
    });
    // console.log("replys", reply);
    return res.json(replys);
    // /board/105 get
  } catch (error) {
    bno;
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
  // const no = req.params.bno;
  const { bno, no } = req.body;
  // console.log("replyremovereq.body==>", no);
  try {
    await reply.destroy({
      where: { no },
    });
    // return res.send("내 꿈은 꼬마박사");
    const replys = await reply.findAll({
      where: { bno }
    })
    return res.json(replys);
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
};
