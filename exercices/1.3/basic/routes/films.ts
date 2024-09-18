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

  /* GET film listing. */
router.get("/", (_req, res) => {
  res.json(films);
});

/* GET film by id with exceptions. */
router.get("/:id", (req, res) => {
  const idInRequest: number = parseInt(req.params.id, 10);
  const indexOfFilmFound  = films.findIndex(
    (film: Film) => film.id == idInRequest
  );
  if(indexOfFilmFound < 0) res.json("No film found !");
  const film: Film = films[indexOfFilmFound];
  if(film.budget! < 0 || film.duration < 0) res.json("NOMBRE NEGATIF EN PARAM !");

  res.json(film);
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

  const addedFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

    if(addedFilm.duration < 0 || addedFilm.budget! < 0){
      res.json("PARAMETRES INVALIDES");
    }
  
  films.push(addedFilm); 
  console.log("Film bien ajouté !");
  return res.json(addedFilm);



});



  

export default router;
