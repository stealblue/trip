import BoardListContainer from "../../components/board/read/BoardListComp";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const { no, id, title, cnt } = post;
  return (
    <Link to={`/board/${no}`}>
      <div>
        <span>{no}</span>
        <span>{id}</span>
        <span>{title}</span>
        <span>{cnt}</span>
      </div>
    </Link>
  );
};

const BoardListPage = ({ posts, loading, error }) => {
  console.log(posts);

  if (error) return <div>에러</div>;
  return (
    <div>
      {posts?.map((post) => (
        <PostItem post={post} key={post.no} />
      ))}
    </div>
  );
};

export default BoardListPage;
