import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { TitleComp, SubTitleComp } from "../../../components/common/TitleComp";
import WrapperComp from "../../../components/common/WrapperComp";
import ButtonComp from "../../../components/common/ButtonComp";
import PaginationComp from "../../common/PaginationComp";
import { addWishList } from "../../../lib/api/wishList";
import ThemeComp from "../../common/ThemeComp";
import { makeCreatedAt } from "../../../lib/makeCreatedAt";
const ListContainer = styled.div`
  margin-top: 50px;
  .board-list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    background: ${ThemeComp.smoke};
    padding: 20px;
    transition: 0.3s;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .board-list:hover {
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.22), 0 8px 8px rgba(0, 0, 0, 0.22);
  }

  .title {
    margin-top: 0px;
    font-size: 28px;
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
    font-size: 16px;
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
    font-size: 16px;
    color: #7b7b7b;
    margin-top: 1rem;
  }
`;
const WriteButton = styled(ButtonComp)`
  margin: 20px 0;
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
  width: 400px;
`;

const BoardListItem = ({ post }) => {
  if (!post) {
    return <div>오류</div>;
  }
  // console.log('post : ', post);
  const { no, id, title, content, createAt, updateAt, like, cnt } = post;
  // console.log("content : ", content);
  return (
    <ListContainer>
      <Link to={`/board/read/${no}`}>
        <div className="board-list">
          <BoardListImg src="/assets/mainslide.jpeg" />
          <div className="board-list-text">
            <h3 className="title">{title}</h3>
            <h4> 좋아요: {like} 조회수 : {cnt}</h4>
            {/* <p className="content">{content}</p> */}
            <p className="write-id">{id}</p>
            {updateAt ? <p className="createat">수정일자 : {makeCreatedAt(updateAt)}</p> : <p className="createat">작성일자 : {makeCreatedAt(createAt)}</p>}
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
  // console.log("posts : ", posts);
  return (
    <>
      <WrapperComp>
        <BoardListTitle>여행 후기</BoardListTitle>
        <SubTitleComp>전국 여행후기를 남겨주세요!</SubTitleComp>
        {showWriteButton && (
          <WriteButton to={"/board/write"}>글쓰기</WriteButton>
        )}
        {posts &&
          posts
            .slice(offset, offset + limit)
            .map((post, index) => <BoardListItem key={post.no} post={post} />)}
        {/* {showWriteButton && <WriteButton to={"/board/write"}>글쓰기</WriteButton>} */}
        <div className="pagin">
          {posts && (
            <PaginationComp
              total={posts.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </WrapperComp>
    </>
  );
};

export default BoardListComp;
