import { Link } from 'react-router-dom';
import { useState } from 'react';
import usclogo from '../assets/images/usclogo.png';
import logo from '../assets/images/Q3logotext.png';
import qeelogo from '../assets/images/qeelogo.png';
import '../styles/qreate.css';
import '../styles/qethics.css';
import '../styles/qee.css';

function QEE() {
    return (
      <>
        <section className="qee-container">
          <div className="logo-container">
              <img src={qeelogo} alt="QEE Logo" className="qee-logo" />
            </div>
          <div className="intro-section">
            <h1 className="title">QEE Events to Support the Q<sup>3</sup> Effort</h1>
            <p className="paragraph">Quantum Engineering Ethics (QEE) is a student organization founded and led by Sandra Al Hames in 
            December of 2024 at USC. The purpose of these events is to prepare students for the Hackathon and act 
            as an Introduction to Quantum Computing.</p>
          </div>
             <div className="qee-content">
              <div className="intro-section">
                  <h2 className="qee-header">Q<sup>3</sup> Launch Session - 2/27/2025 at 1:30pm</h2>
                  <p className="qee-paragraph">RTH211</p>
                  <p className="qee-paragraph">All pre-registered students will be invited to participate in an information session on Q^3 and the aim of the initiative. Graduate students from USC, alongside QEE leadership will assist students with installing Jupyter Notebook and Qiskit. 
                  Pre-release a list of resources compiled by QEE to help students learn quantum asynchronously 
                  Get a sense of the knowledge level of the general attending body</p>
                  <h2 className="qee-header">Lecture(s) on Introduction to Quantum Computing</h2>
                  <p className="qee-paragraph">All lectures will also be recorded and live streamed on Zoom!
                  Release IBM Q labs now and allow students 1-2 weeks to prepare</p>
                  <h3 className="qee-header">Lecture 1 - 3/25/2025: What is quantum computing?</h3>
                  <p className="qee-paragraph"> By Eli Levenson-Falk EEB132 and Zoom from 2:30 - 3:30 pm</p>
                  <h3 className="qee-header">Lecture 2 - 4/1/2025: More on Quantum Computing</h3>
                  <p className="qee-paragraph">By Brennen Rudd EEB132 from 2-30 - 3:30 pm</p>
                  <h3 className="qee-header">Lecture 3 - 4/8/2025: SQuADDS Workshop</h3>
                  <p className="qee-paragraph">with Sadman Ahmad Shanto SSC110 from 2:30 - 3:30 pm</p>
                  <h2 className="qee-header">Lab sessions and office hours</h2>
                  <p className="qee-paragraph">With the help of graduate students in the QISE MS or PhD program, we will facilitate ‘office hours’ where students can ask questions about the labs and get help with learning any material covered in the lectures or labs. </p>
                  <p className="qee-paragraph">Session 1 - 4/14/2025: Lab/office hours with the Academic Consulting Team</p>
                  <p className="qee-paragraph">Session 2 - 4/21/2025: Lab/office hours with the Academic Consulting Team</p>
              </div>
          </div>
  
        </section>

      </>
    );
  }
  
  export default QEE;