import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import RoomListComp from "../../components/room/RoomListComp";
import { listAreas, unloadPage } from "../../modules/search/SearchMod";
import ModalBasic from "../../components/common/ModalBasic";
import Swal from 'sweetalert2';
import { addWishList } from '../../modules/wishList/WishListMod';
import SearchResultComp from '../../components/search/SearchResultComp';
import PageNavComp4 from '../../components/common/PageNavComp4';
import { useLocation } from "react-router-dom";

const SearchResultCntr = () => {
  const location = useLocation();
  // if(location.state.keyword){
  //   const locationKeyword = location.state.keyword;
  // }
  const [modalOpen, setModalOpen] = useState(false);
  const [mapData, setMapData] = useState({});

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

  const { areas, error, loading, areaCode, pageNo, contentTypeId, keyword, user } = useSelector(({ SearchMod, LoadingMod, UserMod }) => ({
    areas: SearchMod?.areas,
    error: SearchMod?.error,
    areaCode: SearchMod?.areaCode,
    pageNo: SearchMod?.pageNo,
    contentTypeId: SearchMod?.contentTypeId,
    keyword: SearchMod.keyword,
    user: UserMod.user,
    loading: LoadingMod['search/LIST_AREAS']
  }));

  useEffect(() => {
    return () => {
      dispatch(unloadPage());
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // console.log(`pageNo : ${pageNo}  / areaCode : ${areaCode}   / contentTypeId : ${contentTypeId}`);
      // if (pageNo && areaCode && contentTypeId) {
      // if (locationKeyword || keyword) {
      if (keyword) {
        // const numOfRows = 10;
        dispatch(listAreas({ pageNo, areaCode, contentTypeId, keyword }));
      }
    }
  }, [dispatch, pageNo, areaCode, contentTypeId, keyword]);
  if (!areas) {
    console.log('내용 없음');
    return <div>내용 없음</div>;
  }

  return (
    <>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} mapData={mapData} />}
      <SearchResultComp
        error={error}
        areas={areas}
        loading={loading}
        onClick={onClick}
        // onClickTest={onClickTest}
        addWish={addWish}
      />
      <PageNavComp4 />
    </>
  );
};

export default SearchResultCntr;