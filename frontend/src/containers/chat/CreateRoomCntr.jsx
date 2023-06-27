import CreateRoomComp from "../../components/chat/CreateRoomComp";

const CreateRoomCntr = () => {
  const onClick = (e) => {
    console.log("1111");
    const { value, name } = e.target;
    console.log(`value : ${value}, name : ${name}, e : ${e}`);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("22222");
  };

  return (
    <>
      <CreateRoomComp onClick={onClick} onSubmit={onSubmit} />
    </>
  );
};

export default CreateRoomCntr;
