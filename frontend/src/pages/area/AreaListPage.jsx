import React, { useState } from 'react';
import AreaListCntr from '../../containers/area/AreaListCntr';
import AreaSelectCntr from '../../containers/area/AreaSelectCntr';

const AreaListPage = () => {
  const [areaCode, setAreaCode] = useState(null);
  const [pageNo, setPageNo] = useState(null);

  const onClickAreaCode = (e) => {
    console.log('AreaListPage onClick : ', e.target.value);
    setAreaCode(e.target.value);
  }
  // const onClickPageNo = (value) => {
  //   setPageNo(value);
  // }

  return (
    <div>
      <AreaSelectCntr onClick={onClickAreaCode} />
      <AreaListCntr areaCode={areaCode} pageNo={pageNo} />
    </div>
  );
};

export default AreaListPage;