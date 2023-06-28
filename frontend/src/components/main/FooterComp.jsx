import { styled } from "styled-components";
import ThemeComp from "../common/ThemeComp";

const FooterComp = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${ThemeComp.dark};
  margin-top: 100px;
`;

const Footer = () => {
  return <FooterComp>footer</FooterComp>;
};

export default Footer;
