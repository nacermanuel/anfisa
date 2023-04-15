import { Request, Response } from "express";
import { FindAllBrandsUseCase } from "../../../context/anfisa/brand/aplication/FindAllBrandsUseCase";
import { BrandRepository } from "../../../context/anfisa/brand/domain/repository/BrandRepository";
import { MongoRepositoryBrandImpl } from "../../../context/anfisa/brand/infrastructure/persistence/mongo/MongoRepositoryBrandImpl";

export class FindAllBrandsController {
    private brandrepository: BrandRepository ;
    private findallbrandsusecase : FindAllBrandsUseCase ; 

    constructor(){
        this.brandrepository = new MongoRepositoryBrandImpl() ;
        this.findallbrandsusecase = new FindAllBrandsUseCase(this.brandrepository) ;
    }

    run = async (_req:Request, res: Response): Promise<void> => {
        
        try{
            const data = await this.findallbrandsusecase.run();
            
            res.status(200).json(data)

        }catch(err: any){
            res.status(400).json({ message: err.message });
        }
    }
}