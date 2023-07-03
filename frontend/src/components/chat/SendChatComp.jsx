import React from "react";

const SendChatComp = ({ onClick, room, user, content, onChange }) => {
  return (
    <div>
      <form>
        <input name="room" value={room} type="hidden" />
        <input name="user" value={user} type="hidden" />
        <input onChange={onChange} value={content} name="content" />
        <button onClick={onClick}>전송</button>
      </form>
    </div>
  );
};

export default SendChatComp;
