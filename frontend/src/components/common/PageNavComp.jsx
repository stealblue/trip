import React from 'react';

const PageNavComp = ({ totalCount, pageNo, numOfRows, onClick }) => {
  const res = parseInt(Math.ceil(totalCount / numOfRows));
  const page = pageNo || 1;
  const pageNavEndNum = Math.ceil(page / numOfRows) * 10;
  const pageNavStartNum = Math.floor(page / numOfRows) * 10;
  console.log('res :', res);
  console.log(`start : ${pageNavStartNum} / end : ${pageNavEndNum}`);
  const resArray = Array.from({ length: pageNavEndNum - pageNavStartNum }, (_, index) => index + 1);
  return (
    <div>
      <p>
        {resArray.map((r) => (
          <li onClick={onClick}>{r + pageNavStartNum}</li>
        ))}</p>
    </div>
  );
};

export default PageNavComp;