import React from "react";
import Message from "./Messages";
import NameBar from "./NameBar";
import Text from "./TextBar";
import "./styles.css";

const ChatBox = () => {
  return (
    <div className="box">
      <NameBar />
      <Message />
      <Text />
    </div>
  );
};

export default ChatBox;
