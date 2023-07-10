import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { replyReadPost } from "../../../modules/board/ReplyReadMod";
import ReplyReadComp from "../../../components/board/reply/ReplyReadComp";
import ReplyActionButtonsComp from "./ReplyActionButtonsComp";
import { replysetOriginPost, replyupdatePost } from "../../../modules/board/ReplyWriteMod";
import { replyRemovePost } from "../../../lib/api/posts";
import Swal from 'sweetalert2';

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
    const no = e.target.dataset.no;
    console.log('no : ', no);
    const content = e.target.dataset.content;
    console.log('content : ', content);
    Swal.fire({
      title: '댓글 수정',
      input: 'text',
      inputValue: `${content}`,
      showCancelButton: true,
      confirmButtonText: 'submit',
      showLoaderOnConfirm: true, // 필요가 없을거 같기도 하지만 넣음
      preConfirm: (input) => {
        dispatch(replyupdatePost({ no, content: input }))
      }
    });
    // dispatch(replysetOriginPost(reply));
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
