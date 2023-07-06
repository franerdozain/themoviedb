import { useState, useEffect } from 'react';
import ContentList from './ContentList';
import { getMovies } from './Api';
import { useLocation } from 'react-router-dom';
import { getMoviesByGenre } from './Api';

export default function Movies({ genreId, setSelectedTitle }) {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        async function fetchMovies() {
            try {    
                const data = location.pathname === "/movies" ? await getMovies() : await getMoviesByGenre(genreId)
                setMovies(data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchMovies()
    }, [location.pathname, genreId])
    return (
        <>
            <ContentList content={movies} setSelectedTitle={setSelectedTitle}/>
        </>
    )
}