import { ProductsRespDTO } from "../domain/DTOs/ProductsRespDTO";
import { ProductModel } from "../domain/models/ProductModel";
import { ProductAlreadyExists } from "../domain/errors/ProductAlreadyExists";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export class CreateProductUseCase {
  private _produstRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._produstRepository = productRepository;
  }

  async run(product: ProductModel): Promise<ProductsRespDTO> {
    const findProduct = await this._produstRepository.productFindName(
      product.name
    );

    if (findProduct) throw new ProductAlreadyExists();

    const newProduct = await this._produstRepository.create(product);

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
    } = newProduct;

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
