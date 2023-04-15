import { ProductsRespDTO } from "../DTOs/ProductsRespDTO";
import { ProductModel } from "../models/ProductModel";

export interface ProductRepository {
  create(product: ProductModel): Promise<ProductsRespDTO>;
  productFindName(name: string): Promise<ProductsRespDTO | null>;
  productFindAll(): Promise<ProductsRespDTO[]>;
  productFindById(productId: string): Promise<ProductsRespDTO | null>;
  update(
    productId: string,
    product: ProductModel
  ): Promise<ProductsRespDTO | null>;
}
