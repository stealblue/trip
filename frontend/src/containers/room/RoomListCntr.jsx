import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomListComp from "../../components/room/RoomListComp";
import { listAreas, unloadPage } from "../../modules/room/LodgingMod";
import ModalBasic from "../../components/common/ModalBasic";
import Swal from 'sweetalert2';
import { addWishList } from '../../modules/wishList/WishListMod'

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

  const addWish = (e) => {
    Swal.fire({
      text: '추가할까요?',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Add'
    })
      .then(result => {
        const id = user.id;
        const contentid = e.target.dataset.contentid;
        const title = e.target.dataset.title;
        const contenttypeid = e.target.dataset.contenttypeid;
        if (result.isConfirmed) {
          dispatch(addWishList({ id, contentid, title, contenttypeid }));
          Swal.fire({
            icon: 'success',
            text: `추가했습니다.`,
          })
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          text: '추가실패'
        })
      })

  }


  const dispatch = useDispatch();

  const { areas, error, loading, areaCode, pageNo, contentTypeId, user } = useSelector(({ LodgingMod, LoadingMod, UserMod }) => ({
    areas: LodgingMod?.areas,
    error: LodgingMod?.error,
    areaCode: LodgingMod?.areaCode,
    pageNo: LodgingMod?.pageNo,
    contentTypeId: LodgingMod?.contentTypeId,
    user: UserMod.user,
    loading: LoadingMod['room/LIST_AREAS']
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
        addWish={addWish}
      />

    </>
  );
};

export default RoomListCntr;
