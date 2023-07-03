import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readRoom } from "../../modules/chat/RoomMod";
import ReadRoomComp from "../../components/chat/ReadRoomComp";

const ReadRoomCntr = () => {
  const { roomId } = useParams();
  console.log("ReadRoomCntr ===> roomId : ", roomId);
  const dispatch = useDispatch();
  const { room, error, loading } = useSelector(({ RoomMod }) => ({
    room: RoomMod.room,
    error: RoomMod.error,
  }));

  useEffect(() => {
    const _id = roomId;
    console.log("ReadRoomCntr useEffect ===> _id : ", _id);
    dispatch(readRoom({ _id }));
  }, [dispatch, roomId]);
  return <ReadRoomComp room={room} error={error} loading={loading} />;
};

export default ReadRoomCntr;
