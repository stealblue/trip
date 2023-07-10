import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { replyReadPost } from "../../../modules/board/ReplyReadMod";
import ReplyReadComp from "../../../components/board/reply/ReplyReadComp";
import ReplyActionButtonsComp from "./ReplyActionButtonsComp";
import { replysetOriginPost } from "../../../modules/board/ReplyWriteMod";
import { replyRemovePost } from "../../../lib/api/posts";

const ReplyReadCntr = () => {
  const dispatch = useDispatch();
  const { readNo } = useParams();
  const { replys, content, user, reply, no } = useSelector(({ ReplyWriteMod, ReplyReadMod, UserMod }) => ({
    reply: ReplyWriteMod.reply,
    replys: ReplyReadMod.replys,
    content: ReplyReadMod.content,
    user: UserMod.user,
  }));

  console.log("replyReadcntr ====> originpost :", replys);

  useEffect(() => {
    console.log("ddddddddddddddddddddddddddddddddddddddddddddddddd");
    dispatch(
      replyReadPost({
        bno: readNo,
        content: content,
        user: user,
      })
    );
  }, [dispatch, reply]);

  const onEdit = (e) => {
    console.log("target : ", e.target);
    const reply = e.target.value;
    dispatch(replysetOriginPost(reply));
  };

  const onRemove = async () => {
    try {
      const no = readNo;
      await replyRemovePost(no);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ReplyReadComp content={content} replys={replys} user={user} onEdit={onEdit} onRemove={onRemove} />;
    </>
  );
};

export default ReplyReadCntr;
