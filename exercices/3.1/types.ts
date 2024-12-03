import { Request } from "express";

interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

interface FilmToUpdate {
  title?: string;
  director?: string;
  duration?: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

type NewPizza = Omit<Pizza, "id">;
type NewFilm= Omit<Film, "id">;
type NewDrink = Omit<Drink, "id">;

interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}
interface Comment {
  filmId : number;
  username: string;
  comment : string;
}

type PotentialUser = Omit<User, "id">;

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

export type {
  Pizza,
  NewPizza,
  PizzaToUpdate,
  Film,
  FilmToUpdate,
  NewFilm,
  Drink,
  NewDrink,
  AuthenticatedUser,
  User,
  Comment,
  PotentialUser,
  AuthenticatedRequest,
  JwtPayload,
};
