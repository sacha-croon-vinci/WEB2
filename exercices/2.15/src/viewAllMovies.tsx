import { Movie } from "./type";
import MovieCard from "./components/Movie";


interface MoviesProps {
  movies: Movie[],
  onMovieDeleted: (movie: Movie) => void;
}

const ViewAllMovies = ({movies ,onMovieDeleted} : MoviesProps) => {

    return (
        <div>
            {movies.map((movie) => (
            <MovieCard 
               key={movie.title}
               movie={movie}
               onMovieDeleted={onMovieDeleted}
            />
            ))}
        
        </div>
    
    );
}
    export default ViewAllMovies;