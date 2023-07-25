const axios = require("axios");
const { theme } = require('../models/mysql');

exports.listTheme = async (req, res) => {
  try {
    const { keyword } = req.params;
    const { pageNo, contentTypeId, areaCode } = req.query;
    const where = { theme: keyword };
    if (contentTypeId) {
      where.contentTypeId = contentTypeId;
    }
    if (areaCode) {
      where.areaCode = areaCode;
    }
    const areas = await theme.findAndCountAll(where);
    return res.json(areas);
  } catch (error) {
    return re.status(400).json(error);
  }
}