const { user } = require("../models/mysql");
const bcrypt = require("bcrypt");
const {generateToken} = require("./authController");

exports.login = async (req, res) => {
  const { id, pwd } = req.body;    
  const hashedPwd = await bcrypt.hash(pwd, 10); //해쉬 비밀번호
  
  if (!id || !pwd) {
    return res.status(401).json("아이디 혹은 비밀번호를 입력해주세요");
  }
  
  try {
    const exUser = await user.findOne({
      where: {
        id
      }
    });

    const token = generateToken(id, pwd); //jwt token 발행
    res.cookie("access_token", token, { //res cookie에 jwt token 담기
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });

    const pwdChk = await bcrypt.compare(exUser.pwd, hashedPwd); //결과값 true OR false

    if (!exUser) {
      return res.status(401).json("가입된 회원이 아닙니다."); //아이디 빈칸 및 확인
    }

    if (!pwdChk) {
      return res.status(401).json("비밀번호를 확인해주세요"); //비밀번호 빈칸 및 확인
    }

    return res.json(exUser); //유저정보 및 페이지이동 해야함
  } catch (e) {
    console.error(e);
    return res.status(500).json("로그인 실패");
  }
}

exports.check = async (req, res) => {
  const exUser = req.data;
  if (!exUser) {
    return res.status(401).json("로그인중 아님");
  }
  return res.json(exUser);
}

exports.logout = async (req, res) => {
  console.log("asdad");
  // return (req.cookies["access_token"], res.status(204).json("로그아웃 했습니다."));
}