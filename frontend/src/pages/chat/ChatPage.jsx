import ButtonComp from "../../components/common/ButtonComp";
import RoomListCntr from "../../containers/chat/RoomListCntr";
import { useNavigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const ChatPage = ({ testUser }) => {
  const navigate = useNavigate();

  const createRoom = () => {
    navigate("/chat/room");
  };

  return (
    <div>
      <RoomListCntr />
      {/* <Outlet /> */}
      <ButtonComp onClick={createRoom}>방만들기</ButtonComp>
    </div>
  );
};

export default ChatPage;
