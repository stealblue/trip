import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { selectPage } from '../../modules/traffic/TrainMod';

const LiBlock = styled.li`
  display: inline-block;
  margin: 10px;
  &.checkPage{
    color:steelblue;
  }
`;
const PageNavComp3 = ({ totalCount, pageNo, numOfRows }) => {
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
    dispatch(selectPage({ page }));
  }
  const resArray = Array.from({ length: (pageNavEndNum - pageNavStartNum) + 1 }, (_, index) => index + pageNavStartNum);
  return (
    <div>
      <p>
        {(pageNavStartNum !== 1 && pageNavStartNum > 10) ? <LiBlock onClick={onClickPage} value={pageNavStartNum - 1} data-page={pageNavStartNum - 1}>prev</LiBlock> : null}
        {resArray.map((r) => (
          <LiBlock onClick={onClickPage} key={r} value={r} className={page === r ? 'checkPage' : null}>{r}</LiBlock>
        ))}
        {pageNavEndNum < res ? <LiBlock onClick={onClickPage} value={pageNavEndNum + 1} data-page={pageNavEndNum + 1}>next</LiBlock> : null}
      </p>
    </div>
  );
};

export default PageNavComp3;
