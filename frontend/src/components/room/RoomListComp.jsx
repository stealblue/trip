import React from "react";
import styled from "styled-components";
import PageNavComp2 from "../common/PageNavComp2";

const AreaItemBlock = styled.div`
  /* background: #3ff; */
  margin-top: 20px;
  border-radius: 20px;
  /* border: 1px solid #333; */
  margin-top: 100px;
  img {
    width: 400px;
    height: 360px;
    border-radius: 20px;
  }
  .title {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  .addr {
    margin-top: 10px;
    font-size: 18px;
  }
`;

const RoomList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
`;

const AreaItem = ({ area, itemKey, onClick }) => {
  // console.log('area : ', area);
  return (
    <AreaItemBlock key={itemKey || area.contentid}>
      <img src={area.firstimage !== "" ? area.firstimage : area.firstimge2 ? area.firstimge2 : "/assets/noImage.png"} alt="이미지없음" loading="lazy" />

      <p onClick={onClick} data-mapx={area.mapx} data-mapy={area.mapy} data-title={area.title}>
        <p className="title">{area.title}</p>
        <p className="addr">{area.addr1}</p>
      </p>
    </AreaItemBlock>
  );
};

const RoomListComp = ({ areas, error, onClick }) => {
  let result;
  let target;
  if (areas && areas.response && areas.response.body) {
    result = areas.response?.body;
    target = result.items.item;
  }
  return (
    <div>
      <RoomList>{areas && target && target.map((area) => <AreaItem area={area} onClick={onClick} itemKey={area.contentid} />)}</RoomList>
      <PageNavComp2 pageNo={result?.pageNo} totalCount={result?.totalCount} numOfRows={result?.numOfRows} />
    </div>
  );
};

export default React.memo(RoomListComp);
