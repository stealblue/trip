import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaListComp from "../../components/area/AreaListComp";
import { listAreas, unloadPage } from "../../modules/area/AreaMod";
import ModalBasic from "../../components/common/ModalBasic";
import Swal from "sweetalert2";
import {
  addWishList,
  initializeWishList,
} from "../../modules/wishList/WishListMod";
import AreaListMod, { listDetail } from "../../modules/area/AreaListMod";

const AreaListCntr = memo(() => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mapData, setMapData] = useState({});
  const [onGetDetail, setOnGetDetail] = useState();
  const dispatch = useDispatch();
  const {
    areas,
    error,
    loading,
    areaCode,
    pageNo,
    contentTypeId,
    user,
    wishList,
    getDetail,
  } = useSelector(
    ({ AreaMod, UserMod, LoadingMod, WishListMod, AreaListMod }) => ({
      areas: AreaMod?.areas,
      error: AreaMod?.error,
      areaCode: AreaMod?.areaCode,
      pageNo: AreaMod?.pageNo,
      contentTypeId: AreaMod?.contentTypeId,
      user: UserMod.user,
      loading: LoadingMod["area/LIST_AREAS"],
      wishList: WishListMod.wishList,
      getDetail: AreaListMod.getDetail,
    })
  );

  // 모달창 노출
  const onClick = (e) => {
    const { title, mapx, mapy, addr, contentid, contenttypeid } =
      e.target.dataset;
    setModalOpen(true);
    setMapData({
      title,
      mapx,
      mapy,
      addr,
    });
    dispatch(
      listDetail({
        contentId: contentid,
        contentTypeId: contenttypeid,
      })
    );
  };

  const addWish = (e) => {
    Swal.fire({
      text: "추가할까요?",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Add",
    })
      .then((result) => {
        const id = user.id;
        const contentid = e.target.dataset.contentid;
        const title = e.target.dataset.title;
        const contenttypeid = e.target.dataset.contenttypeid;
        if (result.isConfirmed) {
          dispatch(addWishList({ id, contentid, title, contenttypeid }));
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: "추가실패",
        });
      });
  };

  useEffect(() => {
    return () => {
      dispatch(unloadPage());
    };
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        `pageNo : ${pageNo}  / areaCode : ${areaCode}   / contentTypeId : ${contentTypeId}`
      );
      if (pageNo && areaCode && contentTypeId) {
        const numOfRows = 10;
        dispatch(listAreas({ pageNo, areaCode, contentTypeId, numOfRows }));
      }
    }
  }, [dispatch, pageNo, areaCode, contentTypeId]);

  useEffect(() => {
    if (wishList === "DUPLICATE") {
      Swal.fire({
        icon: "error",
        text: `리스트에 이미 추가된 항목입니다.`,
      });
      dispatch(initializeWishList());
    } else if (wishList !== null) {
      Swal.fire({
        icon: "success",
        text: `추가했습니다.`,
      });
      dispatch(initializeWishList());
    }
  }, [wishList]);

  useEffect(() => {
    setOnGetDetail(getDetail);
  }, [getDetail]);

  if (!areas) {
    console.log("내용 없음");
    return <div></div>;
  }

  return (
    <>
      {modalOpen && (
        <ModalBasic
          setModalOpen={setModalOpen}
          mapData={mapData}
          onGetDetail={onGetDetail}
        />
      )}
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
