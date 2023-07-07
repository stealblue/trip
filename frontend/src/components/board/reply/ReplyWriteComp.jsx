import { styled } from "styled-components";
// import ReplyWriteActionButtonComp from "./ReplyWriteActionButtonComp";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, replywritePost } from "../../../modules/board/ReplyWriteMod";
import { useParams } from "react-router-dom";
import LoginMod from "../../../modules/LoginMod";
import ReplyMod from "../../../modules/board/ReplyWriteMod";

const ReplyWrapper = styled.div`
  margin-top: 20px;
  width: 100%;

  p {
    font-size: 24px;
  }
  textarea {
    width: 80%;
    height: 40px;
    margin-top: 20px;
    padding: 10px;
  }
`;

const ReplyWriteComp = () => {
  const dispatch = useDispatch();
  const { readNo } = useParams();
  const { id, content, reply } = useSelector(({ LoginMod, ReplyMod }) => ({
    id: LoginMod.id,
    content: ReplyMod.content,
    reply: ReplyMod.reply,
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
    e.preventDefault();
    dispatch(
      replywritePost({
        bno: readNo,
        id: id,
        content: content,
      })
    );
  };

  return (
    <>
      <ReplyWrapper>
        <p>댓글</p>
        <textarea name="content" placeholder="reply write comeon" onChange={onChangeField} />
        <button onClick={onPublish}>댓글</button>
        {/* {post.map((item) => (
          <div key={item.index}>
            {item.id} " : " {item.content}
          </div>
        ))} */}
      </ReplyWrapper>
    </>
  );
};

export default ReplyWriteComp;
