import { Router } from "express";
import { createPayment } from "../controllers/paymentController.js";
import { auth } from "../middleware/auth.js";

export const paymentRoutes = Router();

paymentRoutes.post("/", auth, createPayment);
