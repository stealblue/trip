import React from 'react';
import { styled } from 'styled-components';

const AreaItemBlock = styled.div`
  img{
    width: 100px;
    height: 100px;
  }
`;


const AreaItem = ({ area }) => {
  console.log('area : ', area);
  return (
    <AreaItemBlock>
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
        <AreaItem area={area} />
      ))}
    </div>
  );
};

export default AreaListComp;
