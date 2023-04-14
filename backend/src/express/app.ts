import express, { Application, json } from "express";
import cors from "cors";

const app: Application = express();

app.use(json());
app.use(cors());

export { app };
