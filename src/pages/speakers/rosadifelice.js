import '../../styles/speaker.css';
import logo from '../../assets/images/Q3logotext.png';
import rosa from "../../assets/images/speakers/rosa.avif";
function Rosa() {
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
         <img src={rosa} alt="Florenta Teodoridis" className="speakerspic"/>
      </div>
      <div className="speaker-content">
      <h1>Rosa Di Felice</h1>
      <h2>Title</h2>
    </div>  
    </div>
    <div className="speaker-content">
      <p className="p">Bio
      </p>
    </div>
    </>
    );
  }
  
  export default Rosa