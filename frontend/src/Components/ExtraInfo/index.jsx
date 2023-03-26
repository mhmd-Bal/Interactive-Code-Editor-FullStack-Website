import React from "react";
import "./styles.css";


const ExtraInfo = () => {
  return (
    <section className="features">
        <div className="feature">
            {/* <i class="fa-solid fa-code"></i> */}
            <i className="fa-solid fa-laptop-code"></i>
            <h2>Build & Test</h2>
            <p>Get work done quicker by building out entire projects or isolating code to test features and animations.</p>
        </div>

        <div className="feature">
            <i className="fa-solid fa-graduation-cap"></i>
            <h2>Learn & Discover</h2>
            <p>Want to upgrade your skills? Learn from the developers that are publishing their work!</p>
        </div>

        <div className="feature">
            <i className="fa-solid fa-share"></i>
            <h2>Share Your Work</h2>
            <p>Become a part of the most active front-end community in the world by sharing work.</p>
        </div>
      </section>
  );
};

export default ExtraInfo;