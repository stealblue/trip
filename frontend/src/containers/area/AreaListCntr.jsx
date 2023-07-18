import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import AreaListComp from "../../components/area/AreaListComp";
import { listAreas, unloadPage } from "../../modules/area/AreaMod";
import ModalBasic from "../../components/common/ModalBasic";
import Swal from 'sweetalert2';
import { addWishList } from '../../modules/wishList/WishListMod'

const AreaListCntr = memo(({ onClickTest }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mapData, setMapData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 모달창 노출
  const onClick = (e) => {
    // console.log('data : ', e.target.dataset);
    setModalOpen(true);
    console.log('addr ===============<>', e.target.dataset);
    console.log(`title : ${e.target.dataset.title}`);
    setMapData({
      title: e.target.dataset.title,
      mapx: e.target.dataset.mapx,
      mapy: e.target.dataset.mapy,
      addr: e.target.dataset.addr
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
        if (result.isConfirmed) {
          dispatch(addWishList({ id, contentid, title }));
          Swal.fire({
            icon: 'success',
            text: `추가했습니다., ${e.target.dataset.contentid}`,
            // confirmButtonText: "찜목록"

          })
        }
      })
      // .then(result => {
      //   const nick = user?.nick;
      //   if (result.isConfirmed && nick) {
      //     navigate(`/auth/${nick}`);
      //   }
      // })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          text: '추가실패'
        })
      })

  }



  const { areas, error, loading, areaCode, pageNo, contentTypeId, user } = useSelector(({ AreaMod, UserMod }) => ({
    areas: AreaMod?.areas,
    error: AreaMod?.error,
    areaCode: AreaMod?.areaCode,
    pageNo: AreaMod?.pageNo,
    contentTypeId: AreaMod?.contentTypeId,
    user: UserMod.user
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
        const numOfRows = 10;
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
      <AreaListComp
        error={error}
        areas={areas}
        loading={loading}
        onClick={onClick}
        addWish={addWish}
      />

    </>
  );
});

export default AreaListCntr;
