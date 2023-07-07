const { Sequelize } = require("sequelize");
const { board, like, reply } = require("../models/mysql");
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
  // console.log("req.params=======>", req.params);
  try {
    const no = req.params.boardNo;
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

exports.boardLike = async (req, res) => {
  // const no = req.params.boardNo;
  // try {
  //   // 해당 게시물 가져오기
  //   const board = await board.findOne({ where: { no } });

  //   // 게시물이 존재하지 않으면 오류 응답
  //   if (!board) {
  //     return res.status(404).json({ error: "게시물을 찾을 수 없습니다." });
  //   }

  //   // 좋아요 수 증가
  //   board.like += 1;

  //   // DB에 변경사항 저장
  //   await board.save();

  //   // 성공 응답
  //   return res.status(200).json({ success: true, message: "좋아요가 추가되었습니다." });
  // } catch (error) {
  //   // 오류 응답
  //   return res.status(500).json({ error: "서버 오류가 발생했습니다." });
  // }
  const { no, id } = req.body;
  console.log(`no : ${no}  / id : ${id}`);
  try {
    // let newCount; // 게시글에 업데이트된 정보(좋아요 수)를 담을 변수
    const originLike = await like.findOne({
      where: {
        bno: no,
        id,
      },
    });
    const originBoard = await board.findOne({
      no,
    });
    console.log("originLike :", originLike);
    if (!originLike) {
      await like.create({
        bno: no,
        id,
      });
      await board.update(
        {
          like: originBoard.like + 1,
        },
        {
          where: {
            no,
          },
        }
      );
      // newCount = originBoard.like + 1;
    } else {
      await like.destroy({
        where: {
          bno: no,
          id,
        },
      });
      await board.update(
        {
          like: originBoard.like - 1,
        },
        {
          where: {
            no,
          },
        }
      );
      // newCount = originBoard.like - 1;
    }
    const post = await board.findOne({
      where: {
        bno: no,
        id,
      },
    });
    res.json(post);
    // res.json({ checkLike: newCount }); //업데이트된 숫자
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.commentAdd = async (req, res) => {
  console.log("commentAdd 들어왔나 ===> ", req.params);
  try {
    const no = req.params.bno;
    const { bno, id, content } = req.body;
    // console.log(`no: ${no} / bno : ${bno} id : ${id} / content : ${content}`);
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

exports.commentRead = async (req, res, next) => {
  const bno = req.params.bno;
  console.log("commentLitpage들어옴 bno==>", bno);
  try {
    const replys = await reply.findAll({
      where: { bno },
    });
    // console.log(boards);
    return res.json(replys);
    // /board/105 get
  } catch (error) {
    bno;
    return res.json(error);
  }
};
