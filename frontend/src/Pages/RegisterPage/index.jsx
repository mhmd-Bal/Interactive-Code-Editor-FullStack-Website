import React from "react";
import Register from "../../Components/Register";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer"


const RegisterPage = () => {
  localStorage.setItem("current_page", "register");
  
  return (
    <div>
      <NavBar />
      <Register />
      <Footer />
    </div>
  );
};

export default RegisterPage;