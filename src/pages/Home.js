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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h2>The Pillars</h2>
      <div className="pillars">
        <div className = "pillar">
          <p>UMD</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className = "pillar">
          <p>USC</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
