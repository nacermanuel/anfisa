import { BrandRespDTO } from "../domain/DTOs/BrandRespDTO";
import { BrandAlreadyExists } from "../domain/errors/BrandAlreadyExists";
import { BrandModel } from "../domain/model/BrandModel";
import { BrandRepository } from "../domain/repository/BrandRepository";


export class CreateBrandUseCase {
    private _brandrepository: BrandRepository ;

    constructor(brandrepository: BrandRepository){
        this._brandrepository = brandrepository
    }

    async run(brand: BrandModel): Promise<BrandRespDTO>{
        
        const findBrand = await this._brandrepository.brandFindName(brand.name);

        if(findBrand) throw new BrandAlreadyExists
        
        const newBrand = await this._brandrepository.create(brand) ;

        const { id,name} = newBrand ;

        return new BrandRespDTO(id,name)


    }
}