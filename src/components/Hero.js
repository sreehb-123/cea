import Strips from './Strips';
import Cards from './Cards';
import '../styles/Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const navigateFaculty = () => {
        navigate('/faculty');
    }
    return(
        <div>
            <div className='hero-section d-flex align-items-center justify-content-center'>
                <h1 className='hero-text text-center'>Welcome to Department of Civil and Infrastructure Engineering</h1>
                <button onClick={navigateFaculty}>Faculty</button>
            </div>
            <Strips />
            <Cards />
        </div>
    )
};

export default Hero;