import infoSym from '../assets/images/regInfoSymbol.png'

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
          <button id="vol-btn">Volunteer</button>
          <button className="vol-sym-btn">
            <img src={infoSym} alt="Volunteer info symbol icon" />
            <div className="popup-box">
              As a volunteer, you play a key role in ensuring the success of our initiative.
              From managing logistics to supporting participants, your efforts help foster a smooth and welcoming experience for everyone involved!
            </div>
          </button>
          
          
        </div>

        <div className="btn-col">
          <button id="explore-btn">Explorer</button>
          <button className="exp-sym-btn">
            <img src={infoSym} alt="Explorer info symbol icon" />
            <div className="popup-box">
              As an explorer, you will explore the intricacies of Quantum in Art and Ethics.
            </div>
          
          </button>
          
          
          
        </div>
      </div>
    </div>
  );
}

export default Registration;