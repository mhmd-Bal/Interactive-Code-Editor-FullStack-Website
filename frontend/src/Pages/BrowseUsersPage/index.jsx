import React from "react";
import NavBar from '../../Components/NavBar';
import User from "../../Components/User";
import Footer from "../../Components/Footer"
import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Search from "../../Components/SearchBar";


const BrowseUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('');

  const token = localStorage.getItem("token");
  localStorage.setItem("current_page", "browse_users");
  
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
  
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSearch = () => {

    const getSearchedUsers = {
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/v0.0.1/users/search?search_input=' + value,
      headers: {
        'content-type': 'application/json',
        'Accept' : 'application/json',
        'Authorization': 'bearer ' + token
      },
    }

    axios
      .request(getSearchedUsers)
      .then(function (response) {
        console.log(response);
        setUsers(response.data.users)
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div style={{overflowX: "hidden"}}>
      <NavBar />
      <div className="search-block">
        <Search value={value} handleChange={handleChange} handleSearch={handleSearch}/>
      </div>
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