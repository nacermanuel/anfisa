import { ProductsRespDTO } from "../../../domain/DTOs/ProductsRespDTO";
import { ProductModel } from "../../../domain/models/ProductModel";
import { ProductRepository } from "../../../domain/repositories/ProductRepository";
import { ProductEntity } from "./ProductEntity";

export class MongoRepositoryProductImpl implements ProductRepository {
  async productFindName(productName: string): Promise<ProductsRespDTO | null> {
    const product: ProductsRespDTO | null = await ProductEntity.findOne({
      name: productName,
    });

    if (!product) return null;

    const {
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant,
    } = product;

    return new ProductsRespDTO(
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant
    );
  }

  async create(product: ProductModel): Promise<ProductsRespDTO> {
    const saveProduct: ProductsRespDTO = await ProductEntity.create(product);

    const {
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant,
    } = saveProduct;

    return new ProductsRespDTO(
      id,
      price,
      name,
      description,
      avalible,
      image,
      amount,
      brand,
      category,
      relevant
    );
  }
}
