import { Router } from "express";
import { taskController } from "../controllers";

const router = Router();

router.get("/list", taskController.list);
router.get("/list/:projectUuid", taskController.listByProjectUuid);
router.post("/create", taskController.create);
router.delete("/delete/:uuid", taskController.delete);

export {router as taskRoutes};