import React from "react";
import NameBar from "./NameBar";
import Text from "./TextBar";
import "./styles.css";
import { useState } from "react";
import AllMessages from "./allMessages";
import axios from "axios";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const update = (e) => {
    setValue(e.target.value);
  };

  const send = () => {
    setMessages([...messages, value]);
    setValue("");
  };
  return (
    <div className="box">
      <NameBar />
      <AllMessages messages={messages} />
      <Text value={value} update={update} send={send} />
    </div>
  );
};

export default ChatBox;
