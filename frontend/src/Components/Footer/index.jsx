import React from "react";
import AppButton from "../Button";
import "./styles.css";


const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-buttons">
            <AppButton button_name={<i class="fa-brands fa-instagram"></i>}/>
            <AppButton button_name={<i class="fa-brands fa-facebook"></i>}/>
            <AppButton button_name={<i class="fa-brands fa-twitter"></i>}/>
            <AppButton button_name={<i class="fa-brands fa-github"></i>}/>
        </div>
        <div className="footer-navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-note">
            <p>Future Coders @ 2023</p>
        </div>
    </div>
  );
};

export default Footer;