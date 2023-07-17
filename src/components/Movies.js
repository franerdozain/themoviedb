import { useState, useEffect } from 'react';
import ContentList from './ContentList';
import { getTitles, getSearchedTitle } from './Api';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Movies({ genreId, setSelectedTitle }) {
    localStorage.clear();
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        async function fetchMovies() {
            const searchParam = searchParams.get("search");
            const sortBy = searchParams.get("sort_by");
            let data = "";

            try {
                if (searchParam) {
                    data = await getSearchedTitle("movie", searchParam)
                } else {
                    if (sortBy && genreId) {
                        data = await getTitles("movie", genreId, sortBy)
                    } else if (sortBy && !genreId) {
                        data = await getTitles("movie", null, sortBy)
                    } else if (!sortBy && genreId) {
                        data = await getTitles("movie", genreId)
                    } else {
                        data = await getTitles("movie", null, null)
                    }
                }

                setMovies(data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchMovies()
    }, [location.pathname, genreId, searchParams])
    return (
        <>
            <ContentList content={movies} setSelectedTitle={setSelectedTitle} />
        </>
    )
}