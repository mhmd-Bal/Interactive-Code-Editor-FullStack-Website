import React from "react";
import NavBar from '../../Components/NavBar';
import User from "../../Components/User";
import Footer from "../../Components/Footer"
import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AppButton from "../../Components/Button";


const BrowseUsersPage = () => {

  const [users, setUsers] = useState([]);

  const token = sessionStorage.getItem("token");

  const getUsers = {
    method: 'GET',
    url: 'http://127.0.0.1:8000/api/v0.0.1/users/',
    headers: {
      'content-type': 'application/json',
      'Accept' : 'application/json',
      'Authorization': 'bearer ' + token
    },
  };

  useEffect(() => {
    axios.request(getUsers)
        .then(response => {
            setUsers(response.data.users);
        })
  },[]);

  return (
    <div style={{overflowX: "hidden"}}>
      <NavBar />
      <div className="list-of-users">
        {users.map((user) => (
          <User profile_picture={user.profile_picture} username={user.username} email={user.email} id={user.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BrowseUsersPage;