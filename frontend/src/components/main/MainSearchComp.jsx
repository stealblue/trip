import styled from "styled-components";

import Responsive from "../common/ResponsiceComp";
import KeywordComp from "../common/KeywordComp";

const SearchForm = styled.div`
  width: 100%;
  text-align: center;
  margin-top: -100px;

  span {
    font-size: 30px;
    margin-right: 20px;
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
`;

const MainSearchComp = () => {
  return (
    <Responsive>
      <SearchForm>
        <span>검색</span>
        <input placeholder="장소,지역,테마 등을 입력하세요" />
        <div className="search-keyword">
          <KeywordComp />
          <KeywordComp />
          <KeywordComp />
          <KeywordComp />
          <KeywordComp />
          <KeywordComp />
        </div>
      </SearchForm>
    </Responsive>
  );
};

export default MainSearchComp;
