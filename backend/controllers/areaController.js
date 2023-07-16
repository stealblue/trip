const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();
const { KNTO_TOUR_KEY } = process.env;

exports.areaList = async (req, res) => {
  const { areaCode } = req.params;
  const { pageNo, contentTypeId, numOfRows } = req.query;
  try {
    console.log('KNTO_TOUR_KEY ====>', KNTO_TOUR_KEY);
    const originAreas = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${KNTO_TOUR_KEY}&numOfRows=${numOfRows}&pageNo=${pageNo}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&areaCode=${areaCode}&contentTypeId=${contentTypeId}`);
    const areas = originAreas?.data;
    return res.json(areas); // id , 지역 ==> 가공
  } catch (e) {
    return res.status(400).json(e);
  }
};
