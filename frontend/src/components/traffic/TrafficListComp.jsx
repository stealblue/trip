import React from "react";
import { styled } from "styled-components";
import PageNavComp3 from "../common/PageNavComp3";
// import ThemeComp from "../common/ThemeComp";
import WrapperComp from "../common/WrapperComp";

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
    // background: ${ThemeComp.lightblack};
    background: ${(props) => props.theme.lightblack};
    color: #fff;
  }
`;

const TrafficItem = ({ item, onTicketing }) => {
  const depPlandTime = (item.depplandtime || item.depPlandTime).toString();
  const arrPlandTime = (item.arrplandtime || item.arrPlandTime).toString();
  const startTime = `${depPlandTime.substr(8, 2)}시 ${depPlandTime.substr(
    10,
    2
  )}분`;
  const endTime = `${arrPlandTime.substr(8, 2)}시 ${arrPlandTime.substr(
    10,
    2
  )}분`;
  const jsonItem = JSON.stringify(item);
  return (
    <TrafficHeader>
      <tbody>
        <tr onClick={onTicketing} data-item={jsonItem}>
          <td>{item.depplacename || item.depPlaceNm}</td>
          <td>{startTime}</td>
          <td>{item.arrplacename || item.arrPlaceNm}</td>
          <td>{endTime}</td>
          <td>{item.traingradename || item.gradeNm}</td>
        </tr>
      </tbody>
    </TrafficHeader>
  );
};

const TrafficListComp = ({
  resultTrains,
  resultBuses,
  loading,
  onTicketing,
}) => {
  const result =
    resultTrains?.response.body.items?.item ||
    resultBuses?.response.body.items?.item;
  const result2 = resultTrains?.response.body || resultBuses?.response.body;

  if (!resultTrains && !resultBuses) {
    console.log("내용 없음");
    return <div></div>;
  }

  return (
    <WrapperComp>
      <TrafficContainer>
        {result && (
          <TrafficHeader>
            <thead>
              <tr>
                <th>출발장소</th>
                <th>시간</th>
                <th>도착장소</th>
                <th>시간</th>
                <th>종류</th>
              </tr>
            </thead>
          </TrafficHeader>
        )}
        {result &&
          result.map((item, index) => (
            <TrafficItem item={item} key={index} onTicketing={onTicketing} />
          ))}
        {result && (
          <PageNavComp3
            pageNo={result2?.pageNo}
            totalCount={result2?.totalCount}
            numOfRows={result2?.numOfRows}
          />
        )}
      </TrafficContainer>
    </WrapperComp>
  );
};

export default React.memo(TrafficListComp);
