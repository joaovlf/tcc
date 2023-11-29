import { Router } from "express";
import { sprintController } from "../controllers";
// import { authMiddleware } from "../middlewares/auth";

const router = Router();
//public routes
router.post("/create", sprintController.create);

//private routes
router.get("/list", sprintController.list);
router.get("/list:projectUuid", sprintController.listByProjectUuid)
router.delete("/delete/:id", sprintController.delete);

export { router as sprintRoutes };

