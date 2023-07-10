import React from 'react';
import { styled } from 'styled-components';
import AreaSelectCntr from '../../containers/area/AreaSelectCntr';

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
      <div className='left'>
        <AreaSelectCntr />
      </div>
      <div className='right'>
        <div className='first'>첫번째</div>
        <div className='second'>두번째</div>
      </div>
    </RoomPageBlock >
  );
};

export default Roompage;