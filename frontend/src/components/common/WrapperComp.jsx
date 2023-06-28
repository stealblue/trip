import { styled } from "styled-components";

const WrapperBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-top: 100px;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WrapperComp = ({ children, ...rest }) => {
  return <WrapperBlock {...rest}>{children}</WrapperBlock>;
};

export default WrapperComp;
