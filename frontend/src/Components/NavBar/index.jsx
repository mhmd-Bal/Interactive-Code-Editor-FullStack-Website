import React from "react";
import "./styles.css";
import NavButtons from "./Buttons";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="navBar">
      <Logo />
      <NavButtons />
    </div>
  );
};

export default NavBar;
