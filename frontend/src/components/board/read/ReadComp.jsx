import styled from "styled-components";
import { TitleComp } from "../../common/TitleComp";
import Responsive from "../../common/ResponsiceComp";
import ListActionButtonsComp from "../write/ListActionButtonsComp";

const ReadContainer = styled.div`
  text-align: left;
  border-bottom: 2px solid #333;
  padding: 13px 25px;

  .id {
    font-weight: 400;
    font-size: 16px;
    margin-top: 20px;
  }

  .likeandcnt {
    display: flex;
    text-align: right;
  }

  .likeandcnt p {
    margin-left: 20px;
  }
`;

const Content = styled.div`
  padding: 20px;
  margin-top: 20px;
  font-size: 18px;
`;

const ReadComp = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <div>존재하지않는포스트입니다</div>;
    }
    return <div>오류발생</div>;
  }

  if (loading || !post) {
    return null;
  }

  console.log("BoardRead====>", post.title);
  return (
    <>
      <Responsive>
        <ReadContainer>
          <TitleComp>{post.title}</TitleComp>
          <p className="id">{post.id}</p>
          <div className="likeandcnt">
            <p>{post.like}</p>
            <p>{post.cnt}</p>
          </div>
        </ReadContainer>
        <Content>
          <p>{post.content}</p>
        </Content>
        {actionButtons}
      </Responsive>
    </>
  );
};

export default ReadComp;
