import { Link } from 'react-router-dom'
function Qethics() {
  return (
    <div>
      <h1>Q<sup>3</sup> Initiative<br/>QETHICS @ USC</h1>
      <p>September 12 - 14, 2025 | University of Southern California, TBD</p>
      <p>At USC, Q<sup>3</sup> will focus on two pillars: ethics and engineering. With the help of sponsors, we aim to provide quantum workshops, 
          lectures and panels about ethics and physics. Students will also be given the oppurtunity to network with scientists
          leading the quantum revolution. Our goal is to provide learning and networking
          opportunities and teach engineers more about the economics and policy of emerging
          quantum technologies.</p>
      
      <h2>Our Speakers</h2>
      <p>Clickable Images of Speakers go here</p>
      <h2>Challenges</h2>
      <p>IBM Challenges will be announced end of June!</p>
      <h3>QEE Events</h3>
      <p>Preparing students for the hackathon with an introduction to Quantum Computing</p>
      <a href="/QEE.js">Insert Arrow Here</a>
      <h3>Schedule</h3>
      <Link to={"/Schedule"}>Insert Arrow Here</Link>
      <h3>QREATE @ UMD</h3>
      <p>Explore the intersection of quantum and art.</p>
      <Link to={"/Qreate"}>Read More</Link>
    </div>
  );
}

export default Qethics;