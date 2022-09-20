import childrenimage from '../images/childrenimage.jpg';

const Children = () => {
    return myElement;
  };

const myElement = (
    <div>
      <h1 style={{textIndent: "120px"}}>어린이부</h1>
      <br/>
      <img src={childrenimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="fellow"/>
      <br/>
      <div style={{width: "70%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
        <br/>
        <hr/>
        <br/>
        <p><strong>만 5세부터 5학년</strong>까지 초등학생들은 어린이부에서 함께 예배드립니다.</p>
        <p>아이들이 매주 예배를 드리며 하나님을 경험하고 말씀을 사모할 수 있도록 여러 재밌고 유익한 활동을 합니다.</p>
        <p>매디슨 한인장로교회의 어린이들이 말씀과 기도를 통해 하나님이 기뻐하시는 자녀들로 자라나기를 소망합니다.</p>
        <br/>
        <hr/>
        <br/>
        <ul>
          <li><strong>대상:</strong> 만 5세 – 5th Grade</li>
          <li><strong>장소:</strong> 교회 1층</li>
          <li><strong>시간:</strong> 주일 예배 11:15-12:15</li>
          <li><strong>담당자:</strong> 이병주, 맹규영, 황지현, 남지현 선생님</li>
        </ul>
        <br/>
      </div>
    </div>  
);     
export default Children;