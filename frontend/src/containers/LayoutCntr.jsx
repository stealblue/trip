import { Outlet } from "react-router-dom";
import Footer from "../components/main/FooterComp";
import HeaderComp from "../components/main/HeaderComp";
import { useDispatch, useSelector } from "react-redux";
import { check, logout } from "../modules/auth/UserMod";
import { initializeLoginForm } from "../modules/auth/LoginMod";
import { useEffect } from "react";
import SideMenuComp from "../components/main/SideMenuComp";

const LayoutCntr = () => {
  const dispatch = useDispatch();
  const { user, nick } = useSelector(({ UserMod }) => ({
    user: UserMod.user,
    nick: UserMod.user?.nick,
  }));

  const onLogout = () => {
    dispatch(logout());
    dispatch(initializeLoginForm()); // 초기화 해줌. 로그아웃 후 LoginMod에 정보(auth: true)가 남아있어 check()에 걸려 로그인 페이지 재진입시 401에러 발생함.
  };

  //마이페이지에서 닉네임 수정시 localstorage 저장된 값 변경해줌.
  useEffect(() => {
    const USER_KEY = "USER";
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }, [nick]);

  return (
    <>
      <HeaderComp nick={nick} onLogout={onLogout} />
      {/* <SideMenuComp /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutCntr;
