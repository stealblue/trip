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

const MainSearchComp = ({ onSearchArea }) => {
  return (
    <Responsive>
      <SearchForm>
        <span>검색</span>
        <input placeholder="장소,지역,테마 등을 입력하세요" onKeyUp={onSearchArea} />
        <div className="search-keyword">
          {/* <KeywordComp keyword='바다' onClick={onSearchArea} /> */}
          <KeywordComp keyword='반려동물' onClick={onSearchArea} />
          <KeywordComp keyword='스파' onClick={onSearchArea} />
          <KeywordComp keyword='산림욕' onClick={onSearchArea} />
          {/* <KeywordComp  keyword='바다' onClick={onSearch}/>
          <KeywordComp  keyword='바다' onClick={onSearch}/> */}
        </div>
      </SearchForm>
    </Responsive>
  );
};

export default MainSearchComp;
