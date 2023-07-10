import { useState, useEffect } from 'react';
import ContentList from './ContentList';
import { getMovies, getSearchedTitle, getTitlesByGenre } from './Api';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Movies({ genreId, setSelectedTitle }) {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        async function fetchMovies() {
            const searchParam = searchParams.get("search")
            let data = "";
            try {
                if (searchParam) {
                    data = await getSearchedTitle("movie", searchParam)
                } else {
                    data = location.pathname === "/movies" ? await getMovies() : await getTitlesByGenre("movie", genreId)
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