import React from "react";
import "./styles.css";

function NavButtons() {
  return (
    <div className="navButtons">
      <div className="buttonHolder">
        <button className="buttons">Home</button>
        <button className="buttons">Log Out</button>
        <button className="buttons">Start Coding</button>
      </div>

      <img className="profile" src={"Profile.svg"} alt="" />
    </div>
  );
}

export default NavButtons;
