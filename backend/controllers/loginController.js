const { user } = require("../models/mysql");
const bcrypt = require("bcrypt");
// const generateToken = require("./authController");

exports.login = async (req, res, next) => {
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
    const pwdChk = await bcrypt.compare(exUser.pwd, hashedPwd); //결과값 true OR false

    if (!exUser) {
      return res.status(401).json("가입된 회원이 아닙니다."); //아이디 빈칸 및 확인
    }

    if (!pwdChk) {
      return res.status(401).json("비밀번호를 확인해주세요"); //비밀번호 빈칸 및 확인
    }

    // const token = exUser.generateToken();

    return res.json(exUser); //유저정보 및 페이지이동 해야함     
  } catch (e) {
    console.error(e);
    return res.status(500).json("로그인 실패");
  }
}