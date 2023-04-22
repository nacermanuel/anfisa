import { Request, Response } from "express";
import { FindAllProductsUseCase } from "../../../context/anfisa/products/aplication/FindAllProductsUseCase";
import { ProductRepository } from "../../../context/anfisa/products/domain/repositories/ProductRepository";
import { MongoRepositoryProductImpl } from "../../../context/anfisa/products/infrastructure/persistence/mongo/MongoRepositoryProductImpl";

export class FindAllProductsController {
  private _finAllProductUseCase: FindAllProductsUseCase;
  private _productRepository: ProductRepository;

  constructor() {
    this._productRepository = new MongoRepositoryProductImpl();
    this._finAllProductUseCase = new FindAllProductsUseCase(
      this._productRepository
    );
  }

  run = async (_req: Request, resp: Response): Promise<void> => {
    try {
      const data = await this._finAllProductUseCase.run();

      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
