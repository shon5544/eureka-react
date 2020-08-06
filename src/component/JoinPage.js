import React from "react";

function JoinPage() {
  return (
    <div className="summary">
      <div className="summary__club">
        <div className="eureka__h3-box">
          <h1>유레카에 지원하는 방법</h1>
        </div>
        <ul className="eureka__has">
          <li className="ssibal">
            2학년 4반 "손범수" or 2학년 2반 "계동범" 선배에게 신청서를 직접
            전달한다
          </li>
          <li className="ssibal">
            010-3246-3206 이나 010-2795-5729로 신청서 파일을 보낸다 (스샷도 갠춘
            / 메세지 말고 카톡으로도 갠춘)
          </li>
        </ul>
        <div className="eureka-sum-box">
          <span className="eureka-sum">
            두가지 중에 편한 방법으로 해줘! 신청서를 받은 뒤
          </span>
          <span className="eureka__bold">
            면접일은 추후 개인 휴대폰으로 공지하니까
          </span>
          <span className="eureka-sum">
            면접일날 늦지 않게 와서 면접보길 바라!
          </span>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;
