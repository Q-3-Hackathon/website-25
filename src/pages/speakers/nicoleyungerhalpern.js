import '../../styles/speaker.css';
import logo from '../../assets/images/Q3logotext.png';
import halpern from "../../assets/images/speakers/nicolehalpern.png";

function Halpern() {
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
         <img src={halpern} alt="Nicole Yunger Halpern" className="speakerspic"/>
      </div>
      <div className="speaker-content">
      <h1>Nicole Yunger Halpern</h1>
      <h2>Physicist & Author of Quantum Steampunk</h2>

    </div>  
    </div>
    <div className="speaker-content">
      <p className="p">ONicole Yunger Halpern is a physicist at the National Institute of Standards 
        and Technology (NIST), a Fellow of the Joint Center for Quantum Information and Computer 
        Science (QuICS), and an adjunct assistant professor at the University of Maryland. Nicole 
        re-envisions 19th-century thermodynamics for the 21st century, using quantum information 
        theory. She has dubbed this research “quantum steampunk,” after the steampunk genre of art 
        and literature that juxtaposes Victorian settings with futuristic technologies. Nicole 
        completed her PhD at Caltech, winning the international Ilya Prigogine Prize for a 
        thermodynamics thesis. While an ITAMP Postdoctoral Fellow at Harvard University, she won 
        the International Quantum Technology Emerging Researcher Award. Other accolades include 
        the US ASPIRE Prize, the Mary Somerville Medal, and inclusion in the Science News “Ten to 
        Watch” list of young scientists. Nicole is also the author of the book for the general 
        public Quantum Steampunk: The Physics of Yesterday’s Tomorrow, which won the PROSE Award 
        for Popular Science and Mathematics.
      </p>
    </div>
    </>
    );
}
export default Halpern();