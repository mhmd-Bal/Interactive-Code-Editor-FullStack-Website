import React from "react";
import "./styles.css";

const User = (props) => {
    return (
        <div className="user-block">
            <div className="user-info">
                {/* <img alt="No pic now"></img> */}
                <div></div>
                <h4>John Doe</h4>
                <p>Age: 23</p>
                <p>Email: Johndoe@gmail.com</p>
            </div>
        </div>
    )
}

export default User;