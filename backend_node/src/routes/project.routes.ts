import { Router } from "express";
import { projectController } from "../controllers";

const router = Router();

router.get("/list", projectController.list);
router.post("/create", projectController.create);
router.delete("/delete/:uuid", projectController.delete);

export {router as projectRoute};