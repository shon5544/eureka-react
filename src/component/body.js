import React from "react";
import { Link } from "react-router-dom";

class ClubSummary extends React.Component {
  render() {
    return (
      <div className="summary">
        {this.props.introduce.map((list) => (
          <div className="summary__club" key={list.id}>
            <Link to={list.link} className="images">
              <div className="images">
                <img src={list.imageName} alt={list.clubPart} />
              </div>
              <span className="summary__club-name">{list.clubPart}</span>
              <div className="summary__summarys">{list.summary}</div>
              <div className="final">
                <div className="comeWithUs">이런 친구는 들어와!</div>
                <span className="moreShow"> 더보기</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ClubSummary;
