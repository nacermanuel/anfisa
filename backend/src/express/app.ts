import express, { Application, json } from "express";
import cors from "cors";

import { ProductRoutes } from "./routes/ProductRoutes";

const app: Application = express();

app.use(json());
app.use(cors());

app.use("/api/v1/products", ProductRoutes);

export { app };
