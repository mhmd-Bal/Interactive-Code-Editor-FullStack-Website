import React from "react";
import "./styles.css";

const Text = (value, update, send) => {
  return (
    <div className="textBox">
      <input
        value={value}
        onChange={update}
        type="text"
        placeholder="Type the message here.."
      />
      <button onClick={send} className="submit">
        SEND
      </button>
    </div>
  );
};

export default Text;
