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

const Title = (props) => {
  return (
    <>
      <TitleText {...props} />
    </>
  );
};

const SubTitle = (props) => {
  return (
    <>
      <SubTitleText {...props} />
    </>
  );
};

export { Title, SubTitle };
