import React from "react";
import styled from "styled-components";
import ThemeComp from "../common/ThemeComp";

const TrafficContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .traffic-btn {
    display: flex;
    justify-content: space-around;
    width: 15%;
  }
  button {
    background: none;
    padding: 10px 30px;
    text-align: center;
    border-radius: 10px;
    font-size: 18px;
    line-height: 30px;
    cursor: pointer;
    &.select-btn {
      border-radius: 30px;
      background: ${ThemeComp.softblack};
      border: none;
      color: ${ThemeComp.smoke};
    }
  }
  .icon {
    width: 30px;
    display: block;
    margin-top: 10px;
  }

  .select-option {
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
    width: 50%;

    .select-area {
      width: 200px;
      padding: 15px 20px;
      background: ${ThemeComp.smoke};
      border-radius: 30px;
      border: 1px solid #333;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

      span {
        margin-left: 30px;
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
      }
    }

    input {
      border-radius: 30px;
      padding: 0 30px;
      background: ${ThemeComp.smoke};
    }

    select {
      width: 100px;
      height: 40px;
      background: ${ThemeComp.smoke};
    }
  }
`;

const SelectListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: 0 auto;

  .list {
    display: flex;
    justify-content: space-around;
  }
  div {
    &.flag {
      display: none;
    }
  }
`;

const SelectListBlock = styled.div`
  width: 200px;
  height: auto;
  border: 1px solid #333;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  margin-left: 10px;
  .title {
    background: ${ThemeComp.lightblack};
    color: ${ThemeComp.white};
    padding: 10px 0;
  }

  li {
    border-bottom: 1px solid #333;
    padding: 10px 0;
  }
  li:hover {
    background: gray;
  }
`;

const StartItem = ({ station, onClick }) => {
  return (
    <li value={station.cityCode} onClick={onClick} data-type="start">
      {station.cityName}
    </li>
  );
};

const StartDetailItem = ({ station, onClick }) => {
  return (
    <li data-value={station.stationId} onClick={onClick} data-type="start" data-name={station.stationName}>
      {station.stationName}
    </li>
  );
};
const EndItem = ({ station, onClick }) => {
  return (
    <li value={station.cityCode} onClick={onClick} data-type="end">
      {station.cityName}
    </li>
  );
};
const EndDetailItem = ({ station, onClick }) => {
  return (
    <li data-value={station.stationId} onClick={onClick} data-type="end" data-name={station.stationName}>
      {station.stationName}
    </li>
  );
};

const TrafficSelectComp = ({ stations, terminals, stationStartDetails, onClick2, stationEndDetails, onClickArea, onClickPlace, onClickCategory, onChangeDate, onToggle, start, end }) => {
  console.log("stations : ", stations);
  return (
    <div>
      <TrafficContainer>
        <div className="traffic-btn">
          <button onClick={onClickCategory} value="train">
            <img src="/assets/train.png" alt="train" className="icon" />
            기차
          </button>
          <button onClick={onClickCategory} value="bus">
            <img src="/assets/bus.png" alt="bus" className="icon" />
            버스
          </button>
        </div>
        <div className="select-option">
          <div className="select-area" onClick={onToggle} data-id="start">
            <span>출발지</span>
            <span>{start}</span>
          </div>
          <div className="select-area" onClick={onToggle} data-id="end">
            <span>도착지</span>
            <span>{end}</span>
          </div>
          <input type="date" onChange={onChangeDate} />
          {/* <select>
            <option>종류</option>
          </select> */}
          <button className="select-btn">검색</button>
        </div>
      </TrafficContainer>
      <SelectListContainer>
        <div className="list flag" id="start-container">
          <SelectListBlock>
            <p className="title">출발지</p>
            {stations && stations.map((station) => <StartItem station={station} key={station.cityCode} onClick={onClickArea} className="test" />)}
            {terminals && terminals.map((station) => <StartItem station={station} key={station.cityCode} onClick={onClickArea} className="test" />)}
          </SelectListBlock>
          <SelectListBlock>{stationStartDetails && stationStartDetails.map((station) => <StartDetailItem station={station} onClick={onClickPlace} />)}</SelectListBlock>
        </div>

        <div className="list flag" id="end-container">
          <SelectListBlock>
            <p className="title">도착지</p>
            {stations && stations.map((station) => <EndItem station={station} key={station.cityCode} onClick={onClickArea} className="test" />)}
          </SelectListBlock>
          <SelectListBlock>{stationEndDetails && stationEndDetails.map((station) => <EndDetailItem station={station} onClick={onClickPlace} />)}</SelectListBlock>
        </div>
      </SelectListContainer>
      <div></div>
    </div>
  );
};
export default TrafficSelectComp;
