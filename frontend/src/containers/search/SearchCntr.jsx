import React from 'react';
import SearchComp from '../../components/search/SearchComp';
import { useDispatch, useSelector } from "react-redux";
import { unloadPage, showAreaCode, showPageNo, showContentTypeId, showKeyword } from '../../modules/search/SearchMod';

const contentTypes = [
  { "name": "관광지", "code": 12 }, { "name": "문화시설", "code": 14 }, { "name": "축제공연행사", "code": 15 },
  { "name": "레포츠", "code": 28 }, { "name": "쇼핑", "code": 38 }, { "name": "숙소", "code": 32 },
  { "name": "음식점", "code": 39 }
];


const SearchCntr = () => {

  const dispatch = useDispatch();

  const { areaCode, contentTypeId, keyword, page, loading } = useSelector(({ SearchMod, LoadingMod }) => ({
    areaCode: SearchMod.areaCode,
    contentTypeId: SearchMod.contentTypeId,
    keyword: SearchMod.keyword,
    page: SearchMod.page,
    loading: LoadingMod
  }));

  const onClickArea = (e) => {
    const areaCode = e.target.dataset.value;
    const page = 1;
    dispatch(showAreaCode(areaCode));
    dispatch(showPageNo(page));
    dispatch(showContentTypeId(null));
  };

  const onSelectedContentType = (e) => {
    const contentTypeId = e.target.value;
    dispatch(showContentTypeId(contentTypeId));
  }

  const onSearchArea = (e) => {
    if (e.key === "Enter") {
      dispatch(unloadPage());
      const keyword = `${e.target.value}`;
      dispatch(showKeyword(keyword));
    }
  };

  return (
    <div>
      <SearchComp onClickArea={onClickArea} areaCode={areaCode} contentTypes={contentTypes} onSelectedContentType={onSelectedContentType} onSearchArea={onSearchArea} />
    </div>
  );
};

export default SearchCntr;