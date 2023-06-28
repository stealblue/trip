import CreateRoomComp from "../../components/chat/CreateRoomComp";
import React, { useEffect } from "react";
// import {CreateRoomMod, createRoom} from "../../modules/chat/CreateRoomMod";
import {
  changeField,
  initialize,
  createRoom,
} from "../../modules/chat/CreateRoomMod";
import { useDispatch, useSelector } from "react-redux";

const CreateRoomCntr = () => {
  const dispatch = useDispatch();
  const { title, max, password, owner } = useSelector(({ CreateRoomMod }) => ({
    title: CreateRoomMod.title,
    max: CreateRoomMod.max,
    password: CreateRoomMod.password,
    owner: CreateRoomMod.owner,
  }));

  // const onClick = (e) => {
  //   const { value, name } = e.target;
  //   console.log(`value : ${value}, name : ${name}, e : ${e}`);
  // };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("ddddddddddddddddddddddddddddddddddd", title);
    console.log(
      `title: ${title} host : ${owner}  password : ${password} max : ${max}`
    );
    dispatch(createRoom({ title, max, password, owner }));
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    dispatch(changeField({ value, key: name }));
    // console.log("e : ", e.target.value);
  };

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <>
      <CreateRoomComp
        // onClick={onClick}
        onSubmit={onSubmit}
        onChange={onChange}
        title={title}
        owner={owner}
        max={max}
        password={password}
      />
    </>
  );
};

export default CreateRoomCntr;
