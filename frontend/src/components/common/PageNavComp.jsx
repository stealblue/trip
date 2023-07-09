import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { showPageNo } from '../../modules/area/AreaMod';

const LiBlock = styled.li`
  display: inline-block;
`;

const PageNavComp = ({ totalCount, pageNo, numOfRows }) => {
  const res = parseInt(Math.ceil(totalCount / numOfRows));
  const page = pageNo || 1;
  const pageNavEndNum = Math.ceil(page / numOfRows) * 10;
  const pageNavStartNum = Math.floor(page / numOfRows) * 10;
  const dispatch = useDispatch();

  const onClickTest = (e) => {
    console.log(e.target.value);
    const page = e.target.value;
    dispatch(showPageNo(page));
  }


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
          <LiBlock onClick={onClickTest} key={r + pageNavStartNum} value={r + pageNavStartNum}>{r + pageNavStartNum}</LiBlock>
        ))}</p>
    </div>
  );
};

export default PageNavComp;