import React from "react";
import "./styles.css";
const NameBar = () => {
  return (
    <div className="nameBar">
      <img className="back" src={"Arrow.svg"} alt="" />
      <div className="user">
        <img className="pic" src={"randomPic.webp"} alt="" />
        <div className="userName">User Name</div>
      </div>
    </div>
  );
};

export default NameBar;
