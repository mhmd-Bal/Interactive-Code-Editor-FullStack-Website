import React from "react";
import "./styles.css";
const NameBar = ({ back, reseiver_name }) => {
  return (
    <div className="nameBar">
      <button onClick={back}>Back</button>
      <div className="user">
        <img className="pic" src={"randomPic.webp"} alt="" />
        <div className="userName">{reseiver_name}</div>
      </div>
    </div>
  );
};

export default NameBar;
