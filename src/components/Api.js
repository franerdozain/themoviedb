export async function getMovies () {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8451889c3502a8ef498aca6808d883d`);
        const data = await response.json();        
        return data.results;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export async function getTvShows () {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=e8451889c3502a8ef498aca6808d883d`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log("Error: ", error);
    }
}


export async function getGenres (type) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=e8451889c3502a8ef498aca6808d883d`);
        const data = await response.json();        
        return data.genres;
    } catch (error) {
        console.log("Error: ", error);
    }
}

//write 2 func getMoviesByGenre and getTvShowsByGenre