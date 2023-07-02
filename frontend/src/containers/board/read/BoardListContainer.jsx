import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardListComp from "../../../components/board/read/BoardListComp";
import { listPosts } from "../../../modules/board/BoardListMod";
// import { useParams, useSearchParams } from "react-router-dom";

const BoardListContainer = () => {
  const dispatch = useDispatch();

  const { posts, error } = useSelector(({ BoardListMod, loading }) => ({
    posts: BoardListMod.posts,
    error: BoardListMod.error,
  }));

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return <BoardListComp posts={posts} error={error} />;
};

export default BoardListContainer;
