import React from "react";

const introduce = [
  { head: "우리 유레카는...", id: "4" },
  {
    summary:
      "여주제일고등학교의 융합과학동아리로, 공학계열을 다루고 서로의 아이디어를 다듬고 발전시키며 선후배가 합심해서 자율적으로 프로젝트를 진행하는 동아리야! 우리 동아리는 프로젝트를 완성시키는 것도 좋은 목표지만 프로젝트를 진행하면서 얻는 것들에 더 의미를 두고있어. 프로젝트를 완성해야한다는 압박없이 성장할수있는 동아리인 우리 유레카를 소개할게!",
    id: "5",
  },
];

const list = [
  { club: "기계공학", id: "1" },
  { club: "프로그래밍", id: "2" },
  { club: "화학공학", id: "3" },
];

function Info() {
  return (
    <div className="summary">
      <div className="summary__club">
        <div className="intro">
          <h1 className="eurekaInfo">동아리 소개</h1>
        </div>
        <div className="eureka-sum-box">
          <span className="eureka-sum">
            1학년 신입생들 다들 반가워~ 코로나19로 자율 동아리를 1학기 때부터
            하지 못해서 아쉬운 친구들 많았지? 2학기때부터는 자기의 꿈과 적성에
            맞게 원하는 자율 동아리에 들어올 수 있어! 우리 유레카에 대해 짧게
            이야기 해줄게~ 우리 제일고에는 과학 관련 동아리가 2개 있어 레벨과
            유레카 이렇게 2가지 자율 동아리가 있어 레벨은 생명과학이고 우리
            유레카는 크게 기계공학, 화학공학, 전자 공학으로 3가지 정도가 있어
            유레카에 들어와서 자기가 원하는 분야 쪽으로 들어가서 같이 연구하고
            자기가 해보고 싶었던 실험, 만들고 싶었던 물건, 프로그래밍 등을
            해보는 활동이야~ 서로 공통된 관심사를 가진 부서 사람들끼리 선배,
            후배 가릴 것 없이 마음껏 자기의 실력과 능력을 한껏 발휘해봐~ 잘
            몰라도 괜찮아 각 부서에서 든든한 선배들이 잘 가르쳐 주고 이끌어 줄
            거야! 대학교를 과학 관련으로 가고 싶은 학생들! 자소서에 자신이
            만들고 싶었던 작품을 만들면서 격은 생생한 경험을 적어보고 싶은
            친구들! 우리 유레카 동아리에 들어와서 같이 탐구하자!
          </span>
        </div>
        <h1 className="eurekaInfo">{introduce[0].head}</h1>
        <h3 className="eurekaInfo__sum">{introduce[1].summary}</h3>
        <div className="eureka__h3-box">
          <h2>우리 유레카가 다루는 계열은..</h2>
        </div>
        <ul className="eureka__has">
          {list.map((li) => (
            <li className="eureka__has-li" key={li.id}>
              {li.club}
            </li>
          ))}
        </ul>
        <div className="eureka-sum-box">
          <span className="eureka-sum">총 세가지로 나뉘는데,</span>
          <span className="eureka__bold">
            저 중에 하나만 관심있어도 들어와도 돼!
          </span>
          <span className="eureka-sum">
            우리는 한사람이 저 계열들을 전부 다 다루는게 아니라 자신이 관심있는
            계열만 파고
          </span>
          <span className="eureka__bold">다른 계열의 친구들과 협력하는</span>
          <span className="eureka-sum">
            '융합과학 동아리'야! 저 세가지 계열은 회사에서의 부서라고 생각해주면
            돼!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;
