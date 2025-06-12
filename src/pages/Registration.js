import '../styles/Registration.css';

function Registration() {
  return (
    <div>
      <div className="blob-effect">
        <h1>Registration</h1>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="reg-btn">
        <div className="btn-col">
          <a id="vol-btn" href="/signup?userType=volunteer">Volunteer</a>
          {/* <button className="vol-sym-btn">
            <img src={infoSym} alt="Volunteer info symbol icon" />
          </button> */}
          <div className="popup-box">
            As a volunteer, you play a key role in ensuring the success of our initiative.
            From managing logistics to supporting participants, your efforts help foster a smooth and welcoming experience for everyone involved!
          </div>


        </div>

        <div className="btn-col">
          <a id="explore-btn" href="/signup?userType=explorer">Explorer</a>
          {/* <button className="exp-sym-btn">
            <img src={infoSym} alt="Explorer info symbol icon" />
          </button> */}
          <div className="popup-box">
            As an explorer, you will explore the intricacies of Quantum in Art and Ethics.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
