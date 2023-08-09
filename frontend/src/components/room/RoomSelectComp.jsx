import React from "react";
import styled from "styled-components";
import KoreaMap from "../area/KoreaMap";

const RoomListItem = styled.button`
  display: flex;
  justify-content: space-around;
  background: ${(props) => props.theme.bgcolor};
  padding: 10px 20px;
  margin-top: 14px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 10px;
  border: none;
  &:hover {
    background: ${(props) => props.theme.subcolor};
    color: ${(props) => props.theme.white};
  }
  &.selectItem {
    background-color: steelblue;
    color: ${(props) => props.theme.smoke};
    font-weight: 600;
  }
`;

const RoomList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

// const SelectArea = ({ onClick, area, areaCode, loading }) => {
//   console.log('selectItem : ', areaCode);
//   return (</RoomList>
//     <>
//       <RoomListItem onClick={onClick} value={area.code} className={areaCode === `${area.code}` ? "selectItem" : null}>
//         {area.name}
//       </RoomListItem>
//     </>
//   );
// };

const AreaSelectComp = ({ onClickArea, areas, areaCode, loading }) => {
  // console.log('codes : ', areas);
  return (
    <>
      {/* <RoomList>
        {areas.map((area) => (
          <SelectArea area={area} key={area.code} onClick={onClickArea} areaCode={areaCode} />
        ))}
      </RoomList> */}
      <KoreaMap areas={areas} onClick={onClickArea} areaCode={areaCode} />
      <RoomList />
    </>
  );
};

export default React.memo(AreaSelectComp);
