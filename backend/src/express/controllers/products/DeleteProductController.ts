import { Request, Response } from "express";
import { DeleteProductUseCase } from "../../../context/anfisa/products/aplication/DeleteProductUseCase";
import { ProductRepository } from "../../../context/anfisa/products/domain/repositories/ProductRepository";
import { MongoRepositoryProductImpl } from "../../../context/anfisa/products/infrastructure/persistence/mongo/MongoRepositoryProductImpl";

export class DeleteProductController {
  private _deleteProductUseCase: DeleteProductUseCase;
  private _productRepository: ProductRepository;

  constructor() {
    this._productRepository = new MongoRepositoryProductImpl();
    this._deleteProductUseCase = new DeleteProductUseCase(
      this._productRepository
    );
  }

  run = async (req: Request, resp: Response): Promise<void> => {
    const { productId } = req.params;
    try {
      const data = await this._deleteProductUseCase.run(productId);

      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
