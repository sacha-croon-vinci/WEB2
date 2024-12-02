import jwt from "jsonwebtoken";
import path from "node:path";
import { parse, serialize } from "../utils/json";
import { AuthenticatedUser, User } from "../types";

const jwtSecret = "ilovemypizza!";
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const jsonDbPath = path.join(__dirname, "/../data/users.json");

const defaultUsers: User[] = [
  {
    id: 1,
    username: "admin",
    password: "admin",
  },
];

function login(
  username: string,
  password: string
): AuthenticatedUser | undefined {
  const userFound = readOneUserFromUsername(username);
  if (!userFound) return undefined;
  if (userFound.password !== password) return undefined;

  const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt } // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser: AuthenticatedUser = {
    username,
    token,
  };

  return authenticatedUser;
}

function register(
  username: string,
  password: string
): AuthenticatedUser | undefined {
  const userFound = readOneUserFromUsername(username);
  if (userFound) return undefined;

  createOneUser(username, password);

  const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt } // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser: AuthenticatedUser = {
    username,
    token,
  };

  return authenticatedUser;
}

function readOneUserFromUsername(username: string) {
  const users = parse(jsonDbPath, defaultUsers);
  const userFound = users.find((user) => user.username === username);
  if (!userFound) return undefined;

  return userFound;
}

function createOneUser(username: string, password: string) {
  const users = parse(jsonDbPath, defaultUsers);

  const nextId =
    users.reduce((acc, user) => (user.id > acc ? user.id : acc), 0) + 1;

  const createdUser: User = {
    id: nextId,
    username,
    password,
  };

  users.push(createdUser);

  serialize(jsonDbPath, users);

  return createdUser;
}

export { login, register, readOneUserFromUsername };
