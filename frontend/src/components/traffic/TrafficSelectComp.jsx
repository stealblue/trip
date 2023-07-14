import React from 'react';

const StartItem = ({ station, onClick }) => {
  return <li value={station.cityCode} onClick={onClick} data-type="start">{station.cityName}</li>;
}

const StartDetailItem = ({ station, onClick2 }) => {
  return <li data-value={station.stationId} onClick={onClick2} data-type="start">{station.stationName}</li>;
}
const EndItem = ({ station, onClick }) => {
  return <li value={station.cityCode} onClick={onClick} data-type="end">{station.cityName}</li>;
}
const EndDetailItem = ({ station, onClick2 }) => {
  return <li data-value={station.stationId} onClick={onClick2} data-type="end">{station.stationName}</li>;
}



const TrafficSelectComp = ({ stations, terminals, stationStartDetails, onClick2, stationEndDetails, onClickArea, onClickPlace, onClickCategory, onChangeDate }) => {
  console.log('stations : ', stations);
  return (
    <div>
      <div>
        <button onClick={onClickCategory} value="train">기차</button>
        <button onClick={onClickCategory} value="bus">시외버스</button>
        <input type='date' onChange={onChangeDate} />
        <select>
          <option>종류</option>
        </select>
      </div>
      <div>
        <p>출발지</p>
        <ul>
          {stations && stations.map((station) => (<StartItem station={station} key={station.cityCode} onClick={onClickArea} className="test" />))}
          {terminals && terminals.map((station) => (<StartItem station={station} key={station.cityCode} onClick={onClickArea} className="test" />))}
        </ul>
        <ul>
          {stationStartDetails && stationStartDetails.map((station) => (
            <StartDetailItem station={station} onClick={onClickPlace} />
          ))}
        </ul>
      </div>
      <div>
        <p>도착지</p>
        <ul>
          {stations && stations.map((station) => (
            <EndItem station={station} key={station.cityCode} onClick={onClickArea} className="test" />
          ))}
        </ul>
        <ul>
          {stationEndDetails && stationEndDetails.map((station) => (
            <EndDetailItem station={station} onClickCategory={onClickCategory} />
          ))}
        </ul>
      </div>
      <div>
      </div>
    </div>
  );
};
export default TrafficSelectComp;
