import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Faq from '../pages/Faq';
import Qreate from '../pages/Qreate';
import Qethics from '../pages/Qethics';
//import Resources from '../pages/Resources';
import Schedule from '../pages/Schedule';
import Registration from '../pages/Registration';
import Home from '../pages/Home';
import QEE from '../pages/QEE';
import '../styles/Navbar.css';
import SignUp from '../pages/auth/SignUp';
import Oshiro from '../pages/speakers/scottoshiro';
import Serrano from '../pages/speakers/danielserrano';
import Benally from '../pages/speakers/onrijaybenally';
import Florenta from '../pages/speakers/florentateodoridis';
import Pundyk from '../pages/speakers/katepundyk';
import Spedalieri from '../pages/speakers/spedalieri';
import Rosa from '../pages/speakers/rosadifelice';
import Bruce from '../pages/speakers/bruce';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
      <Router>
          <div className='Navbar'>
            <Link to="/" onClick={closeDropdown} style={{ textDecoration: 'none'}}>Home</Link>
            <div className = 'dropdown'>
              <span onClick={toggleDropdown}>About ▾</span>
              <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
              <Link to="/qreate" onClick={closeDropdown} style={{ textDecoration: 'none'}}>Qreate</Link>
              <Link to="/qethics" onClick={closeDropdown} style={{ textDecoration: 'none'}}>Qethics</Link>
              </div>
            </div>
            {/*<Link to="/registration" onClick={closeDropdown} style={{ textDecoration: 'none'}}>Registration</Link> */}
            {/* <Link to="/resources" onClick={closeDropdown} style={{ textDecoration: 'none'}}>Resources</Link> */}
            <Link to="/faq" onClick={closeDropdown} style={{ textDecoration: 'none'}}>FAQ</Link>
          </div>
          <div className = 'content'> 
          <Routes>
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/" element={<Home />} />
              <Route path="/qreate" element={<Qreate />} />
              <Route path="/qethics" element={<Qethics />} />
              {/* <Route path="/resources" element={<Resources />} /> */}
              <Route path="/registration" element={<Registration />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/QEE" element={<QEE/>}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/oshiro" element={<Oshiro />}/>
              <Route path="/serrano" element={<Serrano />}/>
              <Route path="/benally" element={<Benally />}/>
              <Route path="/florenta" element={<Florenta />} />
              <Route path="/kate" element={<Pundyk />} />
              <Route path="/spedalieri" element={<Spedalieri />} />
              <Route path="/rosa" element={<Rosa />} />
              <Route path="/bruce" element={<Bruce />} />
          </Routes>
          </div>
      </Router>
  );
}

export default Navbar;
