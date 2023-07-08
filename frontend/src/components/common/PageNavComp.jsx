import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const LiBlock = styled.li`
  display: inline-block;
`;

const PageNavComp = ({ totalCount, pageNo, numOfRows, onClick }) => {
  const res = parseInt(Math.ceil(totalCount / numOfRows));
  const page = pageNo || 1;
  const pageNavEndNum = Math.ceil(page / numOfRows) * 10;
  const pageNavStartNum = Math.floor(page / numOfRows) * 10;


  // const areaCode = useSelector(({AreaMod})=>({
  //   areaCode:AreaMod.areaCode
  // }));

  console.log('res :', res);
  console.log(`start : ${pageNavStartNum} / end : ${pageNavEndNum}`);
  const resArray = Array.from({ length: pageNavEndNum - pageNavStartNum }, (_, index) => index + 1);
  return (
    <div>
      <p>
        {resArray.map((r) => (
          <LiBlock onClick={onClick} key={r + pageNavStartNum} value={r + pageNavStartNum}>{r + pageNavStartNum}</LiBlock>
        ))}</p>
    </div>
  );
};

export default PageNavComp;