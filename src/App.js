import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import FacultyDetails from './components/FacultyDetails';
import Faculty from './components/Faculty';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/faculty' element={<Faculty />} />
                <Route path='/faculty/:id' element={<FacultyDetails />} />
            </Routes>
        </Router>
    );
};

export default App;