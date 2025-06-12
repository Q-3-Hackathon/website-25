import { Link } from 'react-router-dom';
import usclogo from '../assets/images/usclogo.png';
import logo from '../assets/images/Q3logotext.png';
import '../styles/qreate.css';
import '../styles/qethics.css';
import kate from "../assets/images/speakers/kate.jpg";
import florenta from "../assets/images/speakers/florenta.jpg";
import frederico from "../assets/images/speakers/frederico.jpg";
import rosa from "../assets/images/speakers/rosa.avif";

function Qethics() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-content">
          <div className="left">
            <h1 className="title">
              <span>Q<sup>3</sup> Initiative:</span><br />
              <span>QETHICS @ USC</span>
            </h1>
            <p className="paragraph">
              Q<sup>3</sup> is a joint quantum initiative between the University of Maryland, College Park
              and the University of Southern California dedicated to three pillars: art, ethics, and quantum science.
              The goal of Q<sup>3</sup> is to create more quantum-related educational tools, provide learning and
              networking opportunities, and teach engineers more about the economics and policy of emerging quantum technologies.
            </p>
          </div>
          <div className="right">
            <img src={logo} alt="Q3 Logo" className="logo" />
          </div>
        </div>
        <div className="date-box">
          September 12, 2025 – September 14, 2025 | University of Southern California
        </div>
      </section>

      <section className="umd-section">
        <div className="umd-overlay" />
        <img src={usclogo} alt="USC logo" className="usc-logo" />
        <div className="intro-section umd-content">
          <h2 className="umd-heading">Q<sup>3</sup> @ USC</h2>
          <p className='paragraph' style={{ color: 'white', textAlign: 'left' }}>
            At USC, Q<sup>3</sup> will focus on two pillars: ethics and engineering. With the help of sponsors, we aim to provide quantum workshops,
            lectures and panels about ethics and physics. Students will also be given the opportunity to network with scientists
            leading the quantum revolution. Our goal is to provide learning and networking
            opportunities and teach engineers more about the economics and policy of emerging
            quantum technologies.
          </p>
        </div>
      </section>

      <div className="speakers-section">
        <div className="speakers-header-box">
          <h2 className="title">Our Speakers</h2>
        </div>
        <div className="cards-container">
          <Link to="/florenta" className="speaker-card">
            <img src={florenta} alt="Florenta Teodoridis" className="speakerspic" />
            <div className="speaker-info">
              <h3>Florenta Teodoridis</h3>
            </div>
          </Link>
          <Link to="/kate" className="speaker-card">
            <img src={kate} alt="Kate Pundyk" className="speakerspic" />
            <div className="speaker-info">
              <h3>Kate Pundyk</h3>
            </div>
          </Link>
          <Link to="/rosa" className="speaker-card">
            <img src={rosa} alt="Rosa di Felice" className="speakerspic" />
            <div className="speaker-info">
              <h3>Rosa Di Felice</h3>
            </div>
          </Link>
          <Link to="/spedalieri" className="speaker-card">
            <img src={frederico} alt="Frederico Spedalieri" className="speakerspic" />
            <div className="speaker-info">
              <h3>Federico Spedalieri</h3>
            </div>
          </Link>
        </div>
      </div>

      <section className='activities-section' style={{ textAlign: 'center', padding: '3rem 0rem 4rem' }}>
        <h2 className="title" style={{ fontSize: '3rem' }}>Challenges</h2>
        <p id="c-text" className="paragraph">IBM Challenges will be announced end of June! </p>
      </section>

      <section className="umd-section">
        <div className="schedule-container">
          <div className="schedule-left">
            <h2 className="schedule-title">QEE EVENTS</h2>
            <p style={{ padding: '0px 0px 15px' }}>Preparing students for the hackathon with an introduction to Quantum Computing</p>
            <Link to="/QEE" className="btn">→</Link>
          </div>
          <div className="divider" />
          <div className="schedule-right">
            <h2 className="schedule-title">SCHEDULE</h2>
            <p style={{ padding: '0px 0px 15px' }}>Event / Time <br /> FRIDAY & SATURDAY</p>
            <Link to="/Schedule" className="btn">→</Link>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
            <div className="left">
              <h1 className="title" style={{ textAlign: 'center' }}>
                <span>Q<sup>3</sup> @ UMD</span>
              </h1>
              <p className="paragraph">
                Explore the intersection of quantum and art. Harness your inner creativity to expand access to quantum.
              </p>
            </div>
            <div className="right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
              <Link to="/Qreate" className="btn" style={{ fontWeight: 400 }}>Quantum Leap to the East Coast→</Link>
            </div>
        </div>
      </section>
    </>
  );
}

export default Qethics;