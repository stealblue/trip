import React from "react";
import styled from "styled-components";

const ChatBlock = styled.div`
  height: 600px;
  overflow: auto;
  background-color: steelblue;
  color: whitesmoke;
  .me {
    text-align: right;
  }
  .other {
    text-align: left;
  }
`;

const ChatItem = ({ chat, onChange }) => {
  console.log("chat : ", chat);
  const { room, user, content, _id } = chat;
  return (
    <div key={_id}>
      <p>{user}</p>
      <p>{content.String}</p>
    </div>
  );
};

const ListChatComp = ({ chats, loading, onChange }) => {
  return (
    <ChatBlock>
      {!loading &&
        chats &&
        chats.data.map((chat) => (
          <ChatItem chat={chat} onChange={onChange} key={chat._id} />
        ))}
    </ChatBlock>
  );
};

export default ListChatComp;
