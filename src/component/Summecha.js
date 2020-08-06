import React from "react";

class Summecha extends React.Component {
  introduce = {
    id: "1",
    clubPart: "기계공학",
    summary:
      "‘기계에 관심이 많은 친구~ 모여라! 만들기를 좋아하는 친구들도 모여라~’ 기계공학부에 들어와서 휴대용 자외선 살균 상자, 나무 절단기 등등 기상천외한 발명품들을 멋진 아이디어로 빛내보자!",
    type__li1: "자기만의 작품을 만들어서 특별한 경험을 해보고 싶다!", //이런 친구는 들어와!
    type__li1__span:
      "유튜브에서 봤던 작품이든 자기만의 생각이든 만들어보고 싶었던 게 있던 친구들! 우리 유레카 기계공학부에선 직접 만들어 볼 수 있어! 우리 같이 멋진 작품을 만들어보자!!",
    type__li2:
      "무엇인가 만들고 싶고 아이디어도 많지만, 공구도 없고 어떻게 해야 할지 모르겠는 친구!",
    type__li2__span:
      "만들기가 하고 싶은데 공구가 없는 친구! 분명 있을 거라고 생각해! 우리 유레카에 와서 공구 걱정하지 말고 만들어보자! 웬만한 공구 전부 다 빌려줄 게 말만 해! 동아리 돈으로 원하는 부품을 사서 같이 멋진 작품을 만들어보자고!",
    type__li3:
      "만들기는 잘하지 못하지만 그래도 흥미 있고 나중에 기계 분야에 흥미가 있다!",
    type__li3__span:
      "걱정하지 말고 들어와! 유튜브에서 보던 신기한 만들기를 직접 할 수 있게 해줄게! 만들기를 못한다고 너무 걱정하지 말고 들어와서 여러 가지를 만들어보면서 같이 making 실력을 쌓아보자!",
    imageName:
      "https://post-phinf.pstatic.net/MjAxODA1MTlfMTA5/MDAxNTI2NzA3OTgwNjg0.OD2wugBCsTRS9kwGNVGluFr54M5V4JMSeC_O4GFxHRog.U0PiYWwE5slzto9ct7WKZfJQlKvLO3riF2dJXGPNB5Ag.JPEG/%ED%8F%AC%EC%8A%A4%ED%8A%B8_%EA%B8%B0%EA%B3%84%EA%B3%B5%ED%95%99.jpg?type=w1200",
    link: "/mechanical",
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

export default Summecha;
