import React from 'react';
import { styled } from 'styled-components';
import RoomListCntr from '../../containers/room/RoomListCntr';
import RoomSelectCntr from '../../containers/room/RoomSelectCntr';

const RoomPageBlock = styled.div`
  background-color: pink;
  display: flex;
  color: whitesmoke;
  .left{
    background-color: green;
  }
  .right{
    :first-child{
      background-color: darkorange;
    }
    :nth-child(2){
      background-color: steelblue;
    }
  }
`;

const Roompage = () => {
  return (
    <RoomPageBlock>
      <RoomSelectCntr className='left' />
      <RoomListCntr className='right' />
    </RoomPageBlock >
  );
};

export default Roompage;