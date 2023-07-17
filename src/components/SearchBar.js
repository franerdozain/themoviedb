import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

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
        <div className="container d-flex justify-content-around">
            <div className="form-group text-center">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" ref={inputRef} />
                    <div className="input-group-append">
                        <span className="input-group-text h-100"><FaSearch role="button" type="submit" onClick={handleClick} /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}