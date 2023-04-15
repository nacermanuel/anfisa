import { Router } from "express";
import { CreateBrandController } from "../controllers/brand/CreateBrandController";
import { FindAllBrandsController } from "../controllers/brand/FindAllBrandsController";

export const BrandRoutes = Router();

const createbrandcontroller = new CreateBrandController();
const findallbrandscontroller = new FindAllBrandsController();

BrandRoutes.post("/",createbrandcontroller.run)  ;
BrandRoutes.get("/", findallbrandscontroller.run) ;