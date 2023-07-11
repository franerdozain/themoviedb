import { useNavigate, useLocation } from "react-router-dom";

export default function Card({ item, setSelectedTitle }) {
    const navigate = useNavigate();
    const location = useLocation();   
    
    const handleClick = () => {
        const title = item.name || item.original_title
        setSelectedTitle(item)
        navigate(`/title/${title}`, { state: { section: location.pathname } });
    }
    return (
        
            <div className="card" role="button" onClick={handleClick}>
                {item.backdrop_path ? (
                    <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="card-img-top" alt="..." />
                ) : (
                    <div>
                        <i className="noImg fa-solid fa-image fa-lg card-img-top"></i>
                    </div>
                )
                }
                <div className="card-body">
                    <h5 className="card-title">{item.name || item.original_title}</h5>
                    <p className="card-text">{item.overview}</p>
                </div>
            </div>
        
    )
}