import client from "./client";

export const listAreas = async ({ pageNo, areaCode, contentTypeId, numOfRows }) => { // 지역별 관광리스트 출력
  return client.get(`/area/${areaCode}?pageNo=${pageNo}&contentTypeId=${contentTypeId}&numOfRows=${numOfRows}`);
};

export const listDetail = async ({ contentId, contentTypeId }) => {
  return client.get(`/area/detail/${contentId}/${contentTypeId}`);
};

export const listSearch = async ({ pageNo, areaCode, contentTypeId, keyword, searchType }) => {
  let searchUrl = `/theme/${keyword}?pageNo=${pageNo}&searchType=${searchType}`;
  if (areaCode) {
    searchUrl = searchUrl + `&areaCode=${areaCode}`;
  }
  if (contentTypeId) {
    searchUrl = searchUrl + `&contentTypeId=${contentTypeId}`;
  }
  return client.get(searchUrl);
};
