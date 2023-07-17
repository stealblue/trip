import React, { useEffect, useState } from "react";
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
  const [isLlike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { post, error, loading, user, like } = useSelector(({ ReadMod, loading, UserMod }) => ({
    post: ReadMod.post,
    error: ReadMod.error,
    user: UserMod.user,
    like: ReadMod.like
  }));

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
  const likeButton = (e) => {
    if (!isLlike) {
      setLikeCount(parseInt(e.target.dataset.cnt) + 1);
      setIsLike(true);
    } else {
      setLikeCount(parseInt(e.target.dataset.cnt) - 1);
      setIsLike(false);
    }
    // likePost({ id: user.id, no: post.no });
    dispatch(isLike({ bno: post.no, id: user.id }))
    if (like) {
      alert('1111', like);
    } else {
      alert('2222', like);
    }
  };

  return <ReadComp
    likeCount={likeCount}
    isLike={isLike}
    likeButton={likeButton}
    like={like}
    post={post}
    loading={loading}
    error={error}
    user={user}
    actionButtons={<ListActionButtonsComp onEdit={onEdit} onRemove={onRemove} />} />;
};

export default ReadContainer;
