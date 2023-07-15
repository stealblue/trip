import client from "./client";
// import axios from 'axios';
export const listAreas = async ({ pageNo, areaCode, contentTypeId }) => { // 지역별 관광리스트 출력
  console.log(`backend ====>  pageNo : ${pageNo} / areaCode : ${areaCode}`);
  return client.get(`/area/${areaCode}?pageNo=${pageNo}&contentTypeId=${contentTypeId}`);
};

// export const listAreas = async ({ pageNo, areaCode, contentTypeId }) => { // 지역별 관광리스트 출력
//   console.log(`backend ====>   pageNo : ${pageNo}   /    areaCode : ${areaCode}`);
//   // return client.get(`/area/${areaCode}?pageNo=${pageNo}&contentTypeId=${contentTypeId}`);
//   await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=6llou7mTmFrIgywqLILzzAUyseED%2F0BLomnJnAoniP3VKw686FwmWCg864EdniWQE0Y6lSUBEOoM5hSVEe0vzQ%3D%3D&numOfRows=10&pageNo=${pageNo}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&areaCode=${areaCode}&contentTypeId=${contentTypeId}`)
//     .then(response => {
//       console.log('response : ', response);
//       console.log('response.data : ', response.data);
//       const areas = response.data;
//       return areas;
//     })
//     .catch(error => {
//       console.error(error);
//       return error;
//     })
// };




// export const listRooms = async ({ pageNo, areaCode }) => { // 지역별 숙박업소 출력
//   return client.get(`/area/${areaCode}?pageNo=${pageNo}&contentTypeId=12`)
// }
