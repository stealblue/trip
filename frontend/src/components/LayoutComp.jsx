import { Outlet } from "react-router-dom";
import Footer from "./main/FooterComp";
import HeaderComp from "./main/HeaderComp";

const LayoutComp = () => {
  return (
    <>
      <HeaderComp />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutComp;
