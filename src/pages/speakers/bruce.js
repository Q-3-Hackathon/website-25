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
      <p className="p">Bruce Rosenbaum has been dubbed the Steampunk Guru by the Wall Street Journal and Steampunk Evangelist by Wired Magazine. Bruce's functional Steampunk artwork has been featured in the Boston Globe, The Chicago Tribune, The New York Times, Architectural Digest, CNN, NPR and featured on MTV, A&E, HGTV and Netflix.
Bruce's company, ModVic, works with clients all across the world to take period, repurposed, personal and meaningful objects, and creatively infuse them with modern technology to transform the ordinary into incredible Steampunk functional placemaking art. The Steampunk art and design process celebrates history, while setting a path for a reimagined better future -- telling the personal stories of objects, individuals, buildings, organizations and places.

Bruce's Steampunkinetics workshops also builds art and history into science helping to promote STEAM (Science, Technology, Engineering, ART and Math) and creative problem solving skills for atypical and neurotypical children and adults.
      </p>
    </div>
    </>
  );
}

export default Bruce