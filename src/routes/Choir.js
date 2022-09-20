import choirimage from '../images/choirimage.jpg';

const Choir = () => {
    return myElement;
  };

const myElement = ( 
  <div>
    <h1 style={{textIndent: "120px"}}>찬양대</h1>
    <br/>
    <img src={choirimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="Choir"/>
    <br/>
    <div style={{width: "65%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
    <br/>
      <p><strong>찬양대</strong>는 하나님께서 찬양 받기에 합당하신 분임을 믿고 함께 찬양드리며 주일 1부 예배를 섬기는 모임입니다.
      찬양대는 예배를 섬기는 자로서 예배를 중보하며 신실한 예배자로 훈련받기 위해 노력하는 공동체입니다.
      이를 위해 매주일 아침과 한 달에 한 번 정기연습을 통해 주일예배 찬양을 연습합니다.
      허락하신 달란트의 크고 작음에 상관없이 하나님께 기쁨으로 찬양드리며 함께 예배드리고 싶으신 모든 분들을 환영합니다.</p>
    
      <br/>
      <hr/>
      <br/>
      <p><strong>장소</strong>: 교회 본당</p>
      <p><strong>시간</strong>: 주일 오전 8:45</p>
      <p><strong>담당자</strong>: 조현경 지휘자 (joyakdolkr@naver.com)</p>
    </div>
  </div>
);

export default Choir;