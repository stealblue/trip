import React from 'react';
import KoreaMap from '../area/KoreaMap';

const SearchComp = ({ keyword, areaCode, onClickArea, contentTypes, onSelectedContentType }) => {
  return (
    <div>
      <select onChange={onSelectedContentType}>
        {contentTypes && contentTypes.map((item) => (
          <option name='contentType' value={item.code}>{item.name}</option>
        ))}
      </select>
      {/* 키워드 : {keyword} */}
      <input placeholder='검색' />
      <KoreaMap className="korea-map" onClick={onClickArea} areaCode={areaCode} />
    </div>
  );
};

export default SearchComp;