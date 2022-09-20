import timeimage from '../images/timeimage.jpg';

const Time = () => {
    return myElement;
  };

const myElement = ( 
  <div>
    <h1 style={{textIndent: "120px"}}>예배 시간 안내</h1>
    <br/>
    <img src={timeimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="Choir"/>
    <br/>
    <p style={{textAlign: "center"}}>주일예배나 청년부 예배/모임 라이드가 필요하시다구요?</p>
    <p style={{textAlign: "center"}}><a href="https://docs.google.com/spreadsheets/d/1C8t40tCIT99DQNp-aILpUvMkgtAXTToVkAAbSHWV6Fo/edit?usp=sharing">여기</a>
     를 참고해주세요!</p>
     <br/>
    <table style={{border:"1px solid black", marginLeft: "Auto", marginRight: "Auto"}}>
    <tbody>
      <tr>
      <td rowspan="3" width="156"><p style={{textAlign:"center"}}><strong>예배</strong></p>
      </td>  
      <td style={{textAlign:"center"}} width="156">주일예배</td>
      <td style={{textAlign:"center"}} width="96">주일</td>
      <td style={{textAlign:"center"}} width="216">11:15 AM</td>
      </tr>
      <tr>
      <td width="156">
      <p style={{textAlign:"center"}}>주일학교 예배</p>
      </td>
      <td style={{textAlign:"center"}} width="96">주일</td>
      <td width="216">
      <p style={{textAlign:"center"}}>11:15 AM</p>
      </td>
      </tr>
      <tr>
      <td width="156">
      <p style={{textAlign:"center"}}>사랑방</p>
      </td>
      <td style={{textAlign:"center"}} width="96">금요일</td>
      <td width="216">
      <p style={{textAlign:"center"}}>장소 및 시간 TBA</p>
      </td>
      </tr>
      <tr>
      <td style={{textAlign:"center"}} width="156">
      <p style={{textAlign:"center"}}><strong>모임</strong></p>
      </td>
      <td style={{textAlign:"center"}} width="156">청년부 모임</td>
      <td style={{textAlign:"center"}} width="96">금요일</td>
      <td width="216">
      <p style={{textAlign:"center"}}>7:00 PM</p>
      </td>
      </tr>
    </tbody>
    </table>

  </div>
);

export default Time;