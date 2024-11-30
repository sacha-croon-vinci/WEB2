import { MovieContext } from "../../type";
import { useOutletContext, useMatch } from "react-router-dom";
import MovieCard from "../Movie";


const SingleMoviePage = () => {
    const {movies, onMovieDeleted} : MovieContext = useOutletContext();

    const match = useMatch("/movie/:id");
    const movieId = Number(match?.params.id);
    if(isNaN(movieId)){ return <div>Movie not found</div>};

    const movieFound = movies.find((movie) => movie.id === movieId);

    if(!movieFound){
        return <div>Movie not found</div>
    };

    return (
        <MovieCard movie={movieFound} onMovieDeleted={onMovieDeleted} />
    );

};

export default SingleMoviePage