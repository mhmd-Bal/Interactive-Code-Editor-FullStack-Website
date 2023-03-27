import React , {useState, useEffect} from "react";
import NavBar from '../../Components/NavBar';
import Footer from "../../Components/Footer"
import axios from 'axios';
import "./style.css";

function CodesPage() {

  const [codes, setCodes] = useState([]);
  const token = localStorage.getItem("token");

  const getLoggedInUserCodes = {
    method: 'GET',
    url: 'http://127.0.0.1:8000/api/v0.0.1/code/current_user',
    headers: {
      'content-type': 'application/json',
      'Accept' : 'application/json',
      'Authorization': 'bearer ' + token
    },
  };

  useEffect(() => {
    axios.request(getLoggedInUserCodes)
        .then(response => {
            setCodes(response.data.code);
            console.log(response);
        })
  },[]);

  return (
    <div>
      <NavBar/>
      <h1>My Codes</h1>
      {codes.map(code => (
        <div key={code.id}>
          <h3>{code.name}</h3>
          <pre>{code.content}</pre>
        </div>
      ))}
      <Footer/>
    </div>
  );
};
export default CodesPage;