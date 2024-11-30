import MovieListView from "../../viewAllMovies";
import PageTitle from "./PageTitle";
import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../type";



const MovieListPage = () => {
  

  const {movies, onMovieDeleted} :MovieContext = useOutletContext();

  
  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView movies={movies} onMovieDeleted={onMovieDeleted}/>

      

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;