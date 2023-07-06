import { useEffect } from "react"

export default function TitleCard({ titleDetails }) {
    useEffect(() => {
        const fetchTitle = async (titleDetails) => {
            try {
                const response = await fetch(titleDetails);
                const data = await response.json();
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchTitle(titleDetails)
    }, [])

    return (
        <>
            {titleDetails && (
                <div className="col-12 col-md-12">
                    <div className="card">
                        {titleDetails.backdrop_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500/${titleDetails.backdrop_path || titleDetails.poster_path}`} className="card-img-top" alt={`${titleDetails.name || titleDetails.original_title} image`} />
                        ) : (
                            <div>
                                <i className="noImg fa-solid fa-image fa-lg card-img-top"></i>
                            </div>
                        )
                        }
                        <div className="card-body">
                            <h1 className="card-title">{titleDetails.name || titleDetails.original_title}</h1>
                            {titleDetails.original_language !== "en" &&
                                <h3>Title: {titleDetails.title}</h3>
                            }
                            <h4>{titleDetails.tagline}</h4>
                            <span><h5>Genres:</h5> {titleDetails.genres.map(e => e.name).join(", ")}</span>
                            <span className="card-text"><h5>Overview:</h5> {titleDetails.overview}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}