import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Faq from '../pages/Faq';
import Qreate from '../pages/Qreate';
import Qethics from '../pages/Qethics';
import Resources from '../pages/Resources';
import Schedule from '../pages/Schedule';
import Registration from '../pages/Registration';
import Home from '../pages/Home';


function Navbar() {
  return (
    <Router>
        <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/qreate">Qreate</Link>
        <Link to="/qethics">Qethics</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/faq">FAQ</Link>
        </div>
    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qreate" element={<Qreate />} />
            <Route path="/qethics" element={<Qethics />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/faq" element={<Faq />} />
        </Routes>
    </Router>
  );
}

export default Navbar;