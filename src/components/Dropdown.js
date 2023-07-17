import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

export default function Dropdown({ dropdownTitle, filtersList, setSelectedFilter, setSelectedGenre, dropdownType, selectedGenre, selectedFilter }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const handleCLick = (event) => {
        let path = "";
        const separateUrl = location.pathname.split("/");
        if (separateUrl[1] === "title" && location.state && location.state.section) {
            path = location.state.section.startsWith("/movies") ? "movies" : "tvShows"
        } else if (separateUrl[1] === "movies" || separateUrl[1] === "tvShows") {
            path = separateUrl[1] === "movies" ? "movies" : "tvShows";
        }

        if (dropdownType === "filters") {
            const newFilter = event.target.innerText === "Clear" ? "" : event.target.innerText;
            setSelectedFilter(newFilter);

            const genreParam = searchParams.get("genre");
            const genreValue = genreParam ? genreParam.replace("genre=", "") : selectedGenre || "All";

            searchParams.set("genre", genreValue);
            if (newFilter) {
                searchParams.set("sort_by", newFilter);
            } else {
                searchParams.delete("sort_by");
            }

            navigate(`/${path}/?${searchParams.toString()}`);
        } else if (dropdownType === "genres") {
            const newGenre = event.target.innerText;
            setSelectedGenre(newGenre);

            // const searchParams = new URLSearchParams(window.location.search);
            const filterParam = searchParams.get("sort_by");
            const filterValue = filterParam ? filterParam.replace("sort_by=", "") : selectedFilter || "";

            searchParams.set("genre", newGenre);
            if (filterValue) {
                searchParams.set("sort_by", filterValue);
            } else {
                searchParams.delete("sort_by");
            }

            navigate(`/${path}/?${searchParams.toString()}`);
        }
    }
    return (
        <>
            <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-expanded="false" >
                {dropdownTitle}
            </button>
            <ul className="dropdown-menu">
                {dropdownType === "genres" &&
                    <li role="button" className="dropdown-item" onClick={(event) => handleCLick(event)}>All</li>
                }
                {dropdownType === "filters" &&
                    <li role="button" className="dropdown-item" onClick={(event) => handleCLick(event)}>Clear</li>
                }
                {filtersList &&
                    filtersList.map((filter, index) => (
                        <li key={index} role="button" className="dropdown-item" onClick={(event) => handleCLick(event)}>{filter.name}</li>
                    )
                    )}
            </ul>
        </>
    )
}

