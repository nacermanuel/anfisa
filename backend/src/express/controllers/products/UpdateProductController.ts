import { Request, Response } from "express";
import { UpdateProductUseCase } from "../../../context/anfisa/products/aplication/UpdateProductUseCase";
import { ProductRepository } from "../../../context/anfisa/products/domain/repositories/ProductRepository";
import { MongoRepositoryProductImpl } from "../../../context/anfisa/products/infrastructure/persistence/mongo/MongoRepositoryProductImpl";

export class UpdateProductController {
  private _updateProductUseCase: UpdateProductUseCase;
  private _productRepository: ProductRepository;

  constructor() {
    this._productRepository = new MongoRepositoryProductImpl();
    this._updateProductUseCase = new UpdateProductUseCase(
      this._productRepository
    );
  }

  run = async (req: Request, resp: Response): Promise<void> => {
    const { productId } = req.params;
    const { body } = req;
    try {
      const data = await this._updateProductUseCase.run(productId, body);

      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
