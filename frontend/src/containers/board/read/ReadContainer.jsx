import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readPost, unloadPost } from "../../../modules/board/ReadMod";
import ReadComp from "../../../components/board/read/ReadComp";

const ReadContainer = () => {
  const { readNo } = useParams();
  const dispatch = useDispatch();

  const { post, error, loading } = useSelector(({ ReadMod, loading }) => ({
    post: ReadMod.post,
    error: ReadMod.error,
    // loading: loading["post/READ_POST"],
  }));

  useEffect(() => {
    dispatch(readPost(readNo));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, readNo]);
  return <ReadComp post={post} loading={loading} error={error}></ReadComp>;
};

export default ReadContainer;
