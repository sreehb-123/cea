import { useParams } from "react-router-dom";

const FacultyDetails = () => {
    const {id} = useParams();

    const facultyDetails = {
        1: {
            name: 'Dr. John Doe',
            education: 'PhD in Civil Engineering',
            experience: '10 years in structural design',
            languages: ['English', 'Spanish'],
            publications: ['Research Paper 1', 'Research Paper 2'],
            awards: ['Best Paper Award 2022', 'Best Paper Award 2023'],
            contactInfo: 'johndoe@example.com'
        },
        2: {
            name: 'Dr. Jane Doe',
            education: 'PhD in Civil Engineering',
            experience: '12 years in geotechnical engineering',
            languages: ['English', 'French'],
            publications: ['Research Paper 1', 'Research Paper 2'],
            awards: ['Best Paper Award 2022', 'Best Paper Award 2023'],
            contactInfo: 'janedoe@example.com'
        },
        3: {
            name: 'Dr. John Smith',
            education: 'PhD in Civil Engineering',
            experience: '12 years in geotechnical engineering',
            languages: ['English', 'Kannada'],
            publications: ['Research Paper 1', 'Research Paper 2'],
            awards: ['Best Paper Award 2022', 'Best Paper Award 2023'],
            contactInfo: 'johnsmith@example.com'
        },
        4: {
            name: 'Dr. Jane Smith',
            education: 'PhD in Civil Engineering',
            experience: '12 years in structural design',
            languages: ['English', 'Telugu'],
            publications: ['Research Paper 1', 'Research Paper 2'],
            awards: ['Best Paper Award 2022', 'Best Paper Award 2023'],
            contactInfo: 'janesmith@example.com'
        },
    };

    const faculty = facultyDetails[id];

    return(
        <div className="container mt-5">
            <h1 className="text-center mb-4">{faculty.name}</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Education</h4>
                            <p className="card-text">{faculty.education}</p>

                            <h4 className="card-title">Experience</h4>
                            <p className="card-text">{faculty.experience}</p>

                            <h4 className="card-title">Languages Known</h4>
                            <ul className="card-text">
                                {faculty.languages.map((language,index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>

                            <h4 className="card-title">Publications</h4>
                            <ul className="card-text">
                                {faculty.publications.map((publication,index) => (
                                    <li key={index}>{publication}</li>
                                ))}
                            </ul>

                            <h4 className="card-title">Awards and Honors</h4>
                            <ul className="card-text">
                                {faculty.awards.map((award,index) => (
                                    <li key={index}>{award}</li>
                                ))}
                            </ul>

                            <h4 className="card-title">Contact Information</h4>
                            <p className="card-text">{faculty.contactInfo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FacultyDetails;