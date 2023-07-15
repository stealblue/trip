import { useEffect, useState } from "react";
import ProfileComp from "../../components/profile/ProfileComp";
import { useDispatch, useSelector } from "react-redux";
import ProfileMod, {
  deleteBoard,
  getBoardList,
  getProfile,
} from "../../modules/profile/ProfileMod";

const ProfileCntr = () => {
  const dispatch = useDispatch();
  const { id, user, boardList, totalBoard } = useSelector(
    ({ UserMod, ProfileMod }) => ({
      id: UserMod.user.id,
      user: ProfileMod.user,
      boardList: ProfileMod.boardList,
      totalBoard: ProfileMod.totalBoard,
    })
  );
  const modal = "modal";
  const [boardType, setBoardType] = useState();
  const replyList = [6, 7, 8, 9, 10];
  const likeList = [11, 12, 13, 14, 15];
  const wishList = [16, 17, 18, 19, 20];

  const onGetBoardList = () => {
    setBoardType("BOARD");
    dispatch(getBoardList({ id }));
  };

  const onGetReplyList = () => {
    setBoardType("REPLY");
    console.log(boardType);
  };

  const onGetLikeList = () => {
    setBoardType("LIKELIST");
    console.log(boardType);
  };

  const onGetWishList = () => {
    setBoardType("SCHEDULER");
    console.log(boardType);
  };

  const onModify = () => {
    console.log("정보수정");
  };

  const onWithdraw = () => {
    console.log("회원탈퇴");
  };

  const onDelete = (no) => {
    dispatch(
      deleteBoard({
        no,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getProfile({
        id,
      })
    );
  }, [dispatch]);

  useEffect(() => {}, []);
  return (
    <div>
      <ProfileComp
        user={user}
        modal={modal}
        boardType={boardType}
        boardList={boardList}
        totalBoard={totalBoard}
        replyList={replyList}
        likeList={likeList}
        wishList={wishList}
        onGetBoardList={onGetBoardList}
        onGetReplyList={onGetReplyList}
        onGetLikeList={onGetLikeList}
        onGetWishList={onGetWishList}
        onModify={onModify}
        onWithdraw={onWithdraw}
        onDelete={onDelete}
      />
    </div>
  );
};

export default ProfileCntr;
