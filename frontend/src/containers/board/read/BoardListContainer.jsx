import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardListComp from "../../../components/board/read/BoardListComp";
import { listPosts } from "../../../modules/board/BoardListMod";
import { useSearchParams } from "react-router-dom";
import MainBoardComp from "../../../components/main/MainBoardComp";

const BoardListContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { posts, user, error } = useSelector(({ BoardListMod, UserMod }) => ({
    posts: BoardListMod.posts,
    error: BoardListMod.error,
    user: UserMod.user,
  }));

  console.log("BoardListcon-->", posts);
  console.log("BoardListconuser-->", user);

  useEffect(() => {
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(listPosts({ page }));
  }, [dispatch, searchParams]);

  return (
    <>
      <BoardListComp posts={posts} error={error} showWriteButton={user} />
    </>
  );
};

export default BoardListContainer;
