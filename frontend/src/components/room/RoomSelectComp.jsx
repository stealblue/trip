import React from "react";
import styled from "styled-components";
import ThemeComp from "../common/ThemeComp";

const RoomListItem = styled.button`
  display: flex;
  justify-content: space-around;
  background: ${ThemeComp.bgcolor};
  padding: 10px 20px;
  margin-top: 14px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 10px;
  border: none;
  &:hover {
    background: ${ThemeComp.subcolor};
    color: ${ThemeComp.white};
  }
`;

const RoomList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const SelectArea = ({ onClick, area }) => {
  // console.log('selectItem : ', area);
  return (
    <>
      <RoomListItem onClick={onClick} value={area.code}>
        {area.name}
      </RoomListItem>
    </>
  );
};

const AreaSelectComp = ({ onClickArea, areas }) => {
  // console.log('codes : ', areas);
  return (
    <>
      <RoomList>
        {areas.map((area) => (
          <SelectArea area={area} key={area.code} onClick={onClickArea} />
        ))}
      </RoomList>
    </>
  );
};

export default React.memo(AreaSelectComp);
