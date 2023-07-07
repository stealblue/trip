import React from 'react';
import { styled } from 'styled-components';
import PageNavComp from '../common/PageNavComp';

const AreaItemBlock = styled.div`img{width: 100px;height: 100px;}`;

const AreaItem = ({ area, key, onClick }) => {
  console.log('area : ', area);
  return (
    <AreaItemBlock key={area.contentid}>
      <p><img src={area.firstimage !== "" ? area.firstimage : area.firstimge2} alt="이미지없음" /></p>
      <p onClick={onClick} data-mapx={area.mapx} data-mapy={area.mapy} data-title={area.title}>{area.title} / {area.addr1}</p>
      <hr />
    </AreaItemBlock>
  );
}

const AreaListComp = ({ areas, error, onClick }) => {
  console.log("areas : ", areas);
  // console.log("areaArr : ", areaArr);
  const result = areas.response.body;
  let target;
  if (areas) target = result.items.item;
  return (
    <div>
      {/* {areaArr.map((area) => (
        <AreaCategoty onClick={onClick} area={area} />
      ))} */}

      {areas && target && target.map((area) => (
        <AreaItem area={area} onClick={onClick} key={area.contentid} />
      ))}
      <PageNavComp
        pageNo={result.pageNo}
        totalCount={result.totalCount}
        numOfRows={result.numOfRows}
      />
    </div>
  );
};

export default React.memo(AreaListComp);
