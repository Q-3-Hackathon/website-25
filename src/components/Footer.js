import '../styles/Footer.css';
import logo from '../assets/images/Q3logotext.png';
import iyqlogo from '../assets/images/IYQ.png';


function Footer() {
    return (
        
        <div className='Footer'>
            <img src={logo} className="footer-logo" alt="Q^3 Logo" />
            <div className='footer-middle'>
            <img src={iyqlogo} className="umd-logo" alt="IYQ Logo" />
            </div>
            <div className = 'footer-links'>
                <a href='/' style={{ textDecoration: 'none'}}>Home</a>
                <a href="/registration" style={{ textDecoration: 'none'}}>Registration</a>
                <a href="/faq" style={{ textDecoration: 'none'}}>FAQ</a>
                <a href="mailto:q3initiative@gmail.com" style={{ textDecoration: 'none'}}>Contact Us</a>
            </div>
        </div>
  );
}

export default Footer;