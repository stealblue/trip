import React, { useEffect } from "react";
import WriteActionbuttonsComp from "../../../components/board/write/WriteActionButtonsComp";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import client from "../../../lib/api/client";
import { writePost } from "../../../modules/board/WriteMod";
import Axios from "axios";

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { title, body, tags, post, postError } = useSelector(({ WriteMod }) => ({
    title: WriteMod.title,
    body: WriteMod.body,
    tags: WriteMod.tags,
    post: WriteMod.post,
    postError: WriteMod.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      })
    );
  };

  console.log("WriteActionButtonsContainer ===>", title, body, tags);
  //취소
  const onCancel = () => {
    navigate(-1);
  };

  const submitTest = () => {
    Axios.get("http://localhost:4000/", {}).then(() => {
      alert("등록 완료!");
    });
  };

  // 성공 실패시 작업
  useEffect(() => {
    if (post) {
      navigate(`/board/read`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return (
    <>
      <WriteActionbuttonsComp onClick={submitTest} onCancel={onCancel} />
      <button onClick={submitTest}>글쓰기</button>
    </>
  );
};

export default WriteActionButtonsContainer;
