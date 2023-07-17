import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { readPost, unloadPost, likePost, isLike } from "../../../modules/board/ReadMod";
import ReadComp from "../../../components/board/read/ReadComp";
import ListActionButtonsComp from "../../../components/board/read/ListActionButtonsComp";
import { setOriginPost } from "../../../modules/board/WriteMod";
import { removePost } from "../../../lib/api/posts";

const ReadContainer = () => {
  const { readNo } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { post, error, loading, user, like } = useSelector(({ ReadMod, loading, UserMod }) => ({
    post: ReadMod.post,
    error: ReadMod.error,
    user: UserMod.user,
    like: ReadMod.like
    // loading: loading["post/READ_POST"],
  }));
  // console.log("아아아아아ㅏ아아", post);


  useEffect(() => {
    return () => {
      dispatch(unloadPost());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(readPost(readNo), likePost(readNo, user));
    // if (user && post) {
    //   const id = user.id;
    //   const bno = post.no;
    //   dispatch(isLike({ id, bno }));
    // }

  }, [dispatch, readNo, user]);

  const onEdit = () => {
    dispatch(setOriginPost(post));
    navigate("/board/write");
  };

  const onRemove = async () => {
    try {
      const no = readNo;
      await removePost(no);
      navigate("/board");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("setOriginpost---->", setOriginPost(post));
  console.log("user====================================>", user);
  return <ReadComp like={like} post={post} loading={loading} error={error} user={user} actionButtons={<ListActionButtonsComp onEdit={onEdit} onRemove={onRemove} />}></ReadComp>;
};

export default ReadContainer;
