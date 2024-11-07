import { useNavigate } from "react-router-dom";
import '../styles/Faculty.css';

const Faculty = () => {
    const navigate = useNavigate();

    const handleSubmit = (id) => {
        navigate(`/faculty/${id}`)
    }

    const facultyList = [
        {id: 1, name: 'Dr. John Doe', role: 'Assistant Professor', email: 'johndoe@example.com', image: 'https://yt3.googleusercontent.com/rqVJYtvHjt6rvpAZTriEydzUr2fHJ00pfjZBbnNNvn0WZeIdRzwevL_Y1zoVw7RR8nd_Tu_c=s900-c-k-c0x00ffffff-no-rj'},
        {id: 2, name: 'Dr. Jane Doe', role: 'Assistant Professor', email: 'janedoe@example.com', image: 'https://yt3.googleusercontent.com/rqVJYtvHjt6rvpAZTriEydzUr2fHJ00pfjZBbnNNvn0WZeIdRzwevL_Y1zoVw7RR8nd_Tu_c=s900-c-k-c0x00ffffff-no-rj'},
        {id: 3, name: 'Dr. John Smith', role: 'Assistant Professor', email: 'johnsmith@example.com', image: 'https://yt3.googleusercontent.com/rqVJYtvHjt6rvpAZTriEydzUr2fHJ00pfjZBbnNNvn0WZeIdRzwevL_Y1zoVw7RR8nd_Tu_c=s900-c-k-c0x00ffffff-no-rj'},
        {id: 4, name: 'Dr. Jane Smith', role: 'Assistant Professor', email: 'janesmith@example.com', image: 'https://yt3.googleusercontent.com/rqVJYtvHjt6rvpAZTriEydzUr2fHJ00pfjZBbnNNvn0WZeIdRzwevL_Y1zoVw7RR8nd_Tu_c=s900-c-k-c0x00ffffff-no-rj'},
    ];

    return(
        <div className="container mt-5">
            <h1 className="text-center mb-4">Faculty</h1>
            <div className="row">
                {facultyList.map((faculty) => (
                    <div className="col-md-3 mb-4 d-flex justify-content-center" key={faculty.id}>
                        <div className="card faculty-card h-100 shadow-sm">
                            <img src={faculty.image} alt={faculty.name} 
                                className="card-img-top object-fit-cover faculty-img"  
                                // height = "300"
                                // // style={{width: 'auto'}}
                                />
                            <div className="card-body">
                                <h5 className="card-title text-right">{faculty.name}</h5>
                                <h6 className="card-subtitile text-right text-muted mb-3">{faculty.role}</h6>
                                <p className="card-text">{faculty.email}</p>
                                <button onClick={() => handleSubmit(faculty.id)} className="btn btn-primary">View Profile</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Faculty;