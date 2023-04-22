import { Router } from "express";
import { CreateProductController } from "../controllers/products/CreateProductController";
import { FindAllProductsController } from "../controllers/products/FindAllProductsController";
import { FindProductByIdController } from "../controllers/products/FindProductByIdController";
import { UpdateProductController } from "../controllers/products/UpdateProductController";
import { DeleteProductController } from "../controllers/products/DeleteProductController";

export const ProductRoutes = Router();

const createProductController = new CreateProductController();
const findAllProductController = new FindAllProductsController();
const findByIdProductUseCase = new FindProductByIdController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

ProductRoutes.get("/", findAllProductController.run);
ProductRoutes.post("/", createProductController.run);
ProductRoutes.get("/:productId", findByIdProductUseCase.run);
ProductRoutes.put("/:productId", updateProductController.run);
ProductRoutes.delete("/:productId", deleteProductController.run);
