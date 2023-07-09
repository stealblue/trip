const axios = require('axios');

exports.areaList = async (req, res) => {
  const {areaCode} = req.params;
  const {pageNo}=req.query;
  // console.log(`areaCode=>${areaCode} / pageNo=>${pageNo}`);
  try {
    const originAreas = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=6llou7mTmFrIgywqLILzzAUyseED%2F0BLomnJnAoniP3VKw686FwmWCg864EdniWQE0Y6lSUBEOoM5hSVEe0vzQ%3D%3D&numOfRows=10&pageNo=${pageNo}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&areaCode=${areaCode}`);
    // console.log('areas : ', originAreas.data.response.body.items);
    const areas = originAreas.data;
    // const areas = originAreas.data.response.body.items;
    // if(!areas) return res.status(400).json({msg:"에러에러에러"})
    return res.json(areas);
  } catch (e) {
    return res.status(400).json(e);
  }
};
