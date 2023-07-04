import { Outlet } from "react-router-dom";
import Footer from "../components/main/FooterComp";
import HeaderComp from "../components/main/HeaderComp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../modules/UserMod";

const LayoutCntr = () => {
  const dispatch = useDispatch();
  const { nick } = useSelector(({ UserMod }) => ({
    nick: UserMod.user?.nick,
  }));
  console.log("Layout container=====", nick);
  const onLogout = () => {
    dispatch(logout());
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
