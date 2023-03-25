import React from "react";
import "./styles.css";

const Text = () => {
  return (
    <div className="textBox">
      <input type="text" placeholder="Type the message here.." />
      <button className="submit">SEND</button>
    </div>
  );
};

export default Text;
