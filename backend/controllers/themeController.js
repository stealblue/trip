const axios = require("axios");
const { theme } = require('../models/mysql');

exports.listTheme = async (req, res, next) => {
  const { keyword } = req.params;
  const { pageNo, contentTypeId, areaCode, searchType } = req.query;
  if (req.query.searchType === 'API') {
    next();
  } else {
    try {
      const where = { theme: keyword };
      if (typeof contentTypeId !== 'undefined') {
        where.contentTypeId = contentTypeId;
      }
      if (typeof areaCode !== 'undefined') {
        where.areaCode = areaCode;
      }
      const areas = await theme.findAndCountAll({ where: where });
      if (areas.rows.length >= 1) {
        return res.json({ areas, searchType: 'DB' });
      } else {
        next();
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}



