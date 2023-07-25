import React from 'react';
import KoreaMap from '../area/KoreaMap';

const SearchComp = ({ searchKeyword, areaCode, onClickArea, contentTypes, onSelectedContentType, onSearchArea, onChange }) => {
  return (
    <div>
      <select onChange={onSelectedContentType}>

        <option>컨텐츠타입</option>
        {contentTypes && contentTypes.map((item) => (
          <option name='contentType' value={item.code} key={item.code}>{item.name}</option>
        ))}

      </select>
      {/* 키워드 : {keyword} */}
      <input placeholder='검색' onKeyUp={onSearchArea} value={searchKeyword} onChange={onChange} />

      <KoreaMap className="korea-map" onClick={onClickArea} areaCode={areaCode} />
    </div>
  );
};

export default SearchComp;