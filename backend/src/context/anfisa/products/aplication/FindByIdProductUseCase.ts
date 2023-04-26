import { ProductsRespDTO } from "../domain/DTOs/ProductsRespDTO";
import { ProductNotFound } from "../domain/errors/ProductNotFound";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export class FindByIdProductUseCase {
  private _produstRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._produstRepository = productRepository;
  }

  async run(productId: string): Promise<ProductsRespDTO> {
    const findProduct = await this._produstRepository.productFindById(
      productId
    );

    if (!findProduct) throw new ProductNotFound();

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
    } = findProduct;

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
