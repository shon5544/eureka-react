import React from "react";
import Title from "../title";
import Navigation from "../component/Navigation";
import ClubSummary from "../component/body";
import "../component/App.css";

const introduce = [
  {
    id: "1",
    clubPart: "기계공학",
    summary:
      "‘기계에 관심이 많은 친구~ 모여라! 만들기를 좋아하는 친구들도 모여라~’ 자기만의 작품을 만들어서 특별한 경험을 해보자!",
    type: "", //이런 친구는 들어와!
    imageName:
      "https://post-phinf.pstatic.net/MjAxODA1MTlfMTA5/MDAxNTI2NzA3OTgwNjg0.OD2wugBCsTRS9kwGNVGluFr54M5V4JMSeC_O4GFxHRog.U0PiYWwE5slzto9ct7WKZfJQlKvLO3riF2dJXGPNB5Ag.JPEG/%ED%8F%AC%EC%8A%A4%ED%8A%B8_%EA%B8%B0%EA%B3%84%EA%B3%B5%ED%95%99.jpg?type=w1200",
    link: "/mechanical",
  },
  {
    id: "2",
    clubPart: "프로그래밍",
    summary:
      "'이 웹사이트조차도 우리가 만들었다! 관심만 있다면 너도 할수있어!!' 웹/앱 개발의 전반을 활동하면서 직접 만들어보게될거야. 편하고 자유로운 분위기에서 의견을 내보자! 선배라고 어려워하지말고 편한 분위기에서 자신의 창의력을 뽐내보길바래! ",
    type__li1: "프로그래밍/개발에 관심이있다.",
    type__li1__span:
      "- 최고로 중요해!! 관심이 없다면 프로그래밍은 정말 재미없게 느껴지기 때문에 꼭 관심있는 사람만 들어올것! 관심과 흥미만 있다면 재미보장!",
    type__li2: "나의 의견이 반영된 창작물을 만들고싶다.",
    type__li2__span:
      "-어느 하나 강제되는것 없이 모든 프로젝트는 토의를 통해서 진행할거야! 좋은 점 안좋은점 서로가 피드백을 주면서 더 좋은 아이디어로 다듬으며 만들게 될거야! 프로그램을 기획하는 것을 꿈꾼다면 환영해! ",
    type__li3: "나는 코딩에 대해서 1도 모르지만 배우고싶다.",
    type__li3__span:
      "- 코딩에 대해서 1도 몰라도 괜찮아! 편안하고 듬직한 멘토들이 속성으로 가르쳐주니 걱정말고 관심만 있다면 지원해주길 바랄게!", //이런 친구는 들어와!
    imageName: "https://t1.daumcdn.net/cfile/tistory/995A17455A409C9A28",
    link: "/programming",
  },
  {
    id: "3",
    clubPart: "화학",
    summary:
      "화학에 관심이 많은 친구들!! 유레카로 와라! 여러가지 재밌는 실험을 하면서 화학에 대한 지식을 넓히게 될거야! 화학에 대해 잘 모르더라도 관심과 열정만 있다면 대환영이야!",
    type: "", //이런 친구는 들어와!
    imageName: "https://t1.daumcdn.net/cfile/blog/99421B345C7BFE8912",
    link: "/chemical",
  },
];

function ClubInform() {
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
        <ClubSummary introduce={introduce} />
      </main>
    </div>
  );
}

export default ClubInform;
