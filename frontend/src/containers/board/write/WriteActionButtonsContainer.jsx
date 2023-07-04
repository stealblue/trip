import React, { useEffect } from "react";
import WriteActionbuttonsComp from "../../../components/board/write/WriteActionButtonsComp";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { writePost, updatePost } from "../../../modules/board/WriteMod";

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { title, content, post, postError, originPostId } = useSelector(({ WriteMod }) => ({
    title: WriteMod.title,
    content: WriteMod.content,
    // tags: WriteMod.tags,
    post: WriteMod.post,
    postError: WriteMod.postError,
    originPostId: writePost.originPostId,
  }));

  // 포스트 등록
  const onPublish = () => {
    if (originPostId) {
      dispatch(updatePost({ title, content, id: originPostId }));
      return;
    }
    dispatch(
      writePost({
        title,
        content,
      })
    );
  };

  console.log("WriteActionButtonsContainer ===>", title, content);
  //취소
  const onCancel = () => {
    navigate(-1);
  };

  // const submitTest = () => {
  //   Axios.get("http://localhost:4000/", {}).then(() => {
  //     alert("등록 완료!");
  //   });
  // };

  // 성공 실패시 작업
  useEffect(() => {
    if (post) {
      // const { id } = post;
      console.log("WriteActionButtonsCon=>", post);
      // navigate(`/board/${id}`);
      navigate(`/board`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return (
    <>
      <WriteActionbuttonsComp onPublish={onPublish} onCancel={onCancel} isEdit={!originPostId} />
    </>
  );
};

export default WriteActionButtonsContainer;
