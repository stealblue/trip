const { user } = require("../models/mysql");

exports.login = async (req, res, next) => {
    const { value, key } = req.body;
    console.log("login 진행중", value, key);

    try {
        const exUser = await user.findOne({
            where: {
                id: value
            }
        });
        if (!exUser) {
          res.json("가입된 회원이 아닙니다.");
        } else {
          res.json(exUser);
        }
        
    } catch (e) {
      console.error(e);
      return res.send('로그인 실패');
    }
}