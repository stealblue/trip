const { user } = require("../models/mysql");
const bcrypt = require("bcrypt");

exports.login = async (req, res, next) => {
  const { id, pwd } = req.body;    
  const hashedPwd = await bcrypt.hash(pwd, 10); //해쉬 비밀번호
  const pwdChk = await user.bcrypt.compare(pwd, hashedPwd); //결과값 true OR false

  if (!id || !pwd) {
    return res.status(401).json("아이디 혹은 비밀번호를 입력해주세요");
  }

  try {
    const exUser = await user.findOne({
      where: {
        id
      }
    });

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

exports.register = async (req, res, next) => {
  const {id, pwd, nick, phone, addr1, addr2, zipcode, gender} = req.body;

  const idChk = false;
  const pwdChk = false;
  const nickChk = false;
  const phoneChk = false;
  const checkOk = false;

  if (idChk && pwdChk && nickChk && phoneChk) {
    return checkOk = true;
  }

  try {
    const exUser = await user.findOne({
      where: {
        id,
      }
    });

    if (!exUser) {
      return idChk = true;
    }

    if (!idChk) {
      //중복체크 빈칸 확인
      return res.status(409).json("아이디 확인");
    }

    if (!pwdChk) {
      //비밀번호 && 체크 맞는지확인
      return res.status(409).json("비밀번호 확인");
    }

    if (!nickChk) {
      //중복체크 빈칸 확인
      return res.status(409).json("닉네임 확인");
    }

    if (!phoneChk) {
      //중복체크 빈칸 확인
      return res.status(409).json("전화번호 확인");
    }

    await user.create({
      id: id,
      pwd: pwd,
      nick: nick,
      phone: phone,
      addr1: addr1,
      addr2: addr2,
      zipcode: zipcode,
      gender: gender,
    });
    res.status(200).json("아이디 생성완료");
  } catch (e) {
    console.error(e);
  }
}