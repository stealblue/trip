import React, { useState } from "react";
import styled from "styled-components";
import ThemeComp from "../common/ThemeComp";
import AreaListCntr from "../../containers/area/AreaListCntr";

const MapContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  margin-top: -35px;

  .map {
    width: 100%;
    height: 100vh;
    background-size: cover;
    object-fit: cover;
  }
`;

const ListContainer = styled.div`
  width: 700px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 7.8rem;
  flex-wrap: wrap;
  background: ${ThemeComp.white};
  overflow: scroll;
  /* display: none; */
  .theme {
    /* position: fixed; */
    background: ${ThemeComp.white};
    margin-top: -2px;
  }

  div {
    margin-top: 20px;
  }
  .select-list {
    margin-top: 0px;
  }
`;

const ThemeList = styled.div`
  display: flex;
`;
const ThemeListItem = styled.button`
  background: ${ThemeComp.bgcolor};
  padding: 10px 20px;
  margin-left: 14px;
  margin-top: 14px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  &:hover {
    background: ${ThemeComp.subcolor};
    color: ${ThemeComp.white};
  }

  &.selectItem{
    background-color: steelblue;
  }
`;

const SelectArea = ({ onClick, area, areaCode }) => {
  return (
    <>
      <ThemeListItem onClick={onClick} value={area.code} className={areaCode === `${area.code}` ? 'selectItem' : null}>
        {area.name}
      </ThemeListItem>
    </>
  );
};

const SelectType = ({ onClick, type, contentTypeId }) => {
  return (
    <>
      <ThemeListItem onClick={onClick} value={type.code} className={contentTypeId === `${type.code}` ? 'selectItem' : null}>
        {type.name}
      </ThemeListItem>
    </>
  );
};

const AreaSelectComp = ({ onClickArea, onClickType, areas, contentTypes, areaCode, contentTypeId }) => {
  return (
    <>
      <MapContainer>
        <img className="map" src="/assets/map.jpeg" alt="지도샘플" />
        <div>
          {areas.map((area) => (
            <SelectArea area={area} key={area.code} onClick={onClickArea} areaCode={areaCode} />
          ))}
          AreaName
        </div>

        <ListContainer>
          <ThemeList>
            <div className="theme">
              {contentTypes.map((type) => (
                <SelectType type={type} key={type.code} onClick={onClickType} contentTypeId={contentTypeId} />
              ))}
            </div>
          </ThemeList>

          <div className="select-list">
            <AreaListCntr className="select" />
          </div>
        </ListContainer>
      </MapContainer>
    </>
  );
};

export default React.memo(AreaSelectComp);
