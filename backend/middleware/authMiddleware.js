const jwt = require("jsonwebtoken");
const { user } = require("../models/mysql");
const {generateToken} = require("../controllers/authController");

// exports.isLoggedIn = (req, res, next) => {
//     if (!req.data) {
//         console.log("로그인 안된 상태 isLoggedIn================", req.data);
//         res.status(403).send("로그인 필요");
//     }
//     console.log("로그인 되어있는 상태 isLoggedIn=============",req.data);
//     return next();
// };

// exports.isNotLoggedIn = (req, res, next) => {
//     if(req.data) {
//         console.log("로그인된 상태 isNotLoggedIn===========", req.data);
//         res.status(403).send("로그아웃 필요");
//     }
//     console.log("로그인 안된 상태 isNotLoggedIn===========", req.data);
//     return next();
// };

exports.jwtMiddleware = async (req, res, next) => {
    const token = req.cookies["access_token"];

    if (!token) return next();

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN); //복호화 토큰
        const { id, pwd } = decoded;
        const exUser = await user.findOne({
            where: {
                id,
                pwd,
           }
        });
        //토큰의 남은 유효기간이 3.5일 미만이면 재발급
        const now = Math.floor(Date.now() / 1000);

        if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
            // const exUser = await user.findOne({
            //     where: {
            //         id,
            //         pwd
            //     },
            // });
            const token = generateToken(id, pwd); //재발급 토큰
            res.cookie("access_token", token, {
                maxAge: 1000 * 60 * 60 * 24 * 7, //7일 유효기간으로 재설정
                httpOnly: true,
            });
        }
        
        return (req.data = exUser, next());
    } catch (e) {
        return next();
    }
}

