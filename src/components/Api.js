const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODQ1MTg4OWMzNTAyYThlZjQ5OGFjYTY4MDhkODgzZCIsInN1YiI6IjY0OWFkMjlkMGU1YWJhMDExYzg5YjIyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrsHhcJLB_sS0vnmofaEfdW2IRtoeOvD_X4uXgMjFqc";

export async function getMovies () {
    try {
        const response = await fetch(`${BASE_URL}/discover/movie`, {
            headers: {
                "Authorization": `Bearer ${BEARER_TOKEN}`
            }
        });
        const data = await response.json();        
        return data.results;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export async function getTvShows () {
    try {
        const response = await fetch(`${BASE_URL}/discover/tv`, {
            headers: {
                "Authorization": `Bearer ${BEARER_TOKEN}`
            }
        });
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log("Error: ", error);
    }
}


export async function getGenres (type) {
    try {
        const response = await fetch(`${BASE_URL}/genre/${type}/list`, {
            headers: {
                "Authorization": `Bearer ${BEARER_TOKEN}`
            }
        });
        const data = await response.json();        
        return data.genres;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export async function getTitlesByGenre (type, genreId) {
    try {
        const response = await fetch(`${BASE_URL}/discover/${type}?&with_genres=${genreId}`, {
            headers: {
                "Authorization": `Bearer ${BEARER_TOKEN}`
            }
        });
        const data = await response.json();        
        return data.results;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export async function getTitleDetails (type, id) {
    try {
        const response = await fetch(`${BASE_URL}/${type}/${id}`, {
            headers: {
                "Authorization": `Bearer ${BEARER_TOKEN}`
            }
        });
        const data = await response.json();
        return data 
    } catch (error) {
        console.log("Error: ", error);
    }
}

export async function getSearchedTitle (type, title) {
    try {
        const response = await fetch(`${BASE_URL}/search/${type}?&query=${title}`, {
            headers: {
                "Authorization": `Bearer ${BEARER_TOKEN}`
            }
        });
        const data = await response.json();        
        return data.results;
    } catch (error) {
        console.log("Error: ", error);
    }
}