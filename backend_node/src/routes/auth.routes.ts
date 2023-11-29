import { Router } from "express";
import { authController } from "../controllers";

const router = Router();

router.post("/login", authController.authenticate);

export { router as authRoutes };

