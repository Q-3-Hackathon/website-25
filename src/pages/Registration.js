import '../styles/Registration.css';
import { Link } from 'react-router-dom';

function Registration() {
  return (
    <div>
      <div className="blob-effect">
        <h1>Registration</h1>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="reg-container">
        <div className="reg-card">
          <h2 className="title" style={{fontSize: '3rem', color: '#2079AF'}}>UMD QREATE</h2>
            <div className="reg-btn">
              <div className="btn-col">
                <a id="vol-btn" href="/signup?userType=volunteer">Volunteer</a>
                {/* <button className="vol-sym-btn">
                <img src={infoSym} alt="Volunteer info symbol icon" />
                </button> */}
                < div className="popup-box">
                 As a volunteer, you play a key role in ensuring the success of our initiative. From managing logistics to supporting participants, your efforts help foster a smooth and welcoming experience for everyone involved!
                </div>
              </div>

              <div className="btn-col">
                <a id="explore-btn" href="/signup?userType=explorer">Explorer</a>
                {/* <button className="exp-sym-btn">
                 <img src={infoSym} alt="Explorer info symbol icon" />
                </button> */}
                <div className="popup-box">
                  As an explorer, you will explore the intricacies of Quantum and Art. 
                  Open to all in-person and virtually. 
                  Registration is required for in-person attendance to the exhibitions.
                </div>
              </div>
            </div>
          </div>
        <div className="reg-card">
          <h2 className="title" style={{fontSize: '3rem', color: '#2079AF'}}>USC QOMPUTE</h2>
          <div className="reg-btn">
              <div className="btn-col">
                <a id="vol-btn" href="mailto: qee@usc.edu">Volunteer</a>
                {/* <button className="vol-sym-btn">
                <img src={infoSym} alt="Volunteer info symbol icon" />
                </button> */}
                < div className="popup-box">
                 If you are interested in volunteering, please contact QEE@usc.edu
                </div>
              </div>

              <div className="btn-col">
                <a id="explore-btn" href="https://usc.qualtrics.com/jfe/form/SV_e55L9yAgAk9rGn4">Challenger</a>
                {/* <button className="exp-sym-btn">
                 <img src={infoSym} alt="Explorer info symbol icon" />
                </button> */}
                <div className="popup-box">
                 Solve real-life quantum challenges with varying difficulties. 
                 Both virtual and in-person participation available. In-person participation is restricted to USC affiliates.
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
