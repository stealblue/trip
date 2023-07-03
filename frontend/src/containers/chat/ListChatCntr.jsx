import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListChatComp from "../../components/chat/ListChatComp";
import { listChats } from "../../modules/chat/ChatMod";
import { useSearchParams } from "react-router-dom";

const ListChatsCntr = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { chats, chatError, loading } = useSelector(({ ChatMod }) => ({
    chats: ChatMod.chats,
    chatError: ChatMod.chatError,
  }));

  const onChange = (e) => {};

  useEffect(() => {
    const room = searchParams.get("room");

    console.log("ListChatCntr ==> room : ", room);
    dispatch(listChats({ room }));
  }, [dispatch, searchParams]);
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
