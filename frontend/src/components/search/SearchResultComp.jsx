import React from "react";
import styled from "styled-components";
import PageNavComp4 from "../common/PageNavComp4";
import ThemeComp from "../common/ThemeComp";

const AreaItemBlock = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  background: #fff;

  div {
    display: flex;
  }
  img {
    width: 230px;
    height: 200px;
    border: 1px solid #333;
    border-radius: 10px;
  }
  .des {
    margin-left: 30px;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 20px;
      font-weight: 600;
      border-bottom: 2px solid #333;
      padding: 10px 0;
    }

    .addr {
      margin-top: 10px;
    }

    .add-btn {
      padding: 7px 9px;
      background: ${ThemeComp.lightblack};
      width: 50px;
      text-align: center;
      margin-top: 40px;
      color: ${ThemeComp.white};
      border-radius: 15px;
      margin-left: 320px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: ${ThemeComp.subcolor};
      }
    }
  }
`;

const RoomListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 1080px;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  position: absolute;
  top: 70px;
  left: 0;
  overflow: auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 65px;
  margin-top: 150px;
`;
const AreaItem = ({ area, onClick, addWish }) => {
  return (
    <AreaItemBlock>
      <div>
        <img src={area.firstimage !== "" ? area.firstimage : area.firstimge2 ? area.firstimge2 : "/assets/triplogo-noimage.png"} alt="이미지없음" loading="lazy" />
        <div className="des">
          <p className="title">{area.title}</p>
          <p className="addr" onClick={onClick} data-mapx={area.mapx} data-mapy={area.mapy} data-title={area.title}>
            {area.addr1}
          </p>
          <span className="add-btn" onClick={addWish} data-contentid={area.contentid} data-title={area.title} data-contenttypeid={area.contenttypeid}>
            + 추가
          </span>
        </div>
      </div>
    </AreaItemBlock>
  );
};

const SearchResultComp = ({ areas, error, loading, addWish, searchType, onClick }) => {
  if (!error) {
    let result;
    let target;
    if (searchType === "DB") {
      if (areas.areas.rows && areas.areas.rows.length >= 0) {
        target = areas.areas.rows;
      }
    } else if (searchType === "API") {
      if (areas.areas && areas.areas.response && areas.areas.response.body) {
        result = areas.areas.response?.body;
        target = result.items.item;
      }
    }
    return (
      <div>
        <RoomListContainer>
          <RoomList>
            {searchType === "API" && !loading && areas && target && target.map((area) => <AreaItem area={area} key={area.contentid} addWish={addWish} />)}
            {searchType === "DB" && !loading && areas && target && target.map((area) => <AreaItem area={area} key={area.contentid} addWish={addWish} />)}
            {searchType === "API" ? <PageNavComp4 pageNo={result.pageNo} totalCount={result.totalCount} numOfRows={result.numOfRows} /> : null}
          </RoomList>
        </RoomListContainer>
      </div>
    );
  }
};
export default React.memo(SearchResultComp);
