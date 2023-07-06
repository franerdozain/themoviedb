import { useEffect, useState } from "react";
import { getGenres } from "./Api";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ setGenreId }) {
    const [genres, setGenres] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {   
        const separateUrl = location.pathname.split("/");   
        const decodedUrlGenre = decodeURIComponent(separateUrl[2]);
        
        const fetchGenres = async (type) => {
            const data = await getGenres(type)
            setGenres(data)                            
            let genre = data.find(genre => genre.name === decodedUrlGenre)    
            genre && setGenreId(genre.id)
        }
        const types = {
            "movies": "movie",
            "tvShows": "tv",
        }
        console.log(location.pathname.includes("title"));
        location.pathname !== "/" && !location.pathname.includes("/title") && fetchGenres(types[separateUrl[1]]);
    }, [location.pathname]) 

    const handleCLick = (event) => {       
        let genre = genres.find(genre => genre.name === event.target.innerText);            
        genre && setGenreId(genre.id);
        const separateUrl = location.pathname.split("/");
        const mediaType = separateUrl[1];        
        navigate(`/${mediaType}/${genre.name}`);    
    }    

    return (
        <nav>
            {location.pathname !== "/" &&
                <div className="dropdown col-sm-4">
                    <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-expanded="false" >
                        Genres
                    </button>
                    <ul className="dropdown-menu">
                        {genres.length &&
                            genres.map(genre => (                               
                                    <li key={genre.id} className="dropdown-item" onClick={(event) => handleCLick(event)}>{genre.name}</li>                                
                            ))}
                    </ul>
                </div>
            }
        </nav>
    )
}
