import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  replywritePost,
} from "../../../modules/board/ReplyWriteMod";
import { useParams } from "react-router-dom";
import UserMod from "../../../modules/auth/UserMod";
import ReplyWriteMod from "../../../modules/board/ReplyWriteMod";
import { initialize } from "../../../modules/board/ReplyWriteMod";
import ReplyWriteComp from "../../../components/board/reply/ReplyWriteComp";

const ReplyWriteCntr = () => {
  const dispatch = useDispatch();
  const { readNo } = useParams();
  const emptyReply = useRef();
  const { id, content, reply, originreplyId } = useSelector(
    ({ UserMod, ReplyWriteMod }) => ({
      id: UserMod.id,
      content: ReplyWriteMod.content,
      reply: ReplyWriteMod.reply,
    })
  );

  // console.log(content);
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
      <ReplyWriteComp
        onReset={onReset}
        onPublish={onPublish}
        onChangeField={onChangeField}
        emptyReply={emptyReply}
        isEdit={!!originreplyId}
      />
    </>
  );
};

export default ReplyWriteCntr;
