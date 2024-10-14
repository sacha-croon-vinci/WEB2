
const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <h1>{pageTitle}</h1>
      <Cinema 
         cinemaName={cinema1Name}
         cinemaMovieTitle1={cinema1Movie1Title}
         cinemaMovieDirector1={cinema1Movie1Director}
         cinemaMovieTitle2={cinema1Movie2Title}
         cinemaMovieDirector2={cinema1Movie2Director}
      />
      <Cinema 
         cinemaName={cinema2Name}
         cinemaMovieTitle1={cinema2Movie1Title}
         cinemaMovieDirector1={cinema2Movie1Director}
         cinemaMovieTitle2={cinema2Movie2Title}
         cinemaMovieDirector2={cinema2Movie2Director}
      />
    </div>

      
  );
};

interface CinemaProps {
  cinemaName: string;
  cinemaMovieTitle1: string;
  cinemaMovieDirector1: string;
  cinemaMovieTitle2: string;
  cinemaMovieDirector2: string;
}

function Cinema(props : CinemaProps) {
  return (
    <div>
    <h2>{props.cinemaName}</h2>
    <ul>
      <li>
        <strong>{props.cinemaMovieTitle1}</strong> - Réalisateur :{" "}
        {props.cinemaMovieDirector1}
      </li>
      <li>
        <strong>{props.cinemaMovieTitle2}</strong> - Réalisateur :{" "}
        {props.cinemaMovieDirector2}
      </li>
    </ul>
  </div>
  )

};

export default App;
