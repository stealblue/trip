import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaListComp from "../../components/area/AreaListComp";
import { listAreas } from "../../modules/area/AreaListMod";

// const areaArr = [
//   { "name": "서울", "code": 1 }, { "name": "인천", "code": 2 }, { "name": "대전", "code": 3 }, { "name": "대구", "code": 4 },
//   { "name": "광주", "code": 5 }, { "name": "부산", "code": 6 }, { "name": "울산", "code": 7 }, { "name": "세종", "code": 8 },
//   { "name": "경기도", "code": 31 }, { "name": "강원도", "code": 32 }, { "name": "충청북도", "code": 33 },
//   { "name": "충청남도", "code": 34 }, { "name": "경상북도", "code": 35 }, { "name": "경상남도", "code": 36 },
//   { "name": "전라북도", "code": 37 }, { "name": "전라남도", "code": 38 }, { "name": "제주특별자치도", "code": 39 }
// ];

const onClick = (e) => {
  console.log("item : ", e.target.value);
};

const AreaListCntr = ({ areaCode }) => {
  console.log('AreaListCntr ====>');
  const pageNo = 0;
  const selectCode = areaCode || 0;
  const dispatch = useDispatch();
  const { areas, error, loading } = useSelector(({ AreaListMod }) => ({
    areas: AreaListMod?.areas,
    error: AreaListMod?.error,
  }));
  console.log(`areas : ${areas} / error : ${error}`);
  console.log(`pageNo : ${pageNo} / areaCode : ${areaCode}`);
  useEffect(() => {
    console.log(`RE =====> pageNo : ${pageNo} / areaCode : ${areaCode}`);
    if (pageNo !== 0 && selectCode !== 0) {
      dispatch(listAreas({ pageNo, selectCode }));
    }
    // dispatch(listAreas({ pageNo, selectCode }));
  }, [dispatch, areaCode]);

  if (!areas) {
    console.log('내용 없음');
    return <div>내용 없음</div>;
  }

  return (
    <AreaListComp
      error={error}
      areas={areas}
      loading={loading}
      onClick={onClick}
    // areaArr={areaArr}
    />
  );
};

export default AreaListCntr;
