import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.use(authMiddleware);
router.post("/create", userController.create);
router.get("/list", userController.list);
router.patch("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);
export { router as userRoute };

