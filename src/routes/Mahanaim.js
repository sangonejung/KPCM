import mahanaimimage from '../images/mahanaim.jpg';

const Mahanaim = () => {
    return myElement;
  };
  
const myElement = (
  <div>
    <h1 style={{textIndent: "120px"}}>마하나임</h1>
    <br/>
    <img src={mahanaimimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="Mahanaim"/>
    <br/>
    <div style={{width: "65%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
        <div style={{borderLeft: "3.5px solid black"}}>
          <p style={{fontStyle: "italic", textIndent: "5px"}}>“이 백성은 내가 나를 위하여 지었나니 나의 찬송을 부르게 하려 함이니라” (이사야 43:21)</p>
        </div>
        <br/>
        <hr/>
        <p>마하나임 찬양팀은 주일 2부 예배 찬양을 섬기는 작은 공동체입니다.
        주일예배를 준비하기 위해 토요일 저녁마다 모임을 갖고 있습니다.
        모임시간에는 찬양팀으로서 찬양을 준비하고, 주일예배와 교회를 위해 기도하는 시간을 갖고 있습니다.
        마하나임은 찬양으로 섬기는 찬양팀일뿐만 아니라,
        함께 교제하며 삶과 기도 제목을 나누고 서로를 중보하는 것에 힘쓰는 예배팀입니다.
        예배자로서의 마음가짐과 자세, 하나님을 향한 기쁨과 감사를 가지고 예배를 섬기고자 하시는 분들은 누구나 환영합니다.</p>
        <br/>
        <hr/>
        <p><strong>장소:</strong> 교회 본당</p>
        <p><strong>시간:</strong> 토요일 오후 8:00, 주일 오전 9:30</p>
        <p><strong>담당자:</strong> 김한준 (matthewhanjunkim@gmail.com)</p>


    </div>
  </div>
  
);
export default Mahanaim;