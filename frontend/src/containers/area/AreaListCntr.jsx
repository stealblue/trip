import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaListComp from "../../components/area/AreaListComp";
import { listAreas } from "../../modules/area/AreaListMod";
import ModalBasic from "../../components/common/ModalBasic";

const AreaListCntr = ({ areaCode, pageNo }) => {
  const selectNo = pageNo || 0;
  const selectCode = areaCode || 0;

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


  const dispatch = useDispatch();

  const { areas, error, loading } = useSelector(({ AreaMod }) => ({
    areas: AreaMod?.areas,
    error: AreaMod?.error,
  }));



  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (selectNo !== 0 && selectCode !== 0) {
        dispatch(listAreas({ selectNo, selectCode }));
      }
    }
  }, [dispatch, selectCode, selectCode]);

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
      />

    </>
  );
};

export default AreaListCntr;
