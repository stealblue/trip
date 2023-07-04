// import React from "react";
// import styled from "styled-components";

// const ChatBlock = styled.div`
//   height: 600px;
//   overflow: auto;
//   background-color: steelblue;
//   color: whitesmoke;
//   .me {
//     text-align: right;
//   }
//   .other {
//     text-align: left;
//   }
// `;

// const ChatItem = ({ chat, onChange }) => {
//   console.log("chat : ", chat);
//   const { user, content, _id } = chat;
//   return (
//     <div key={_id}>
//       <p>보낸이 : {user}</p>
//       <p>내용 : {content}</p>
//     </div>
//   );
// };

// const ListChatComp = ({ chats, loading, onChange, inputMessage }) => {
//   console.log("ListChatComp ====> chats : ", chats);
//   return (
//     <ChatBlock>
//       {chats &&
//         chats.map((chat) => (
//           <ChatItem chat={chat} onChange={onChange} key={chat._id} />
//         ))}
//     </ChatBlock>
//   );
// };

// export default ListChatComp;

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

const ChatItem = ({ chat }) => {
  const { user, content, _id } = chat;
  return (
    <div key={_id}>
      <p>보낸이: {user}</p>
      <p>내용: {content}</p>
    </div>
  );
};

const ListChatComp = ({ chats, loading, onChange, inputMessage, onClick }) => {
  return (
    <ChatBlock>
      {chats.map((chat) => (
        <ChatItem chat={chat} key={chat._id} />
      ))}
      <input type="text" value={inputMessage} onChange={onChange} />
      <button onClick={onClick}>전송</button>
    </ChatBlock>
  );
};

export default ListChatComp;
