import { Router } from "express";
import { Film, NewFilm } from "../types";

const router = Router();

const films: Film[] = [
    {
      "id": 1,
      "title": "L'Aventure Épique",
      "director": "Jean Dupont",
      "duration": 120,
      "budget": 50,
      "description": "Un voyage incroyable à travers des terres inconnues.",
      "imageUrl": "https://example.com/image1.jpg"
    },
    {
      "id": 2,
      "title": "Mystère à Paris",
      "director": "Marie Dubois",
      "duration": 95,
      "budget": 30,
      "description": "Un thriller captivant dans les rues de Paris.",
      "imageUrl": "https://example.com/image2.jpg"
    }
  ];



/* GET film by id with exceptions. */
router.get("/:id", (req, res) => {
  const idInRequest: number = parseInt(req.params.id, 10);
  const indexOfFilmFound  = films.findIndex(
    (film: Film) => film.id == idInRequest
  );
  if(indexOfFilmFound < 0) return res.sendStatus(404);
  const film: Film = films[indexOfFilmFound];
  if(film.budget! < 0 || film.duration < 0) return res.sendStatus(400);
  else return res.json(film);
});

// Create a film to be added to the menu.
router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    !("budget" in body) ||
    !("description" in body) ||
    !("imageUrl" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    typeof body.budget !== "number" ||
    typeof body.description !== "string" ||
    typeof body.imageUrl !== "string" ||
    !body.title.trim() ||
    !body.director.trim() ||
    !body.description.trim() ||
    !body.imageUrl.trim() 
  ) {
    return res.sendStatus(400);
  }


  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  // Use reduce() to find the highest id in the pizzas array
  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1; // 0 is the initial value of maxId

    for (const element of films) {
      if (element.title === body.title || element.director === body.director) {
        return res.sendStatus(400);
      }
    }

  const addedFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };
    

    if(addedFilm.duration <= 0 || addedFilm.budget! <= 0){
      res.sendStatus(400).json("PARAMETRES INVALIDES");
    }else{
      films.push(addedFilm); 
      console.log("Film bien ajouté !");
    }
  
  return res.json(addedFilm);
});

router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    // Cannot call req.query.minimum-duration as "-" is an operator
    return res.json(films);
  }
  const durationRequest: number = Number(req.query["minimum-duration"]);
  const filteredFilms: Film[] = films.filter((film) => {
    return (film.duration >= durationRequest);
  });
  return res.json(filteredFilms);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
  console.log(deletedElements);
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const filmIndex = films.findIndex((film) => film.id === id);
  if (filmIndex === -1) {
    return res.sendStatus(404);
  }
  const film = films[filmIndex];
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    (("title" in body) && (typeof body.title !== "string" || !body.title.trim())) ||
    (("director" in body) && (typeof body.director !== "string" || !body.director.trim())) ||
    (("duration" in body) && (typeof body.duration !== "number")) ||
    (("budget" in body) && (typeof body.budget !== "number")) ||
    (("description" in body) && (typeof body.description !== "string" || !body.description.trim())) ||
    (("imageUrl" in body) && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
   
  ) {
    return res.sendStatus(400);
  }
  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  if(title){
    film.title = title;
  } 
  if(director){
    film.director = director;
  }
  if(duration){
    film.duration = duration;
  }
  if(budget){
    film.budget = budget;
  }
  if(description){
    film.description = description;
  }
  if(imageUrl){
    film.imageUrl = imageUrl;
  }
  return res.json(film);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const filmIndex = films.findIndex((film) => film.id === id);
  if (filmIndex === -1) {
    return res.sendStatus(404);
  }
  const film = films[filmIndex];
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    !("budget" in body) ||
    !("description" in body) ||
    !("imageUrl" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    typeof body.budget !== "number" ||
    typeof body.description !== "string" ||
    typeof body.imageUrl !== "string" ||
    !body.title.trim() ||
    !body.director.trim() ||
    !body.description.trim() ||
    !body.imageUrl.trim() 
  ) {
    return res.sendStatus(400);
  }
  const { title, director, duration, budget, description, imageUrl } = body as Film;
  film.title = title;
  film.director = director;
  film.duration = duration;
  film.budget = budget;
  film.description = description;
  film.imageUrl = imageUrl;
  return res.json(film);
});



export default router;
