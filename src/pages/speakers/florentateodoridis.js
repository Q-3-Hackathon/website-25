import '../../styles/speaker.css';
import logo from '../../assets/images/Q3logotext.png';
import florenta from "../../assets/images/speakers/florenta.jpg";
function Teodoridis() {
    return (
       <>
    <div class="header">
      <div class="header-content">
        <div class="left">
          <div class="header-box">
            <h1 className="title">Q<sup>3</sup> Initiative: QEthics @ USC</h1>
          </div>
          <p>September 12, 2025 - September 14, 2025</p>
          <p>University of Southern California</p>
          <p>TBD</p>
        </div>
        <div className="right">
          <img src={logo} className="logo" alt="Q^3 Logo" />
        </div>
      </div>
    </div>
    <div className="speaker-box">
      <div className="speaker-photo">
         <img src={florenta} alt="Florenta Teodoridis" className="speakerspic"/>
      </div>
      <div className="speaker-content">
      <h1>Florenta Teodoridis, PhD</h1>
      <h2>Professor at USC Marshall School of Business</h2>
    </div>  
    </div>
    <div className="speaker-content">
      <p className="p">Florenta Teodoridis is a business professor at USC Marshall, her main interest is the economics 
          of innovation and science. She examines the impact of technology on society and business productivity. 
          Specifically, how artificial intelligence and quantum computers would affect businesses, society, and 
          research. Dr. Teodoridis’s expertise include factors that influence the rate and direction of technological 
          advancements. 
      </p>
    </div>
    </>
    );
  }
  
  export default Teodoridis;