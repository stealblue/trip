import { styled } from "styled-components";
import BoardListContainer from "../../components/board/read/BoardListComp";
import { Link } from "react-router-dom";
import { TitleComp, SubTitleComp } from "../../components/common/TitleComp";
import WrapperComp from "../../components/common/WrapperComp";
import ButtonComp from "../../components/common/ButtonComp";

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

const WriteButton = styled(ButtonComp)`
  margin-top: 20px;
  text-align: center;
  position: relative;
  left: 50%;
  top: 30px;
  transform: translate(-50%, 0);
`;

const BoardListImg = styled.img`
  width: 300px;
`;

const BoardListPage = () => {
  return <BoardListContainer />;
};

export default BoardListPage;
