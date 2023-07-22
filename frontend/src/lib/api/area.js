import client from "./client";

export const listAreas = async ({ pageNo, areaCode, contentTypeId, numOfRows }) => { // 지역별 관광리스트 출력
  console.log(`backend ====>  pageNo : ${pageNo} / areaCode : ${areaCode}`);
  return client.get(`/area/${areaCode}?pageNo=${pageNo}&contentTypeId=${contentTypeId}&numOfRows=${numOfRows}`);
};

export const listSearch = async ({ pageNo, areaCode, contentTypeId, keyword }) => {
  console.log(`backend ====>  pageNo : ${pageNo} / areaCode : ${areaCode}`);
  return client.get(`/theme/${keyword}?pageNo=${pageNo}&contentTypeId=${contentTypeId}&areaCode=${areaCode}`);
};
