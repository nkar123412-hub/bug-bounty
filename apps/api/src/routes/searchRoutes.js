import { Router } from "express";
import { search } from "../controllers/searchController.js";
import { validateSearchQuery } from "../validators/search.js";

export const searchRoutes = Router();

searchRoutes.get("/", validateSearchQuery, search);
