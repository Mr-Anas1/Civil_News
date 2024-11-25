import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <h1>Welcome to the world of Civil Engineering</h1>
      <p>
      Dive into insightful podcast talks exploring the innovations, challenges, and success stories shaping our infrastructure and building the future.
      </p>

      <div className="mainpage-btn">
        <button className="mainpage-btn-pri">Read More</button>
        <button className="mainpage-btn-sec">Listen to Podcasts</button>
      </div>
    </div>
  );
};

export default MainPage;
