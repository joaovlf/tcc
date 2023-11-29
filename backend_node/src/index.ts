import express from "express";
import { userRoutes, authRoutes, projectRoutes, taskRoutes, sprintRoutes } from "./routes";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/sprints", sprintRoutes);

app.listen(8000, () => console.log("servidor rodando "));
