import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import ThemeComp from "../common/ThemeComp";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  z-index: 10000;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: 0.8s;
  &.original_header {
    background: none;
  }

  &.change_header {
    background: ${ThemeComp.white};
  }

  .welecome {
    font-size: 20px;
    margin-left: 40px;
    margin-bottom: 8px;
    font-weight: 600;
  }
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: 600;
  font-family: "TTWanjudaedunsancheB";
  text-align: center;
  img {
    width: 200px;
    margin-top: 20px;
  }
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
  /* background: ${ThemeComp.lightblack}; */
  padding: 5px 15px;
  border-radius: 20px;
  .logout {
    font-size: 16px;
    cursor: pointer;
  }
`;

const Spacer = styled.div`
  height: 10rem;
`;

const HeaderComp = ({ nick, onLogout }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <>
      <HeaderContainer className={scrollPosition < 100 ? "original_header" : "change_header"}>
        <Logo>
          <Link to="/">
            {/* TRIPPER
            <br />
            MAKER */}
            <img src="/assets/triplogo8.png" />
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
        {nick ? (
          <div>
            <div className="welecome">{nick}님 환영합니다!</div>
            <LoginCategory>
              <Link to={`/profile/${nick}`}>마이페이지</Link>
            </LoginCategory>
            <LoginCategory>
              <span className="logout" onClick={onLogout}>
                로그아웃
              </span>
            </LoginCategory>
          </div>
        ) : (
          <div>
            <LoginCategory>
              <Link to="/auth/login">로그인</Link>
            </LoginCategory>
            <LoginCategory>
              <Link to="/auth/register">회원가입</Link>
            </LoginCategory>
          </div>
        )}
      </HeaderContainer>
      <Spacer />
    </>
  );
};

export default HeaderComp;
