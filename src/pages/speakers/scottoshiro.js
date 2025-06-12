import '../../styles/speaker.css';
import logo from '../../assets/images/Q3logotext.png';
import oshiro from "../../assets/images/speakers/oshiro.png";

function Oshiro() {
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
         <img src={oshiro} alt="Scott Oshiro" className="speakerspic"/>
      </div>
      <div className="speaker-content">
      <h1>Scott Oshiro</h1>
      <h2>Postdoctoral Fellow @ Stanford University</h2>

    </div>  
    </div>
    <div className="speaker-content">
      <p className="p">SCOTT is a Bay Area-based fluatist and music technology researcher. As an African and Okinawan American, 
        Scott’s creative and academic work incorporates influences from his heritage and combines them with Jazz, Hip Hop, and 
        Electronic music. He recently received his Ph.D. at the Center for Computer Research in Music & Acoustics (CCRMA) at 
        Stanford University, where he researched the intersection between quantum computing, music, and culture. Scott is an 
        Asian Improv aRts fellow, developing quantum computer music improvisation systems for an album featuring BIPOC artists, 
        showcasing the connection between music and quantum physics.
      </p>
      <a href="https://scottoshiro.squarespace.com/" target="_blank" rel="noreferrer" className="btn" style={{margin: "2rem auto", fontWeight: 400, fontSize: '20px', borderRadius: '0px'}} >
      Scott Oshiro Music </a> 
    </div>
    </>
  );
}

export default Oshiro;