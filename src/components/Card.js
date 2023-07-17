import { useNavigate, useLocation } from "react-router-dom";
import { FaSadCry } from 'react-icons/fa';

export default function Card({ item, setSelectedTitle }) {
    const navigate = useNavigate();
    const location = useLocation();
    const regex = /[^\x00-\x7F]/;

    const handleClick = () => {
        const title = item.name || item.original_title
        setSelectedTitle(item)
        navigate(`/title/${title}`, { state: { section: location.pathname } });
    }

    return (

        <div className="card h-100" role="button" onClick={handleClick}>
            {item.backdrop_path || item.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path || item.poster_path}`} className="card-img-top" alt="..." />
            ) : (
                <div>
                    <i className="noImg fa-solid fa-image fa-lg card-img-top"></i>
                </div>
            )
            }
            <div className="card-body">
                <h5 className="card-title">{item.original_name || item.original_title}</h5>
                {regex.test(item.original_title || item.original_name) && (
                    <h3>{item.title || item.name}</h3>
                )}
                {item.overview ? (
                    <p className="card-text">{item.overview}</p>

                ) : (
                    <div>
                        No Overview <FaSadCry />
                    </div>
                )
                }
            </div>
        </div>

    )
}