import { Request, Response } from "express";
import { v4 } from "uuid";
import { CreateBrandUseCase } from "../../../context/anfisa/brand/aplication/CreateBrandUseCase";
import { BrandRepository } from "../../../context/anfisa/brand/domain/repository/BrandRepository";
import { MongoRepositoryBrandImpl } from "../../../context/anfisa/brand/infrastructure/persistence/mongo/MongoRepositoryBrandImpl";
import { BrandRValueObject } from "../../../context/anfisa/brand/domain/valueObject/BrandValueObject";


export class CreateBrandController {
    private _brandrepository: BrandRepository;
    private _createbranusecase: CreateBrandUseCase;

    constructor() {
        this._brandrepository = new MongoRepositoryBrandImpl;
        this._createbranusecase = new CreateBrandUseCase(this._brandrepository);
    }

    run = async (req: Request, res: Response): Promise<void> => {
        const { body } = req;

        try {
            const brandId = v4();
            const brand = new BrandRValueObject(brandId, body.name) ;

            const data = await this._createbranusecase.run(brand) ;

            res.status(201).json(data) ;

        }catch(err: any){
            res.status(400).json({ message: err.message });
        }
    }
}