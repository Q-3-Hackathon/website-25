import '../../styles/speaker.css';
import logo from '../../assets/images/Q3logotext.png';
import frederico from "../../assets/images/speakers/frederico.jpg";

function Spedalieri() {
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
         <img src={frederico} alt="Frederico Spedalieri" className="speakerspic"/>
      </div>
      <div className="speaker-content">
      <h1>Federico Spedalieri, PhD</h1>
      <h2>Managing Director of the USC Quantum Initiative</h2>
    </div>  
    </div>
    <div className="speaker-content">
      <p className="p">Federico Spedalieri is the managing director of the quantum initiative at USC. His research 
          involves the theory and practice of quantum annealers, especially understanding their quantum 
          capabilities. More specifically, how quantum annealers can be used for specific applications like 
          machine learning and circuit fault diagnosis. In the past, Dr. Spedalieri has also worked on entanglement
           characterization and entanglement detecting for the D-Wave quantum computer, USC’s very-own. Ultimately 
           his goal is to understand the ultimate limits that quantum mechanics impose on parameter estimation, in 
           order to eventually acknowledge what applications could benefit from this kind of approach.
      </p>
    </div>
    </>
    );
  }
  
  export default Spedalieri;