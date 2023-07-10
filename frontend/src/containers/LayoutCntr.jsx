import { Outlet } from "react-router-dom";
import Footer from "../components/main/FooterComp";
import HeaderComp from "../components/main/HeaderComp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../modules/UserMod";
import { initializeLoginForm } from "../modules/LoginMod";
// import { useCookies } from "react-cookie";

const LayoutCntr = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const dispatch = useDispatch();
  const { nick } = useSelector(({ UserMod }) => ({
    nick: UserMod.user?.nick,
  }));

  const onLogout = () => {
    // console.log("onLogout removecooke1->");
    // removeCookie("access_token");
    dispatch(logout());
    console.log("onLogout removecooke2->");
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
