import React from "react";
import NameBar from "./NameBar";
import Text from "./TextBar";
import "./styles.css";
import { useState, useEffect } from "react";
import AllMessages from "./allMessages";
import axios from "axios";

const ChatBox = () => {
  const [message, setMessage] = useState([]);
  const [value, setValue] = useState("");
  const user = localStorage.getItem("");
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    axios
      .post(
        "http://localhost:8000/api/v0.0.1/chat/get_chat",
        {
          receiver_id: user,
        },
        {
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }, []);
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
