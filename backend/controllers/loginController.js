const { user } = require("../models/mysql");
const bcrypt = require("bcrypt");
const { generateToken } = require("./authController");

exports.login = async (req, res) => {
  const { id, pwd } = req.body;

  try {
    const exUser = await user.findOne({
      where: {
        id
      }
    });

    //코드 위치 수정 금지!!
    if (id === null) {
      return res.status(401).json({ authError: "아이디를 입력해주세요" });
    }

    if (pwd === null) {
      return res.status(401).json({ authError: "비밀번호를 입력해주세요" });
    }

    if (!exUser) {
      return res.status(401).json({ authError: "가입된 회원이 아닙니다." }); //아이디 빈칸 및 확인
    }

    const hashedPwd = await bcrypt.hash(pwd, 10); //해쉬 비밀번호
    const pwdChk = await bcrypt.compare(exUser.pwd, hashedPwd); //결과값 true OR false
    const token = generateToken(id, pwd); //jwt token 발행
    res.cookie("access_token", token, { //res cookie에 jwt token 담기
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });

    if (!pwdChk) {
      return res.status(401).json({ authError: "비밀번호를 확인해주세요." }); //비밀번호 빈칸 및 확인
    }
    //비밀번호 n회 틀릴경우 로그인 막고 전화인증 받아서 풀게하기 추가!!
    return res.json({ auth: true, nick: exUser.nick }); //유저정보 및 페이지이동 해야함
  } catch (e) {
    console.error(e, "에러입니다");
    return res.status(500).json({ authError: "로그인 실패" });
  }
}

exports.check = async (req, res) => {
  const exUser = req.data;

  if (!exUser) {
    console.log("CHECK 실패");
    return res.status(401).json("로그인중 아님");
  }
  return res.json({ id: exUser.id, nick: exUser.nick });
}

exports.logout = async (req, res) => {
  // req.cookies["access_token"];
  res.clearCookie("access_token");
  return res.status(204).json("로그아웃 했습니다.");
}

exports.profile = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.status(205).json({ id });
}