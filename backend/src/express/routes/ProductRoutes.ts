import { Router } from "express";
import { CreateProductController } from "../controllers/products/CreateProductController";
import { FindAllProductsController } from "../controllers/products/FindAllProductsController";

export const ProductRoutes = Router();

const createProductController = new CreateProductController();
const findAllProductController = new FindAllProductsController();

ProductRoutes.get("/", findAllProductController.run);
ProductRoutes.post("/", createProductController.run);
