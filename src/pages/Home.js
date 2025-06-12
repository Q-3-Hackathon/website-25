import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/Q3logotext.png';
import tlvec from '../assets/images/topleftvec.png';
import trvec from '../assets/images/toprightvec.png';
import rvec from '../assets/images/rightvec.png';
import lvec from '../assets/images/leftvec.png';
import cqn from '../assets/images/sponsor-logos/cqn-logo-black.png';
import itu from '../assets/images/sponsor-logos/ITU_logo.png';
import mqa from '../assets/images/sponsor-logos/mqa_logo.png';
import qsf from '../assets/images/sponsor-logos/umd_qsf_logo.png'
import unitary from '../assets/images/sponsor-logos/UFoundation.png'
import qv from '../assets/images/sponsor-logos/QV ICON.png'

function Home() {
  const slides = [
    { src: cqn,  alt: 'Center for Quantum Networks'},
    { src: itu,  alt: 'UN International Telecommunication Union'},
    { src: mqa, alt: 'Mid-Atlantic Quantum Alliance'},
    { src: qsf, alt: 'Quantum Startup Foundry'},
    { src: unitary, alt: 'Unitary Foundation'},
    { src: qv, alt: 'Quantum Village'},
  ];

  const [index, setIndex] = useState(0);
  const prev = () =>
    setIndex(i => (i - 1 + slides.length) % slides.length);
  const next = () =>
    setIndex(i => (i + 1) % slides.length);

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
    <div className="Home" style={{ position: 'relative' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={tlvec} style={hstyle.tlvec} alt="Top Left Vector" />
        <img src={trvec} style={hstyle.trvec} alt="Top Right Vector" />
        <img src={rvec} style={hstyle.rvec} alt="Right Vector" />
        <img src={lvec} style={hstyle.lvec} alt="Left Vector" />
        <img src={logo} className="logo-img" alt="Q^3 Logo" />
        <head>
        <link rel="icon" type="image/x-icon" href={logo} />
        </head>
        <div className='home-content'>
          <h1 className='page-title'>Q<sup>3</sup> Initiative</h1>
          <p style={{fontSize: '2rem', padding: '0rem 1rem 2rem', color: '#2079AF'}}>September 12 - 14, 2025</p>
          <h2 style={{fontSize: '3.5rem', padding: '1rem 0rem 1rem', color: '#2079AF'}}>About Q<sup>3</sup></h2>
          <p>A joint Center for Quantum Networks and United Nations International Telecommunications Union quantum initiative dedicated to three pillars: 
            art, ethics, and engineering. With two host institutions, the University of Maryland and the University of California, this quantum initiative 
            will span from coast to coast. The Q<sup>3</sup> Initiative has two core goals: (1) to foster collaboration between artists and scientists to make 
            quantum science more accessible to the general public and (2) to train the general public on the fundamentals of quantum computing championing quantum for good.</p>
          <h2 style={{fontSize: '3.5rem', padding: '2rem 0rem 1rem', color: '#2079AF'}}>The Pillars</h2>
          <div className="pillars">
            <Link to="/Qreate" className= "pillar">
              <h2 style={{fontSize: '3rem', padding: '0rem 0rem 1rem', color: '#2079AF'}}>UMD</h2>
              <p>A non-traditional, creative-style hackathon with art exhibitions, creative workshops, and non-technical challenges open for 4 weeks. </p>
            </Link>
            <Link to="/QEthics" className="pillar">
              <h2 style={{fontSize: '3rem', padding: '0rem 0rem 1rem', color: '#2079AF'}}>USC</h2>
              <p>A traditional, 24-hour technical quantum hackathon with an introduction to responsible quantum engineering and real world applications.</p>
            </Link>
            <div className = 'sponsors'>
              <h1 style={{fontSize: '4rem', padding: '0rem 0rem 1rem', color: '#2079AF'}}>Partners</h1>
              <p>
              Q<sup>3</sup> would not have been possible without our generous partners!
              </p>
                <section className="sponsors-slider">
                  <div className="slider-frame">
                    <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {slides.map(({ src, alt }) => (
                        <div className="slide" key={alt}>
                          <img src={src} alt={alt} />
                        </div>
                     ))}
                    </div>
                  </div>
                  <div className="slider-nav">
                    <button className="arrow" onClick={prev}>‹</button>
                      {slides.map((_, i) => (
                        <button key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)}/>
                    ))}
                        <button className="arrow" onClick={next}>›</button>
                  </div>
                </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
