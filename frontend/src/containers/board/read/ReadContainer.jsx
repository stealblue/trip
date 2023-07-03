import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { readPost, unloadPost } from "../../../modules/board/ReadMod";
import ReadComp from "../../../components/board/read/ReadComp";
import ListActionButtonsComp from "../../../components/board/write/ListActionButtonsComp";
import { setOriginPost } from "../../../modules/board/WriteMod";

const ReadContainer = () => {
  const { readNo } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { post, error, loading } = useSelector(({ ReadMod, loading }) => ({
    post: ReadMod.post,
    error: ReadMod.error,
    // loading: loading["post/READ_POST"],
  }));
  console.log("아아아아아ㅏ아아", post);

  useEffect(() => {
    dispatch(readPost(readNo));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, readNo]);

  const onEdit = () => {
    if (post) {
      dispatch(setOriginPost(post));
      navigate("/board/write");
    }
  };

  console.log("setOriginpost---->", setOriginPost);

  return <ReadComp post={post} loading={loading} error={error} actionButtons={<ListActionButtonsComp onEdit={onEdit} />}></ReadComp>;
};

export default ReadContainer;
