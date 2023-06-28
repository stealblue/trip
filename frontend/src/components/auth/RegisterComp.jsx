import ThemeComp from "../common/ThemeComp";
import { styled } from "styled-components";

const RegisterFormBlock = styled.div`
  display: flex;
  jsutify-content: center;
  background: ${ThemeComp.bgcolor};
`;

const RegisterComp = ({ children }) => {
  return <RegisterFormBlock>{children}</RegisterFormBlock>;
};

export default RegisterComp;
