interface MovieProps {
    title: string;
    director: string;
  }

interface CinemaProps {
    name: string;
    movies: MovieProps[];
  }
  
  function Cinema(props : CinemaProps) {
    return (
      <div>
      <h2>{props.name}</h2>
      <ul>
    
        {props.movies.map((movie) => (
            <li key={movie.title}>
                <strong>{movie.title}</strong> - Réalisateur : {movie.director}
            </li>
        ))}
        
        
      </ul>
    </div>
    )
  
  };

export default Cinema;