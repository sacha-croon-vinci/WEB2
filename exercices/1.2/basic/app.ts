import express, { Request, NextFunction  } from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";

const app = express();
let getRequestCount: number = 0;

// Middleware pour enregistrer les statistiques des requêtes GET
const requestStatsMiddleware = (req: Request, _res: any,next: NextFunction ) => {
    if (req.method === 'GET') {
        getRequestCount++;
        console.log(`GET counter: ${getRequestCount}`);
    }
    next();
}


app.use(requestStatsMiddleware);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);

export default app;
