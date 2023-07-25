const axios = require("axios");
const { theme } = require('../models/mysql');

exports.listTheme = async (req, res, next) => {
  // console.log(`listTheme => req.params : ${req.params.keyword}`);
  // console.log(`listTheme => req.query : ${req.query}`);
  const { keyword } = req.params;
  const { pageNo, contentTypeId, areaCode, searchType } = req.query;
  console.log(`keyword : ${keyword}`);
  console.log(`pageNo : ${pageNo}`);
  console.log(`contentTypeId : ${contentTypeId}`);
  console.log(`areaCode : ${areaCode}`);
  console.log(`searchType : ${searchType}`);
  if (req.query.searchType === 'API') {
    next();
  } else {
    try {
      // const { keyword } = req.params;
      // const { pageNo, contentTypeId, areaCode } = req.query;
      // const where = { theme: { keyword } };
      // if (typeof contentTypeId !== 'undefined') {
      //   console.log('contentTypeId?');
      //   where.theme.contentTypeId = contentTypeId;
      // }
      // if (typeof areaCode !== 'undefined') {
      //   console.log('areaCode?');
      //   where.theme.areaCode = areaCode;
      // }
      // const areas = await theme.findAndCountAll(where);
      const areas = await theme.findAndCountAll({
        where: { theme: keyword }
      })
      // if (areas.rows) {
      //   console.log('있다', areas.rows.length)
      // }
      // else {
      //   console.log('없다')
      // }
      for (let item of areas.rows) {
        // console.log(`${item} : ${areas[item]}`)
        console.log('item : ', item.dataValues.title)
      }
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



