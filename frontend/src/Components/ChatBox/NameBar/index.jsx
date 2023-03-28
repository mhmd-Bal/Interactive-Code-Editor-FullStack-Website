import React from "react";
import "./styles.css";
const NameBar = ({ back }) => {
  return (
    <div className="nameBar">
      <button onClick={back}>Back</button>
      <div className="user">
        <img className="pic" src={"randomPic.webp"} alt="" />
        <div className="userName">User Name</div>
      </div>
    </div>
  );
};

export default NameBar;
