import { ConnetMongoDB } from "../config/dbConnet";
import { config } from "../config/config.env";
import { app } from "./app";
import { Request, Response } from "express";

const port = config.port;

ConnetMongoDB();

app.get("/", (_req: Request, resp: Response): void => {
  resp.send("Api anfisa OK.");
});

const server = app.listen(port, () => {
  console.log("RUN SERVER IN PORT: " + port);
});

export { server };
