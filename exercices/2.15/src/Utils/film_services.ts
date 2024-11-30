import { Movie, NewMovie } from "../type";


const fetchMovies = async (): Promise<Movie[]> => {
    try{
        const response = await fetch("/api/films");
      if(!response.ok) throw new Error(`fetch error ${response.status} : ${response.statusText}`);
      const data = await response.json();

      if(!data || !Array.isArray(data)){
        throw new Error( "Invalid data received ...");
      }

      return data;

    } catch (err){
        console.error(err);
        throw err;
    }
}


const addMovie = async (movie : NewMovie): Promise<Movie> => {

    try{
        const response = await fetch("/api/films", {
            method: "POST",
            headers: {
                "content-type" : "applications/json",
            },
            body : JSON.stringify(movie),
        });
        if(!response.ok){throw new Error("Failed to add : "+ response.statusText)}
        const data = response.json();
        return data
    } catch( err){
        console.error(err);
        throw err;
    }
};

export {fetchMovies, addMovie};