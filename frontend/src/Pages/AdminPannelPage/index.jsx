import React , {useState, useEffect} from "react";
import Header from  '../../Components/Admin/Header';
import Sidebar from '../../Components/Admin/Sidebar';
import axios from 'axios';

const AdminPage = () => {
    const [isOpen, setIsOpen] = useState(true);
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
              console.log(response);
          })
    },[]);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
          <Header toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
        </>
      );

};

export default AdminPage;