import { ProductRepository } from "../domain/repositories/ProductRepository";

export class FindAllProductsUseCase {
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  async run() {
    const products = await this._productRepository.productFindAll();

    return products;
  }
}
