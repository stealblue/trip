import React from "react";
import { Link } from "react-router-dom";

const ReadRoomComp = ({ room }) => {
  console.log("room : ", room);
  const { title, createAt, owner, _id } = room;
  return (
    <div>
      <Link to={`room/${_id}`}>
        <div>
          <span>{title}</span>
          <br />
          <span>{createAt}</span>
          <br />
          <span>{owner}</span>
        </div>
      </Link>
    </div>
  );
};

export default ReadRoomComp;
