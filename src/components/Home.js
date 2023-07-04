import { Link } from 'react-router-dom';
export default function Home () {
    return (
        <>
            <h1>Welcome!</h1>
            <Link to="/movies"><button type="button" className="btn btn-primary ">Movies</button></Link> 
            <Link to="/tvShows"><button type="button" className="btn btn-primary ">Tv Shows</button></Link>
        </>
    )
}