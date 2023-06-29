import React, { useEffect } from "react";
import WriteActionbuttonsComp from "../../components/board/write/WriteActionButtonsComp";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createRoom } from "../../modules/chat/CreateRoomMod";

const CreateRoomButtonCntr = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, owner, max, password, roomError, room } = useSelector(
    ({ CreateRoomMod }) => ({
      title: CreateRoomMod.title,
      owner: CreateRoomMod.owner,
      max: CreateRoomMod.max,
      password: CreateRoomMod.password,
      room: CreateRoomMod.room,
      roomError: CreateRoomMod.roomError,
    })
  );

  const onPublish = () => {
    dispatch(
      createRoom({
        title,
        owner,
        password,
        max,
      })
    );
  };

  const onCalcel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (room) navigate(`/chat/room/${room.data._id}`);
    if (roomError) console.error(roomError);
  }, [navigate, room, roomError]);

  return <WriteActionbuttonsComp onPublish={onPublish} onCancel={onCalcel} />;
};

export default CreateRoomButtonCntr;
