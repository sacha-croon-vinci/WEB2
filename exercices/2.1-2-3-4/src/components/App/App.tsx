import Cinema from "../Cinema";
import PageTitle from "../PageTitle/index";
import Footer from "../Footer/index";
import Header from "../Header/index";

const App = () => {
  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];

  return (
    <>
      <Header urlLogo="https://media.istockphoto.com/id/2168759247/fr/vectoriel/print.jpg?s=1024x1024&w=is&k=20&c=U2WUfOWnOUtcWM5R8_BclZQA5RcqQNA5fLvn48Dh6Ks="> </Header>
      <PageTitle />

      <Cinema name={cinema1Name} movies={moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer urlLogo="https://media.istockphoto.com/id/2032162515/fr/photo/fond-abstrait-noir-avec-texture-marbr%C3%A9e.jpg?s=1024x1024&w=is&k=20&c=kswbaWhmrrYuJsn4IQLHaVaPVP8pC3ygtDVOLoilT98=">
        <p>© 2021 - Tous droits réservés</p>
      </Footer>
    </>
  );
};

export default App;
