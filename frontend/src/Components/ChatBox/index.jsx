import React from "react";
import NameBar from "./NameBar";
import Text from "./TextBar";
import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllMessages from "./allMessages";
import axios from "axios";

const ChatBox = () => {
  const [message, setMessage] = useState([]);
  const [oldMessages, setOldMessages] = useState([]);

  const [value, setValue] = useState("");
  const user = localStorage.getItem("receiver_id");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const back = () => {
    navigate("/browse_users");
  };

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
        console.log(res.data.Message);
        setOldMessages(res.data.Message);
      });
  }, []);
  const update = (event) => {
    setValue(event.target.value);
  };

  const send = () => {
    if (!value == "") {
      setMessage([...message, value]);

      axios.post(
        "http://localhost:8000/api/v0.0.1/chat/send_message",
        {
          receiver_id: user,
          content: value,
        },
        {
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "bearer " + token,
          },
        }
      );

      setValue("");
    }
  };
  return (
    <div className="box">
      <NameBar back={back} />
      <AllMessages r_id={user} oldMessages={oldMessages} message={message} />
      <Text value={value} update={update} send={send} />
    </div>
  );
};

export default ChatBox;
