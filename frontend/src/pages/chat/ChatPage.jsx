import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const ChatPage = ({ testUser }) => {
  const navigate = useNavigate();

  const createRoom = () => {
    navigate("/chat/room");
  };

  return (
    <div>
      <p>chatPage</p>
      <Button onClick={createRoom}>방만들기</Button>
    </div>
  );
};

export default ChatPage;
