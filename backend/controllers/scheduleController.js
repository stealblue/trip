const wishListArray = require("../models/mongoDB/wishListArray");

exports.addSchedule = async (req, res) => {
    const { id, contentId } = req.params;

    try {
        const scheduleList = await wishListArray.find({
            "items":{}
        });
        scheduleList["contentId"];
          
        if (!scheduleList) {
            await wishListArray.create({
                userId: id,
                name: null,
                items: scheduleList,
            });

            return res.status(200).json({ addToSchedule: contentId });
        }
        console.log(scheduleList);
        if (scheduleList) {
            await wishListArray.updateOne({ items: scheduleList }, { where: { id } }).exec();
            return res.status(200).json({addToSchedule: contentId});
        }
	} catch (e) {
		console.error(e);
        return res.status(400).json({ addToScheduleError: true });
	}
};

exports.getSchedule = async (req, res) => {
    const { id } = req.params;

	try {
        const scheduleList = await wishListArray.find({
            where: { id }
        });
        console.log("123",scheduleList);
        res.status(200).json({ schedule: scheduleList });
	} catch (e) {
		console.error(e);
        res.status(400).json({ scheduleError: true });
	}
};

exports.changeSchedule = async (req, res) => {
    const { id } = req.params;

	try {

	} catch (e) {
		console.error(e);

	}
};

exports.createSchedule = async (req, res) => {
    const { id } = req.params;

	try {

	} catch (e) {
		console.error(e);

	}
};

exports.getCompletedList = async (req, res) => {
    const { id } = req.params;

	try {

	} catch (e) {
		console.error(e);

	}
};