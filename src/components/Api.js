const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODQ1MTg4OWMzNTAyYThlZjQ5OGFjYTY4MDhkODgzZCIsInN1YiI6IjY0OWFkMjlkMGU1YWJhMDExYzg5YjIyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrsHhcJLB_sS0vnmofaEfdW2IRtoeOvD_X4uXgMjFqc";

const getData = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${BEARER_TOKEN}`
            }
        });        
        const data = await response.json();     
        return data;    
    } catch (error) {
        console.log("Error: ", error)
    }
}

export async function getMovies() {
    const data = await getData(`${BASE_URL}/discover/movie`)
    return data.results;
}

export async function getTvShows () {
    const data = await getData(`${BASE_URL}/discover/tv`)
    return data.results;
}

export async function getGenres (type) {
    const data = await getData(`${BASE_URL}/genre/${type}/list`)
    return data.genres;
}

export async function getTitlesByGenre (type, genreId) {
    const data = await getData(`${BASE_URL}/discover/${type}?&with_genres=${genreId}`)
    return data.results;
}

export async function getTitleDetails (type, id) {
    const data = await getData(`${BASE_URL}/${type}/${id}`)
    return data;
}

export async function getSearchedTitle (type, title) {
    const data =  await getData(`${BASE_URL}/search/${type}?&query=${title}`)
    return data.results;
}