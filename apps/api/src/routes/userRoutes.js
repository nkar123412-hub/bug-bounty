import { Router } from "express";
import { getUsers, postUser, getUserByUsername } from "../controllers/userController.js";

export const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.get("/:username", getUserByUsername);
userRoutes.post("/", postUser);
