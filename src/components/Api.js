export async function getMovies (){
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8451889c3502a8ef498aca6808d883d`)
        const data = await response.json()
        // console.log("api:",data);
        return data.results
    } catch (error) {
        console.log("Error: ", error);
    }
}
