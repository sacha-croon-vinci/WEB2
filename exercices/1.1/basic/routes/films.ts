import { Router } from "express";
import { Film } from "../types";


const router = Router();
// Tableau de films "hardcodés"
const films: Film[] = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        duration: 148,
        budget: 160,
        description: "A mind-bending thriller about dream invasion.",
        imageUrl: "https://example.com/inception.jpg"
    },
    {
        id: 2,
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        duration: 136,
        budget: 63,
        description: "A hacker discovers the reality is a simulation.",
        imageUrl: "https://example.com/matrix.jpg"
    },
    {
        id: 3,
        title: "Interstellar",
        director: "Christopher Nolan",
        duration: 169,
        budget: 165,
        description: "A journey through space and time to save humanity.",
        imageUrl: "https://example.com/interstellar.jpg"
    }
];

router.get("/", (_req, res) => {
    return res.json(films);
  });


export default router;