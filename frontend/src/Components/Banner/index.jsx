import React from "react";
import AppButton from "../Button";
import "./styles.css";


const HomeBanner = () => {
  return (
    <div className="banner-container">
        <h1 className="banner-title">Begin coding in python with our developers</h1>
        <AppButton  button_name="Signup Now!"/>
    </div>
  );
};

export default HomeBanner;