import React from "react";
import AppButton from "../../Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NavButtons() {
  const current_page = localStorage.getItem("current_page");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleNavigateToLogin = () => {
    navigate("/login");
  }

  const handleNavigateToRegister = () => {
    navigate("/register");
  }
  
  const handleNavigateToCompileCode = () => {
    navigate("/compile_code");
  }

  const handleNavigateToBrowseUsers = () => {
    navigate("/browse_users");
  }

  const handleNavigateToMyCodes = () => {
    navigate("/my_codes");
  }

  const handleLogout = () => {
    localStorage.clear();
    
    const logout = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v0.0.1/logout/',
      headers: {
        'content-type': 'application/json',
        'Accept' : 'application/json',
        'Authorization': 'bearer ' + token
      },
    };
    
    axios.request(logout)
        .then(response => {
            navigate("/");
      });
  }

  return (
    <div className="navButtons">
      <div className={token ? "disabled" : "buttonHolder"}>
        <AppButton button_name="Login" onClick={handleNavigateToLogin} is_active={current_page == "login" ? "active" : "notactive"} />
        <AppButton button_name="Signup" onClick={handleNavigateToRegister} is_active={current_page == "register" ? "active" : "notactive"} />
      </div>
      <div className={token ? "buttonHolder" : "disabled"}>
        <AppButton button_name="Browse"  onClick={handleNavigateToBrowseUsers} is_active={current_page == "browse_users" ? "active" : "notactive"} />
        <AppButton button_name="Compile" onClick={handleNavigateToCompileCode} is_active={current_page == "compile_code" ? "active" : "notactive"} />
        <AppButton button_name="Logout" onClick={handleLogout} />
      </div>
      
      <img className={token ? "profile" : "disabled"} src={"log.jpg"} alt="" onClick={handleNavigateToMyCodes}/>
      {/* <img className={token ? "profile" : "disabled"} src={"randomPic.webp"} alt="" /> */}

    </div>
  );
}

export default NavButtons;
