import { Router } from "express";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { FindAllCategoriesController } from "../controllers/category/FindAllCategoriesController";

export const CategoryRoutes = Router();

const createCategoryController = new CreateCategoryController();
const findAllCategoriesController = new FindAllCategoriesController();

CategoryRoutes.get("/", findAllCategoriesController.run);
CategoryRoutes.post("/", createCategoryController.run);
