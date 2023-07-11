import { Outlet } from "react-router-dom";
import Footer from "../components/main/FooterComp";
import HeaderComp from "../components/main/HeaderComp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../modules/auth/UserMod";
import { initializeLoginForm } from "../modules/auth/LoginMod";

const LayoutCntr = () => {
  const dispatch = useDispatch();
  const { nick } = useSelector(({ UserMod }) => ({
    nick: UserMod.user?.nick,
  }));

  const onLogout = () => {
    dispatch(logout());
    dispatch(initializeLoginForm()); // 초기화 해줌. 로그아웃 후 LoginMod에 정보(auth: true)가 남아있어 check()에 걸려 로그인 페이지 재진입시 401에러 발생함.
  };

  return (
    <>
      <HeaderComp nick={nick} onLogout={onLogout} />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutCntr;
