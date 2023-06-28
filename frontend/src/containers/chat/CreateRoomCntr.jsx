import CreateRoomComp from "../../components/chat/CreateRoomComp";
import React, { useEffect } from "react";
import { changeField, initialize } from "../../modules/chat/CreateRoomMod";
import { useDispatch, useSelector } from "react-redux";

const CreateRoomCntr = () => {
  const dispatch = useDispatch();
  const { title, max, password, owner } = useSelector(({ CreateRoomMod }) => ({
    title: CreateRoomMod.title,
    max: CreateRoomMod.max,
    password: CreateRoomMod.password,
    owner: CreateRoomMod.owner,
  }));

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ value, key: name }));
  };

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <>
      <CreateRoomComp
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
