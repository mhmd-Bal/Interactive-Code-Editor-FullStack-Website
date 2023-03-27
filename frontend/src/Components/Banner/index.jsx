import React from "react";
import AppButton from "../Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleNavigationCompile = () => {
    navigate("/compile_code");
  }
  const handleNavigationRegister = () => {
    navigate("/register");
  }


  return (
    <div className="banner-container">
        <h1 className="banner-title">Begin coding in python with our developers</h1>
        <AppButton  button_name={token ? "Begin Coding" : "Signup Now!"} onClick={token ? handleNavigationCompile : handleNavigationRegister}/>
    </div>
  );
};

export default HomeBanner;