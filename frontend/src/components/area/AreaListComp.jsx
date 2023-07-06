import React from 'react';
import { styled } from 'styled-components';
import PageNavComp from '../common/PageNavComp';

const AreaItemBlock = styled.div`
  img{
    width: 100px;
    height: 100px;
  }
`;


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
  const target = areas.response.body.items.item;
  return (
    <div>
      {areas && target.map((area) => (
        <AreaItem area={area} key={area.contentid} onClick={onClick} />
      ))}
      <PageNavComp />
    </div>
  );
};

export default AreaListComp;
