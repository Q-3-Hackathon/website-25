import '../../styles/speaker.css';
import logo from '../../assets/images/Q3logotext.png';
import kate from "../../assets/images/speakers/kate.jpg";
function Pundyk() {
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
          <img src={kate} alt="Florenta Teodoridis" className="speakerspic"/>
        </div>
        <div className="speaker-content">
        <h1>Kate Pundyk</h1>
        <h2>JD Candidate</h2>
      </div>  
      </div>
      <div className="speaker-content">
        <p className="p">Kate Pundyk is a law student joining us from McGill University in Montreal, Canada. 
          Her background involves the practical implementation of ethical frameworks. In the 
          past she has published on topics such as use of quantum-enabled defense and how emerging 
          technologies affect mass conflict. Her research in the past involved the Human Rights Center 
          at UC Berkeley, Mass Atrocities in the Digital Era at Yale Law School, and the Ethics of AI 
          at the University of Oxford. Kate is motivated to push for Responsible Innovation in all avenues 
          of technology, through the implementation of policy that mirrors ethics!
        </p>
      </div>
      </>
    );
  }
  
  export default Pundyk;