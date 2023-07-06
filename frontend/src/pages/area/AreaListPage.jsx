import React from 'react';
import AreaListCntr from '../../containers/area/AreaListCntr';
import AreaSelectCntr from '../../containers/area/AreaSelectCntr';

const AreaListPage = () => {
  return (
    <div>
      <AreaSelectCntr />
      <AreaListCntr />
    </div>
  );
};

export default AreaListPage;