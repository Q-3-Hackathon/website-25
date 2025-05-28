import { Link } from 'react-router-dom';
import { useState } from 'react';
import umdlogo from '../assets/images/umdlogo.png';
import logo from '../assets/images/Q3logotext.png';
import '../styles/qreate.css';
import oshiro from "../assets/images/speakers/oshiro.png";
import yungerhalpern from "../assets/images/speakers/nicolehalpern.png";
import danielserrano from "../assets/images/speakers/danielserrano.png";
import benally from "../assets/images/speakers/benally.png";

function Qreate() {
  const slides = [
    {
      title: 'Keynotes',
      items: [
        'Scott Oshiro – Musician & Quantum Physicist',
        'Nicole Yunger Halpern – Writer & Quantum Physicist',
      ],
    },
    {
      title: 'Creative Workshops',
      items: [
        'Illustration / Comic Making',
        'Quantum Chips on Blender',
        'Animations with Manim',
      ],
    },
    {
      title: 'Exhibitions & Performances',
      items: [
        'LiteraryDJ Quantum Poetry',
        'Quantum Intuition',
        'Quantum Choreographics',
        'And More!',
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <>
    <section className="intro-section">
      <div className="intro-content">
        <div className="left">
        <h1 className="title">
          <span>Q<sup>3</sup> Initiative:</span><br/>
          <span>QREATE @ UMD</span>
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
        September 12, 2025 – September 14, 2025 | University of Maryland, College Park Stamp Student Union
      </div>
    </section>

    <section className="umd-section">
      <div className="umd-overlay"/>
      <img src={umdlogo} alt="UMD logo" className="umd-logo"/>
      <div className="intro-section umd-content" >
      <h2 className="umd-heading">Q<sup>3</sup> @ UMD</h2>
      <p className='paragraph'style={{ color: 'white', textAlign: 'left' }}>At UMD, Q<sup>3</sup> will explore the intersection of quantum science and the arts. Through creative workshops, keynote talks by scientists and artists, exhibitions of quantum art, and virtual challenges, the program aims to make complex quantum concepts more accessible to the public. Our goal is to create an open, growing collection of educational quantum materials and to foster a community of students skilled in communicating complex scientific ideas to diverse audiences—making quantum science accessible to all. </p>
      </div>
    </section>

    <section className="speakers-section">
      <div className="speakers-header-box">
        <h2 className="title">Our Speakers</h2>
      </div>

      <div className="cards-container">
        <Link to="/speakers/scottoshiro" className="speaker-card">
          <img src={oshiro} alt="Scott Oshiro" className="speakerspic"/>
          <div className="speaker-info">
            <h3>Scott Oshiro</h3>
          </div>
        </Link>

        <Link to="/speakers/nicoleyungerhalpern" className="speaker-card">
          <img src={yungerhalpern} alt="Nicole Yunger Halpern" className="speakerspic"/>
          <div className="speaker-info">
            <h3>Nicole Yunger Halpern</h3>
          </div>
        </Link>

        <Link to="/speakers/nicoleyungerhalpern" className="speaker-card">
          <img src={danielserrano} alt="Daniel Serrano" className="speakerspic"/>
          <div className="speaker-info">
            <h3>Daniel Serrano</h3>
          </div>
        </Link>

        <Link to="/speakers/nicoleyungerhalpern" className="speaker-card">
          <img src={benally} alt="Onri Benally" className="speakerspic"/>
          <div className="speaker-info">
            <h3>Onri Benally</h3>
          </div>
        </Link>
      </div>
    </section>

    <section className="activities-section">
      <div className="speakers-header-box">
        <h2 className="title">{slides[index].title}</h2>
      </div>

      <div className="slider-container">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="slider-slide" key={slide.title}>
              <ul>
                {slide.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-navigation">
        <button onClick={prev} className="slider-arrow">←</button>
        <div className="dot-nav">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`dot ${i === index ? 'active' : ''}`}
            />
          ))}
        </div>
        <button onClick={next} className="slider-arrow">→</button>
      </div>
    </section>


    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '2rem 0' }}>
      {/* Titles Row */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <div style={{ flex: '2', textAlign: 'center' }}>
          <h2 className="title" style={{ fontSize: '2.5rem' }}>Challenges</h2>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <h2 className="title" style={{ fontSize: '2rem' }}>Advanced</h2>
        </div>
      </div>

      {/* Cards Row */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {/* Challenges Card 1 */}
        <div style={{ flex: '2' }}>
          <div className="advanced-card" style={{ height: '100%' }}>
            <ul className="challenge-list" style={{ color: '#2079AF', paddingLeft: '1.5rem', margin: '1rem 0' }}>
              <li>Creating a visualization of how entanglement spreads</li>
              <li>Creating a zeemax visualization of the classical interference in Young's N-slit</li>
              <li>Demonstrating how lattice defects work</li>
              <li>Simulate the graph state manipulations in this paper</li>
            </ul>
          </div>
        </div>

        {/* Challenges Card 2 */}
        <div style={{ flex: '2' }}>
          <div className="advanced-card" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: '#2079AF', textAlign: 'center', padding: '1rem' }}>More challenges will be announced soon!</p>
          </div>
        </div>

        {/* Advanced Card */}
        <div style={{ flex: '1' }}>
          <div className="advanced-card" style={{ height: '100%' }}>
            <ul className="challenge-list" style={{ color: '#2079AF', paddingLeft: '1.5rem', margin: '1rem 0' }}>
              <li>"Walk through" the Raussendorf lattice</li>
              <li>"See" the qubits decohere over time</li>
              <li>Touch the qubits with a wand to make X, Y, Z measurements</li>
              <li>Visualize measurement based quantum computing on a playing board</li>
              <li>Prize: hire a Unity developer to mature Ashlesha's Tangram puzzle</li>
            </ul>
          </div>
        </div>
      </div>
      </div>



      <section className="umd-section">
      <div className="schedule-container">
        <div className="schedule-left">
          <p className="schedule-label">EVENT / TIME</p>
          <p className="schedule-time">FRIDAY – SUNDAY</p>
        </div>
        <div className="divider" />
        <div className="schedule-right">
          <h2 className="schedule-title">SCHEDULE</h2>
          <Link to="/Schedule" className="btn">→</Link>
        </div>
      </div>
    </section>

    <section className="intro-section">
    <div className="intro-content">
    <div style={{display: 'flex', alignItems: 'center', gap: '8rem'}}>
    <div className="left">
        <h1 className="title" style={{textAlign: 'center'}}>
          <span>Q<sup>3</sup> @ USC</span>
          </h1>
          <p className="paragraph">
            Engage in more technical quantum challenges from IBM Quantum with a focus in responsible engineering.
          </p>
        </div>
        <div className="right" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto'}}>
          <Link to="/Qethics" className="btn" style={{fontWeight: 400 }}>Quantum Leap to the West Coast→</Link>
        </div>
    </div>
    </div>
    </section>

  </>
  );
}

export default Qreate;
