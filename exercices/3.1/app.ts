import express, { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import cors from "cors";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import drinkRouter from "./routes/drinks";
import filmRouter from "./routes/films";
import authsRouter from "./routes/auths";


const app = express();

let getRequestCount: number = 0;
let postRequestCount : number = 0;

// Middleware pour enregistrer les statistiques des requêtes GET
const requestStatsMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.method === "GET") {
    getRequestCount++;
    console.log(`GET counter: ${getRequestCount}`);
  }
  if (req.method === "POST") {
    postRequestCount++;
    console.log(`POST counter : ${postRequestCount}`);
  }
  next();
};
app.use(requestStatsMiddleware);

const corsOptions = {
  origin: [/^http:\/\/localhost/, "http://amazing.you.com"],
};

app.use(cors(corsOptions));

app.use((_req, _res, next) => {
  console.log(
    "Time:",
    new Date().toLocaleString("fr-FR", { timeZone: "Europe/Brussels" })
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/drinks", drinkRouter);
app.use("/films",filmRouter);
app.use("/auths", authsRouter);


const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
};

app.use(errorHandler);
export default app;
