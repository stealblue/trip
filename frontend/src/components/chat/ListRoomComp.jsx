const RoomItem = ({ room }) => {
  const { title, createAt, owner, _id } = room;
  return (
    <div key={_id}>
      <div>
        <span>{title}</span>
        <br />
        <span>{createAt}</span>
        <br />
        <span>{owner}</span>
      </div>
    </div>
  );
};

const ListRoomComp = ({ rooms, loading, error }) => {
  return (
    <div>
      {!loading && rooms && rooms.map((room) => <RoomItem room={room} />)}
    </div>
  );
};

export default ListRoomComp;
