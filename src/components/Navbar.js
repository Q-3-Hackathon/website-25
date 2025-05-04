import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Faq from '../pages/Faq';
import Qreate from '../pages/Qreate';
import Qethics from '../pages/Qethics';
import Resources from '../pages/Resources';
import Schedule from '../pages/Schedule';
import Registration from '../pages/Registration';
import Home from '../pages/Home';
import '../styles/Navbar.css';

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
              <Link to="/schedule" onClick={closeDropdown} style={{ textDecoration: 'none'}}>Schedule</Link>
              </div>
            </div>
            <Link to="/registration" onClick={closeDropdown} style={{ textDecoration: 'none'}}>Registration</Link>
            <Link to="/resources" onClick={closeDropdown} style={{ textDecoration: 'none'}}>Resources</Link>
            <Link to="/faq" onClick={closeDropdown} style={{ textDecoration: 'none'}}>FAQ</Link>
          </div>
          <div className = 'content'> 
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/qreate" element={<Qreate />} />
              <Route path="/qethics" element={<Qethics />} />
              <Route path="/Resources" element={<Resources />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/faq" element={<Faq />} />
          </Routes>
          </div>
      </Router>
  );
}

export default Navbar;