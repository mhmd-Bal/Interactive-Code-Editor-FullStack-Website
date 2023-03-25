import React from "react";
import "./styles.css";
const NameBar = () => {
  return (
    <div className="nameBar">
      <img className="back" src={"back.png"} alt="" />
      <img className="pic" src={"randomPic.webp"} alt="" />
      <p className="userName">User Name</p>
    </div>
  );
};

export default NameBar;
