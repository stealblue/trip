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

const TrafficListComp = ({ resultTrains }) => {
  console.log("resultTrains : ", resultTrains);
  const result = resultTrains?.response.body.items?.item;
  return (
    <div>
      {resultTrains && result &&
        <TrafficHeader>
          <span>출발역</span>
          <span>시간</span>
          <span>도착역</span>
          <span>시간</span>
          <span>종류</span>
        </TrafficHeader>}
      {resultTrains && result && result.map((item) => <TrafficItem item={item} key={item.index} />)}
      {resultTrains && result && <PageNavComp3 pageNo={result?.pageNo} totalCount={result?.totalCount} numOfRows={result?.numOfRows} />}
    </div>
  );
};

export default TrafficListComp;
