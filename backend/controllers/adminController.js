
const { user, board } = require("../models/mysql");
const { Op } = require("sequelize");

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
	const { id } = res.params;

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

exports.getUserAction = async (req, res) => {
	const date = new Date();
	const Year = date.getFullYear();
	const Month = date.getMonth();
	const Day = date.getDate();
	const today = new Date(Year, Month, Day + 1, 0, 0, 0);

	let dailyJoinCnt = []; //일일가입자수
	let allUserCnt = []; //누적가입자수

	try {
		//일일가입자수
		for (let i = 6; i >= 0; i--) {
			let day = new Date(Date.parse(today) - i * 1000 * 60 * 60 * 24);
			let aday = new Date(Date.parse(today) - (i + 1) * 1000 * 60 * 60 * 24);
			let joinCnt = await user.findAndCountAll({
				where: {
					reg: {
						[Op.between]: [aday, day],
					}
				}
			});
			dailyJoinCnt.push(joinCnt.count);
		}
		//누적가입자수
		for (let i = 6; i >= 0; i--) {
			let day = new Date(Date.parse(today) - i * 1000 * 60 * 60 * 24);
			let userCnt = await user.findAndCountAll({
				where: {
					reg: {
						[Op.lte]: day,
					}
				}
			});
			allUserCnt.push(userCnt.count);
		}

		res.status(200).json({ userAction: {dailyJoinCnt, allUserCnt} });
	} catch (e) {
		console.error(e);
		res.status(400).json({ userActionError: true });
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

exports.getBoardAction = async (req, res) => { 
	const date = new Date();
	const Year = date.getFullYear();
	const Month = date.getMonth();
	const Day = date.getDate();
	const today = new Date(Year, Month, Day + 1, 0, 0, 0);

	let allWriteCnt = [];
	let dailyWriteCnt = [];
	try {
		//일일게시물수
		for (let i = 6; i >= 0; i--) {
			let day = new Date(Date.parse(today) - i * 1000 * 60 * 60 * 24);
			let aday = new Date(Date.parse(today) - (i + 1) * 1000 * 60 * 60 * 24); //당일 00시
			let writeCnt = await board.findAndCountAll({
				where: {
					createAt: {
						[Op.between]: [aday, day], //00시 ~ 00시 사이
					}
				}
			});
			dailyWriteCnt.push(writeCnt.count);
		}
		//누적게시물수
		for (let i = 6; i >= 0; i--) {
			let day = new Date(Date.parse(today) - i * 1000 * 60 * 60 * 24);
			let writeCnt = await board.findAndCountAll({
				where: {
					createAt: {
						[Op.lte]: day,
					}
				}
			});
			allWriteCnt.push(writeCnt.count);
		}

		res.status(200).json({ boardAction: {dailyWriteCnt, allWriteCnt} });
	} catch (e) {
		console.error(e);
		res.status(400).json({ boardActionError: true });
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