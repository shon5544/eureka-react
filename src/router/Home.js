import React from "react";
import Title from "../title";
import Navigation from "../component/Navigation";
import "../component/App.css";
import Info from "../component/Info";

function ClubHome() {
  return (
    <div className="main">
      <h1 className="title">
        <Title />
      </h1>
      <div className="subtitle">
        <span className="title__sub">여주제일고등학교 융합과학동아리</span>
      </div>
      <div className="select-box">
        <div className="selections">
          <Navigation />
        </div>
      </div>
      <main className="main__summary-club">
        <Info />
      </main>
    </div>
  );
}

export default ClubHome;
