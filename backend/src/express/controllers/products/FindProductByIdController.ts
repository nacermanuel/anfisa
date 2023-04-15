import { Request, Response } from "express";
import { MongoRepositoryProductImpl } from "../../../context/anfisa/products/infrastructure/persistence/mongo/MongoRepositoryProductImpl";
import { FindByIdProductUseCase } from "../../../context/anfisa/products/aplication/FindByIdProductUseCase";
import { ProductRepository } from "../../../context/anfisa/products/domain/repositories/ProductRepository";

export class FindProductByIdController {
  private _findByIdProductUseCase: FindByIdProductUseCase;
  private _productRepository: ProductRepository;

  constructor() {
    this._productRepository = new MongoRepositoryProductImpl();
    this._findByIdProductUseCase = new FindByIdProductUseCase(
      this._productRepository
    );
  }

  run = async (req: Request, resp: Response): Promise<void> => {
    const { productId } = req.params;
    try {
      const data = await this._findByIdProductUseCase.run(productId);

      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
