import React from "react";
import { styled } from "styled-components";
import PageNavComp3 from "../common/PageNavComp3";
import ThemeComp from "../common/ThemeComp";

const TrafficContainer = styled.div`
  margin: 30px auto;
  text-align: center;
`;

const TrafficHeader = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 90%;
  span {
    width: 20%;
    background-color: steelblue;
    display: inline-block;
    text-align: center;
    color: whitesmoke;
  }

  td,
  th {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 15px;
    margin: 0 auto;
    width: 20%;
    text-align: center;
  }

  th {
    background: ${ThemeComp.lightblack};
    color: #fff;
  }
`;

const TrafficItem = ({ item }) => {
  const arrPlandTime = (item.arrplandtime || item.arrPlandTime).toString();
  const depPlandTime = (item.depplandtime || item.depPlandTime).toString();
  const startTime = `${arrPlandTime.substr(8, 2)}시 ${arrPlandTime.substr(10, 2)}분`;
  const endTime = `${depPlandTime.substr(8, 2)}시 ${depPlandTime.substr(10, 2)}분`;
  return (
    <TrafficHeader>
      <td>{item.arrplacename || item.arrPlaceNm}</td>
      <td>{item.arrplandtime || item.arrPlandTime}</td>
      <td>{item.depplacename || item.depPlaceNm}</td>
      <td>{item.depplandtime || item.depPlandTime}</td>
      <td>{item.traingradename || item.gradeNm}</td>
    </TrafficHeader>
  );
};

const TrafficListComp = ({ resultTrains, resultBuses, loading }) => {
  const result = resultTrains?.response.body.items?.item || resultBuses?.response.body.items?.item;
  const result2 = resultTrains?.response.body || resultBuses?.response.body;
  return (
    <TrafficContainer>
      {result && (
        <TrafficHeader>
          <th>출발장소</th>
          <th>시간</th>
          <th>도착장소</th>
          <th>시간</th>
          <th>종류</th>
        </TrafficHeader>
      )}
      {result && result.map((item) => <TrafficItem item={item} key={item.index} />)}
      {result && <PageNavComp3 pageNo={result2?.pageNo} totalCount={result2?.totalCount} numOfRows={result2?.numOfRows} />}
    </TrafficContainer>
  );
};

export default React.memo(TrafficListComp);
