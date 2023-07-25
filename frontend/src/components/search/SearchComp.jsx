import React from "react";
import KoreaMap from "../area/KoreaMap";
import styled from "styled-components";
import ThemeComp from "../common/ThemeComp";

const SearchWrapper = styled.div`
  position: relative;
`;

const SelectContainer = styled.div`
  position: fixed;
  z-index: 900;
  top: 120px;

  select {
    padding: 10px 20px;
    background: ${ThemeComp.bgcolor};
    margin-left: 30px;
  }
  input {
    padding: 10px 40px;
  }
  div {
    position: fixed;
    background: ${ThemeComp.white};
    width: 600px;
    padding: 34px 10px 20px 176px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const SearchComp = ({ keyword, areaCode, onClickArea, contentTypes, onSelectedContentType, onSearchArea }) => {
  return (
    <SearchWrapper>
      <SelectContainer>
        <div>
          <select onChange={onSelectedContentType}>
            {contentTypes &&
              contentTypes.map((item) => (
                <option name="contentType" value={item.code}>
                  {item.name}
                </option>
              ))}
          </select>

          {/* 키워드 : {keyword} */}
          <input placeholder="검색" onKeyUp={onSearchArea} />
        </div>
      </SelectContainer>

      <KoreaMap className="korea-map" onClick={onClickArea} areaCode={areaCode} />
    </SearchWrapper>
  );
};

export default SearchComp;
