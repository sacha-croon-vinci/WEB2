import { MovieContext } from "../../type";
import PageTitle from "./PageTitle";
import {useOutletContext} from "react-router-dom";
import MovieTitle from "../MovieTitle";


const HomePage = () => {
  const {movies} : MovieContext = useOutletContext();
  return (
    <div>
      <PageTitle title="myMovies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
      <MovieTitle movies={movies} />
    </div>
  );
};
export default HomePage;