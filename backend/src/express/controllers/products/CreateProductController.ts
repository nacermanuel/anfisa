import { Request, Response } from "express";
import { CreateProductUseCase } from "../../../context/anfisa/products/aplication/CreateProductUseCase";
import { ProductRepository } from "../../../context/anfisa/products/domain/repositories/ProductRepository";
import { ProductValueObject } from "../../../context/anfisa/products/domain/valueObject/ProductValueObject";
import { MongoRepositoryProductImpl } from "../../../context/anfisa/products/infrastructure/persistence/mongo/MongoRepositoryProductImpl";
import { v4 } from "uuid";

export class CreateProductController {
  private _createProductUseCase: CreateProductUseCase;
  private _productRepository: ProductRepository;

  constructor() {
    this._productRepository = new MongoRepositoryProductImpl();
    this._createProductUseCase = new CreateProductUseCase(
      this._productRepository
    );
  }

  run = async (req: Request, resp: Response): Promise<void> => {
    const { body } = req;

    try {
      const productId = v4();

      const product = new ProductValueObject(
        productId,
        body.price,
        body.name,
        body.description,
        body.avalible,
        body.image,
        body.amount,
        body.brand,
        body.category,
        body.relevant
      );

      const data = await this._createProductUseCase.run(product);

      resp.status(201).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
