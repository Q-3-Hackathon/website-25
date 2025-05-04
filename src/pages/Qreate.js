import { Link } from 'react-router-dom'
function Qreate() {
  return (
    <div>
      <h1>Q<sup>3</sup> Initiative<br/>QREATE @ UMD</h1>
      <p>September 12 - 14, 2025 | University of Maryland, College Park in the STAMP Student Union</p>
      <p>At UMD, Q<sup>3</sup> will explore the intersection of quantum science and the arts. Through creative workshops, keynote talks by scientists and artists, exhibitions of quantum art, and virtual challenges, the program aims to make complex quantum concepts more accessible to the public. Our goal is to create an open, growing collection of educational quantum materials and to foster a community of students skilled in communicating complex scientific ideas to diverse audiences—making quantum science accessible to all.</p>
      <h2>Our Speakers</h2>
      <p>Clickable Images of Speakers go here</p>
      <h2>Keynotes</h2>
      <p>Scott Oshiro<br/>Victoria Kumaran</p>
      <h2>Creative Workshops</h2>
      <p>Illustration / Comic Making<br/>
      Quantum Chips on Blender<br/>
      Animations with Manim</p>
      <h2>Exhibitions & Performances</h2>
      <p>LiteraryDJ Quantum Poetry<br/>
      Quantum Intuition<br/>
      Quantum Choreographics<br/>
      And More!
      </p>
      <h2>Schedule</h2>
      <Link to={"/Schedule"}>Insert Arrow Here</Link>
      <h2>Challenges</h2>
      <p>Challenges will be announced end of June!</p>
      <h3>QETHICS @ USC</h3>
      <p>Explore more technical quantum challenges from IBM Quantum and responsible quantum engineering.</p>
      <Link to={"/Qethics"}>Read More</Link>
    </div>

  );
}

export default Qreate;