// import { styled } from "styled-components";
import ButtonComp from "../common/ButtonComp";
// import React, { useState, useCallback,useRef, useEffect } from "react";
// import {useDispatch} from 'react-redux';
// import RegisterFormComp from "../auth/RegisterFormComp";

const users = ["testAdmin1", "testAdmin2", "testAdmin3"];

const CreateRoomComp = ({ onClick, onSubmit }) => {
  // const hostInstance = useRef('testAdmin1');
  // const titleInstance = useRef(null);
  // const passwordInstance =useRef(null);
  // const maxInstance =useRef(2);
  // const hostElement = useRef(null);
  // const titleElement = useRef(null);
  // const passwordElement =useRef(null);
  // const maxElement =useRef(null);

  // useEffect(()=>{

  // })
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input name="title" />
        </div>
        <div>
          <input type="number" name="max" min="2" value="10" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="비밀번호가 없으면 공개방"
          />
        </div>
        <div>
          <input type="hidden" name="host" value={users[0]} />
        </div>
        <div>
          <ButtonComp onClick={onClick}>생성</ButtonComp>
        </div>
      </form>
    </>
  );
};

export default CreateRoomComp;
