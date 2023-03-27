import React from "react";
import "./styles.css";
import Message from "./Messages/Message";
import "../../../index.css";

const AllMessages = (props) => {
  console.log(props.r_id);
  return (
    <div className="inbox">
      {props.oldMessages.map((message) => {
        console.log(message.receiver_id);
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
