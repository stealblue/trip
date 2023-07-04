import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListChatComp from "../../components/chat/ListChatComp";
import { listChats } from "../../modules/chat/ChatMod";
// import { useSearchParams } from "react-router-dom";

const ListChatsCntr = () => {
  // const [searchParams] = useSearchParams("roomId");
  const dispatch = useDispatch();
  const { chats, chatError, loading, room } = useSelector(
    ({ ChatMod, RoomMod }) => ({
      chats: ChatMod.chats,
      chatError: ChatMod.chatError,
      room: RoomMod.room?._id,
    })
  );

  const onChange = (e) => {};

  useEffect(() => {
    // const room = searchParams.get("roomId");
    console.log("ListChatCntr ==> room : ", room);
    dispatch(listChats({ room }));
  }, []);
  return (
    <ListChatComp
      chats={chats}
      onChange={onChange}
      loading={loading}
      chatError={chatError}
    />
  );
};

export default ListChatsCntr;
