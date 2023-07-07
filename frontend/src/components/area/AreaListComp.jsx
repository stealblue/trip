import React from 'react';
import { styled } from 'styled-components';
import PageNavComp from '../common/PageNavComp';

// const AreaCategotyBlock = styled.li`
//   display: inline-block;
// `;

const AreaItemBlock = styled.div`
  img{
    width: 100px;
    height: 100px;
  }
`;

// const AreaCategoty = ({ onClick, area }) => {
//   console.log('areaCategoty : ', area);
//   return <AreaCategotyBlock onClick={onClick} area={area} />
// }

const AreaItem = ({ area, key, onClick }) => {
  console.log('area : ', area);
  return (
    <AreaItemBlock key={key} onClick={onClick}>
      <p><img src={area.firstimage !== "" ? area.firstimage : area.firstimge2} alt="이미지없음" /></p>
      <p>{area.title} / {area.addr1}</p>
      <hr />
    </AreaItemBlock>
  );
}

const AreaListComp = ({ areas, error, onClick }) => {
  console.log("areas : ", areas);
  // console.log("areaArr : ", areaArr);
  let target;
  if (areas) target = areas.response.body.items.item;
  return (
    <div>
      {/* {areaArr.map((area) => (
        <AreaCategoty onClick={onClick} area={area} />
      ))} */}

      {areas && target && target.map((area) => (
        <AreaItem area={area} key={area.contentid} onClick={onClick} />
      ))}
      <PageNavComp />
    </div>
  );
};

export default AreaListComp;
