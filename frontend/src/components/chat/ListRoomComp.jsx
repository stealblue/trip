// import { Link } from "react-router-dom";

// const RoomItem = ({ room, onClick }) => {
//   const { title, createAt, owner, max, _id } = room;
//   return (
//     <div key={_id}>
//       <span>
//         방제 : <Link to={`/chat/room/${_id}`}>{title}</Link>
//       </span>
//       <br />
//       <span>생성 날짜 : {createAt}</span>
//       <br />
//       <span>방장 : {owner}</span>
//       <br />
//       <span>{max}명</span>
//       <br />
//       <button onClick={onClick} value={room._id}>
//         입장
//       </button>
//       <hr />
//     </div>
//   );
// };

// const ListRoomComp = ({ rooms, loading, onClick }) => {
//   console.log("rooms : ", rooms);
//   return (
//     <div>
//       {!loading &&
//         rooms &&
//         rooms.map((room) => (
//           <RoomItem room={room} onClick={onClick} key={room._id} />
//         ))}
//     </div>
//   );
// };

// export default ListRoomComp;
