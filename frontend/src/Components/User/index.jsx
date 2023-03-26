import React from "react";
import AppButton from "../Button";
import "./styles.css";

const User = (props) => {
    return (
        <div className="user-block">
            <div className="user-info">
                <div><img src={props.profile_picture}></img></div>
                <h4>{props.username}</h4>
                <p>{props.email}</p>
            </div>
            <div className="user-actions">
                <AppButton user_id={props.id} button_name="Chat"/>
            </div>
        </div>
    )
}

export default User;