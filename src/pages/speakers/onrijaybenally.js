import '../../styles/speaker.css';
import logo from '../../assets/images/Q3logotext.png';
import benally from "../../assets/images/speakers/benally.png";

function Benally() {
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
         <img src={benally} alt="Onri Jay Benally" className="speakerspic"/>
      </div>
      <div className="speaker-content">
      <h1>Onri Jay Benally</h1>
      <h2>NSF Graduate Research Fellow</h2>

    </div>  
    </div>
    <div className="speaker-content">
      <p className="p">Onri is a 2024 National Science Foundation Graduate Research Fellow at the University of Minnesota-Twin Cities in Minneapolis, 
            MN, with expertise in nanofabrication and idea generation. His PhD research in electrical engineering focuses on developing and 
            fabricating milliKelvin-range embedded magnetic random-access memory (MRAM) for quantum computing subsystems. In 2024, he was a 
            Quantum Hardware Engineer during his internship with the Quantum Hardware Design & Simulation Group at the IBM T.J. Watson Research 
            Center, Yorktown Heights, NY
      </p>
      <a href="https://www.linkedin.com/in/onri-jay-benally-a33816125/" target="_blank" rel="noreferrer" className="btn" style={{margin: "2rem auto", fontWeight: 400, fontSize: '20px', borderRadius: '0px'}} >
      Linkedin </a>
      <a href="https://ojb-quantum.github.io/OJB-Quantum/" target="_blank" rel="noreferrer" className="btn" style={{margin: "2rem auto", fontWeight: 400, fontSize: '20px', borderRadius: '0px'}} >
      Github </a> 
    </div>
    </>
    );
  }
  
  export default Benally;