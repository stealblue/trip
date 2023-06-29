import ButtonComp from "../../components/common/ButtonComp";
import ListRoomComp from "../../components/chat/ListRoomComp";
import { useNavigate } from "react-router-dom";

const ChatPage = ({ testUser }) => {
  const navigate = useNavigate();

  const createRoom = () => {
    navigate("/chat/room");
  };

  return (
    <div>
      <ListRoomComp />
      <ButtonComp onClick={createRoom}>방만들기</ButtonComp>
    </div>
  );
};

export default ChatPage;
