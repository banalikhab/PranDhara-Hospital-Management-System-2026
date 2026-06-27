import React from "react";
import Topbar from "./Topbar";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <>
      <div className="sticky-top">
        <Topbar />
        <NavMenu />
      </div>      
    </>
  );
};

export default Navbar;