import React from "react";

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
  const { title, owner, max } = room;
  return (
    <div>
      <p>{title}</p>
      <p>{owner}</p>
      <p>{max}</p>
    </div>
  );
};

export default ReadRoomComp;
