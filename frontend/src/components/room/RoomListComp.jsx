import React from "react";
import styled from "styled-components";
import PageNavComp2 from "../common/PageNavComp2";

const RoomListContainer = styled.div`
  width: 800px;
  height: 1080px;
  /* background: #333; */
  position: absolute;
  left: 0;
  top: 130px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const AreaItemBlock = styled.div`
  display: flex;
  width: 85%;
  padding: 30px;
  margin-left: 27px;
  border-bottom: 1px solid #333;
  img {
    width: 300px;
    height: 240px;
    border-radius: 20px;
    background: ${(props) => props.theme.smoke};
  }

  .room-text {
    margin-left: 20px;
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

  .add-btn {
    padding: 7px 9px;
    background: ${(props) => props.theme.lightblack};
    width: 50px;
    text-align: center;
    color: ${(props) => props.theme.white};
    border-radius: 15px;
    margin-top: 50px;
    margin-left: 260px;
    cursor: pointer;
    transition: 0.3s;
    display: block;

    &:hover {
      background: ${(props) => props.theme.subcolor};
    }
  }
`;

const RoomList = styled.div`
  margin: 0 auto;
`;

const StyledP = styled.p`
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;

const AreaItem = ({ area, onClick, addWish }) => {
  return (
    <AreaItemBlock>
      <img
        src={
          area.firstimage !== ""
            ? area.firstimage
            : area.firstimge2
            ? area.firstimge2
            : "/assets/triplogo-noimage.png"
        }
        alt="이미지없음"
        loading="lazy"
      />
      <div className="room-text">
        <p className="title">{area.title}</p>
        <StyledP
          className="addr"
          onClick={onClick}
          data-mapx={area.mapx}
          data-mapy={area.mapy}
          data-title={area.title}
          data-contentid={area.contentid}
          data-contenttypeid={area.contenttypeid}
        >
          {area.addr1}
        </StyledP>
        <span
          className="add-btn"
          onClick={addWish}
          data-contentid={area.contentid}
          data-title={area.title}
          data-contenttypeid={area.contenttypeid}
        >
          + 추가
        </span>
      </div>
    </AreaItemBlock>
  );
};

const RoomListComp = ({ areas, error, onClick, loading, addWish }) => {
  let result;
  let target;
  if (areas && areas.response && areas.response.body) {
    result = areas.response?.body;
    target = result.items.item;
  }
  return (
    <RoomListContainer>
      <RoomList>
        {!loading &&
          areas &&
          target &&
          target.map((area) => (
            <AreaItem
              area={area}
              onClick={onClick}
              key={area.contentid}
              addWish={addWish}
            />
          ))}
      </RoomList>
      <PageNavComp2
        pageNo={result?.pageNo}
        totalCount={result?.totalCount}
        numOfRows={result?.numOfRows}
      />
    </RoomListContainer>
  );
};

export default React.memo(RoomListComp);
