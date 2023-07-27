import styled from "styled-components";

import Responsive from "../common/ResponsiceComp";
import KeywordComp from "../common/KeywordComp";
import ThemeComp from "../common/ThemeComp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchForm = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: -100px;

  background: #fff;

  span {
    font-size: 30px;
    margin-right: 20px;
  }

  .searchform {
    position: relative;
    display: inline-block;
  }

  input {
    width: 500px;
    padding: 20px 20px;
    border-radius: 50px;
    font-size: 16px;
  }

  .search-keyword {
    display: flex;
    justify-content: space-around;
    display: block;
  }

  .search-icon {
    position: absolute;
    top: 16px;
    right: 4%;
  }
`;

const MainSearchComp = ({ onSearchArea }) => {
  return (
    <>
      <SearchForm>
        <div className="searchform">
          <span>검색</span>
          <input placeholder="장소,지역,테마 등을 입력하세요" onKeyUp={onSearchArea} />
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" className="search-icon" />
        </div>

        <div className="search-keyword">
          <KeywordComp keyword="바다" onClick={onSearchArea} />
          <KeywordComp keyword="반려동물" onClick={onSearchArea} />
          <KeywordComp keyword="스파" onClick={onSearchArea} />
          <KeywordComp keyword="산림욕" onClick={onSearchArea} />
          <KeywordComp keyword="액티비티" onClick={onSearchArea} />
          {/* <KeywordComp keyword='풍경명소' onClick={onSearchArea} /> */}
          {/* <KeywordComp keyword='한옥펜션' onClick={onSearchArea} /> */}
        </div>
      </SearchForm>
    </>
  );
};

export default MainSearchComp;
