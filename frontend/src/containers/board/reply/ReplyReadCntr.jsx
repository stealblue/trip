import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { replyReadPost } from "../../../modules/board/ReplyReadMod";
import ReplyReadComp from "../../../components/board/reply/ReplyReadComp";

const ReplyReadCntr = () => {
  const dispatch = useDispatch();
  const { readNo } = useParams();
  const { replys, content, user } = useSelector(({ ReplyReadMod, UserMod }) => ({
    replys: ReplyReadMod.replys,
    content: ReplyReadMod.content,
    user: UserMod.user,
  }));
  console.log("reply :", replys);
  console.log("아아아아아ㅏ아아", content);

  useEffect(() => {
    dispatch(
      replyReadPost({
        bno: readNo,
        content: content,
        user: user,
      })
    );
  }, [dispatch]);
  // console.log("setOriginpost---->", setOriginPost(post));

  return <ReplyReadComp content={content} replys={replys} user={user} />;
};

export default ReplyReadCntr;
