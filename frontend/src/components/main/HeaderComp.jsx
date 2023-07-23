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

  @media (max-width: 1200px) {
    .welecome {
      margin-left: 16px;
      font-size: 18px;
    }
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

  @media (max-width: 1200px) {
    img {
      width: 150px;
    }
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
    font-weight: 600;
  }
  span {
    &.click {
      color: ${ThemeComp.subcolor};
      font-weight: 600;
    }
  }

  @media (max-width: 1200px) {
    font-size: 14px;
    margin-left: 30px;
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

  @media (max-width: 1200px) {
    font-size: 14px;
    margin-left: 1px;
    .logout {
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

const Spacer = styled.div`
  height: 10rem;
`;

const HeaderComp = ({ nick, onLogout }) => {
  // const [color, setColor] = useState('#111');
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  const onClick = (e) => {
    const navItems = Array.from(document.getElementsByClassName("nav-item"));
    navItems.forEach((item) => {
      if (item === e.target) {
        item.classList.add("click");
      } else {
        item.classList.remove("click");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <>
      <HeaderContainer className={scrollPosition < 100 ? "original_header" : "change_header"}>
        <Logo onClick={onClick}>
          <Link to="/">
            <img src="/assets/triplogo8.png" alt="img" />
          </Link>
        </Logo>
        <Nav>
          <NavList onClick={onClick}>
            <Link to="/area">
              <span className="nav-item">통합검색</span>
            </Link>
          </NavList>
          <NavList onClick={onClick}>
            <Link to="/area">
              <span className="nav-item">지역</span>
            </Link>
          </NavList>
          <NavList onClick={onClick}>
            <Link to="/room">
              <span className="nav-item">숙소</span>
            </Link>
          </NavList>
          <NavList onClick={onClick}>
            <Link to="/traffic">
              <span className="nav-item">교통수단</span>
            </Link>
          </NavList>
          <NavList onClick={onClick}>
            <Link to="/chat">
              <span className="nav-item">여행MATE</span>
            </Link>
          </NavList>
          <NavList onClick={onClick}>
            <Link to="/board">
              <span className="nav-item">여행후기</span>
            </Link>
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
