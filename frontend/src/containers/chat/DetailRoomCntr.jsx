// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { sendChatting } from "../../modules/chat/ChattingMod";
import ReadRoomComp from "../../components/chat/ReadRoomComp";
// import axios from "axios";
// import io from "socket.io-client";
// import
const DetailRoomCntr = () => {
  //   const dispatch = useDispatch();
  //   const { room, user, chat, loading } = useSelector(({ ChattingMod }) => ({
  //     room: ChattingMod.room,
  //     user: ChattingMod.user,
  //     chat: ChattingMod.chat,
  //   }));
  //   useEffect(() => {
  //     // const socket = io.connect('http://localhost/chat', {path:''})
  //     dispatch(sendChatting({ room, user, chat }));
  //   }, [dispatch]);
  return <ReadRoomComp />;
  // room={room} user={user} chat={chat} loading={loading} />
};

export default DetailRoomCntr;
