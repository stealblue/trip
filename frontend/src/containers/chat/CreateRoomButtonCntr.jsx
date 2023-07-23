// import React, { useEffect } from "react";
// import WriteActionbuttonsComp from "../../components/board/write/WriteActionButtonsComp";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// // import { createRoom } from "../../modules/chat/CreateRoomMod";
// import { createRoom } from "../../modules/chat/RoomMod";

// const CreateRoomButtonCntr = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { title, owner, max, password, roomError, room } = useSelector(
//     ({ RoomMod }) => ({
//       title: RoomMod.title,
//       owner: RoomMod.owner,
//       max: RoomMod.max,
//       password: RoomMod.password,
//       room: RoomMod.room,
//       roomError: RoomMod.roomError,
//     })
//   );

//   const onPublish = () => {
//     dispatch(
//       createRoom({
//         title,
//         owner,
//         password,
//         max,
//       })
//     );
//   };

//   const onCalcel = () => {
//     navigate(-1);
//   };

//   useEffect(() => {
//     if (room) {
//       console.log("room : ", room);
//       navigate(`/chat/room/${room?._id}`);
//     }

//     if (roomError) console.error(roomError);
//   }, [navigate, room, roomError]);

//   return <WriteActionbuttonsComp onPublish={onPublish} onCancel={onCalcel} />;
// };

// export default CreateRoomButtonCntr;
