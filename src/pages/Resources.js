import res from "../assets/images/resources.png";
import '../styles/resources.css';

function Resources() {
    return (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <h1 style={{ marginBottom: '30px' }}>Resources</h1>
            <div className="resources-grid">
                <a href="https://www.youtube.com/watch?v=dZWz4Gs_BuI" className="textposition resource-link">
                    <img src={res} alt="Qiskit" className="resourcespic"/>
                    <h2>Install Qiskit</h2>
                    <p>Learn how to install Qiskit</p>
                </a>

                <a href="https://drive.google.com/file/d/1be4LoVdDYWGoYxf38nc1bePlmwOWhFzc/view" className="textposition resource-link">
                    <img src={res} alt="Qiskit" className="resourcespic"/>
                    <h2>Qiskit</h2>
                    <p>IBM Qiskit practice</p>
                </a>

                <a href="https://youtu.be/MzRCDLre1b4?si=-8wi5QRYdY3OyE-U" className="textposition resource-link">
                    <img src={res} alt="Quantum Mechanics" className="resourcespic"/>
                    <h2>Light quantum mechanics</h2>
                    <p>Great overview of quantum with amazing visuals!</p>
                </a>
                <a href="https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/" className="textposition resource-link">
                    <img src={res} alt="MIT OCW" className="resourcespic"/>
                    <h2>MIT OCW</h2>
                    <p>MIT quantum computation course</p>
                </a>

                <a href="https://drive.google.com/file/d/1ajLHmE8VeMAAtZq1k-aqqlNunWvRhNA-/view?usp=sharing" className="textposition resource-link">
                    <img src={res} alt="Notebook" className="resourcespic"/>
                    <h2>Notebook</h2>
                    <p>Download this notebook for more practice</p>
                </a>

                <a href="https://www.keysight.com/us/en/learn/bootcamp/139273.html" className="textposition resource-link">
                    <img src={res} alt="Bootcamp" className="resourcespic"/>
                    <h2>Bootcamp</h2>
                    <p>Design challenges of superconducting quantum chips</p>
                </a>

                <a href="https://github.com/OJB-Quantum/QC-Hardware-How-To" className="textposition resource-link">
                    <img src={res} alt="Bootcamp" className="resourcespic"/>
                    <h2>QC Hardware How To</h2>
                    <p>Onri Jay Benally's Everything you need for quantum hardware engineering</p>
                </a>

                <a href="https://github.com/OJB-Quantum/Qiskit-Metal-to-Litho" className="textposition resource-link">
                    <img src={res} alt="Bootcamp" className="resourcespic"/>
                    <h2>Qiskit Metal to Lithography</h2>
                    <p>Onri Jay Benally's Qiskit Metal to Lithography</p>
                </a>

                <a href="https://github.com/OJB-Quantum/Free-Education" className="textposition resource-link">
                    <img src={res} alt="Bootcamp" className="resourcespic"/>
                    <h2>Free Educational Materials</h2>
                    <p>A collection of free educational materials, most of which are interactive or 3D animated. Curated by Onri Jay Benally</p>
                </a>

            </div>
        </div>
    );
}

export default Resources;