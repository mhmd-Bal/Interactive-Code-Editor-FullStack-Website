import React from "react";
import "./styles.css";

const Message = (messages) => {
  return (
    <>
      {messages.map((message) => (
        <div className="message to">{message}</div>
      ))}
    </>
  );
};

export default Message;
