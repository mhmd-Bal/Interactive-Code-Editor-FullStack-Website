import React from "react";
import "./styles.css";
import NavButtons from "./Buttons";
import Search from "./SearchBar/index.jsx";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="navBar">
      <Logo />
      <Search />
      <NavButtons />
    </div>
  );
};

export default NavBar;
