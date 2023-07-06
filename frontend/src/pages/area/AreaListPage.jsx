import React, { useState } from 'react';
import AreaListCntr from '../../containers/area/AreaListCntr';
import AreaSelectCntr from '../../containers/area/AreaSelectCntr';

const AreaListPage = () => {
  const [areaCode, setAreaCode] = useState(null);
  const onClick = (value) => {
    console.log('AreaListPage onClick : ', value);
    setAreaCode(value);
  }
  return (
    <div>
      <AreaSelectCntr onClick={onClick} />
      <AreaListCntr areaCode={areaCode} />
    </div>
  );
};

export default AreaListPage;