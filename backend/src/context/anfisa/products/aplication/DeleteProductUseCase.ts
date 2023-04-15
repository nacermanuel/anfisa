import { ProductsRespDTO } from "../domain/DTOs/ProductsRespDTO";
import { ProductNotFound } from "../domain/errors/ProductNotFound";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export class DeleteProductUseCase {
  private _produstRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._produstRepository = productRepository;
  }

  async run(productId: string): Promise<ProductsRespDTO> {
    const updateProduct = await this._produstRepository.delete(productId);

    if (!updateProduct) throw new ProductNotFound();

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
    } = updateProduct;

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
