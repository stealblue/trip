const wishListArray = require("../models/mongoDB/wishListArray");
const { wishList } = require("../models/mysql/index");

exports.addSchedule = async (req, res) => {
    const { id, contentId, title, contentTypeId } = req.body;
    
    try {
        const addSchedule = await wishListArray.create({
            items: { id, contentId, title, contentTypeId },
        },{where: {_id: id}});

        if (addSchedule) {
            const aleadyMovedWish = await wishList.findOne({
                where: {
                    contentId,
                }
            });
            await aleadyMovedWish.destroy();
        }
        res.status(200).json({ addSchedule: contentId });
    } catch (e) {
        console.error(e);
        res.status(400).json({ addScheduleError: true });
    }
}

exports.getScheduleList = async (req, res) => {
    const { id } = req.params;

    try {
        const scheduleList = await wishListArray.find({
            "items.id": id,
        }).exec();

        res.status(200).json({scheduleList});
    } catch (e) {
        console.error(e);
        res.status(400).json({scheduleListError: true});
    }
}

exports.saveList = async (req, res) => {
    const { id, subject, scheduleList } = req.body;

    try {
        await wishListArray.deleteMany({
            "items.id": id
        });

        await wishListArray.create({
            name: { subject, id, scheduleList }
        }, {where: {_id: id}});

        res.status(200).json({ saveList: true });
    } catch (e) {
        console.error(e);
        res.status(400).json({ saveListError: true });
    }
}

exports.getSavedList = async (req, res) => {
    const { id } = req.params;

    try {
        const savedList = await wishListArray.find({
        "name.id": id
        }).exec();

        res.status(200).json({ savedList });
    } catch (e) {
        console.error(e);
        res.status(400).json({savedListError: true})
    }
}