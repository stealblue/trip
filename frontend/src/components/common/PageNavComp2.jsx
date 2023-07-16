import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { showPageNo } from "../../modules/room/LodgingMod";

const LiBlock = styled.li`
  display: inline-block;
  margin: 10px;
`;
const PageNavComp2 = ({ totalCount, pageNo, numOfRows }) => {
  const res = parseInt(Math.ceil(totalCount / 9)); // 전체 페이지를 10개씩 나눴을 때 갯 수
  const page = pageNo || 1; // 현재 페이지
  let pageNavEndNum = (Math.ceil(page / 9) * 9);
  pageNavEndNum = (res <= pageNavEndNum ? res : (Math.ceil(page / 9) * 9)); // 현재 페이지가 속하는 페이지 네비게이션의 마지막 페이지
  let pageNavStartNum = (Math.floor((page - 1) / 9) * 9) + 1; // 현재 페이지가 속하는 페이지 네비게이션의 시작 페이지
  if ((page / 9) === 1) pageNavStartNum = Math.floor((page - 1) / 9) * 9;
  pageNavStartNum = (pageNavStartNum > 1 ? pageNavStartNum : 1);

  const dispatch = useDispatch();

  const onClickPage = (e) => {
    const page = e.target.value || e.target.dataset.page;
    dispatch(showPageNo(page));
  }

  const resArray = Array.from({ length: (pageNavEndNum - pageNavStartNum) + 1 }, (_, index) => index + pageNavStartNum);
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
  );
};

export default PageNavComp2;
