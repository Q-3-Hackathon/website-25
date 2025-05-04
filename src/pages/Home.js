import '../styles/Home.css';
import logo from '../assets/images/Q3LOGO_notext.png';
function Home() {
  return (
    <div>
      <img src={logo} className="logo-img" alt="Q^3 Logo" />
      <h1>Home</h1>
      <p>Welcome to Q^3</p>
    </div>
  );
}

export default Home;
