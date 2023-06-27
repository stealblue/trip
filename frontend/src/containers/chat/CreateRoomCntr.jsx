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
    console.log("form : ", e.target);
    const { title, host, password, max } = e.target;
    console.log(
      `title: ${title.value} host : ${host.value}  password : ${password.value} max : ${max.value}`
    );
    // e.target.map((v))
  };
  const onChange = (e) => {
    console.log("e : ", e.target.value);
  };

  return (
    <>
      <CreateRoomComp
        onClick={onClick}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </>
  );
};

export default CreateRoomCntr;
