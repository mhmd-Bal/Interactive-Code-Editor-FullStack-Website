import React from "react";
import AppButton from "../Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const User = (props) => {
    const navigate = useNavigate();
    
    const handleNavigateChatBox = () => {
        localStorage.setItem("receiver_id", props.id);
        navigate("/chat");
    }

    return (
        <div className="user-block">
            <div className="user-info">
                <div><img src={props.profile_picture}></img></div>
                <h4>{props.username}</h4>
                <p>{props.email}</p>
            </div>
            <div className="user-actions">
                <AppButton onClick={handleNavigateChatBox} button_name="Chat"/>
            </div>
        </div>
    )
}

export default User;