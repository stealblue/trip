import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomListComp from "../../components/room/RoomListComp";
import { listAreas, unloadPage } from "../../modules/room/LodgingMod";
import ModalBasic from "../../components/common/ModalBasic";

const RoomListCntr = ({ onClickTest }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mapData, setMapData] = useState({});

  // 모달창 노출
  const onClick = (e) => {
    setModalOpen(true);
    setMapData({
      title: e.target.dataset.title,
      mapx: e.target.dataset.mapx,
      mapy: e.target.dataset.mapy
    });
  };

  const dispatch = useDispatch();

  const { areas, error, loading, areaCode, pageNo, contentTypeId } = useSelector(({ LodgingMod }) => ({
    areas: LodgingMod?.areas,
    error: LodgingMod?.error,
    areaCode: LodgingMod?.areaCode,
    pageNo: LodgingMod?.pageNo,
    contentTypeId: LodgingMod?.contentTypeId
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
        const numOfRows = 9;
        dispatch(listAreas({ pageNo, areaCode, contentTypeId, numOfRows }));
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
      <RoomListComp
        error={error}
        areas={areas}
        loading={loading}
        onClick={onClick}
        onClickTest={onClickTest}
      />

    </>
  );
};

export default RoomListCntr;
