import { useEffect, useState } from "react";
import ProfileComp from "../../components/profile/ProfileComp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileMod, {
  deleteBoard,
  deleteLike,
  deleteReply,
  getBoardList,
  getLikeList,
  getProfile,
  getReplyList,
} from "../../modules/profile/ProfileMod";

const ProfileCntr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    id,
    user,
    boardList,
    totalBoard,
    deleteBoardError,
    replyList,
    totalReply,
    deleteReplyError,
    likeList,
    totalLike,
    deleteLikeError,
  } = useSelector(({ UserMod, ProfileMod }) => ({
    id: UserMod.user.id,
    user: ProfileMod.user,
    boardList: ProfileMod.boardList,
    totalBoard: ProfileMod.totalBoard,
    deleteBoardError: ProfileMod.deleteBoardError,
    replyList: ProfileMod.replyList,
    totalReply: ProfileMod.totalReply,
    deleteReplyError: ProfileMod.deleteReplyError,
    likeList: ProfileMod.likeList,
    totalLike: ProfileMod.totalLike,
    deleteLikeError: ProfileMod.deleteLikeError,
  }));
  const modal = "modal";
  const [boardType, setBoardType] = useState();
  const wishList = [16, 17, 18, 19, 20];

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

  const onGetWishList = () => {
    setBoardType("SCHEDULER");
  };

  const onModify = () => {
    console.log("정보수정");
  };

  const onWithdraw = () => {
    console.log("회원탈퇴");
  };

  useEffect(() => {
    dispatch(
      getProfile({
        id,
      })
    );
    //total length만 불러오는 action 따로 만들기
    dispatch(
      getReplyList({
        id,
      })
    );
    setBoardType("BOARD"); //처음 렌더링 될 때 먼저 보여질 리스트
  }, [dispatch]);

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

  return (
    <div>
      <ProfileComp
        user={user}
        modal={modal}
        boardType={boardType}
        boardList={boardList}
        totalBoard={totalBoard}
        replyList={replyList}
        totalReply={totalReply}
        likeList={likeList}
        totalLike={totalLike}
        wishList={wishList}
        onGetBoardList={onGetBoardList}
        onGetBoardDetail={onGetBoardDetail}
        onDeleteBoard={onDeleteBoard}
        onGetReplyList={onGetReplyList}
        onGetReplyDetail={onGetReplyDetail}
        onDeleteReply={onDeleteReply}
        onGetLikeList={onGetLikeList}
        onGetLikeDetail={onGetLikeDetail}
        onDeleteLike={onDeleteLike}
        onGetWishList={onGetWishList}
        onModify={onModify}
        onWithdraw={onWithdraw}
      />
    </div>
  );
};

export default ProfileCntr;
