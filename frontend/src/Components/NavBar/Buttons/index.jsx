import React from "react";
import AppButton from "../../Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function NavButtons() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);

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
    navigate("/");
  }

  return (
    <div className="navButtons">
      <div className={token ? "disabled" : "buttonHolder"}>
        <AppButton button_name="Login" onClick={handleNavigateToLogin} />
        <AppButton button_name="Signup" onClick={handleNavigateToRegister} />
      </div>
      <div className={token ? "buttonHolder" : "disabled"}>

        <AppButton button_name="Browse Users"  onClick={handleNavigateToBrowseUsers} />
        <AppButton button_name="Start Coding" onClick={handleNavigateToCompileCode} />
        <AppButton button_name="Logout" onClick={handleLogout} />
      </div>

      <img className="profile" src={"Profile.svg"} alt="" />
    </div>
  );
}

export default NavButtons;
