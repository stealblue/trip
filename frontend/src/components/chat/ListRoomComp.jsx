// import { Link } from "react-router-dom";
import ReadRoomComp from "./ReadRoomComp";
// const RoomItem = ({ room }) => {
//   const { title, createAt, owner, _id } = room;
//   return (
//     <div>
//       <Link to={`room/${_id}`}>
//         <div>
//           <span>{title}</span>
//           <br />
//           <span>{createAt}</span>
//           <br />
//           <span>{owner}</span>
//         </div>
//       </Link>
//     </div>
//   );
// };

const ListRoomComp = ({ rooms, loading, error }) => {
  return (
    <div>
      <h1>채팅방 목록</h1>
      <table>
        <thead>
          <tr>
            <th>방 제목</th>
            <th>종류</th>
            <th>허용 인원</th>
            <th>방장</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            rooms &&
            rooms.map((room) => (
              // <tr data-id="{{room._id}}">
              //   <td>{room.title}</td>
              //   {room.password ? <td>'비밀방'</td> : <td>'공부방'</td>}
              //   <td>{room.max}</td>
              //   <td>{room.owner}</td>
              //   <td>
              //     <button
              //       data-password="{{'true' if room.password else 'false'}}"
              //       data-id="{{room._id}}"
              //       class="join-btn"
              //     >
              //       입장
              //     </button>
              //   </td>
              // </tr>
              <tr>
                <ReadRoomComp key={room.id} room={room} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListRoomComp;
