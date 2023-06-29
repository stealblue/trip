const { user } = require("../models/mysql");

exports.register = async (req, res, next) => {
    const { form } = req.body;
    // const { id, pwd, nick, phone, addr1, addr2, zipcode, gender } = form;
    try {
        await user.create({
            // id: id,
            // pwd: pwd,
            // nick: nick,
            // phone: phone,
            // addr1: addr1,
            // addr2: addr2,
            // zipcode: zipcode,
            // gender: gender,
            // grade: 1,
        });
        res.json({id, pwd, nick, phone, addr1, addr2, zipcode, gender});
    } catch (e) {
        console.error(e);
        return res.send("가입실패");
    }
}