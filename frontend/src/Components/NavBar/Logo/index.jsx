import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  }
  
  return (
    <div className="logo" onClick={handleNavigateToHome}>
      <img src={"logo.webp"} alt="" />
    </div>
  );
};

export default Logo;
