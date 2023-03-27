import React from "react";
import "./styles.css";
import axios from "axios";

const Message = (props) => {
  return (
    <>
      {props.messages.map((message) => (
        <div className="message to">{message}</div>
      ))}
    </>
  );
};

export default Message;
