import client from "./client";

export const listAreas = async ({ pageNo, areaCode, contentTypeId }) => { // 지역별 관광리스트 출력
  console.log(`backend ====>   pageNo : ${pageNo}   /    areaCode : ${areaCode}`);
  return client.get(`/area/${areaCode}?pageNo=${pageNo}&contentTypeId=${contentTypeId}`);
};

export const listRooms = async ({ pageNo, areaCode }) => { // 지역별 숙박업소 출력
  return client.get(`/area/${areaCode}?pageNo=${pageNo}&contentTypeId=12`)
}
