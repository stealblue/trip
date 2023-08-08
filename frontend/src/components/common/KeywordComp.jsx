import { styled } from "styled-components";
// import ThemeComp from "./ThemeComp";

const KeywordBox = styled.div`
  border-radius: 25px;
  padding: 12px 30px;
  background-color: ${(props) => props.theme.yellow};
  cursor: pointer;
  outline: none;
  box-shadow: 1px 4px 1px rgb(0, 0, 0, 0.5);
  text-align: center;
  display: inline-block;
  margin-left: 20px;
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
    background-color: ${(props) => props.theme.dark};
  }
`;

const KeywordComp = ({ keyword, onClick }) => {
  return (
    <KeywordBox onClick={onClick} data-keyword={keyword}>
      {keyword}
    </KeywordBox>
  );
};

export default KeywordComp;
