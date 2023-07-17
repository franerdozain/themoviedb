import { useState, useEffect } from 'react';
import ContentList from './ContentList'
import { getSearchedTitle, getTitles } from './Api';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Tv({ genreId, setSelectedTitle }) {
    localStorage.clear();
    const [tvShows, setTvShows] = useState([]);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        async function fetchTvShows() {
            let data = "";
            const searchParam = searchParams.get("search");
            const sortBy = searchParams.get("sort_by")

            try {
                if (searchParam) {
                    data = await getSearchedTitle("tv", searchParam)
                } else {
                    if (sortBy && genreId) {
                        data = await getTitles("tv", genreId, sortBy)
                    } else if (sortBy && !genreId) {
                        data = await getTitles("tv", null, sortBy)
                    } else if (!sortBy && genreId) {
                        data = await getTitles("tv", genreId)
                    } else {
                        data = await getTitles("tv", null, null)
                    }
                }

                setTvShows(data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchTvShows()
    }, [location.pathname, genreId, searchParams])
    return (
        <>
            <ContentList content={tvShows} setSelectedTitle={setSelectedTitle} />
        </>
    )
}