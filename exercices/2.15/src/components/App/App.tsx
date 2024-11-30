import {Outlet , useNavigate} from "react-router-dom";
import "./App.css";
import Footer from "../Footer";
import Header from "../Header";
import NavBar from "../Navbar";
import { Movie, MovieContext } from "../../type";
import { useState, useEffect } from "react";
import { addMovie, deleteMovie, fetchMovies } from "../../Utils/film_services";



const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();


  const initMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    }catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    initMovies();
  },[])

  const onMovieAdded = async (newMovie: Movie) => {
    console.log("movie to add : " + newMovie.title);

    try{
        const movieToBeAdded = await addMovie(newMovie);
        console.log("movie added"+movieToBeAdded);
        await initMovies();
        navigate("/movie-list");

    }catch (error ){
      console.error(error);
      throw error;
    }

  }

  const onMovieDeleted = async (movie : Movie) => {
    console.log("movie to delete : "+ movie.title);
    try{
       await deleteMovie(movie);
       console.log(`movie deleted ${movie.title}`);
       await initMovies();
    } catch( error ){
      console.error(error);
      throw error;
    }
  }

  const movieContext: MovieContext = {
    movies, 
    onMovieAdded,
    onMovieDeleted,
  };

  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
        <NavBar />
      </Header>

      <main className="page-content">
        <Outlet context={movieContext} />
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© myMovies</p>
      </Footer>
    </div>
  );
};

export default App;