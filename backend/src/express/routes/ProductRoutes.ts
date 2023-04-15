import { Router } from "express";
import { CreateProductController } from "../controllers/products/CreateProductController";

export const ProductRoutes = Router();

const createProductController = new CreateProductController();

ProductRoutes.post("/", createProductController.run);
