import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, replywritePost } from "../../../modules/board/ReplyWriteMod";
import { useParams } from "react-router-dom";
import LoginMod from "../../../modules/LoginMod";
import ReplyMod from "../../../modules/board/ReplyWriteMod";
import { initialize } from "../../../modules/board/ReplyWriteMod";
import ReplyWriteComp from "../../../components/board/reply/ReplyWriteComp";
import { replyModifyPost } from "../../../lib/api/posts";

const ReplyWriteCntr = () => {
  const dispatch = useDispatch();
  const { readNo } = useParams();
  const emptyReply = useRef();
  const { id, content, reply, originreplyId } = useSelector(({ LoginMod, ReplyMod }) => ({
    id: LoginMod.id,
    content: ReplyMod.content,
    reply: ReplyMod.reply,
    originreplyId: ReplyMod.originreplyId,
  }));

  console.log(reply);
  const onChangeField = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      })
    );
  };

  const onPublish = (e) => {
    if (originreplyId) {
      dispatch(replyModifyPost({ content, no: originreplyId }));
      return;
    }
    e.preventDefault();
    dispatch(
      replywritePost({
        bno: readNo,
        id: id,
        content: content,
      })
    );
  };

  //댓글 등록시 input 초기화
  const onReset = () => {
    emptyReply.current.value = "";
  };

  useEffect(() => {
    dispatch(initialize());
    onReset();
  }, [reply]);

  return (
    <>
      <ReplyWriteComp onReset={onReset} onPublish={onPublish} onChangeField={onChangeField} emptyReply={emptyReply} isEdit={!!originreplyId} />
    </>
  );
};

export default ReplyWriteCntr;
