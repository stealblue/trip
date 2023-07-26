import client from "./client";

export const listAreas = async ({ pageNo, areaCode, contentTypeId, numOfRows }) => { // 지역별 관광리스트 출력
  console.log(`backend ====>  pageNo : ${pageNo} / areaCode : ${areaCode}`);
  return client.get(`/area/${areaCode}?pageNo=${pageNo}&contentTypeId=${contentTypeId}&numOfRows=${numOfRows}`);
};

export const listDetail = async ({ contentId, contentTypeId }) => {
  return client.get(`/area/detail/${contentId}/${contentTypeId}`);
};

export const listSearch = async ({ pageNo, areaCode, contentTypeId, keyword, searchType }) => {
  console.log(`listSearch ==>  pageNo : ${pageNo} / areaCode : ${areaCode} / contentTypeId : ${contentTypeId} / keyword :${keyword} / searchType : ${searchType}`);
  // let searchUrl;
  // if (!searchType) {
  let searchUrl = `/theme/${keyword}?pageNo=${pageNo}&searchType=${searchType}`;
  // }else if(searchType === 'DB'){}

  // else if (searchType === 'API') {
  //   searchUrl = `/theme/${keyword}?pageNo=${pageNo}&searchType=${searchType}`;
  // }
  if (areaCode) {
    searchUrl = searchUrl + `&areaCode=${areaCode}`;
  }
  if (contentTypeId) {
    searchUrl = searchUrl + `&contentTypeId=${contentTypeId}`;
  }
  return client.get(searchUrl);
};
