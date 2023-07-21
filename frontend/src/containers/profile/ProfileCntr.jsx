import { useEffect, useState } from "react";
import ProfileComp from "../../components/profile/ProfileComp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePhoto } from "../../lib/api/profile";

import ProfileMod, {
  changeProfile,
  changeValue,
  changePhotoSuccess,
  changePhotoFailure,
  deleteBoard,
  deleteLike,
  deleteReply,
  getBoardList,
  getLikeList,
  getProfile,
  getReplyList,
  getWishList,
  initializeProfile,
  nickChk,
  withdraw,
  deleteWish,
  getWishDetail,
} from "../../modules/profile/ProfileMod";
import { check, initializeUser } from "../../modules/auth/UserMod";
import ScheduleMod, {
  addSchedule,
  getSchedule,
} from "../../modules/schedule/ScheduleMod";

const ProfileCntr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const {
    id,
    img,
    user,
    nick,
    nickAuth,
    nickError,
    withdrawAuth,
    withdrawError,
    boardList,
    totalBoard,
    deleteBoardError,
    replyList,
    totalReply,
    deleteReplyError,
    likeList,
    totalLike,
    deleteLikeError,
    wishList,
    totalWish,
    wish,
    wishError,
    deleteWishError,
    schedule,
    addToSchedule,
  } = useSelector(({ UserMod, ProfileMod }) => ({
    id: UserMod.user.id,
    img_: ProfileMod.img,
    user: ProfileMod.user,
    nick: ProfileMod.nick,
    nickAuth: ProfileMod.nickAuth,
    nickError: ProfileMod.nickError,
    withdrawAuth: ProfileMod.withdrawAuth,
    withdrawError: ProfileMod.withdrawError,
    boardList: ProfileMod.boardList,
    totalBoard: ProfileMod.totalBoard,
    deleteBoardError: ProfileMod.deleteBoardError,
    replyList: ProfileMod.replyList,
    totalReply: ProfileMod.totalReply,
    deleteReplyError: ProfileMod.deleteReplyError,
    likeList: ProfileMod.likeList,
    totalLike: ProfileMod.totalLike,
    deleteLikeError: ProfileMod.deleteLikeError,
    wishList: ProfileMod.wishList,
    totalWish: ProfileMod.totalWish,
    wish: ProfileMod.wish,
    wishError: ProfileMod.wishError,
    deleteWishError: ProfileMod.deleteWishError,
    schedule: ScheduleMod.schedule,
    addToSchedule: ScheduleMod.addToSchedule,
  }));
  const [changeInform, setChangeInform] = useState(false);
  const [boardType, setBoardType] = useState();
  const [content, setContent] = useState();
  const [userImg, setUserImg] = useState();

  const onGetBoardList = () => {
    setBoardType("BOARD");
    dispatch(getBoardList({ id }));
  };

  const onGetBoardDetail = (bno) => {
    navigate(`/board/read/${bno}`);
  };

  const onDeleteBoard = (no) => {
    dispatch(
      deleteBoard({
        no,
      })
    );
  };

  const onGetReplyList = () => {
    setBoardType("REPLY");
    dispatch(getReplyList({ id }));
  };

  const onGetReplyDetail = (bno) => {
    navigate(`/board/read/${bno}`);
  };

  const onDeleteReply = (no) => {
    dispatch(
      deleteReply({
        no,
      })
    );
  };

  const onGetLikeList = () => {
    setBoardType("LIKELIST");
    dispatch(
      getLikeList({
        id,
      })
    );
  };

  const onGetLikeDetail = (bno) => {
    navigate(`/board/read/${bno}`);
  };

  const onDeleteLike = (no) => {
    dispatch(
      deleteLike({
        no,
      })
    );
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////작업중
  const onGetWishList = () => {
    setBoardType("SCHEDULER");
    dispatch(
      getWishList({
        id,
      })
    );
  };

  const onGetWishDetail = (contentId) => {
    setModal(!modal);
    if (!wish) {
      dispatch(
        getWishDetail({
          contentId,
        })
      );
    }
  };

  const onAddSchedule = (id, contentId) => {
    dispatch(
      addSchedule({
        id,
        contentId,
      })
    );
  };

  const onDeleteWish = (no) => {
    dispatch(
      deleteWish({
        no,
      })
    );
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////작업중
  const onChange = (e) => {
    const { value } = e.target;
    dispatch(
      changeValue({
        value,
      })
    );
  };

  const onUploadPhoto = (e) => {
    setContent(e.target.files[0]);
  };

  const onChangePhoto = async (e) => {
    e.preventDefault();
    if (!content) {
      return alert("사진을 먼저 선택해주세요.");
    }
    const formData = new FormData();
    formData.append("img", content);
    await changePhoto({
      id,
      formData, //formData를 그대로 넘겨줘야 함. img:{formData} 이런식으로 넘기면 안됨
    }).then((res) => {
      if (res.status === 200) {
        const { img } = res.data;
        setUserImg(img);
        dispatch(
          changePhotoSuccess({
            img,
          })
        );
      } else {
        const { imgError } = res.data;
        dispatch(
          changePhotoFailure({
            imgError,
          })
        );
      }
    });
  };

  const onChangeProfile = () => {
    if (!changeInform) {
      return setChangeInform(!changeInform);
    }
    if (changeInform && !nickAuth) {
      return alert("닉네임을 확인하여 주세요.");
    } else if (changeInform && nickAuth) {
      setChangeInform(!changeInform);
      dispatch(
        changeProfile({
          id,
          nick,
        })
      );
    }
  };

  const onNickCheck = () => {
    const valid = (nick) => {
      return /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/.test(nick);
    };
    if (nick === "" || nick === null) {
      return alert("닉네임을 입력해주세요.");
    }
    if (valid(nick)) {
      dispatch(
        nickChk({
          nick,
        })
      );
    } else {
      return alert(
        "닉네임은 2자 이상, 10자 이하 한글, 영어, 숫자 조합이어야 합니다."
      );
    }
  };

  const onWithdraw = () => {
    if (window.confirm("정말로 Tripper Maker를 탈퇴하시겠습니까?")) {
      dispatch(
        withdraw({
          id,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(
      getProfile({
        id,
      })
    );
    setBoardType("BOARD"); //처음 렌더링 될 때 먼저 보여질 리스트
  }, [dispatch, userImg]);

  useEffect(() => {
    dispatch(
      getBoardList({
        id,
      })
    );
  }, [deleteBoardError]);

  useEffect(() => {
    dispatch(
      getReplyList({
        id,
      })
    );
  }, [deleteReplyError]);

  useEffect(() => {
    dispatch(
      getLikeList({
        id,
      })
    );
  }, [deleteLikeError]);

  useEffect(() => {
    dispatch(
      getWishList({
        id,
      })
    );
  }, [deleteWishError]);

  useEffect(() => {
    if (withdrawAuth) {
      alert("회원탈퇴가 완료되었습니다.");
      dispatch(initializeUser());
      dispatch(initializeProfile());
      return navigate("/");
    }
    if (withdrawError) {
      return alert("다시 시도하여 주십시오.");
    }
  }, [withdrawAuth, withdrawError]);

  useEffect(() => {
    if (nickAuth === null) {
      dispatch(
        getProfile({
          id,
        })
      );
      dispatch(check()); //닉네임 변경시 check해줌으로써 UserMod.user 값 갱신해줌
    }
  }, [nickAuth]);

  useEffect(() => {
    dispatch(
      getSchedule({
        id,
      })
    );
  }, [schedule, addToSchedule]);

  return (
    <div>
      <ProfileComp
        user={user}
        nick={nick}
        nickAuth={nickAuth}
        nickError={nickError}
        modal={modal}
        changeInform={changeInform}
        boardType={boardType}
        boardList={boardList}
        totalBoard={totalBoard}
        replyList={replyList}
        totalReply={totalReply}
        likeList={likeList}
        totalLike={totalLike}
        wishList={wishList}
        totalWish={totalWish}
        wish={wish}
        wishError={wishError}
        onGetBoardList={onGetBoardList}
        onGetBoardDetail={onGetBoardDetail}
        onDeleteBoard={onDeleteBoard}
        onGetReplyList={onGetReplyList}
        onGetReplyDetail={onGetReplyDetail}
        onDeleteReply={onDeleteReply}
        onGetLikeList={onGetLikeList}
        onGetLikeDetail={onGetLikeDetail}
        onDeleteLike={onDeleteLike}
        onGetWishDetail={onGetWishDetail}
        onAddSchedule={onAddSchedule}
        onDeleteWish={onDeleteWish}
        onGetWishList={onGetWishList}
        onUploadPhoto={onUploadPhoto}
        onChangePhoto={onChangePhoto}
        onChange={onChange}
        onNickCheck={onNickCheck}
        onChangeProfile={onChangeProfile}
        onWithdraw={onWithdraw}
      />
    </div>
  );
};

export default ProfileCntr;
