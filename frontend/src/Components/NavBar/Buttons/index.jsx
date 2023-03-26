import React from "react";
import AppButton from "../../Button";
import "./styles.css";

function NavButtons() {
  return (
    <div className="navButtons">
      <div className="buttonHolder">
        {/* <button className="buttons">Home</button>
        <button className="buttons">Log Out</button>
        <button className="buttons">Start Coding</button> */}
        <AppButton button_name="Login" />
        <AppButton button_name="Signup" />
      </div>

      <img className="profile" src={"Profile.svg"} alt="" />
    </div>
  );
}

export default NavButtons;
