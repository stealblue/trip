import { styled } from "styled-components";

const TitleText = styled.h4`
  font-size: 30px;
  text-align: center;
  margin-top: 100px;
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
