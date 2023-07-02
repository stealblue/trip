import { styled } from "styled-components";

const TitleText = styled.h1`
  font-size: 30px;
  margin-top: 10px;
`;

const SubTitleText = styled.p`
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
`;

const TitleComp = (props) => {
  return (
    <>
      <TitleText {...props} />
    </>
  );
};

const SubTitleComp = (props) => {
  return (
    <>
      <SubTitleText {...props} />
    </>
  );
};

export { TitleComp, SubTitleComp };
