import { styled } from "styled-components";

import { Title, SubTitle } from "../../components/common/Title";
import Wrapper from "../../components/common/Wrapper";
import Button from "../../components/common/Button";

const BoardListPage = (props) => {
  console.log(props);

  const ListContainer = styled.div`
    margin-top: 50px;

    .board-list {
      display: flex;
      justify-content: space-around;
      padding: 10px 0;
      border-bottom: 1px solid #999;
      padding: 20px 0;
      transition: 0.3s;
      cursor: pointer;
    }

    .board-list:hover {
      opacity: 0.8;
    }

    .title {
      margin-top: 30px;
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

  const WriteButton = styled(Button)`
    margin-top: 20px;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  `;

  const BoardListImg = styled.img`
    width: 300px;
  `;

  return (
    <>
      <Wrapper>
        <Title>여행 후기</Title>
        <SubTitle>전국 여행후기를 남겨주세요!</SubTitle>
        <ListContainer>
          {props.boardData.map((m) => (
            <div className="board-list" key={m.id}>
              <BoardListImg src="/assets/mainslide.jpeg" />
              <div className="board-list-text">
                <div className="title">{m.title}</div>
                <p className="des">{m.content}</p>
                <p className="nick">{m.nick}</p>
                <p className="date">2023.06.02</p>
              </div>
            </div>
          ))}
        </ListContainer>

        {/* {props.boardData} */}
        <WriteButton to={"/board/write"}>글쓰기</WriteButton>
      </Wrapper>
    </>
  );
};

export default BoardListPage;
