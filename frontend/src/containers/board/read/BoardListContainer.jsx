import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardListComp from "../../../components/board/read/BoardListComp";
import { listPosts } from "../../../modules/board/BoardListMod";
// import { useParams, useSearchParams } from "react-router-dom";

const BoardListContainer = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector(({ BoardListMod, error, loading }) => ({
    posts: BoardListMod.posts,
    error: BoardListMod.error,
    loading: loading["board/LIST_POSTS"],
  }));
  // const username = "abc"; //임시 유저
  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return <BoardListComp posts={posts} />;
};
export default BoardListContainer;
