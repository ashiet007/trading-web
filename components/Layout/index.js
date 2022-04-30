import React from "react";
import Footer from "./Footer";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";

const Layout = (props) => {
  return (
    <div id="layout-wrapper">
      <DesktopNavbar />
      <MobileNavbar />
      <div className="main-content">
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
