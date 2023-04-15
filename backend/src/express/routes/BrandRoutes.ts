import { Router } from "express";
import { CreateBrandController } from "../controllers/brand/CreateBrandController";

export const BrandRoutes = Router();

const createbrandcontroller = new CreateBrandController();

BrandRoutes.post("/",createbrandcontroller.run)  ;