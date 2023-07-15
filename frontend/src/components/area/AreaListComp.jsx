import React from "react";
import styled from "styled-components";
import PageNavComp from "../common/PageNavComp";
// import LazyLoad from 'react-lazyload';
import ThemeComp from "../common/ThemeComp";

const AreaItemBlock = styled.div`
  /* background: #ff3f; */
  margin: 0 auto;
  padding: 0 0 30px 0;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  div {
    display: flex;
    margin-left: 30px;
  }
  img {
    width: 10rem;
    height: 10rem;
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
      padding: 7px 9px;ight;
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

const AreaItem = ({ area, onClick, addWish }) => {
  return (
    <AreaItemBlock>
      {/* <LazyLoad> */}
      <div>
        <div>
          <img src={area.firstimage !== "" ? area.firstimage : area.firstimge2 ? area.firstimge2 : "/assets/noImage.png"} alt="이미지없음" loading="lazy" />
        </div>
        {/* </LazyLoad> */}
        <div className="des" onClick={onClick} data-mapx={area.mapx} data-mapy={area.mapy} data-title={area.title} data-addr={area.addr1 || area.addr2}>
          <p className="title">{area.title}</p>
          <p className="addr">{area.addr1}</p>
          <span className="add-btn" onClick={addWish} data-contentid={area.contentid} data-title={area.title}>
            + 추가
          </span>
        </div>
      </div>
    </AreaItemBlock>
  );
};

const AreaListComp = ({ areas, error, onClick, addWish }) => {
  if (!areas.response.body) return null;
  const result = areas.response?.body;
  let target;
  if (areas) target = result.items.item;
  return (
    <div>
      {areas && target && target.map((area) => <AreaItem area={area} onClick={onClick} key={area.contentid} addWish={addWish} />)}
      <PageNavComp pageNo={result.pageNo} totalCount={result.totalCount} numOfRows={result.numOfRows} />
    </div>
  );
};

export default React.memo(AreaListComp);
