import '../styles/Home.css';
import logo from '../assets/images/Q3logotext.png';
import tlvec from '../assets/images/topleftvec.png';
import trvec from '../assets/images/toprightvec.png';
import rvec from '../assets/images/rightvec.png';
import lvec from '../assets/images/leftvec.png';

function Home() {
  const hstyle = {
    tlvec: {
      position: 'absolute',
      top: '100px',
      left: '-50px',
      width: 'max(300px, 40vw)',
      height: 'max(350px, 65vh)',
      zIndex: -1,
    },
    trvec: {
      position: 'absolute',
      top: '100px',
      right: '-50px',
      width: 'max(300px, 40vw)',
      height: 'max(350px, 65vh)',
      zIndex: -1,
    },
    rvec: {
      position: 'absolute',
      top: '700px',
      right: 0,
      width: 'max(300px, 30vw)',
      height: 'min(640px, 120vh)',
      zIndex: -1,
    },
    lvec: {
      position: 'absolute',
      top: '700px',
      left: 0,
      width: 'max(300px, 30vw)',
      height: 'min(640px, 120vh)',
      zIndex: -1,
    },
    };
  return (
    <div className="Home" style = {{ position: 'relative' }}>
      <img src={tlvec} style={hstyle.tlvec} alt="Top Left Vector" />
      <img src={trvec} style={hstyle.trvec} alt="Top Right Vector" />
      <img src={rvec} style={hstyle.rvec} alt="Right Vector" />
      <img src={lvec} style={hstyle.lvec} alt="Left Vector" />
      <img src={logo} className="logo-img" alt="Q^3 Logo" />
      <div className='home-content'>
      <h1>Q<sup>3</sup> Initiative</h1>
      <p>September 12 - 14, 2025</p>
      <h2>About Q<sup>3</sup></h2>
      <p>A joint Center for Quantum Networks and United Nations International Telecommunications Union quantum initiative dedicated to three pillars: 
        art, ethics, and engineering. With two host institutions, the University of Maryland and the University of California, this quantum initiative 
        will span from coast to coast. The Q<sup>3</sup> Initiative has two core goals: (1) to foster collaboration between artists and scientists to make 
        quantum science more accessible to the general public and (2) to train the general public on the fundamentals of quantum computing while 
        emphasizing responsible innovation.</p>
      <h2>The Pillars</h2>
      <div className="pillars">
        <div className = "pillar">
          <p>UMD</p>
          <p>A non-traditional, creative-style hackathon with art exhibitions, creative workshops, and non-technical challenges open for 4 weeks. </p>
        </div>
        <div className = "pillar">
          <p>USC</p>
          <p>A traditional, 24-hour technical quantum hackathon with an introduction to responsible quantum engineering and real world applications.</p>
        </div>
        <div className = 'sponsors'>
          <h1>
            Sponsors
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
