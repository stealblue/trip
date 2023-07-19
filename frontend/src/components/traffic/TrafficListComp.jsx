import React from "react";
import { styled } from "styled-components";
import PageNavComp3 from "../common/PageNavComp3";

const TrafficHeader = styled.div`
  span {
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
  );
};

const TrafficListComp = ({ resultTrains, loading }) => {
  console.log("resultTrains : ", resultTrains);
  const result = resultTrains?.response.body.items?.item;
  console.log('result : ', result);
  const result2 = resultTrains?.response.body;
  return (
    <div>
      {!loading && resultTrains && result &&
        <TrafficHeader>
          <span>출발역</span>
          <span>시간</span>
          <span>도착역</span>
          <span>시간</span>
          <span>종류</span>
        </TrafficHeader>}
      {!loading && resultTrains && result && result.map((item) => <TrafficItem item={item} key={item.index} />)}
      {!loading && resultTrains && result && <PageNavComp3 pageNo={result2?.pageNo} totalCount={result2?.totalCount} numOfRows={result2?.numOfRows} />}
    </div>
  );
};

export default TrafficListComp;
