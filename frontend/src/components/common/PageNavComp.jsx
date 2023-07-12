import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { showPageNo } from '../../modules/area/AreaMod';

const LiBlock = styled.li`
  display: inline-block;
`;

const PageNavComp = ({ totalCount, pageNo, numOfRows }) => {
  const res = parseInt(Math.ceil(totalCount / numOfRows)); // 전체 페이지를 10개씩 나눴을 때 갯 수
  const page = pageNo || 1; // 현재 페이지
  let pageNavEndNum = (Math.ceil(page / numOfRows) * 10);
  pageNavEndNum = (res <= pageNavEndNum ? res : (Math.ceil(page / numOfRows) * 10)); // 현재 페이지가 속하는 페이지 네비게이션의 시작 페이지
  let pageNavStartNum = pageNavEndNum - 9; // 현재 페이지가 속하는 페이지 네비게이션의 마지막 페이지
  pageNavStartNum = (pageNavStartNum > 1 ? pageNavStartNum : 1);

  const dispatch = useDispatch();

  const onClickTest = (e) => {
    const page = e.target.value || e.target.dataset.page;
    // console.log('click target : ', e.target);
    // console.log('page : ', page);
    dispatch(showPageNo(page));
  }
  const resArray = Array.from({ length: (pageNavEndNum - pageNavStartNum) + 1 }, (_, index) => index + pageNavStartNum);
  console.log(`전체 페이지수  =====> totalCount : ${totalCount}`);
  console.log('현재 페이지 =====> pageNo : ', pageNo);
  console.log('10개 덩어리 페이지 =====> res :', res);
  console.log(`시작 페이지 =====> start : ${pageNavStartNum} / 마지막 페이지 =====> end : ${pageNavEndNum}`);
  console.log('resArray : ', resArray);
  return (
    <div>
      <p>
        {(pageNavStartNum !== 1 && pageNavStartNum > 10) ? <li onClick={onClickTest} value={pageNavStartNum - 1} data-page={pageNavStartNum - 1}>prev</li> : null}
        {resArray.map((r) => (
          <LiBlock onClick={onClickTest} key={r} value={r}>{r}</LiBlock>
        ))}
        {pageNavEndNum < res ? <li onClick={onClickTest} value={pageNavEndNum + 1} data-page={pageNavEndNum + 1}>next</li> : null}
      </p>
    </div>
  );
};

export default PageNavComp;