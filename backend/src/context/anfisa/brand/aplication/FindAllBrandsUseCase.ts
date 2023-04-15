import { BrandRespDTO } from "../domain/DTOs/BrandRespDTO";
import { BrandRepository } from "../domain/repository/BrandRepository";

export class FindAllBrandsUseCase {
    private _brandrespository : BrandRepository ;
    
    constructor(brandrepository: BrandRepository){
        this._brandrespository = brandrepository
    }

    async run(): Promise<BrandRespDTO[] | null>{
        
        const brands = await this._brandrespository.brandFindall() ;

        return brands
    }
}