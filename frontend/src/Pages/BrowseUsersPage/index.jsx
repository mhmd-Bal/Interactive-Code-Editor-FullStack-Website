import React from "react";
import NavBar from '../../Components/NavBar';
import User from "../../Components/User";
import Footer from "../../Components/Footer"
import "./styles.css";

const BrowseUsersPage = () => {
  return (
    <div style={{overflowX: "hidden"}}>
      <NavBar />
      <div className="list-of-users">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      <Footer />
    </div>
  );
};

export default BrowseUsersPage;