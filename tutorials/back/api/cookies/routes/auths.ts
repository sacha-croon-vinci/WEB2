/* eslint-disable @typescript-eslint/no-misused-promises */
import { Request, Router } from "express";
import { AuthenticatedUser, PotentialUser } from "../types";
import { login, register } from "../services/users";
const router = Router();

/* Register a user */
router.post("/register",  async (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("username" in body) ||
    !("password" in body) ||
    typeof body.username !== "string" ||
    typeof body.password !== "string" ||
    !body.username.trim() ||
    !body.password.trim()
  ) {
    return res.sendStatus(400);
  }

  const { username, password } = body as PotentialUser;

  const authenticatedUser =  await register(username, password);

  if (!authenticatedUser) {
    return res.sendStatus(409);
  }
  createCookieSessionData(req, authenticatedUser);


  return res.json(authenticatedUser);
});



/* Login a user */
router.post("/login", async (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("username" in body) ||
    !("password" in body) ||
    typeof body.username !== "string" ||
    typeof body.password !== "string" ||
    !body.username.trim() ||
    !body.password.trim()
  ) {
    return res.sendStatus(400);
  }

  const { username, password } = body as PotentialUser;

  const authenticatedUser = await login(username, password);

  if (!authenticatedUser) {
    return res.sendStatus(401);
  }
  createCookieSessionData(req, authenticatedUser);

  return res.json(authenticatedUser);
});

router.get("/logout", (req, res) => {
  req.session = null;
  return res.sendStatus(200);
})

function createCookieSessionData(
  req : Request,
  authenticatedUser : AuthenticatedUser
){
  if(!req.session){
    return ;
  }
  req.session.username = authenticatedUser.username;
  req.session.token = authenticatedUser.token;
  console.log("Cookie session well created with username : ",req.session.username," & token : ", req.session.token)
}

export default router;
