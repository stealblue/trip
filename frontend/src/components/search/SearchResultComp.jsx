import React from 'react';
// import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import PageNavComp4 from "../common/PageNavComp4";
import ThemeComp from "../common/ThemeComp";

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
    background: ${ThemeComp.smoke};
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
const AreaItem = ({ area, itemKey, onClick, addWish }) => {
  return (
    <AreaItemBlock key={itemKey || area.contentid}>
      <img src={area.firstimage !== "" ? area.firstimage : area.firstimge2 ? area.firstimge2 : "/assets/triplogo-noimage.png"} alt="이미지없음" loading="lazy" />
      <p>
        <p className="title">{area.title}</p>
        <p className="addr" onClick={onClick} data-mapx={area.mapx} data-mapy={area.mapy} data-title={area.title}>
          {area.addr1}
        </p>
        <span onClick={addWish} data-contentid={area.contentid} data-title={area.title} data-contenttypeid={area.contenttypeid}>
          + 추가
        </span>
      </p>
    </AreaItemBlock>
  );
};

const SearchResultComp = ({ areas, error, loading, addWish }) => {
  // const location = useLocation();
  // const keyword = location.state.keyword
  let result;
  let target;
  if (areas && areas.response && areas.response.body) {
    result = areas.response?.body;
    target = result.items.item;
  }
  return (
    <div>
      <RoomList>{!loading && areas && target && target.map((area) => <AreaItem area={area} itemKey={area.contentid} addWish={addWish} />)}</RoomList>
      <PageNavComp4 pageNo={result.pageNo} totalCount={result.totalCount} numOfRows={result.numOfRows} />
    </div>
  );
};

export default SearchResultComp;