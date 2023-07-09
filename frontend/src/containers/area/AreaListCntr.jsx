import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaListComp from "../../components/area/AreaListComp";
import { listAreas } from "../../modules/area/AreaListMod";
import ModalBasic from "../../components/common/ModalBasic";

const AreaListCntr = ({ onClickTest }) => {
  // const selectNo = pageNo || 0;
  // const selectCode = areaCode || 0;

  const [modalOpen, setModalOpen] = useState(false);
  const [mapData, setMapData] = useState({});

  // 모달창 노출
  const onClick = (e) => {
    console.log('data : ', e.target.dataset);
    setModalOpen(true);
    setMapData({
      title: e.target.dataset.title,
      mapx: e.target.dataset.mapx,
      mapy: e.target.dataset.mapy
    });
  };

  // const onClickTest = (e) => {
  //   console.log('onClickTest : ', e.target.value);
  // }

  const dispatch = useDispatch();

  const { areas, error, loading, areaCode, pageNo } = useSelector(({ AreaMod }) => ({
    areas: AreaMod?.areas,
    error: AreaMod?.error,
    areaCode: AreaMod?.areaCode,
    pageNo: AreaMod.pageNo
  }));



  useEffect(() => {
    // console.log('selectNo : ', selectNo);
    // console.log('selectCode : ', selectCode);
    if (typeof window !== 'undefined') {
      if (pageNo !== 0 && areaCode !== 0) {
        dispatch(listAreas({ pageNo, areaCode }));
      }
    }
  }, [dispatch, pageNo, areaCode]);

  if (!areas) {
    console.log('내용 없음');
    return <div>내용 없음</div>;
  }

  return (
    <>
      {/* <button onClick={showModal}>ddddddddd</button> */}
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} mapData={mapData} />}
      <AreaListComp
        error={error}
        areas={areas}
        loading={loading}
        onClick={onClick}
        onClickTest={onClickTest}
      />

    </>
  );
};

export default AreaListCntr;
