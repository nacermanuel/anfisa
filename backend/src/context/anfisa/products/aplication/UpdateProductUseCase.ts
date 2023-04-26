import { ProductsRespDTO } from "../domain/DTOs/ProductsRespDTO";
import { ProductNotFound } from "../domain/errors/ProductNotFound";
import { ProductModel } from "../domain/models/ProductModel";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export class UpdateProductUseCase {
  private _produstRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._produstRepository = productRepository;
  }

  async run(
    productId: string,
    product: ProductModel
  ): Promise<ProductsRespDTO> {
    const updateProduct = await this._produstRepository.update(
      productId,
      product
    );

    if (!updateProduct) throw new ProductNotFound();

    const {
      id,
      price,
      name,
      description,
      available,
      image,
      amount,
      brand,
      category,
      relevant,
    } = updateProduct;

    return new ProductsRespDTO(
      id,
      price,
      name,
      description,
      available,
      image,
      amount,
      brand,
      category,
      relevant
    );
  }
}
