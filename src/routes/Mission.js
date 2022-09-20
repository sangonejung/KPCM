import missionimage from '../images/missionimage.jpg';

const Mission = () => {
    return myElement;
  };

const myElement = (
    <div>
      <h1 style={{textIndent: "120px"}}>선교 일터</h1>
      <br/>
      <img src={missionimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="fellow"/>
      <br/>
      <div style={{width: "70%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
        <blockquote style={{borderLeft: "3.5px solid black", paddingLeft:"40px"}}>

        <p style={{textAlign:"left", fontStyle: "italic"}}>“오직 성령이 너희에게 임하시면 너희가 권능을 받고 예루살렘과 온 유대와 사마리아와<br/>
        땅 끝까지 이르러 내 증인이 되리라 하시니라” (사도행전 1:8)</p>
        </blockquote>
        <br/>
        <hr/>
        <br/>
        <p>선교부는 캠퍼스와 지역 공동체와 세상 곳곳에 하나님을 알지 못하는 사람들을 위해 기도하며 복음을 전하는 공동체입니다.</p>
        <p>멘토링 프로그램을 통해 캠퍼스에 있는 학생들에게 하나님의 사랑을 전하고, 해외 현장에 있는 선교사님들을 위해 기도하며 후원하고 있습니다.</p>
        <p>또한 해외 비전 트립과 지역사회 아웃 리치를 통해 직접 선교 현장에 참여할 기회를 지원하고 있습니다.</p>
        <p>하나님의 복음을 전하는 일에 소명을 가지고 함께 일하실 분들을 환영합니다.</p>
        <br/>
        <hr/>
        <br/>
        <ul>
          <li><strong>캠퍼스 선교:</strong> 학부생-대학원생을 1:1 멘토링으로 연결해 학업, 신앙, 진로 등의 고민을 나눌 수 있도록 돕습니다.</li>
          <li><strong>비전 트립:</strong> 해외 선교현장을 방문하여 선교사님 사역에 동참할 수 있는 기회를 제공합니다.</li>
          <li><strong>지역사회 아웃리치:</strong> 소외된 이웃을 돕고 돌볼 수 있도록 격려하고 동참합니다.</li>
          <li><strong>해외선교 후원:</strong> 해외 현장에 계신 선교사님과 연락하면서 함께 기도하고 후원할 수 있도록 합니다.</li>
          <li><strong>미디어 선교:</strong> 문서와 인터넷을 통해 선교 및 후원 현황을 알리고 기도제목을 나눕니다.</li>
        </ul>
        <br/>
        <hr/>
        <br/>
        <p><strong>문의:</strong> 최윤정 집사 JyHermann15@sbcglobal.net</p>
      </div>
    </div>  
); 
  
export default Mission;