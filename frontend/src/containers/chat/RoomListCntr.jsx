import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListRoomComp from "../../components/chat/ListRoomComp";
import { listRooms } from "../../modules/chat/ListRoomsMod";
import { useSearchParams } from "react-router-dom";

const RoomListCntr = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { rooms, error, loading } = useSelector(
    ({ ListRoomsMod, loading }) => ({
      rooms: ListRoomsMod.rooms?.data,
      error: ListRoomsMod.error,
      // loading: loading["chat/LIST_ROOMS"],
    })
  );

  useEffect(() => {
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(listRooms({ page }));
  }, [dispatch, searchParams]);
  return (
    <ListRoomComp error={error} rooms={rooms} loading={loading} />
    // <ListRoomComp loading={loading} error={error} ListRoomsMod={ListRoomsMod} />
  );
};

export default RoomListCntr;
