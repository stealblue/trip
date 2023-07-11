import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { showPageNo } from '../../modules/room/LodgingMod';

const LiBlock = styled.li`
  display: inline-block;
`;

const PageNavComp2 = ({ totalCount, pageNo, numOfRows }) => {
  const page = pageNo || 1; // 현재 페이지
  let pageNavEndNum = (Math.ceil(page / numOfRows) * 10);
  pageNavEndNum = (totalCount <= (Math.ceil(page / numOfRows) * 10) ? totalCount : (Math.ceil(page / numOfRows) * 10)); // 현재 페이지가 속하는 페이지 네비게이션의 시작 페이지
  let pageNavStartNum = pageNavEndNum - 9; // 현재 페이지가 속하는 페이지 네비게이션의 마지막 페이지
  pageNavStartNum = (pageNavStartNum > 0 ? pageNavStartNum : 1);

  const dispatch = useDispatch();

  const onClickTest = (e) => {
    const page = e.target.value || e.target.dataset.page;

    dispatch(showPageNo(page));
  }
  const resArray = Array.from({ length: (pageNavEndNum - pageNavStartNum) + 1 }, (_, index) => index + pageNavStartNum);
  return (
    <div>
      <p>
        {pageNavStartNum !== 1 ? <li onClick={onClickTest} value={pageNavEndNum - 1} data-page={pageNavEndNum - 1}>prev</li> : null}
        {resArray.map((r) => (
          <LiBlock onClick={onClickTest} key={r} value={r}>{r}</LiBlock>
        ))}
        {pageNavEndNum < totalCount ? <li onClick={onClickTest} value={pageNavEndNum + 1} data-page={pageNavEndNum + 1}>next</li> : null}
      </p>
    </div>
  );
};

export default PageNavComp2;