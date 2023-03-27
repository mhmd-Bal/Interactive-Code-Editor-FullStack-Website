import React from "react";
import AppButton from "../../Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function NavButtons() {

  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/login");
  }

  const handleNavigateToRegister = () => {
    navigate("/register");
  }

  return (
    <div className="navButtons">
      <div className="buttonHolder">
        {/* <button className="buttons">Home</button>
        <button className="buttons">Log Out</button>
        <button className="buttons">Start Coding</button> */}
        <AppButton button_name="Login" onClick={handleNavigateToLogin} />
        <AppButton button_name="Signup" onClick={handleNavigateToRegister} />
      </div>

      <img className="profile" src={"Profile.svg"} alt="" />
    </div>
  );
}

export default NavButtons;
