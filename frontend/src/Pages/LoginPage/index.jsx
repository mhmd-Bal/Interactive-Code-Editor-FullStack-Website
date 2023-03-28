import React from "react";
import Login from "../../Components/Login";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer"


const LoginPage = () => {
  localStorage.setItem("current_page", "login");

  return (
    <div>
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;