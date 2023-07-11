import { useEffect, useState } from "react";
import { getGenres } from "./Api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"
import SearchBar from "./SearchBar";

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
        location.pathname !== "/" && !location.pathname.includes("/title") && fetchGenres(types[separateUrl[1]]);
    }, [location.pathname])

    const handleCLick = (event) => {
        let genre = genres.find(genre => genre.name === event.target.innerText);
        genre && setGenreId(genre.id);
        let path = "";
        const separateUrl = location.pathname.split("/");
        if(separateUrl[1] === "title" && location.state && location.state.section){
            path = location.state.section.startsWith("/movies") ? "movies" : "tvShows"  
        } else if (separateUrl[1] === "movies" || separateUrl[1] === "tvShows"){
            path = separateUrl[1] === "movies" ? "movies" : "tvShows";
        }
        
        navigate(`/${path}/${genre.name}`);
    }

    return (
        <nav className="w-100 justify-content-evenly sticky-top sticky-bar bg-body-tertiary">
            <div className='d-flex nav-div justify-content-center align-items-center'>
                <Link to={"/"}>
                    <span role="button" ><img src={logo} className='homeLogo' /></span>
                </Link>
                <h1>Movies & TV Shows</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center " >
            {location.pathname !== "/" &&
                <div className="dropdown d-flex justify-content-center align-items-center mb-4">
                    <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-expanded="false" >
                        Genres
                    </button>
                    <ul className="dropdown-menu">
                        {genres.length &&
                            genres.map(genre => (
                                <li key={genre.id} className="dropdown-item" onClick={(event) => handleCLick(event)}>{genre.name}</li>
                            ))}
                    </ul>
                    <SearchBar />
                </div>
            }
            </div>
        </nav>
    )
}
