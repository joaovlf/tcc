import { Router } from "express";
import { userController } from "../controllers";
// import { authMiddleware } from "../middlewares/auth";

const router = Router();
//public routes
router.post("/create", userController.create);

//private routes
// router.use(authMiddleware);
router.get("/list", userController.list);
router.patch("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);

export { router as userRoutes };

