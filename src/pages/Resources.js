import res from "../assets/images/resources.png";

function Resources() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Resources</h1>
            <div style={{
                display: 'flex',
                padding: '20px',
                maxWidth: '1000px',
                margin: 'auto',
                flexWrap: 'wrap',
                gap: '50px',
                justifyContent: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '1',
                    minWidth: '250px'
                }}>
                    <img 
                        src={res} 
                        alt="Qiskit" 
                        style={{
                            width: '100%',
                            maxWidth: '200px',
                            height: 'auto',
                            objectFit: 'contain',
                            marginBottom: '10px'
                        }} 
                    />
                    <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Install Qiskit</h2>
                    <a href="https://www.youtube.com/watch?v=dZWz4Gs_BuI" style={{ textAlign: 'center', display: 'block' }}>
                        Learn how to install Qiskit
                    </a>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '1',
                    minWidth: '250px'
                }}>
                    <img 
                        src={res} 
                        alt="Quantum Mechanics"
                        style={{
                            width: '100%',
                            maxWidth: '200px',
                            height: 'auto',
                            objectFit: 'contain',
                            marginBottom: '10px'
                        }} 
                    />
                    <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Qiskit</h2>
                    <a href="https://drive.google.com/file/d/1be4LoVdDYWGoYxf38nc1bePlmwOWhFzc/view" style={{ textAlign: 'center', display: 'block' }}>
                        IBM Qiskit practice
                    </a>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '1',
                    minWidth: '250px'
                }}>
                    <img 
                        src={res} 
                        alt="Qiskit Practice"
                        style={{
                            width: '100%',
                            maxWidth: '200px',
                            height: 'auto',
                            objectFit: 'contain',
                            marginBottom: '10px'
                        }} 
                    />
                    <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Light quantum mechanics</h2>
                    <a href="https://youtu.be/MzRCDLre1b4?si=-8wi5QRYdY3OyE-U" style={{ textAlign: 'center', display: 'block' }}>
                        Great overview of quantum with amazing visuals!
                    </a>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '1',
                    minWidth: '250px'
                }}>
                    <img
                        src={res}
                        alt="Qiskit"
                        style={{
                            width: '100%',
                            maxWidth: '200px',
                            height: 'auto',
                            objectFit: 'contain',
                            marginBottom: '10px'
                        }}
                    />
                    <h2 style={{ textAlign: 'center', margin: '10px 0' }}>MIT OCW</h2>
                    <a href="https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/" style={{ textAlign: 'center', display: 'block' }}>
                        MIT quantum computation course
                    </a>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '1',
                    minWidth: '250px'
                }}>
                    <img
                        src={res}
                        alt="Quantum Mechanics"
                        style={{
                            width: '100%',
                            maxWidth: '200px',
                            height: 'auto',
                            objectFit: 'contain',
                            marginBottom: '10px'
                        }}
                    />
                    <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Notebook</h2>
                    <a href="https://drive.google.com/file/d/1ajLHmE8VeMAAtZq1k-aqqlNunWvRhNA-/view?usp=sharing" style={{ textAlign: 'center', display: 'block' }}>
                        Download this notebook for more practice
                    </a>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '1',
                    minWidth: '250px'
                }}>
                    <img
                        src={res}
                        alt="Qiskit Practice"
                        style={{
                            width: '100%',
                            maxWidth: '200px',
                            height: 'auto',
                            objectFit: 'contain',
                            marginBottom: '10px'
                        }}
                    />
                    <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Bootcamp</h2>
                    <a href="https://www.keysight.com/us/en/learn/bootcamp/139273.html" style={{ textAlign: 'center', display: 'block' }}>
                        Design challenges of superconducting quantum chips
                    </a>
                </div>
            </div>


        </div>
    );
}

export default Resources;