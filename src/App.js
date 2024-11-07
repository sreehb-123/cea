import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Strips from "./components/Strips";
import Cards from "./components/Cards";
import FacultyDetails from './components/FacultyDetails';
import Faculty from './components/Faculty';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route 
                    path='/' 
                    element={
                        <div>
                            <Hero />
                            <Strips />
                            <Cards />
                        </div>
                    } 
                />
                <Route path='/faculty' element={<Faculty />} />
                <Route path='/faculty/:id' element={<FacultyDetails />} />
            </Routes>
        </Router>
    );
};

export default App;