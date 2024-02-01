import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../share/Navbar/Navbar";
import Footer from "../share/Footer/Footer";
import MobileNavber from "../share/Navbar/MobileNavbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <MobileNavber />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
