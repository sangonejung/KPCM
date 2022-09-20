import fellowimage from '../images/fellowimage.jpg';
const Fellow = () => {
    return myElement;
  };
  
const myElement = (
    <div>
      <h1 style={{textIndent: "120px"}}>교우 일터</h1>
      <br/>
      <img src={fellowimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="fellow"/>
      <br/>
      <div style={{width: "70%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
        <blockquote style={{borderLeft: "3.5px solid black", paddingLeft:"40px"}}>

        <p style={{textAlign:"left", fontStyle: "italic"}}>“오직 성령의 열매는 사랑과 희락과 화평과 오래 참음과 자비와 양선과 충성과<br/>
        온유와 절제니 이같은 것을 금지할 법이 없느니라” (갈라디아서 5:22~23)</p>
        </blockquote>
        <br/>
        <hr/>
        <br/>
        <p>교우부는 매디슨 한인 장로교회의 구성원들이 교회에 뿌리 내려 함께 성령의 열매를 맺도록 돕는 부서입니다.</p>
        <br/>
        <hr/>
        <br/>
        <ul>
          <li ><strong>차량 라이드:</strong> 주일 2부 예배, campus와 off-campus에서 라이드를 제공해드립니다.</li>
          <li><strong>새가족부:</strong> 새가족 환영 및 매디슨에 정착할 수 있도록 지원하는 역할을 합니다.</li>
          <li><strong>미디어부:</strong> 홈페이지 관리, 교회 행사 사진, 주보 제작, QT 책 관리 등의 역할을 합니다.</li>
        </ul>
        <br/>
        <hr/>
        <br/>
        <p><strong>문의:</strong> 이상욱 집사 (Goswlee@yahoo.com)</p>
      </div>

    </div>
);


export default Fellow;