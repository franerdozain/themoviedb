import TitleCard from "./TitleCard";
import { getTitleDetails } from "./Api";
import { useEffect, useState } from "react";

export default function TitlePage({ selectedTitle }) {
    const [titleDetails, setTitleDetails] = useState(null);

    useEffect(() => {

        async function fetchSelectedTitle() {
            try {
                const type = selectedTitle.original_title ? "movie" : "tv";
                const id = selectedTitle.id;
                const data = await getTitleDetails(type, id)
                setTitleDetails(data)

            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchSelectedTitle()
    }, [])
    return (
        <>
            <TitleCard titleDetails={titleDetails} />
        </>
    )
}