import React from "react";
import Login from "../../Components/Login";
import NavBar from "../../Components/NavBar";

const LoginPage = () => {
  localStorage.setItem("current_page", "login");

  return (
    <div>
      <NavBar />
      <Login />
    </div>
  );
};

export default LoginPage;