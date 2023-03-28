import React from "react";
import "./styles.css";
import Message from "./Messages/Message";
import "../../../index.css";

const AllMessages = (props) => {
  return (
    <div className="inbox">
      {props.oldMessages.map((message) => {
        if (message.receiver_id != props.r_id) {
          return <div className="message from">{message.content}</div>;
        } else {
          return <div className="message to">{message.content}</div>;
        }
      })}
      <Message messages={props.message} />
    </div>
  );
};

export default AllMessages;
