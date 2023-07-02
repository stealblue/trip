import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListRoomComp from "../../components/chat/ListRoomComp";
import { listRooms } from "../../modules/chat/ListRoomsMod";
import { useSearchParams } from "react-router-dom";

const ListRoomCntr = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { rooms, error, loading } = useSelector(({ ListRoomsMod }) => ({
    rooms: ListRoomsMod.rooms?.data,
    error: ListRoomsMod.error,
  }));

  useEffect(() => {
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(listRooms({ page }));
  }, [dispatch, searchParams]);
  return <ListRoomComp error={error} rooms={rooms} loading={loading} />;
};

export default ListRoomCntr;
