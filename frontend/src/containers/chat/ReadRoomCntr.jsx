import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readRoom } from "../../modules/chat/RoomMod";
import ReadRoomComp from "../../components/chat/ReadRoomComp";

const ReadRoomCntr = () => {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const { room, error, loading } = useSelector(({ RoomMod }) => ({
    room: RoomMod.room,
    error: RoomMod.error,
  }));

  useEffect(() => {
    dispatch(readRoom(roomId));
  }, [dispatch, roomId]);
  return <ReadRoomComp room={room} error={error} loading={loading} />;
};

export default ReadRoomCntr;
