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
                localStorage.setItem("titleDetails", JSON.stringify(data));
            } catch (error) {
                console.log("Error: ", error);
            }
        }

        const storedTitleDetails = localStorage.getItem("titleDetails");
        if (storedTitleDetails) {
            const parsedTitleDetails = JSON.parse(storedTitleDetails);
            setTitleDetails(parsedTitleDetails);
        } else {
            fetchSelectedTitle()
        }
    }, [])
    return (
        <>
            <TitleCard titleDetails={titleDetails} />
        </>
    )
}