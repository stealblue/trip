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
      <span>{item.arrplacename || item.arrplaceNm}</span>
      <span>{item.arrplandtime || item.arrplandTime}</span>
      <span>{item.depplacename || item.depplaceNm}</span>
      <span>{item.depplandtime || item.depplandTime}</span>
      <span>{item.traingradename || item.gradeNm}</span>
    </TrafficHeader>
  );
};

const TrafficListComp = ({ resultTrains, loadingTrain, resultBuses, loadingBus }) => {
  console.log("resultTrains : ", resultTrains);
  console.log('resultBuses : ', resultBuses);
  const result = resultTrains?.response.body.items?.item || resultBuses?.response.body.items?.item;
  console.log('result : ', result);
  const result2 = resultTrains?.response.body || resultBuses?.response.body;
  return (
    <div>
      {!loadingTrain && resultTrains && result &&
        <TrafficHeader>
          <span>출발장소</span>
          <span>시간</span>
          <span>도착장소</span>
          <span>시간</span>
          <span>종류</span>
        </TrafficHeader>}
      {!loadingTrain && result && result.map((item) => <TrafficItem item={item} key={item.index} />)}
      {!loadingTrain && result && <PageNavComp3 pageNo={result2?.pageNo} totalCount={result2?.totalCount} numOfRows={result2?.numOfRows} />}
    </div>
  );
};

export default TrafficListComp;
