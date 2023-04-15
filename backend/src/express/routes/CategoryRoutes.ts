import { Router } from "express";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";

export const CategoryRoutes = Router();

const createCategoryController = new CreateCategoryController();

CategoryRoutes.post("/", createCategoryController.run);
