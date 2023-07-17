import React from 'react';
import { styled } from 'styled-components';

const TrafficHeader = styled.div`
span{
  width: 20%;
  background-color: steelblue;
  display: inline-block;
  text-align: center;
  color: whitesmoke;
}
`;

const TrafficItem = ({ item }) => {
  return (
    <TrafficHeader>
      <span>{item.depplacename}</span>
      <span>{item.arrplandtime}</span>
      <span>{item.arrplacename}</span>
      <span>{item.depplandtime}</span>
      <span>{item.traingradename}</span>
    </TrafficHeader>
  )
}

const TrafficListComp = ({ resultTrains }) => {
  console.log('resultTrains : ', resultTrains);
  const result = resultTrains?.response.body.items?.item;
  return (
    <div>
      <TrafficHeader>
        <span>출발역</span>
        <span>시간</span>
        <span>도착역</span>
        <span>시간</span>
        <span>종류</span>
      </TrafficHeader>
      {resultTrains && result && result.map((item) => <TrafficItem item={item} key={item.index} />)}
    </div>
  );
};

export default TrafficListComp;