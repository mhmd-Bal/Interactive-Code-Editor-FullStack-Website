import React from "react";
import "./styles.css";
import Message from "./Messages/Message";
import "../../../index.css";

const AllMessages = (props) => {
  console.log(props.message);
  return (
    <div className="inbox">
      <div className="message from">Hii</div>

      <Message messages={props.message} />
    </div>
  );
};

export default AllMessages;
