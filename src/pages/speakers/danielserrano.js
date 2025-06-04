import '../../styles/speaker.css';
import logo from '../../assets/images/Q3logotext.png';
import serrano from "../../assets/images/speakers/danielserrano.png";

function Serrano() {
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
         <img src={serrano} alt="Daniel Serrano" className="speakerspic"/>
      </div>
      <div className="speaker-content">
      <h1>Daniel Serrano</h1>
      <h2>Senior Faculty Specialist (IPST)</h2>
    </div>  
    </div>
    <div className="speaker-content">
      <p className="p">Daniel Serrano is a Senior Faculty Specialist at UMD College Park's IPST (Institute for Physical Science & Technology). 
        In that role, he has been coordinator or director of 6 training programs spanning a wide range of topics: Quantum Information, 
        Computational Biology, Nanotechnology, Nonlinear Physics, and Space Science. Through these, he has provided one-on-one and 
        group-based professional development support to undergraduate students, graduate students, and postdoctoral researchers. 
        Notably, this includes co-developing and co-teaching a graduate course in scientific communication for STEM, and an undergraduate 
        course in dialogue about equity in Engineering and Bioscience. Dr. Serrano has BS degrees in Environmental Science and Biochemistry 
        from Virginia Tech, an MS in Cell Biology and Molecular Genetics from UMD College Park, and a PhD in Biology (Molecular and Cellular 
        Biology concentration) from UMD College Park.
      </p>
    </div>
    </>
  );
}

export default Serrano;