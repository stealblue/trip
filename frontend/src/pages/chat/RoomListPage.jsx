import ButtonComp from "../../components/common/ButtonComp";
import ListRoomCntr from "../../containers/chat/ListRoomCntr";
import { useNavigate } from "react-router-dom";

const RoomList = ({ testUser }) => {
  const navigate = useNavigate();
  const createRoom = () => {
    navigate("/chat/room");
  };

  return (
    <div>
      <ListRoomCntr />
      <ButtonComp onClick={createRoom}>방만들기</ButtonComp>
    </div>
  );
};

export default RoomList;
