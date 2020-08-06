import React from "react";

class Sumchemi extends React.Component {
  introduce = {
    id: "3",
    clubPart: "화학",
    summary:
      "화학에 관심이 많은 친구들!! 유레카로 와라! 여러가지 재밌는 실험을 하면서 화학에 대한 지식을 넓히게 될거야! 화학에 대해 잘 모르더라도 관심과 열정만 있다면 대환영이야!",
    type__li1: "진로가 화학관련이거나 관심이 있다",
    type__li1__span:
      "- 화학관련 진로를 목표로 한다면 유레카 화학동아리에 들어와! 생기부에 기재되어 관련과 대학진학에 유리해! 중학교 과학시간과 통합과학시간에 화학에 대해 간단하게 배우는 화학에흥미가 있는 친구들과 화학관련 희망진로가 있는 친구들은 꼭 들어와!",
    type__li2: "여러가지 재미있는 화학 실험을 하고싶다.",
    type__li2__span:
      "- 화학부는 유레카의 다른 부 실험에 비해 약물과 시약을 이용한 실험이 주를 이뤄 더 흥미롭고 재밌는 실험을 할 수 있어 만화에서 보이던 재밌고 신기한 실험을 해보고싶다면 화학부에 들어와!",
    type__li3: "화학에 대한 더 깊은 지식과 경험을 얻고 싶다.",
    type__li3__span:
      "- 유레카 동아리 선배들은 자연계 수업을 듣고 열심히 공부하는 선배들이야 우수한 선배들에게 과학에 대한 노하우나 지식을 얻고싶다면 들어와 과학을 못하더라도 열정과 관심만 있다면 ok!",
    imageName: "https://t1.daumcdn.net/cfile/blog/99421B345C7BFE8912",
    link: "/chemical",
  };
  render() {
    return (
      <div className="summary">
        <div className="summary__club">
          <div className="images">
            <img src={this.introduce.imageName} alt={this.introduce.clubPart} />
          </div>
          <span className="summary__club-name">{this.introduce.clubPart}</span>
          <span className="summary__summarys">{this.introduce.summary}</span>
          <div className="comeWithUs">이런 친구는 들어와!</div>
          <ul className="summary__ul">
            <li className="summary__li">{this.introduce.type__li1}</li>
            <div className="summary__comment">
              {this.introduce.type__li1__span}
            </div>
            <li className="summary__li">{this.introduce.type__li2}</li>
            <div className="summary__comment">
              {this.introduce.type__li2__span}
            </div>
            <li className="summary__li">{this.introduce.type__li3}</li>
            <div className="summary__comment">
              {this.introduce.type__li3__span}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sumchemi;
