import express from "express";
import { userRoute, authRoute } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(3000, () => console.log("servidor rodando "));
