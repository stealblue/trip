const { user } = require("../models/mysql");

exports.register = async (req, res, next) => {
    const { value, key } = req.body;
    try {
        await user.create({
            id: value,
        });
        res.json("가입했씁니다");
    } catch (e) {
        console.error(e);
    }
}