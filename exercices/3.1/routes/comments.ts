import {  Router } from "express";
import { Comment } from "../types";
import { readAllComments } from "../services/comments";

const router = Router();

const expectedKeys = ["comment", "filmId", "username"];


//READ all comments by filmsID
router.get("/", (req, res) => {
    const filmId = "filmId" in req.query ? Number(req.query["filmId"]) : undefined;
    
    if (filmId !== undefined && (isNaN(filmId) || filmId <= 0)) {
        return res.sendStatus(400);
    }

    const commentsFiltered = readAllComments(filmId);
    return res.send(commentsFiltered);
});
















export default router;