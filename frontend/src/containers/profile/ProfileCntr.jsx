import { useEffect, useState } from "react";
import ProfileComp from "../../components/profile/ProfileComp";

const ProfileCntr = () => {
  const modal = "modal";
  const [boardType, setBoardType] = useState();
  const boardList = [1, 2, 3, 4, 5];
  const replyList = [6, 7, 8, 9, 10];
  const wishList = [11, 12, 13, 14, 15];
  const schedulerList = [16, 17, 18, 19, 20];

  const getBoardList = () => {
    setBoardType("BOARD");
    console.log(boardType);
  };

  const getReplyList = () => {
    setBoardType("REPLY");
    console.log(boardType);
  };

  const getWishList = () => {
    setBoardType("WISHLIST");
    console.log(boardType);
  };

  const getScheduler = () => {
    setBoardType("SCHEDULER");
    console.log(boardType);
  };

  return (
    <div>
      <ProfileComp
        modal={modal}
        boardType={boardType}
        boardList={boardList}
        replyList={replyList}
        wishList={wishList}
        schedulerList={schedulerList}
        getBoardList={getBoardList}
        getReplyList={getReplyList}
        getWishList={getWishList}
        getScheduler={getScheduler}
      />
    </div>
  );
};

export default ProfileCntr;
