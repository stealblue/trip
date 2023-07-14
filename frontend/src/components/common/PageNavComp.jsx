import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { showPageNo } from '../../modules/area/AreaMod';

const LiBlock = styled.li`
  display: inline-block;
  margin: 10px;
`;

const PageNavComp = ({ totalCount, pageNo, numOfRows }) => {
  const res = parseInt(Math.ceil(totalCount / 10)); // 전체 페이지를 10개씩 나눴을 때 갯 수
  const page = pageNo || 1; // 현재 페이지
  let pageNavEndNum = (Math.ceil(page / 10) * 10);
  pageNavEndNum = (res <= pageNavEndNum ? res : (Math.ceil(page / 10) * 10)); // 현재 페이지가 속하는 페이지 네비게이션의 마지막 페이지
  let pageNavStartNum = (Math.floor((page - 1) / 10) * 10) + 1; // 현재 페이지가 속하는 페이지 네비게이션의 시작 페이지
  if ((page / 10) === 1) pageNavStartNum = Math.floor((page - 1) / 10) * 10;
  pageNavStartNum = (pageNavStartNum > 1 ? pageNavStartNum : 1);

  const dispatch = useDispatch();

  const onClickPage = (e) => {
    const page = e.target.value || e.target.dataset.page;
    dispatch(showPageNo(page));
  }
  const resArray = Array.from({ length: (pageNavEndNum - pageNavStartNum) + 1 }, (_, index) => index + pageNavStartNum);
  console.log(`전체 페이지수  =====> totalCount : ${totalCount}`);
  console.log('현재 페이지 =====> pageNo : ', pageNo);
  console.log('numOfRows : ', numOfRows);
  console.log('10개 덩어리 페이지 =====> res :', res);
  console.log(`시작 페이지 =====> start : ${pageNavStartNum} / 마지막 페이지 =====> end : ${pageNavEndNum}`);
  console.log('resArray : ', resArray);
  // const offset = 0 + parseInt((pageNo ? pageNo : 1) - 1) * numOfRows;

  // const checkNum = (pageNo ? pageNo : 1);
  // const checkNav = (Math.ceil(totalCount / numOfRows) * numOfRows) / numOfRows;
  // const nav = [];
  // for (let i = checkNum; i < checkNum + numOfRows; i++) {
  //   if (i < checkNav) {
  //     nav.push(i);
  //   }
  // }
  // console.log('offset : ', offset);
  // console.log('checkNum : ', checkNum);
  // console.log('checkNav : ', checkNav);
  // console.log('nav : ', nav);
  return (
    <div>
      <p>
        {(pageNavStartNum !== 1 && pageNavStartNum > 10) ? <LiBlock onClick={onClickPage} value={pageNavStartNum - 1} data-page={pageNavStartNum - 1}>prev</LiBlock> : null}
        {resArray.map((r) => (
          <LiBlock onClick={onClickPage} key={r} value={r}>{r}</LiBlock>
        ))}
        {pageNavEndNum < res ? <LiBlock onClick={onClickPage} value={pageNavEndNum + 1} data-page={pageNavEndNum + 1}>next</LiBlock> : null}
      </p>
    </div>
    // <div>
    //   {nav[0] > 10 ? <LiBlock onClick={onClickPage} value={checkNum - 9}>prev</LiBlock> : null}
    //   {nav.map((page) => (
    //     <LiBlock onClick={onClickPage} value={page} key={page}>{page}</LiBlock>
    //   ))}
    //   {((pageNo + numOfRows < totalCount) && (nav.length === 10)) ? <LiBlock onClick={onClickPage} value={checkNum + 10}>next</LiBlock> : null}
    // </div>
  );
};

export default PageNavComp;