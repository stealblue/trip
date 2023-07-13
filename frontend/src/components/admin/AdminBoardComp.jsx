import { styled } from "styled-components";
import Modal from "styled-react-modal";
import AdminUserGraph from "./AdminUserGraph";

const BoardContainer = styled.div`
  background: skyblue;
  height: 600px;
  width: 800px;
  margin: 20px;
`;

const BoardName = styled.div`
  background: yellow;
  color: green;
  font-size: 20px;
  padding: 10px 0;
`;

const Board = styled.div`
  background: white;
  height: 100%;
  border-radius: 20px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  background: green;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  background: gray;
  border-bottom: 1px solid black;
  cursor: pointer;
  height: 40px;
  padding: 0 10px;
`;

const Detail = styled.span`
  margin-right: 10px;
`;

const ControlButton = styled.button`
  border: none;
  background: gray;
  cursor: pointer;
  margin: 0 10px;
`;

const StyledModal = Modal.styled`
  background: white;
  height: 450px;
  width: 500px;

  div{
    display: flex;
    padding: 5px;
    justify-contents: space-between;
  }
`;

const AdminBoardComp = () => {
  return <div>AdminBoardComp</div>;
};

export default AdminBoardComp;
