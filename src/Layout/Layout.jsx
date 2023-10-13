import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-main text-white">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
