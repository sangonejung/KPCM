import directionimage1 from '../images/directionimage1.jpg';
const Direction = () => {
    return myElement;
  };

const myElement = (
  <div>
    <h1 style={{textIndent: "120px"}}>오시는 길</h1>
    <br/>
    <center><img src={directionimage1} style={{marginLeft: "Auto", marginRight: "Auto", display: "block"}} alt="Church Vision"/></center>
    <br/>
    <p style={{textAlign: "center", fontWeight: "bold"}}>교회 주소:</p>
    <br/>
    <p style={{textAlign: "center"}}>6906 Colony Drive, Madison, WI, 53717</p>
    <br/>
    <hr/> 
    <br/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.679532411459!2d-89.50358918417801!3d43.06920717914565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8807aeef9ea26aff%3A0x2d62b52cb798611a!2sKorean%20Presbyterian%20Church!5e0!3m2!1sen!2sus!4v1662008908868!5m2!1sen!2sus" style={{width:"600px", height:"450px", border:"0px", margin:"0px auto", display: "block"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>

  </div>
);

export default Direction;