import { useState, useEffect } from 'react';
import ContentList from './ContentList'
import { getSearchedTitle, getTitlesByGenre, getTvShows } from './Api';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Tv ({ genreId, setSelectedTitle }) {
    const [tvShows, setTvShows] = useState([]);
    const location = useLocation();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        console.log("inicio useef");
        async function fetchTvShows() {
            let data = "";
            const searchParam = searchParams.get("search");
            console.log("este",searchParam);

            try {
                if(searchParam){
                    data = await getSearchedTitle("tv", searchParam)                    
                } else {
                    data = location.pathname === "/tvShows" ? await getTvShows() : await getTitlesByGenre("tv", genreId);
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