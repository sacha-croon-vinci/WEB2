import { Router } from "express";
import { NewFilm } from "../types";

import {
  readAll, readOne, createOne, deleteOne, updateOne, updateOrCreateOne
}from "../services/films";


const router = Router();



/* GET film by id with exceptions. */
router.get("/:id", (req, res) => {
  const idInRequest: number = parseInt(req.params.id, 10);
  const film = readOne(idInRequest);

  if((film === undefined) || film.budget! < 0 || film.duration < 0) return res.sendStatus(400);
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

  const addedFilm = createOne({title, director, duration, budget, description, imageUrl});
  return res.json(addedFilm);
});

router.get("/", (req, res) => {
  const durationRequest: number = Number(req.query["minimum-duration"]);
  const films = readAll(durationRequest);
  return res.json(films);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = deleteOne(id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
 
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
  const { title, director, duration, budget, description, imageUrl }: Partial<NewFilm> = body ;
  const updateOneFilm = updateOne(id, { title, director, duration, budget, description, imageUrl });
  
  if (!updateOneFilm) {
    return res.sendStatus(404);
  }
  return res.json(updateOneFilm);
});

router.put("/:id", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }



  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const createdOrUpdatedFilm = updateOrCreateOne(id, body as NewFilm);

  if (!createdOrUpdatedFilm) {
    return res.sendStatus(409); // Film already exists
  }

  return res.send(createdOrUpdatedFilm);
});



export default router;
