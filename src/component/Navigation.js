import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="button">
        <div className="button-column">
          <div className="button__1">
            <Link to="/" className="mainLink">
              동아리 소개
            </Link>
          </div>
        </div>
        <div className="button-column">
          <div className="button__2">
            <Link to="/clubInfo" className="clubInfo">
              부서 소개
            </Link>
          </div>
        </div>
        <div className="button-column">
          <div className="button__3">
            <Link to="/joinWay" className="joinWay">
              가입방법
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
