import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Qreate from 'src/pages/Qreate';
import Oshiro from 'src/pages/speakers/scottoshiro.js'; // Make sure this path is correct
import YungerHalpern from 'src/pages/speakers/nicoleyungerhalpern.js';
import Serrano from 'src/pages/speakers/danielserrano.js';
import Benally from 'src/pages/speakers/onrijaybenally.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Qreate />} />
                <Route path="/speakers/scottoshiro" element={<Oshiro />} />
                <Route path="/speakers/nicoleyungerhalpern" element={<YungerHalpern />} />
                <Route path="/speakers/danielserrano" element={<Serrano />} />
                <Route path="/speakers/onribenally" element={<Benally />} />
            </Routes>
        </Router>
    );
}

export default App;