import React from "react";
import Register from "../../Components/Register";
import NavBar from "../../Components/NavBar";

const RegisterPage = () => {
  localStorage.setItem("current_page", "register");
  
  return (
    <div>
      <NavBar />
      <Register />
    </div>
  );
};

export default RegisterPage;