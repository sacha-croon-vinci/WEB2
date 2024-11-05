import { Movie } from "../../type";

interface MoviesProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MoviesProps) => {
    return (
        <div className="card">
     
      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        {movie.lien && (
        <img src={movie.lien} className="card-img-top" alt={movie.title} />
      )}
        <p className="card-text">
          <strong>Réalisateur :</strong> {movie.director}
        </p>
        <p className="card-text">
          <strong>Durée :</strong> {movie.duration} minutes
        </p>
        {movie.budget && (
          <p className="card-text">
            <strong>Budget :</strong> {movie.budget} millions de dollars
          </p>
        )}
        {movie.description && (
          <p className="card-text">
            <strong>Description :</strong> {movie.description}
          </p>
        )}
      </div>
    </div>
    );
    };
export default MovieCard;