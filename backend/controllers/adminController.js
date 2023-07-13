
const { user } = require("../models/mysql");

exports.getUserList = async (req, res) => {
	try {
		const userList = await user.findAll({
			where: {
			grade: 1,
		}});
		console.log(userList);

		return res.status(200).json({ userList });
	} catch (e) {
		console.error(e);
		return res.status(400).json({ listError: true });
	}
}
exports.getUserDetail = async (req, res) => {
	const { id } = req.body;

	try {
		const detail = await user.findOne({
			where: {
				id,
			}
		})

		res.status(200).json({ user: detail });		
	} catch (e) {
		console.error(e);
		res.status(400).json({ userError: true });
	}
}
exports.deleteUser = (req, res) => {
	console.log("deleteUser back");
}
