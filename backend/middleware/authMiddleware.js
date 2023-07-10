// const jwt = require("jsonwebtoken");
// const { user } = require("../models/mysql");
// const {generateToken} = require("../controllers/authController");

// exports.jwtMiddleware = async (req, res, next) => {
//     const token = req.cookies["access_token"];

//     if (!token) return next();

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_TOKEN); //복호화 토큰
//         const { id, pwd } = decoded;
//         const exUser = await user.findOne({
//             where: {
//                 id,
//            }
//         });
//         //토큰의 남은 유효기간이 3.5일 미만이면 재발급
//         const now = Math.floor(Date.now() / 1000);

//         if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
//             const token = generateToken(id, pwd); //재발급 토큰
//             res.cookie("access_token", token, {
//                 maxAge: 1000 * 60 * 60 * 24 * 7, //7일 유효기간으로 재설정
//                 httpOnly: true,
//             });
//         }
//         return res.json({ id: exUser.id, nick: exUser.nick });
//     } catch (e) {
//         return next();
//     }
// }

