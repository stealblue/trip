import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardListComp from "../../../components/board/read/BoardListComp";
import { listPosts } from "../../../modules/board/BoardListMod";
import { useSearchParams } from "react-router-dom";

const BoardListContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { posts, error } = useSelector(({ BoardListMod }) => ({
    posts: BoardListMod.posts,
    error: BoardListMod.error,
  }));
  const postlist2 = posts && posts.data;
  // console.log("postlist2===>", postlist2);
  console.log("BoardListcon-->", posts);

  useEffect(() => {
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(listPosts({ page }));
  }, [dispatch, searchParams]);

  return <BoardListComp posts={posts} error={error} />;
};

export default BoardListContainer;
