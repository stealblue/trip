import { Outlet } from "react-router-dom";
import Footer from "./main/FooterComp";
import HeaderComp from "./main/HeaderComp";
import { useSelector } from "react-redux";

const LayoutComp = () => {
  const { nick } = useSelector(({ LoginMod }) => ({
    nick: LoginMod?.nick,
  }));
  return (
    <>
      <HeaderComp nick={nick} />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutComp;
