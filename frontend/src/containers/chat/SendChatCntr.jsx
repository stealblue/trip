import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SendChatComp from "../../components/chat/SendChatComp";
import { insertChat, changeField } from "../../modules/chat/ChatMod";

const SendChatCntr = () => {
  const dispatch = useDispatch();
  const { room, user, content, _id } = useSelector(({ ChatMod, RoomMod }) => ({
    room: RoomMod.room?._id,
    user: ChatMod.user,
    content: ChatMod.content,
    chat: ChatMod.chat,
    chatError: ChatMod.chatError,
    _id: RoomMod.room?._id,
  }));
  // console.log("_id : ", _id, room);
  const onClick = () => {
    console.log(`room : ${room} / user : ${user} / content: ${content}`);
    dispatch(
      insertChat({
        room,
        user,
        content,
      })
    );
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ value, key: name }));
  };

  return <SendChatComp onClick={onClick} onChange={onChange} />;
};

export default SendChatCntr;
