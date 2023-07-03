import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readRoom } from "../../modules/chat/RoomMod";
import ReadRoomComp from "../../components/chat/ReadRoomComp";

const ReadRoomCntr = () => {
  const [chatValue, setChatValue] = useState("");
  const { roomId } = useParams();
  console.log("ReadRoomCntr ===> roomId : ", roomId);
  const dispatch = useDispatch();
  const { room, error, loading } = useSelector(({ RoomMod }) => ({
    room: RoomMod.room,
    error: RoomMod.error,
  }));

  const onClick = (e) => {
    setChatValue("");
  };
  const onChange = (e) => {
    setChatValue(e.target.value);
  };

  useEffect(() => {
    const _id = roomId;
    console.log("ReadRoomCntr useEffect ===> _id : ", _id);
    dispatch(readRoom({ _id }));
  }, [dispatch, roomId]);
  return (
    <ReadRoomComp
      room={room}
      error={error}
      loading={loading}
      onClick={onClick}
      onChange={onChange}
      chatValue={chatValue}
    />
  );
};

export default ReadRoomCntr;
