import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <h1>Share via writing and podcasts, hope you enjoy</h1>
      <p>
        Increase your knowledge by reading new things and I will share whatever
        I know for you, as long as I enjoy it
      </p>

      <div className="mainpage-btn">
        <button className="mainpage-btn-pri">Read More</button>
        <button className="mainpage-btn-sec">Listen to Podcasts</button>
      </div>
    </div>
  );
};

export default MainPage;
