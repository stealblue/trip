import { styled } from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* position: fixed; */
  width: 100%;
  left: 50%;
  /* transform: translate(-50%); */
  z-index: 10000;
  padding: 30px;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: 600;
  font-family: "TTWanjudaedunsancheB";
  text-align: center;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const NavList = styled.li`
  margin-left: 50px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    font-weight: 500;
  }
`;

const LoginCategory = styled.span`
  margin-left: 20px;
`;

const Spacer = styled.div`
  /* height: 1rem; */
`;

const HeaderComp = () => {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <Link to="/">
            TRIPPER
            <br />
            MAKER
          </Link>
        </Logo>
        <Nav>
          <NavList>
            <Link to="/area">테마/지역별</Link>
          </NavList>
          <NavList>
            <Link to="/room">숙소</Link>
          </NavList>
          <NavList>
            <Link to="/traffic">교통수단</Link>
          </NavList>
          <NavList>
            <Link to="/chat">여행MATE</Link>
          </NavList>
          <NavList>
            <Link to="/board">여행후기</Link>
          </NavList>
        </Nav>
        <div>
          <LoginCategory>
            <Link to="/auth/login">로그인</Link>
          </LoginCategory>
          <LoginCategory>
            <Link to="/auth/register">회원가입</Link>
          </LoginCategory>
        </div>
      </HeaderContainer>
      <Spacer />
    </>
  );
};

export default HeaderComp;
