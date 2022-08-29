import visionimage from '../images/visionimage.jpg';

const Vision = () => {
    return myElement;
  };
 
const myElement = (
    <div>
      <h1 style={{textIndent: "120px"}}>교회 소개 및 비전</h1>
      <br/>
      <center><img src={visionimage} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="Church Vision"/></center>
      <br/>
      <br/>
      <p style={{textAlign: "center"}}>
      매디슨 한인장로교회는,
      하나님의 은혜가 임하고 하나님의 은혜가 머물다가
      하나님의 은혜가 세상으로 흐르는 복의 근원되는 교회가 되기를 소망합니다.
      </p>
      <br/>
      <p style={{textAlign: "center"}}>
      매디슨 한인장로교회는,
      하나님의 나라를 생각하며 하나님의 사람들을 키워내는 교회가 되기를 소망합니다.
      </p>
      <br/>

      <p style={{textAlign: "center"}}>
      그러기 위해서,
      하나님을 경험하는 예배, 영적인 가족을 경험하는 사랑방,
      섬김의 기쁨을 경험하는 교회가 되기를 위해 힘쓰고 있습니다.
      </p>
      <br/>

      <p style={{textAlign: "center"}}>
      기회가 되시면 저희 교회에서 오셔서 저희와 함께 하나님의 은혜를 나누며,
      하나님 나라와 그의 영광을 구하면 좋겠습니다.
      </p>
      <br/>
      <hr/> 
      <br/>
      <p style={{textAlign: "center", fontWeight: "bold" }}>매디슨 한인장로교회</p>
      <br/>
      <p style={{textAlign: "center", fontWeight: "bold" }}>임은욱 드림</p>

    </div>
);
export default Vision;