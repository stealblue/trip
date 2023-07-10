import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaListComp from "../../components/area/AreaListComp";
import { listAreas, unloadPage } from "../../modules/area/AreaMod";
import ModalBasic from "../../components/common/ModalBasic";

const AreaListCntr = ({ onClickTest }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mapData, setMapData] = useState({});

  // 모달창 노출
  const onClick = (e) => {
    // console.log('data : ', e.target.dataset);
    setModalOpen(true);
    setMapData({
      title: e.target.dataset.title,
      mapx: e.target.dataset.mapx,
      mapy: e.target.dataset.mapy
    });
  };

  const dispatch = useDispatch();

  const { areas, error, loading, areaCode, pageNo, contentTypeId } = useSelector(({ AreaMod }) => ({
    areas: AreaMod?.areas,
    error: AreaMod?.error,
    areaCode: AreaMod?.areaCode,
    pageNo: AreaMod?.pageNo,
    contentTypeId: AreaMod?.contentTypeId
  }));

  useEffect(() => {
    return () => {
      dispatch(unloadPage());
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(`pageNo : ${pageNo}  / areaCode : ${areaCode}   / contentTypeId : ${contentTypeId}`);
      if (pageNo && areaCode && contentTypeId) {
        dispatch(listAreas({ pageNo, areaCode, contentTypeId }));
      }
    }
  }, [dispatch, pageNo, areaCode, contentTypeId]);

  if (!areas) {
    console.log('내용 없음');
    return <div>내용 없음</div>;
  }

  return (
    <>
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
