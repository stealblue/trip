import React from "react";
import styled from "styled-components";

const TrafficContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .traffic-btn {
    display: flex;
    justify-content: center;
  }
  button {
    background: none;
    padding: 10px 30px;
    text-align: center;
    border-radius: 10px;
    margin-left: 10px;
    font-size: 18px;
    line-height: 30px;
    cursor: pointer;
    &.select-btn {
      border-radius: 30px;
      background: ${(props) => props.theme.softblack};
      border: none;
      color: ${(props) => props.theme.smoke};
    }
    &.traffic-category {
      background-color: ${(props) => props.theme.yellow};
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
    justify-content: center;
    flex-wrap: wrap;

    .select-area {
      width: 200px;
      margin-right: 20px;
      padding: 15px 10px;
      background: ${(props) => props.theme.smoke};
      border-radius: 30px;
      border: 1px solid #333;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      span {
        margin-left: 30px;
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
      }

      input {
        border-radius: 30px;
        padding: 0 30px;
        background: ${(props) => props.theme.smoke};
      }

      select {
        width: 100px;
        height: 40px;
        background: ${(props) => props.theme.smoke};
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 10px 0;
      div {
        margin-top: 10px;
        margin-right: 0;
      }
      input {
        margin-top: 10px;
        border-radius: 30px;
        width: 200px;
        padding: 13px;
        background: ${(props) => props.theme.smoke};
      }
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
  max-height: 810px;
  overflow: auto;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  margin-left: 10px;
  .title {
    background: ${(props) => props.theme.lightblack};
    color: ${(props) => props.theme.white};
    padding: 10px 0;
  }

  li {
    border-bottom: 1px solid #333;
    padding: 10px 0;
    &.clicked {
      background-color: ${(props) => props.theme.lightblack};
      color: ${(props) => props.theme.smoke};
    }
  }
  li:hover {
    background: gray;
  }
`;

const StartItem = ({ item, onClick }) => {
  return (
    <li
      value={item.cityCode}
      onClick={onClick}
      data-type="start"
      className="start-area"
    >
      {item.cityName}
    </li>
  );
};

const StartDetailItem = ({ item, onClick }) => {
  return (
    <li
      onClick={onClick}
      data-type="start"
      data-value={item.stationId || item.terminalId}
      data-name={item.stationName || item.terminalName}
      className="start-detail"
    >
      {item.stationName || item.terminalName}
    </li>
  );
};
const EndItem = ({ item, onClick }) => {
  return (
    <li
      value={item.cityCode}
      onClick={onClick}
      data-type="end"
      className="end-area"
    >
      {item.cityName}
    </li>
  );
};
const EndDetailItem = ({ item, onClick }) => {
  return (
    <li
      onClick={onClick}
      data-type="end"
      data-value={item.stationId || item.terminalId}
      data-name={item.stationName || item.terminalName}
      className="end-detail"
    >
      {item.stationName || item.terminalName}
    </li>
  );
};

const TrafficSelectComp = ({
  target,
  stations,
  terminals,
  stationStartDetails,
  terminalStartDetails,
  stationEndDetails,
  terminalEndDetails,
  onClickArea,
  onClickPlace,
  onClickCategory,
  onChangeDate,
  onToggle,
  start,
  end,
  date,
  loading,
}) => {
  return (
    <div>
      <TrafficContainer>
        <div className="traffic-btn">
          <button onClick={onClickCategory} value="train" className="category">
            <img src="/assets/train.png" alt="train" className="icon" />
            기차
          </button>
          <button onClick={onClickCategory} value="bus" className="category">
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
          <input
            type="date"
            onChange={onChangeDate}
            value={date}
            className="date"
          />
          {/* <button>검색</button> */}
        </div>
      </TrafficContainer>
      <SelectListContainer>
        <div className="list flag" id="start-container">
          {target ? (
            <SelectListBlock>
              <p className="title">출발지</p>
              {stations &&
                stations.map((item) => (
                  <StartItem
                    item={item}
                    key={item.cityCode}
                    onClick={onClickArea}
                  />
                ))}
              {terminals &&
                terminals.map((item) => (
                  <StartItem
                    item={item}
                    key={item.cityCode}
                    onClick={onClickArea}
                  />
                ))}
            </SelectListBlock>
          ) : null}
          <SelectListBlock>
            {stationStartDetails &&
              stationStartDetails.map((station) => (
                <StartDetailItem
                  item={station}
                  onClick={onClickPlace}
                  key={station.stationId}
                />
              ))}
            {terminalStartDetails &&
              terminalStartDetails.map((terminal) => (
                <StartDetailItem
                  item={terminal}
                  onClick={onClickPlace}
                  key={terminal.terminalId}
                />
              ))}
          </SelectListBlock>
        </div>

        <div className="list flag" id="end-container">
          {target ? (
            <SelectListBlock>
              <p className="title">도착지</p>
              {stations &&
                stations.map((item) => (
                  <EndItem
                    item={item}
                    key={item.cityCode}
                    onClick={onClickArea}
                  />
                ))}
              {terminals &&
                terminals.map((item) => (
                  <EndItem
                    item={item}
                    key={item.cityCode}
                    onClick={onClickArea}
                  />
                ))}
            </SelectListBlock>
          ) : null}
          <SelectListBlock>
            {stationEndDetails &&
              stationEndDetails.map((station) => (
                <EndDetailItem
                  item={station}
                  onClick={onClickPlace}
                  key={station.stationId}
                />
              ))}
            {terminalEndDetails &&
              terminalEndDetails.map((terminal) => (
                <EndDetailItem
                  item={terminal}
                  onClick={onClickPlace}
                  key={terminal.terminalId}
                />
              ))}
          </SelectListBlock>
        </div>
      </SelectListContainer>
      <div></div>
    </div>
  );
};
export default TrafficSelectComp;
