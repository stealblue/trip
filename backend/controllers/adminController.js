
const { user, board } = require("../models/mysql");

exports.getUserList = async (req, res) => {
	try {
		const userList = await user.findAll({
			where: {
			grade: 1,
			}
		});
		const totalUser = userList.length;
		return res.status(200).json({ userList, totalUser});
	} catch (e) {
		console.error(e);
		return res.status(400).json({ listError: true });
	}
}
exports.getUserDetail = async (req, res) => {
	const { id } = req.body;

	try {
		const User = await user.findOne({
			where: {
				id,
			}
		})

		return res.status(200).json({ user: User });		
	} catch (e) {
		console.error(e);
		return res.status(400).json({ userError: true });
	}
}
exports.deleteUser = async (req, res) => {
	const { id } = req.params;

	try {
		const exUser = await user.findOne({
			where: {
				id,
			}
		});

		if (exUser) {
			await exUser.destroy();
			return res.status(200).json({ deleteError: false });
		}

	} catch (e) {
		console.error(e);
		return res.status(400).json({ deleteError: true });
	}
}

exports.getBoardList = async (req, res) => {
	try {
		const boardList = await board.findAll({});
		const totalBoard = boardList.length;

		return res.status(200).json({boardList, totalBoard})
	} catch (e) {
		console.error(e);
		res.status(400).json({ listError: true });
	}
}

exports.getBoardDetail = async (req, res) => {
	const { no } = req.body;

	try {
		const Board = await board.findOne({
			where: {
				no,
			}
		});
		res.status(200).json({ board: Board });
	} catch (e) {
		console.error(e);
		res.status(400).json({ boardError: true });
	}
}

exports.deleteBoard = async (req, res) => {
	const { no } = req.params;

	try {
		const exBoard = await board.findOne({
			where: {
				no,
			}
		});

		if (exBoard) {
			await exBoard.destroy();
			return res.status(200).json({ deleteError: false });
		}

	} catch (e) {
		console.error(e);
		return res.status(400).json({ deleteError: true });
	}
}