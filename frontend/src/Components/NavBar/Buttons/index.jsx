import React from "react";
import AppButton from "../../Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NavButtons() {

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
        <AppButton button_name="Login" onClick={handleNavigateToLogin} />
        <AppButton button_name="Signup" onClick={handleNavigateToRegister} />
      </div>
      <div className={token ? "buttonHolder" : "disabled"}>
        <AppButton button_name="Browse"  onClick={handleNavigateToBrowseUsers} />
        <AppButton button_name="Compile" onClick={handleNavigateToCompileCode} />
        <AppButton button_name="Logout" onClick={handleLogout} />
      </div>

      <img className="profile" src={"Profile.svg"} alt="" />
    </div>
  );
}

export default NavButtons;
