const { user } = require("../models/mysql");

exports.register = async (req, res, next) => {
    const { value, key } = req.body;
    try {
        await user.create({
            id: "123",
            pwd: "1234",
            nick: "1234",
            phone: "010-1234-1234",
            addr1: "1234",
            zipcode: "1234",
            gender: 1,
            grade: 1,
        });
        res.json("가입했씁니다");
    } catch (e) {
        console.error(e);
        return res.send("가입실패");
    }
}