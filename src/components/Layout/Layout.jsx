import React from "react";
import Navbar from "../Navbar/Navbar";
import Router from "../../Router/Router";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="router">
        <Router />
      </div>
    </div>
  );
};

export default Layout;
