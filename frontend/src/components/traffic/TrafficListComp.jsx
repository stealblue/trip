import React from 'react';
import { styled } from 'styled-components';

const TrafficListBlock = styled.div`
display: flex;
/* :first-child{
  display: flex;
  background-color: steelblue;
}
:last-child{
  background-color: red;
} */
`;

const StartItem = ({ station, onClick }) => {
  // console.log('StationItem ===> station : ', station);
  return <li value={station.cityCode} onClick={onClick} data-type="start">{station.cityName}</li>;
}

const StartDetailItem = ({ station, onClick2 }) => {
  // console.log('detailItem ===> station : ', station);
  return <li data-value={station.stationId} onClick={onClick2} data-type="start">{station.stationName}</li>;
}
const EndItem = ({ station, onClick }) => {
  // console.log('StationItem ===> station : ', station);
  return <li value={station.cityCode} onClick={onClick} data-type="end">{station.cityName}</li>;
}
const EndDetailItem = ({ station, onClick2 }) => {
  // console.log('detailItem ===> station : ', station);
  return <li data-value={station.stationId} onClick={onClick2} data-type="end">{station.stationName}</li>;
}


const TrafficListComp = ({ stations, terminals, onClick, stationStartDetails, onClick2, stationEndDetails }) => {
  console.log('stations : ', stations);
  return (
    <TrafficListBlock>
      <div>
        <p>출발지</p>
        <ul>
          {stations && stations.map((station) => (
            <StartItem station={station} key={station.cityCode} onClick={onClick} className="test" />
          ))}
        </ul>
        <ul>
          {stationStartDetails && stationStartDetails.map((station) => (
            <StartDetailItem station={station} onClick2={onClick2} />
          ))}
        </ul>
      </div>
      <div>
        <p>도착지</p>
        <ul>
          {stations && stations.map((station) => (
            <EndItem station={station} key={station.cityCode} onClick={onClick} className="test" />
          ))}
        </ul>
        <ul>
          {stationEndDetails && stationEndDetails.map((station) => (
            <EndDetailItem station={station} onClick2={onClick2} />
          ))}
        </ul>
      </div>
      <div>

      </div>
    </TrafficListBlock>
  );
};

export default TrafficListComp;