// import axios from "axios";
import client from "./client";

// export const nearJangSo = async(areaY, areaX) => {
  export const listAreas = async({pageNo, areaCode}) => {
    // console.log('리스트에어리어???')
    // console.log(`${pageNo} / ${areaCode}`);
    // await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=6llou7mTmFrIgywqLILzzAUyseED%2F0BLomnJnAoniP3VKw686FwmWCg864EdniWQE0Y6lSUBEOoM5hSVEe0vzQ%3D%3D&numOfRows=20&pageNo=${pageNo}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&areaCode=${areaCode}`)
    // .then((response)=>{
    //   const areas = response.data.response.body.items;
    //   console.log('success : ', areas);
    //     return areas;
    // }).catch((error)=>{
    //   console.log('error :',error);
    //   return error;
    // })
    // console.log('frontend : ', areaCode, pageNo)
    return client.get(`/area/${areaCode}?pageNo=${pageNo}`);
  // return axios.get('https://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=6llou7mTmFrIgywqLILzzAUyseED%2F0BLomnJnAoniP3VKw686FwmWCg864EdniWQE0Y6lSUBEOoM5hSVEe0vzQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&mapX=126.981611&mapY=37.568477&radius=1000&contentTypeId=15');
};
