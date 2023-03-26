import React from "react";
import NavBar from '../../Components/NavBar';
import HomeBanner from "../../Components/Banner";
import ExtraInfo from "../../Components/ExtraInfo";
import Footer from "../../Components/Footer";

const HomePage = () => {
  return (
    <div style={{overflowX: "hidden"}}>
      <NavBar />
      <HomeBanner />
      <ExtraInfo />
      <Footer />
    </div>
  );
};

export default HomePage;