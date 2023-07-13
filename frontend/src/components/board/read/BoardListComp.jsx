import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { TitleComp, SubTitleComp } from "../../../components/common/TitleComp";
import WrapperComp from "../../../components/common/WrapperComp";
import ButtonComp from "../../../components/common/ButtonComp";
import PaginationComp from "./PaginationComp";
const ListContainer = styled.div`
  margin-top: 50px;
  .board-list {
    display: flex;
    padding: 10px 0px;
    border-bottom: 1px solid #999;
    padding: 40px 10px;
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

    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .board-list-text {
    margin-left: 20px;
    margin-top: 1rem;
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
  .content {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-top: 1rem;
  }

  .write-id {
    margin-top: 1rem;
    font-weight: 500;
  }

  .createat {
    font-size: 12px;
    color: #7b7b7b;
    margin-top: 1rem;
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

  const { no, id, title, content, createAt, like, cnt, user } = post;
  return (
    <ListContainer>
      <Link to={`/board/read/${no}`}>
        <div className="board-list">
          <BoardListImg src="/assets/mainslide.jpeg" />
          <div className="board-list-text">
            <h3 className="title">{title}</h3>
            <p className="content">{content}</p>
            <p className="write-id">{id}</p>
            <p className="createat">작성일자 : {createAt}</p>
          </div>
        </div>
      </Link>
    </ListContainer>
  );
};

const BoardListComp = ({ posts, showWriteButton, error }) => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
        {showWriteButton && <WriteButton to={"/board/write"}>글쓰기</WriteButton>}
        {posts.slice(offset, offset + limit).map((post, index) => (
          <BoardListItem key={post.no} post={post} />
        ))}
        {showWriteButton && <WriteButton to={"/board/write"}>글쓰기</WriteButton>}
      </WrapperComp>
      <footer>
        <PaginationComp total={posts.length} limit={limit} page={page} setPage={setPage} />
      </footer>
    </>
  );
};

export default BoardListComp;
