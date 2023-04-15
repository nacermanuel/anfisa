import { Router } from "express";
import { CreateProductController } from "../controllers/products/CreateProductController";
import { FindAllProductsController } from "../controllers/products/FindAllProductsController";
import { FindProductByIdController } from "../controllers/products/FindProductByIdController";

export const ProductRoutes = Router();

const createProductController = new CreateProductController();
const findAllProductController = new FindAllProductsController();
const findByIdProductUseCase = new FindProductByIdController();

ProductRoutes.get("/", findAllProductController.run);
ProductRoutes.post("/", createProductController.run);
ProductRoutes.get("/:productId", findByIdProductUseCase.run);
