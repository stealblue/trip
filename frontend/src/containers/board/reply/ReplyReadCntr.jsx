import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { replyreadPost } from "../../../modules/board/ReplyReadMod";
import ReplyReadComp from "../../../components/board/reply/ReplyReadComp";

const ReadContainer = () => {
  const dispatch = useDispatch();
  const { readNo } = useParams();
  const { reply, content, user } = useSelector(({ ReplyReadMod, UserMod }) => ({
    reply: ReplyReadMod.reply,
    content: ReplyReadMod.content,
    user: UserMod.user,
  }));
  console.log("reply :", reply);
  // console.log("아아아아아ㅏ아아", post);

  useEffect(() => {
    dispatch(
      replyreadPost({
        bno: readNo,
        content: content,
        user: user,
      })
    );
  }, [dispatch]);
  // console.log("setOriginpost---->", setOriginPost(post));

  return <ReplyReadComp content={content} reply={reply} user={user} />;
};

export default ReadContainer;
