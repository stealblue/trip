import React from "react";
import room from "../../../../backend/models/mongoDB/room";

const ListRoomComp = ({ rooms }) => {
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
          {rooms.map((room) => (
            <tr>
              <td>{room.title}</td>
              {room.password ? <td>'비밀방'</td> : <td>'공부방'</td>}
              <td>{room.max}</td>
              <td>{room.owner}</td>
            </tr>
          ))}

          {/* <tr data-id="{{room._id}}">
            <td>{{room.title}}</td>
            <td>{{'비밀방' if room.password else '공개방'}}</td>
            <td>{{room.max}}</td>
            <td>{{room.owner}}</td>
            <td>
                <button
                        data-password="{{'true' if room.password else 'false'}}"
                        data-id="{{room._id}}"
                        class="join-btn"
                >입장
                </button>
            </td>
        </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default ListRoomComp;
