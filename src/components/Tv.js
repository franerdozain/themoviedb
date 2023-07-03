import ContentList from './ContentList'
import { getTvShows } from './Api';
import { useState, useEffect } from 'react';

export default function Tv () {
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        async function fetchTvShows() {
            try {
                const data =  await getTvShows();
                setTvShows(data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchTvShows()
    }, [])
    return (
        <>
            <ContentList content={tvShows}/>
        </>
    )
}