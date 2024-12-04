import express from "express";
import cookieSession from "cookie-session";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import drinkRouter from "./routes/drinks";
import authsRouter from "./routes/auths";

const app = express();

const expiryDateIn3months = new Date(Date.now()+1000*60*60*24*30*3);
const cookieSecretKey = "cookiestestnouseofit";
app.use(
    cookieSession({
         name : 'user',
         keys : [cookieSecretKey],
         httpOnly : true,
         expires : expiryDateIn3months
        }),
);

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
app.use("/auths", authsRouter);

export default app;
