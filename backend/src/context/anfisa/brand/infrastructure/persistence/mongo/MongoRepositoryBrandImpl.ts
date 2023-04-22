import { BrandRespDTO } from "../../../domain/DTOs/BrandRespDTO";
import { BrandModel } from "../../../domain/model/BrandModel";
import { BrandRepository } from "../../../domain/repository/BrandRepository";
import { BrandEntity } from "./BrandEntity";

export class MongoRepositoryBrandImpl implements BrandRepository {
  async create(brand: BrandModel): Promise<BrandRespDTO> {
    const savedBrand: BrandModel = await BrandEntity.create(brand);

    const { id, name, image } = savedBrand;

    return new BrandRespDTO(id, name, image);
  }

  async brandFindName(brandname: string): Promise<BrandRespDTO | null> {
    const brand: BrandModel | null = await BrandEntity.findOne({
      name: brandname,
    });
    if (!brand) return null;

    const { id, name, image } = brand;

    return new BrandRespDTO(id, name, image);
  }

  async brandFindall(): Promise<BrandRespDTO[] | null> {
    const brand: BrandModel[] = await BrandEntity.find({});

    const brands: BrandRespDTO[] = brand.map(
      (brand) => new BrandRespDTO(brand.id, brand.name, brand.image)
    );

    return brands;
  }
}
