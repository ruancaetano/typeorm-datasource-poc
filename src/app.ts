import express from "express";
import { usersRoutes } from "./routes/users.route";

const app = express();

app.use(express.json());

app.use(usersRoutes);

export default app;
