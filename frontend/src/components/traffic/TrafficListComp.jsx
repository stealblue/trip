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
  const arrPlandTime = (item.arrplandtime || item.arrPlandTime).toString();
  const depPlandTime = (item.depplandtime || item.depPlandTime).toString();
  const startTime = `${arrPlandTime.substr(8, 2)}시 ${arrPlandTime.substr(10, 2)}분`;
  const endTime = `${depPlandTime.substr(8, 2)}시 ${depPlandTime.substr(10, 2)}분`;
  return (
    <TrafficHeader>
      <span>{item.arrplacename || item.arrPlaceNm}</span>
      <span>{startTime}</span>
      <span>{item.depplacename || item.depPlaceNm}</span>
      <span>{endTime}</span>
      <span>{item.traingradename || item.gradeNm}</span>
    </TrafficHeader>
  );
};

const TrafficListComp = ({ resultTrains, resultBuses, loading }) => {
  const result = resultTrains?.response.body.items?.item || resultBuses?.response.body.items?.item;
  const result2 = resultTrains?.response.body || resultBuses?.response.body;
  return (
    <div>
      {result &&
        <TrafficHeader>
          <span>출발장소</span>
          <span>출발시간</span>
          <span>도착장소</span>
          <span>도착시간</span>
          <span>종류</span>
        </TrafficHeader>}
      {result && result.map((item) => <TrafficItem item={item} key={item.index} />)}
      {result && <PageNavComp3 pageNo={result2?.pageNo} totalCount={result2?.totalCount} numOfRows={result2?.numOfRows} />}
    </div>
  );
};

export default React.memo(TrafficListComp);
