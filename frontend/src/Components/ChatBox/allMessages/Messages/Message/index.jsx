import React from "react";
import "./styles.css";

const Message = (props) => {
  return (
    <>
      {props.messages.map((message) => (
        <div className="message to">{props.messages}</div>
      ))}
    </>
  );
};

export default Message;
