import { useState, useEffect } from 'react';
import ContentList from './ContentList'
import { getTvShows } from './Api';
import { useLocation } from 'react-router-dom';
import { getTvShowsByGenre } from './Api';

export default function Tv ({ genreId }) {
    const [tvShows, setTvShows] = useState([]);
    const location = useLocation();

    useEffect(() => {
        async function fetchTvShows() {
            try {
                const data = location.pathname === "/tv" ? await getTvShows() : await getTvShowsByGenre(genreId);
                setTvShows(data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchTvShows()
    }, [location.pathname, genreId])
    return (
        <>
            <ContentList content={tvShows}/>
        </>
    )
}