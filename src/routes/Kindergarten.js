import kindergartenimage from '../images/kindergartenimage.jpg';

const Kindergarten = () => {
    return myElement;
  };

const myElement = (
    <div>
      <h1 style={{textIndent: "120px"}}>유아부</h1>
      <br/>
      <img src={kindergartenimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="fellow"/>
      <br/>
      <div style={{width: "70%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
        <br/>
        <hr/>
        <br/>
        <p><strong>만 2-4세를</strong> 대상으로 하는 유아부에서는</p>
        <p>즐거운 마음으로 친구들과 함께 예배드리는 것과 하나님이 나를 사랑하시는 분임을 아는 것을 목표로 합니다.</p>
        <p>매주 간단한 찬양/율동 후 주제 말씀이 전해지며,</p>
        <p>이후 만 2세 영아반과 만 3-4세 유아반으로 나누어 공과공부를 합니다.</p>
        <br/>
        <hr/>
        <br/>
        <ul>
          <li><strong>대상:</strong> 만 2-4세</li>
          <li><strong>장소:</strong> 교회 1층</li>
          <li><strong>시간:</strong> 주일 예배 11:15-12:15</li>
          <li><strong>담당자:</strong> 우문주, 박윤지 선생님</li>
        </ul>
        <br/>
      </div>
    </div>  
);   

export default Kindergarten;