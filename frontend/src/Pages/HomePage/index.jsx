import React from "react";
import NavBar from '../../Components/NavBar';
import HomeBanner from "../../Components/Banner";
import ExtraInfo from "../../Components/ExtraInfo";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomeBanner />
      <ExtraInfo />
    </div>
  );
};

export default HomePage;