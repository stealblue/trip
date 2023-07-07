import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaListComp from "../../components/area/AreaListComp";
import KakaoMapComp from '../../components/common/KakaoMapComp';
import { listAreas } from "../../modules/area/AreaListMod";
import Swal from 'sweetalert2';
import { renderToString } from 'react-dom/server';

const onClick = (e) => {
  const mapComp = (<KakaoMapComp />);
  const mapStr = renderToString(mapComp);
  Swal.fire({
    title: 'Kakao Map',
    html: mapStr,
    showConfirmButton: false,
    width: '800px'
  });
}

const AreaListCntr = ({ areaCode }) => {
  const pageNo = 0;
  const selectCode = areaCode || 0;
  const dispatch = useDispatch();
  const { areas, error, loading } = useSelector(({ AreaListMod }) => ({
    areas: AreaListMod?.areas,
    error: AreaListMod?.error,
  }));
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (pageNo !== 0 && selectCode !== 0) {
        dispatch(listAreas({ pageNo, selectCode }));
      }
    }
  }, [dispatch, areaCode, pageNo, selectCode]);

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
