const axios = require("axios");

exports.areaList = async (req, res) => {
  const { areaCode } = req.params;
  const { pageNo, contentTypeId } = req.query;
  try {
    const originAreas = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=6llou7mTmFrIgywqLILzzAUyseED%2F0BLomnJnAoniP3VKw686FwmWCg864EdniWQE0Y6lSUBEOoM5hSVEe0vzQ%3D%3D&numOfRows=10&pageNo=${pageNo}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&areaCode=${areaCode}&contentTypeId=${contentTypeId}`);
    const areas = originAreas?.data;
    return res.json(areas); // id , 지역 ==> 가공
  } catch (e) {
    return res.status(400).json(e);
  }
};
