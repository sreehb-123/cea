import facultyImg from '../assets/intro-1587390568.jpg';
import '../styles/Faculty.css';
import Timeline from './Timeline';
import ResearchTeam from './Team';
import { useState } from 'react';

const Faculty = () => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div className="d-flex">
            <button className='sidebar-toggle' onClick={toggleSidebar}>
                <i className='fas fa-bars'></i>
            </button>
            <nav className={`bg-light sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#edu-exp" data-label="Education & Experience">
                            <i className="fas fa-graduation-cap"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#research-team" data-label="Research Team">
                            <i className="fas fa-users"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#publications" data-label="Publications">
                            <i className="fas fa-book"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#prof-activities" data-label="Professional Activities">
                            <i className="fas fa-briefcase"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#teaching" data-label="Teaching">
                            <i className="fas fa-chalkboard-teacher"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#projects" data-label="Projects">
                            <i className="fas fa-project-diagram"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#awards" data-label="Awards">
                            <i className="fas fa-trophy"></i>
                        </a>
                    </li>
                    
                    <div className='quick-links'>
                        <a href="https://www.linkedin.com" className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://scholar.google.com" className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-google fa-2x"></i>
                        </a>
                        <a href="https://www.researchgate.net" className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-researchgate fa-2x"></i>
                        </a>
                    </div>
                </ul>
            </nav>

            <div className="main-content container-fluid">
                <div className="container my-4">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center">
                            <img
                                src={facultyImg}
                                alt="Faculty"
                                className="mb-3"
                                style={{ width: '200px', height: '200px' }}
                            />
                            <div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1>Dr. John Doe</h1>
                            <p>
                                Currently researching in Artificial Intelligence and Data Science, with a particular focus on:
                                <ul>
                                    <li>Machine Learning algorithms for natural language processing (NLP)</li>
                                    <li>Big data analytics and cloud computing</li>
                                    <li>Artificial neural networks and deep learning models</li>
                                    <li>Data mining and predictive analytics</li>
                                </ul>
                                His work aims to bridge the gap between theoretical advancements and real-world applications in various domains.
                            </p>
                        </div>
                    </div>
                </div>


                <section id='edu-exp'>
                    <div className="my-5 text-center">
                        <h2>Education & Experience</h2>
                        <Timeline />
                    </div>
                </section>

                <section id='research-team'>
                    <div className='my-5 text-center'>
                        <ResearchTeam />
                    </div>
                </section>


                <section id='publications'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Publications</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Journal:</strong> "Advances in Neural Networks" - <i>Journal of AI Research</i>, 2023.
                            </li>
                            <li className="list-group-item">
                                <strong>Conference:</strong> "AI Ethics in Decision Making" - <i>ICML 2022</i>.
                            </li>
                            <li className="list-group-item">
                                <strong>Journal:</strong> "Data-Driven Automation Systems" - <i>IEEE Transactions on Robotics</i>, 2021.
                            </li>
                            <li className="list-group-item">
                                <strong>Conference:</strong> "Vision-Based Navigation in Robots" - <i>CVPR 2020</i>.
                            </li>
                        </ul>
                    </div>
                </section>

                <section id='prof-activities'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Professional Activities</h2>
                        <p>
                            Member of the <strong>Association for Computing Machinery (ACM)</strong> and reviewer for leading AI journals such as 
                            <i> Neural Computation</i> and <i>IEEE AI Systems</i>.
                        </p>
                    </div>
                </section>

                <section id='teaching'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Teaching</h2>
                        <p>
                            Teaching graduate-level courses on <strong>Machine Learning</strong>, <strong>Artificial Intelligence</strong>, and <strong>Advanced Data Structures</strong> since 2022.
                        </p>
                    </div>
                </section>

                <section id='projects'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Projects</h2>
                        <ul>
                            <li>
                                <strong>Project 1:</strong> Development of a real-time facial recognition system using edge devices.
                            </li>
                            <li>
                                <strong>Project 2:</strong> AI-powered traffic management solutions for smart cities.
                            </li>
                        </ul>
                    </div>
                </section>

                <section id='awards'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Awards & Honors</h2>
                        <ul>
                            <li>Best Paper Award at <i>ICML 2022</i>.</li>
                            <li>Recipient of the <i>Young Researcher Fellowship</i> by the National AI Consortium, 2021.</li>
                            <li>Outstanding Teaching Award, ABC Institute, 2023.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Faculty;