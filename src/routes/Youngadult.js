import youngadultimage from '../images/youngadult.jpg';

const Youngadult = () => {
    return myElement;
  };

const myElement = (
    <div>
      <h1 style={{textIndent: "120px"}}>예그리나 청년부</h1>
      <br/>
      <img src={youngadultimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="fellow"/>
      <br/>
      <div style={{width: "70%", marginLeft: "Auto", marginRight: "Auto", display: "block"}}>
        <blockquote style={{borderLeft: "3.5px solid black", paddingLeft:"40px"}}>
        <p style={{textAlign:"left", fontStyle: "italic"}}>“무엇보다도 뜨겁게 서로 사랑할지니 사랑은 허다한 죄를 덮느니라” (베드로전서 4:8)</p>
        </blockquote>
        <br/>
        <hr/>
        <br/>
        <p>매디슨 한인 장로교회 <strong>예그리나 청년부</strong>는 주 안에서 서로 뜨겁게 사랑하며 신앙적 성숙을 격려하는 공동체입니다.</p>
        <p>(‘예그리나’는 ‘사랑하는 우리 사이’라는 의미의 말이자, ‘예수님 그리고 나’의 준말입니다.)</p>
        <p>예그리나 청년부는 매주 금요일 교회에서 모임을 가집니다.</p>
        <p>함께 저녁 식사를 하고, 예배를 드린 뒤 소그룹<strong>(사랑방)</strong>으로 나뉘어 모임을 합니다.</p>
        <p>현재 세 개의 대학원 및 직장인 사랑방과 세 개의 학부 사랑방이 운영되고 있습니다.</p>
        <p>사랑방은 하나의 영적 가족으로서, 매주 그 안에서 GBS를 하며 각자의 삶을 되돌아보고 기도제목을 나누는 시간을 갖습니다.</p>
        <br/>
        <hr/>
        <br/>
        <ul>
          <li><strong>장소:</strong> 교회 본당</li>
          <li><strong>시간:</strong> 금요일 오후 7:00</li>
          <li><strong>담당자:</strong> 김동현 (chriskim713@gmail.com)</li>
        </ul>
        <br/>
      </div>
    </div>  
);   
export default Youngadult;