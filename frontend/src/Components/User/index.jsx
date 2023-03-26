import React from "react";
import "./styles.css";

const User = (props) => {
    return (
        <div className="user-block">
            <div className="user-info">
                {/* <img alt="No pic now"></img> */}
                <div><img src={props.profile_picture}></img></div>
                <h4>{props.username}</h4>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default User;