import { styled } from "styled-components";
import Theme from "../common/Theme";

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${Theme.dark};
  margin-top: 100px;
`;

const Footer = () => {
  return <FooterContainer>footer</FooterContainer>;
};

export default Footer;
