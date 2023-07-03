import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { TitleComp, SubTitleComp } from "../../../components/common/TitleComp";
import WrapperComp from "../../../components/common/WrapperComp";
import ButtonComp from "../../../components/common/ButtonComp";

const ListContainer = styled.div`
  margin-top: 50px;
  .board-list {
    display: flex;
    padding: 10px 0px;
    border-bottom: 1px solid #999;
    padding: 50px 10px;
    transition: 0.3s;
    cursor: pointer;
  }

  .board-list:hover {
    opacity: 0.8;
  }

  .title {
    margin-top: 0px;
    font-size: 24px;
    font-weight: 600;
  }

  .board-list-text {
    margin-left: 20px;
  }

  .des {
    margin-top: 10px;
  }

  .nick {
    margin-top: 10px;
    font-size: 12px;
  }

  .date {
    margin-top: 5px;
    font-size: 12px;
  }
`;
const WriteButton = styled(ButtonComp)`
  margin-top: 20px;
  text-align: center;
  position: relative;
  left: 50%;
  top: 30px;
  transform: translate(-50%, 0);
`;

const BoardListTitle = styled(TitleComp)`
  text-align: center;
`;

const BoardListImg = styled.img`
  width: 300px;
`;

const BoardListItem = ({ post }) => {
  if (!post) {
    return <div>오류</div>;
  }

  const { no, title, content, like, cnt } = post;
  return (
    <ListContainer>
      <Link to={`/board/read/${no}`}>
        <div className="board-list">
          <BoardListImg src="/assets/mainslide.jpeg" />
          <div className="board-list-text">
            <h3 className="title">{title}</h3>
            <p>{content}</p>
          </div>
        </div>
      </Link>
    </ListContainer>
  );
};

const BoardListComp = ({ posts, showWriteButton, error }) => {
  console.log("posts : ", posts);

  if (error) {
    return <div>에러발생</div>;
  }

  if (posts === null) {
    return <div>로딩 중...</div>;
  }
  return (
    <>
      <WrapperComp>
        <BoardListTitle>여행 후기</BoardListTitle>
        <SubTitleComp>전국 여행후기를 남겨주세요!</SubTitleComp>
        {posts.map((post, index) => (
          <BoardListItem key={post.no} post={post} />
        ))}
        {!showWriteButton && <WriteButton to={"/board/write"}>글쓰기</WriteButton>}
      </WrapperComp>
    </>
  );
};

export default BoardListComp;
