import React from "react";
import NameBar from "./NameBar";
import Text from "./TextBar";
import "./styles.css";
import { useState } from "react";
import AllMessages from "./allMessages";
import axios from "axios";

const ChatBox = () => {
  const [message, setMessage] = useState([]);
  const [value, setValue] = useState("");

  const user = sessionStorage.getItem("");

  axios.post("http://localhost:8000/api/v0.0.1/chat/get_chat");

  const update = (event) => {
    setValue(event.target.value);
  };

  const send = () => {
    setMessage([...message, value]);
    console.log(message);
    console.log(value);
    setValue("");
  };
  return (
    <div className="box">
      <NameBar />
      <AllMessages message={message} />
      <Text value={value} update={update} send={send} />
    </div>
  );
};

export default ChatBox;
