import { Movie } from "./type";
import MovieCard from "./components/Movie";

interface MoviesProps {
  movies: Movie[];
}

const ViewAllMovies = ({movies} : MoviesProps) => {

    return (
        <div>
            {movies.map((movie) => (
            <MovieCard 
               key={movie.title}
               movie={movie}
            />
            ))}
        
        </div>
    
    );
}
    export default ViewAllMovies;