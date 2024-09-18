import { Router } from "express";
import { Film } from "../types";

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



  

export default router;
