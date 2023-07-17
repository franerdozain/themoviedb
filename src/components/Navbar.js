import { useEffect, useState } from "react";
import { getGenres } from "./Api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import logo from "../images/logo.png"
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

export default function Navbar({ setGenreId }) {
    const [genres, setGenres] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const filters = [
        { name: "Popular", value: "popular" },
        { name: "Top Rated", value: "top_rated" },
        { name: "Upcoming", value: "upcoming" }
    ];

    useEffect(() => {
        const separateUrl = location.pathname.split("/");
        const genreParam = searchParams.get("genre");
        const filterParam = searchParams.get("sort_by");

        const fetchGenres = async (type) => {
            const data = await getGenres(type)

            setGenres(data)
            if (location.pathname === "/movies/" || location.pathname === "/tvShows/") {

                if (genreParam !== "All") {
                    let genre = data.find(genre => genre.name === genreParam)
                    genre && setGenreId(genre.id)
                } else if (genreParam === "All") {
                    setGenreId(null)
                }
            }
        }

        const types = {
            "movies": "movie",
            "tvShows": "tv",
        }

        if (location.pathname === "/") {
            setSelectedFilter(null)
            setSelectedGenre(null)
            setGenreId(null)
        }

        if (genreParam) setSelectedGenre(genreParam)
        if (filterParam) setSelectedFilter(filterParam)

        location.pathname !== "/" && !location.pathname.includes("/title") && fetchGenres(types[separateUrl[1]]);
    }, [location.pathname, searchParams])

    return (
        <nav className="d-flex w-100 justify-content-between sticky-top sticky-bar bg-body-tertiary mb-4">
            <div className='d-flex nav-div justify-content-center align-items-center'>
                <Link to={"/"}>
                    <span role="button" ><img src={logo} className='homeLogo' /></span>
                </Link>
                <h1>Movies & TV Shows</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center " >
                {location.pathname !== "/" &&
                    <div className="d-flex justify-content-center align-items-center">

                        <Dropdown
                            dropdownType={"genres"}
                            dropdownTitle={selectedGenre === "All" || !selectedGenre ? "Genres" : selectedGenre}
                            filtersList={genres}
                            setSelectedGenre={setSelectedGenre}
                            selectedGenre={selectedGenre}
                        />
                        <Dropdown
                            dropdownType={"filters"}
                            dropdownTitle={selectedFilter === "Clear" || !selectedFilter ? "Filters" : selectedFilter}
                            filtersList={filters}
                            setSelectedFilter={setSelectedFilter}
                            selectedFilter={selectedFilter}
                        />
                        <SearchBar />
                    </div>
                }
            </div>
        </nav>
    )
}
