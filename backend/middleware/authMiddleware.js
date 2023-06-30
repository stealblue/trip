const jwt = require("jsonwebtoken");

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).send("로그인 필요");
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        next();
    } else {
        const message = encodeURIComponent("로그인한 상태입니다.");
        res.redirect(`/?error=${message}`);
    }
};

exports.jwtMiddleware = (req, res, next) => {
    // const token = req.cookies;
    // console.log(token.);
    // console.log(String(token[Object.keys(token)[0]]));
    // const stringToken = String(token[Object.keys(token)[0]]);
    // if (!token) return next();

    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     console.log(decoded);
    //     return next();
    // } catch (e) {
    //     console.error(e);
    // }
}

