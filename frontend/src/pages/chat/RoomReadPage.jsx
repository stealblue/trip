// import ListChatsCntr from "../../containers/chat/ListChatCntr";
import ReadRoomCntr from "../../containers/chat/ReadRoomCntr";
import SendChatCntr from "../../containers/chat/SendChatCntr";

const RoomReadPage = () => {
  return (
    <div>
      <ReadRoomCntr />
      {/* <ListChatsCntr /> */}
      <SendChatCntr />
    </div>
  );
};

export default RoomReadPage;
