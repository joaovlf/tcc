import express from "express";
import { userRoute, authRoute, projectRoute, taskRoutes } from "./routes";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/project", projectRoute);
app.use("/api/task", taskRoutes);

app.listen(8000, () => console.log("servidor rodando "));
