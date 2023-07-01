import { Outlet } from "react-router-dom";
import Footer from "../components/main/FooterComp";
import HeaderComp from "../components/main/HeaderComp";
import { useSelector } from "react-redux";

const LayoutCntr = () => {
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

export default LayoutCntr;
