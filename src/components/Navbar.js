import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">CEA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                <li><Link className="dropdown-item" to="/about/members">Members</Link></li>
                                <li class="dropdown-divider"></li>
                                <li><Link className="dropdown-item" to="/about/goals">Goals</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="downloadsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Downloads
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="downloadsDropdown">
                                <li><Link className="dropdown-item" to="/downloads/annual-report">Annual Report</Link></li>
                                <li class="dropdown-divider"></li>
                                <li><Link className="dropdown-item" to="/downloads/events-brochure">Events Brochure</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                                <li><Link className="dropdown-item" to="/events/past">Past</Link></li>
                                <li class="dropdown-divider"></li>
                                <li><Link className="dropdown-item" to="/events/present">Present</Link></li>
                                <li class="dropdown-divider"></li>
                                <li><Link className="dropdown-item" to="/events/future">Future</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/sponsors">Our Sponsors</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="connectDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Let's Connect
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="connectDropdown">
                                <li><a className="dropdown-item" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a className="dropdown-item" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a className="dropdown-item" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a className="dropdown-item" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/news">News</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/membership">Membership</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;