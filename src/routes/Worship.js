import worshipimage from '../images/worshipimage.jpg';


const Worship = () => {
    return myElement;
  };
 
const myElement = (  
  <div>
      <h1 style={{textIndent: "120px"}}>예배 일터</h1>
      <br/>
      <img src={worshipimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="Worship"/>
      <br/>
      <div style={{width: "65%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
        <div style={{borderLeft: "3.5px solid black"}}>
          <p style={{fontStyle: "italic", textIndent: "5px"}}>“감사로 제사를 드리는 자가 나를 영화롭게 하나니 그의 행위를 옳게 하는 자에게 </p>
          <p style={{fontStyle: "italic", textIndent: "8px"}}>  내가 하나님의 구원을 보이리라” (시편 50:23) </p>
          <p style={{fontStyle: "italic", textIndent: "5px"}}>“하나님은 영이시니 예배하는 자가 영과 진리로 예배할지니라” (요한복음 4:24)</p>
        </div>
        <br/>
        <hr/>
        <p>예배부는 우리 교회 모든 성도들이 마땅히 드려야 할 감사예배를 통해 거룩하신 하나님을 만나는 참예배를 섬기는 부서입니다.</p>
        <br/>
        <p>찬양대, 찬양팀, 성례·성찬부, PPT 제작부, 음향부, 조명부로 섬기고 있습니다.</p>
        <br/>
        <ul>
          <li ><strong>1부 예배 </strong> (9: 30 AM) : 찬양대가 섬기는 전통예배</li>
          <li><strong>2부 예배 </strong>(11:15 AM) : 찬양팀이 섬기는 열린예배</li>
          <li><strong>교회절기예배 및 여름·겨울 방학</strong>에는 교사예배 (9:30 AM), 연합예배 (11:15 AM)를 드리고 있습니다.</li>
        </ul>
        <br/>
        <hr/>
        <br/>
        <br/>
        <p><strong>문의</strong>: 김원희 장로 (wonheekchung@gmail.com)</p>
      </div>
  </div>
);
export default Worship;