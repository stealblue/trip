import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { replyReadPost } from "../../../modules/board/ReplyReadMod";
import ReplyReadComp from "../../../components/board/reply/ReplyReadComp";
import replysetOriginPost from "../../../modules/board/ReplyWriteMod";

const ReplyReadCntr = () => {
  const dispatch = useDispatch();
  const { readNo } = useParams();
  const { replys, content, user, reply } = useSelector(({ ReplyMod, ReplyReadMod, UserMod }) => ({
    reply: ReplyMod.reply,
    replys: ReplyReadMod.replys,
    content: ReplyReadMod.content,
    user: UserMod.user,
  }));

  console.log("replyReadcntr ====> originpost :", replys);

  const onEdit = () => {
    dispatch(replysetOriginPost(replys));
  };

  useEffect(() => {
    dispatch(
      replyReadPost({
        bno: readNo,
        content: content,
        user: user,
      })
    );
  }, [dispatch, reply]);

  return <ReplyReadComp content={content} replys={replys} user={user} onEdit={onEdit} />;
};

export default ReplyReadCntr;
