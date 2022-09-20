import calendarimage from '../images/calendarimage.jpg';

const Calendar = () => {
    return myElement;
  };
const myElement = (
    <div>
      <h1 style={{textIndent: "120px"}}>교회 일정</h1>
      <br/>
      <img src={calendarimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="fellow"/>
      <br/>
      <div style={{width: "70%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
        <p><strong>KPCMWI</strong></p>
      </div>
    </div>  
);     
export default Calendar;