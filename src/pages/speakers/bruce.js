import '../../styles/speaker.css';
import logo from '../../assets/images/Q3logotext.png';
import bruce from "../../assets/images/speakers/bruce.jpg";

function Bruce() {
  return (
    <>
    <div class="header">
      <div class="header-content">
        <div class="left">
          <div class="header-box">
            <h1 className="title">Q<sup>3</sup> Initiative: QREATE @ UMD</h1>
          </div>
          <p>September 12, 2025 - September 14, 2025</p>
          <p>University of Maryland, College Park</p>
          <p>Stamp Student Union</p>
        </div>
        <div className="right">
          <img src={logo} className="logo" alt="Q^3 Logo" />
        </div>
      </div>
    </div>
    <div className="speaker-box">
      <div className="speaker-photo">
         <img src={bruce} alt="Bruce Rosenbaum" className="speakerspic"/>
      </div>
      <div className="speaker-content">
      <h1>Bruce Rosenbaum</h1>
      <h2>Steampunk ReImagineer</h2>
    </div>  
    </div>
    <div className="speaker-content">
      <p className="p">Bio
      </p>
    </div>
    </>
  );
}

export default Bruce