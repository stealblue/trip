import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaListComp from "../../components/area/AreaListComp";
import { listAreas } from "../../modules/area/AreaListMod";

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
    if (pageNo === 0 || selectCode === 0) return <div>내용x</div>;
    dispatch(listAreas({ pageNo, selectCode }));
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
    />
  );
};

export default AreaListCntr;
