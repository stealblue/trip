import React from 'react';
import KoreaMap from '../area/KoreaMap';

const SearchComp = ({ keyword, areaCode, onClickArea }) => {
  return (
    <div>
      {keyword}
      <KoreaMap className="korea-map" onClick={onClickArea} areaCode={areaCode} />
    </div>
  );
};

export default SearchComp;