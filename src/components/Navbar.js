import { useEffect, useState } from "react";
import { getGenres } from "./Api";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [genres, setGenres] = useState([])
    const location = useLocation()
    useEffect(() => {
        const fetchGenres = async (type) => {
            const data = await getGenres(type)

            setGenres(data)
        }
        const types = {
            "/movies": "movie",
            "/tvShows": "tv",
        }
        location.pathname !== "/" && fetchGenres(types[location.pathname]);
    }, [location.pathname])

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
                                <Link
                                    key={genre.id}
                                    to={`/movies/${genre.name}`}
                                >
                                    <li className="dropdown-item">{genre.name}</li>
                                </Link>
                            ))}
                    </ul>
                </div>
            }
        </nav>

    )
}