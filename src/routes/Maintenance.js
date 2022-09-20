import maintenanceimage from '../images/maintenanceimage.jpg';

const Maintenance = () => {
    return myElement;
  };
 
const myElement = (
    <div>
      <h1 style={{textIndent: "120px"}}>관리 일터</h1>
      <br/>
      <img src={maintenanceimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="fellow"/>
      <br/>
      <div style={{width: "70%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
        <blockquote style={{borderLeft: "3.5px solid black", paddingLeft:"40px"}}>

        <p style={{textAlign:"left", fontStyle: "italic"}}>“우리가 보고 들은 바를 너희에게도 전함은 너희로 우리와 사귐이 있게 하려 함이니<br/>
        우리의 사귐은 아버지와 그의 아들 예수 그리스도와 더불어 누림이라.” (요한1서 1:3)</p>
        </blockquote>
        <br/>
        <hr/>
        <br/>
        <p>관리부는 주님의 몸된 교회 내부및 외부를 청결하게 관리함으로써 교회를 이용하는 성도들의 교제를 돕는 부서입니다.</p>
        <br/>
        <hr/>
        <br/>
        <ul>
          <li><strong>교회 대청소:</strong> 일년에 두번, 봄과 가을, 교회 대청소를 실시합니다.</li>
          <li><strong>정기 관리:</strong> 냉난방 필터나 화장실 휴지같은 물품을 정기적으로 관리합니다.</li>
          <li><strong>보수 및 교체:</strong> 전구불이 들어오지 않거나 배터리 수명이 다 됐을 경우 부품을 교체하거나 수리하는 일을 합니다.</li>
        </ul>
        <br/>
        <hr/>
        <br/>
        <p><strong>문의:</strong> 최수용 집사 (schoi58@wisc.edu)</p>
      </div>
    </div>  
);
export default Maintenance;