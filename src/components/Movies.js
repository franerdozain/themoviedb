import { useState, useEffect } from 'react';
import ContentList from './ContentList';
import { getMovies } from './Api';

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const data =  await getMovies();
                setMovies(data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchMovies()
    }, [])

    return (
        <>
            <ContentList content={movies}/>
        </>
    )
}