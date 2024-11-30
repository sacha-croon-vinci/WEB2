import {Link} from 'react-router-dom';
import { Movie } from '../../type';

interface MovieTitleProps {
    movies: Movie[];
}

const MovieTitle = ({ movies } : MovieTitleProps ) => {
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
        
    )
}

export default MovieTitle;