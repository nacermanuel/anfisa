import { BrandRespDTO } from "../DTOs/BrandRespDTO";
import { BrandModel } from "../model/BrandModel";

export interface BrandRepository {
    create(brand: BrandModel): Promise<BrandRespDTO> ;
    brandFindName(brandname: string): Promise<BrandRespDTO | null> ;
    brandFindall(): Promise<BrandRespDTO[] | null> ;
}