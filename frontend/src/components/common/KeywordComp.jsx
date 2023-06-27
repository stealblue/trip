import { styled } from "styled-components";
import ThemeComp from "./ThemeComp";

const KeywordBox = styled.div`
  border-radius: 25px;
  padding: 10px 20px;
  background-color: ${ThemeComp.lightcolor};
  cursor: pointer;
  outline: none;
  box-shadow: 1px 4px 1px rgb(0, 0, 0, 0.5);
  text-align: center;
  display: inline-block;
  margin-left: 800px;

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
    background-color: ${ThemeComp.dark};
  }
`;

const Keyword = () => {
  return <KeywordBox># 키워드</KeywordBox>;
};

export default Keyword;
