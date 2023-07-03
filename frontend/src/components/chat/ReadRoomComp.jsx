import React from "react";
import styled from "styled-components";

const ChatBlock = styled.div`
  height: 600px;
  overflow: auto;
  background-color: steelblue;
`;

const ReadRoomComp = ({ room, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <div>존재하지 않은 방입니다.</div>;
    }
    return <div>오류 발생!</div>;
  }
  if (!room) {
    return null;
  }
  const { title, owner, max } = room.data;
  console.log("room : ", room);
  return (
    <div>
      <div>
        <p>채팅 방 제목 : {title}</p>
        <p>{owner}</p>
        <p>{max}</p>
      </div>
      <ChatBlock />
      <div>
        <p>
          <input />
          <button>전송</button>
        </p>
      </div>
    </div>
  );
};

export default ReadRoomComp;
