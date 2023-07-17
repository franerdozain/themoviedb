import { Link } from 'react-router-dom';
export default function Home() {
    localStorage.clear()
    return (
        <div >
            <h1 id='d-flex felx-column h1-home '>Welcome!</h1>
            <div>
                <Link to="/movies"><button type="button" className="btn btn-primary ">Movies</button></Link>
                <Link to="/tvShows"><button type="button" className="btn btn-primary ">Tv Shows</button></Link>
            </div>
        </div>
    )
}