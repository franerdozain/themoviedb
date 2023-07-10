import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchBar() {
    const inputRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        let searchInput = inputRef.current.value;
        let searchPath = "";
        if (location.pathname.includes("/movies") || location.pathname.includes("/tvShows")) {
            const paths = location.pathname.split("/");
            searchPath = `${paths[1]}?search=${searchInput}`
            inputRef.current.value = "";
        }
        if (location.state && location.state.section) {
            searchPath = `${location.state.section}?search=${searchInput}`
            inputRef.current.value = "";
        }
        
        navigate(searchPath)
    }

    return (
        <div>
            <input
                className="form-control me-2 ms-3"
                type="search" placeholder="Search" aria-label="Search"
                ref={inputRef}
            />
            <button className="btn btn-primary" type="submit" onClick={handleClick}>Search</button>
        </div>
    )
}